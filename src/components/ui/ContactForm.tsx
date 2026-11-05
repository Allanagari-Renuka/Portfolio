'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus({
        type: 'error',
        message: 'Please provide your name (at least 2 characters).',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus({
        type: 'error',
        message: 'Please provide a valid email address.',
      });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setStatus({
        type: 'error',
        message: 'Please enter a message with at least 5 characters.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Message sent successfully! Renuka will respond promptly.',
        });
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please email allanagarirenuka28@gmail.com directly.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error. Please email directly at allanagarirenuka28@gmail.com.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field (hidden from humans) */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {status.type === 'success' && (
        <div className="p-3.5 rounded-lg bg-lime/20 border border-lime text-charcoal flex items-start gap-2.5 text-xs font-mono">
          <CheckCircle2 className="w-4 h-4 text-charcoal shrink-0 mt-0.5" />
          <span>{status.message}</span>
        </div>
      )}

      {status.type === 'error' && (
        <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-2.5 text-xs font-mono">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{status.message}</span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal mb-1.5">
            Your Name <span className="text-lime-dark">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="e.g. Sarah Jenkins"
            className="w-full px-3.5 py-2.5 rounded-lg bg-cream border border-pale text-charcoal placeholder-muted/60 text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-colors font-mono"
          />
        </div>
        <div>
          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal mb-1.5">
            Email Address <span className="text-lime-dark">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="sarah@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-cream border border-pale text-charcoal placeholder-muted/60 text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-colors font-mono"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal mb-1.5">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Full Stack / AI Engineer Opportunity"
          className="w-full px-3.5 py-2.5 rounded-lg bg-cream border border-pale text-charcoal placeholder-muted/60 text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-colors font-mono"
        />
      </div>

      <div>
        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal mb-1.5">
          Message <span className="text-lime-dark">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Hello Renuka, I would like to discuss..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-cream border border-pale text-charcoal placeholder-muted/60 text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-colors font-mono resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-charcoal hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-widest transition-all disabled:opacity-60 cursor-pointer shadow-sm"
      >
        {loading ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>TRANSMITTING MESSAGE...</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>TRANSMIT MESSAGE</span>
          </>
        )}
      </button>
    </form>
  );
}
