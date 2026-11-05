import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Smartphone,
  Store,
  ExternalLink,
  Server,
  Layers,
  Zap,
  MapPin,
  ShieldCheck,
  Bell,
  Cpu,
} from 'lucide-react';

export const metadata = {
  title: 'Skipp — Food Pre-Order & Restaurant Platform Architecture | Allanagari Renuka',
  description:
    'Architecture breakdown, dual Android applications published on Google Play, and technical specifications for Skipp.',
};

export default function SkippDetailPage() {
  const customerPlayStore =
    'https://play.google.com/store/apps/details?id=com.skipp.customer';
  const restaurantPlayStore =
    'https://play.google.com/store/apps/details?id=com.skipp.restaurantapp';

  const architecturalHighlights = [
    {
      icon: Smartphone,
      title: 'Dual Native-Compiled Mobile Ecosystem',
      desc: 'Built using React, Vite, and Capacitor to deploy unified, high-performance Android builds from a single codebase while retaining direct access to native device features such as geolocation, background push, and secure storage.',
    },
    {
      icon: Zap,
      title: 'Bi-Directional Real-Time Synchronization',
      desc: 'Powered by Socket.io and Redis pub/sub. Instant order state transitions (Placed → Confirmed → Cooking → Ready for Pickup → Completed) propagate between the customer client and kitchen display terminal with sub-second latency.',
    },
    {
      icon: MapPin,
      title: 'Live Pickup Tracking & Dynamic ETA',
      desc: 'Integrated with Google Maps API and telemetry logic to display route checkpoints and recalculate pickup arrival windows dynamically based on real-time kitchen queue density and user proximity.',
    },
    {
      icon: ShieldCheck,
      title: 'Resilient Payment Lifecycle & Webhooks',
      desc: 'Integrated Razorpay checkout flows with idempotent webhook handlers, ensuring transactions are verified cryptographically before kitchen ticket printing and order dispatch.',
    },
    {
      icon: Bell,
      title: 'Cross-Platform Push Notifications',
      desc: 'Configured Firebase Cloud Messaging (FCM) to trigger background and high-priority heads-up alerts on customer devices when food status advances to "Ready for Pickup".',
    },
    {
      icon: Cpu,
      title: 'MCP-Enabled AI Development Workflow',
      desc: 'Utilized Model Context Protocol (MCP) integrations during engineering to automate API contract verification, streamline schema migrations, and generate contextual unit tests.',
    },
  ];

  const technologies = [
    'React',
    'Vite',
    'Capacitor Android',
    'Node.js',
    'Express.js',
    'Socket.io',
    'Redis',
    'PostgreSQL/Supabase',
    'Razorpay',
    'Google Maps API',
    'Firebase FCM',
    'Docker',
    'MCP AI Workflows',
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal py-12 sm:py-20 selection:bg-coral selection:text-white font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pale hover:border-coral text-charcoal text-xs font-semibold uppercase tracking-wider transition-all shadow-soft-sm group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-coral group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Hero header */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-pale shadow-soft-sm relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-cream-200 border border-pale text-xs font-semibold text-charcoal/80 uppercase tracking-wider">
              FLAGSHIP CASE STUDY
            </span>
            <span className="px-3 py-1 rounded-full bg-coral text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-coral">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              2 Live Android Apps on Google Play
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-charcoal tracking-tight leading-tight uppercase font-sans">
            Skipp — From ordering to restaurant operations<span className="text-coral">.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-charcoal/75 leading-relaxed font-normal max-w-3xl">
            Built and published two Android apps on Google Play — a customer pre-order app and a restaurant partner app — using React, Capacitor, Node.js, Express.js, Socket.io, Redis, PostgreSQL, Docker, Razorpay, and Firebase, delivering real-time order tracking, payments, push notifications, menu and table management, and MCP-enabled AI development workflows.
          </p>

          {/* Dual Play Store CTAs */}
          <div className="mt-8 pt-8 border-t border-pale flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={customerPlayStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-coral hover:bg-coral-hover text-white text-xs uppercase tracking-wider font-bold shadow-coral transition-all hover:scale-[1.01]"
            >
              <Smartphone className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] text-white/80">Google Play Store</div>
                <div className="text-sm font-bold">Customer Android App</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto opacity-80" />
            </a>

            <a
              href={restaurantPlayStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white hover:bg-cream-200 text-charcoal border border-charcoal/20 hover:border-charcoal text-xs uppercase tracking-wider font-semibold transition-all hover:scale-[1.01] shadow-soft-sm"
            >
              <Store className="w-5 h-5 text-charcoal" />
              <div className="text-left">
                <div className="text-[10px] text-charcoal/60">Google Play Store</div>
                <div className="text-sm font-bold">Restaurant Partner App</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto opacity-70" />
            </a>
          </div>
        </div>

        {/* System Architecture Overview */}
        <div className="my-12 space-y-6">
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5 text-charcoal" />
            <h2 className="text-2xl font-bold text-charcoal tracking-tight uppercase">
              System Architecture &amp; Core Mechanics
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-pale space-y-4">
            <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
              Skipp was engineered to streamline high-volume pre-ordering and in-person pickup workflows. Rather than standard delivery logistics, the ecosystem is built around synchronizing customer arrival times with live kitchen preparation density.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-cream border border-pale">
                <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-1">
                  Customer Mobile Client Flow
                </h3>
                <p className="text-xs text-muted leading-relaxed font-normal">
                  Browse real-time menus, place customized pre-orders, execute secure checkout via Razorpay, and track order stages with dynamic countdown timers and map navigation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream border border-pale">
                <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-1">
                  Restaurant Management Terminal
                </h3>
                <p className="text-xs text-muted leading-relaxed font-normal">
                  Audio-visual kitchen order board where kitchen personnel accept tickets, modify preparation stages, adjust menu availability, and manage table reservations in real time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Highlights Grid */}
        <div className="my-12 space-y-6">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-charcoal" />
            <h2 className="text-2xl font-bold text-charcoal tracking-tight uppercase">
              Engineering Implementation Details
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {architecturalHighlights.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-pale space-y-2.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cream border border-pale text-charcoal">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-charcoal leading-tight">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Complete Tech Stack Table */}
        <div className="my-12 p-8 rounded-2xl bg-white border border-pale space-y-4">
          <h2 className="text-xl font-bold text-charcoal tracking-tight uppercase">
            Comprehensive Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-cream border border-pale text-xs font-mono text-charcoal"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA to return */}
        <div className="pt-8 border-t border-pale flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#work"
            className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-coral transition-colors"
          >
            ← Return to All Projects on Portfolio
          </Link>
          <a
            href="/resume.pdf"
            download="Allanagari_Renuka_Resume.pdf"
            className="px-5 py-2.5 rounded-xl bg-charcoal hover:bg-black text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all"
          >
            Download Allanagari Renuka Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
