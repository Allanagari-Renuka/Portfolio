'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  FileDown,
  ArrowUp,
  Send,
  MapPin,
  Sparkles,
  Loader2,
} from 'lucide-react';
import WavyUnderline from '../ui/WavyUnderline';
import { profile } from '@/data/profile';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setFormStatus('error');
      setErrorMessage('Something went wrong. Please email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="pt-28 sm:pt-36 pb-20 sm:pb-28 bg-cream text-charcoal overflow-hidden relative scroll-mt-28 border-t border-pale"
    >
      {/* Soft warm ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-peach-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top: Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-start mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pale text-xs font-semibold text-coral shadow-soft-xs">
            <Sparkles className="w-3.5 h-3.5 text-coral" />
            <span>Open for Opportunities</span>
          </span>
        </motion.div>

        {/* Two Columns on Desktop: Left = Info & Form, Right = Natural Professional Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading, Bio, Cards, Form, Outlined Social Pills */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-charcoal tracking-tight leading-tight font-sans">
                Let&apos;s build something <WavyUnderline>together</WavyUnderline>.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-charcoal/75 font-normal leading-relaxed max-w-[62ch]">
                Looking for a full-stack engineer, AI developer, or mobile app builder? Reach out directly via email, phone, or send a quick message below.
              </p>
            </div>

            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-pale text-xs font-semibold text-charcoal/80 shadow-soft-xs">
              <MapPin className="w-4 h-4 text-coral shrink-0" />
              <span>Based in Hyderabad, India · Open to remote &amp; relocation</span>
            </div>

            {/* Large Email and Phone Cards with 1-Click Copy and Feedback Toast */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white border border-pale hover:border-coral/40 transition-all shadow-soft-xs flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center text-coral">
                    <Mail className="w-4 h-4" />
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cream-100 hover:bg-cream-200 border border-pale text-xs font-semibold text-charcoal transition-colors cursor-pointer min-h-[36px]"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-charcoal/70" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal/50">Email Address</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm sm:text-base font-semibold text-charcoal hover:text-coral transition-colors break-all"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-white border border-pale hover:border-coral/40 transition-all shadow-soft-xs flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center text-coral">
                    <Phone className="w-4 h-4" />
                  </div>
                  <button
                    type="button"
                    onClick={copyPhone}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cream-100 hover:bg-cream-200 border border-pale text-xs font-semibold text-charcoal transition-colors cursor-pointer min-h-[36px]"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-charcoal/70" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal/50">Direct Phone</div>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-sm sm:text-base font-semibold text-charcoal hover:text-coral transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Simple, Working Contact Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-7 rounded-2xl bg-white border border-pale shadow-soft-xs space-y-4">
              <div className="text-sm font-bold text-charcoal uppercase tracking-wider">
                Send a Direct Message
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-charcoal/80 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-pale text-charcoal placeholder-charcoal/40 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-charcoal/80 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-pale text-charcoal placeholder-charcoal/40 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-charcoal/80 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Renuka, I'd like to discuss an opportunity..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-pale text-charcoal placeholder-charcoal/40 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-coral focus:border-transparent transition-all resize-none"
                />
              </div>

              {formStatus === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Message delivered successfully! I&apos;ll get back to you shortly.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-xs uppercase tracking-wider transition-all shadow-coral cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Outlined Social Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-cream-100 border border-pale text-charcoal font-semibold text-xs tracking-wide transition-all shadow-soft-xs hover:border-coral/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub ↗</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-cream-100 border border-pale text-charcoal font-semibold text-xs tracking-wide transition-all shadow-soft-xs hover:border-coral/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn ↗</span>
              </a>

              <a
                href="/resume.pdf"
                download="Allanagari_Renuka_Resume.pdf"
                className="inline-flex items-center justify-center min-h-[44px] gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-cream-100 border border-pale text-charcoal font-semibold text-xs tracking-wide transition-all shadow-soft-xs hover:border-coral/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                aria-label="Download Resume PDF"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume PDF ↗</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean, Crisp Professional Portrait (Light theme, solid blazer, NO muddy fog) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center justify-end relative pt-8 lg:pt-12"
          >
            {/* Soft Warm Radial Backdrop Aura */}
            <div className="absolute top-8 w-72 h-72 rounded-full bg-gradient-to-tr from-coral/10 via-peach-100/30 to-transparent blur-3xl pointer-events-none" />

            {/* Crisp Portrait Container */}
            <div className="relative z-10 w-72 sm:w-84 h-[380px] sm:h-[450px] select-none">
              <Image
                src="/renuka-cutout.png"
                alt={`${profile.name} — Full-stack developer & AI engineer`}
                fill
                sizes="(max-width: 640px) 288px, 336px"
                className="object-contain object-bottom filter contrast-[1.02]"
              />
            </div>

            {/* Clean Grounding Line beneath the blazer */}
            <div className="w-64 sm:w-72 h-px bg-gradient-to-r from-transparent via-pale/80 to-transparent pointer-events-none" />
          </motion.div>

        </div>

        {/* Semantic Footer Landmark with High WCAG Contrast */}
        <footer role="contentinfo" className="mt-20 pt-8 border-t border-pale flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-charcoal/60 font-medium">
          <div className="flex items-center gap-2">
            <span className="font-bold text-charcoal">Renuka<span className="text-coral">.</span></span>
            <span>·</span>
            <span>© {new Date().getFullYear()} Allanagari Renuka. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#hero"
              className="inline-flex items-center gap-1 font-semibold text-charcoal hover:text-coral transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-coral" />
            </a>
            <a href="#experience" className="hover:text-charcoal transition-colors py-1">Experience</a>
            <a href="#projects" className="hover:text-charcoal transition-colors py-1">Work</a>
            <a href="#education" className="hover:text-charcoal transition-colors py-1">Education</a>
            <a href="#toolbox" className="hover:text-charcoal transition-colors py-1">Toolbox</a>
            <a href="#certificates" className="hover:text-charcoal transition-colors py-1">Certificates</a>
            <a href="#contact" className="hover:text-charcoal transition-colors py-1">Contact</a>
          </div>
        </footer>

      </div>
    </section>
  );
}
