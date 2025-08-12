"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");    

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (res.ok) {
      setStatus("sent")
      setMessage("Thanks — we received your message and will be in touch.");
      e.currentTarget.reset();
    } else {
      setStatus("error");
      setMessage(data?.error ?? "Something went wrong. Please try again later.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required placeholder="Your name" />
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="email">Work Email</label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" placeholder="Company name" />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" rows={5} required placeholder="Tell us about your needs..." />
      </div>
      {/* Honeypot anti-spam field (hidden from users) */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <button className="btn btn-primary" disabled={status==="sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {message && <small>{message}</small>}
    </form>
  );
}
