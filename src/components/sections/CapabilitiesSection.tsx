'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Terminal, Layers, Cpu, Database, Server } from 'lucide-react';

interface CapabilityItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

const capabilities: CapabilityItem[] = [
  {
    number: '01',
    title: 'FULL STACK WEB ARCHITECTURE',
    subtitle: 'DISTRIBUTED CLIENT & SERVER RUNTIMES',
    description:
      'Architecting responsive, high-performance web applications using React, Next.js, and TypeScript. Coupled with production Node.js/Express APIs, secure authentication flows (JWT/OAuth), and resilient PostgreSQL/Supabase database schemas.',
    deliverables: ['Production SaaS Portals', 'Sub-second RESTful APIs', 'Role-Based Authentication', 'Database Migrations'],
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'APPLIED AI & COMPUTER VISION',
    subtitle: 'NEURAL NETWORKS & REAL-TIME INFERENCE',
    description:
      'Designing and deploying deep learning pipelines with TensorFlow and Keras. Specializing in convolutional feature extraction (CNN), sequence modeling (RNN/LSTM), and real-time computer vision streams via OpenCV for assistive and diagnostic systems.',
    deliverables: ['Medical Imaging Classifiers', 'Real-time Gesture Tracking', '30 FPS Video Inference', 'Flask / FastAPI Model Serving'],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'CNN', 'LSTM', 'Flask'],
  },
  {
    number: '03',
    title: 'MOBILE & REAL-TIME PLATFORMS',
    subtitle: 'GOOGLE PLAY RELEASES & PUB/SUB TELEMETRY',
    description:
      'Publishing native-compiled Android mobile applications to the Google Play Store via Capacitor. Building low-latency bi-directional event synchronization with Socket.io, Redis Pub/Sub queues, and end-to-end Razorpay payment gateways.',
    deliverables: ['Google Play Production Apps', 'Sub-50ms Socket Synchronisation', 'Order Lifecycle State Machines', 'Payment Processing'],
    technologies: ['Capacitor', 'Android SDK', 'Socket.io', 'Redis', 'Firebase Cloud Messaging', 'Razorpay'],
  },
  {
    number: '04',
    title: 'SYSTEMS INTEGRATION & DEVOPS',
    subtitle: 'CONTAINERS, CLOUD DEPLOYMENTS & DATA PIPELINES',
    description:
      'Containerizing full-stack microservices with Docker, configuring multi-tenant database pools, configuring automated CI/CD pipelines, and integrating third-party APIs (Twilio WhatsApp, Google Maps Platform, Cloudinary media CDN).',
    deliverables: ['Dockerized Containers', 'Multi-tenant Schemas', 'Webhook Handlers', 'Cloud Deployments (Render / Vercel)'],
    technologies: ['Docker', 'MongoDB', 'Supabase', 'Git / GitHub Actions', 'Cloudinary', 'Twilio API'],
  },
];

export default function CapabilitiesSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="capabilities"
      className="py-20 sm:py-28 lg:py-36 bg-cream border-b border-pale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Identifier Tag */}
        <div className="flex items-center justify-between pb-6 border-b border-pale text-xs font-mono text-muted mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="text-charcoal font-bold">[ 03 / 06 ]</span>
            <span className="uppercase tracking-widest">CAPABILITIES MATRIX</span>
          </div>
          <span className="hidden sm:inline uppercase tracking-widest text-[11px]">
            ARCHITECTURAL PROFICIENCIES
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-display-lg font-black text-charcoal tracking-tightest leading-none uppercase">
            WHAT I CAN BUILD<span className="text-lime">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-muted font-normal leading-relaxed max-w-2xl">
            A comprehensive matrix of technical domains where I have engineered, tested, and shipped production-grade software.
          </p>
        </div>

        {/* Reference-Video-Inspired Numbered Rows */}
        <div className="divide-y divide-pale border-y border-pale bg-white/40">
          {capabilities.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={item.number}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                className={`transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white border-l-4 border-l-lime shadow-lg shadow-charcoal/3'
                    : 'bg-transparent border-l-4 border-l-transparent'
                }`}
              >
                <div className="py-8 sm:py-12 px-4 sm:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                    {/* Left: Giant Monospace Number (2 cols) */}
                    <div className="lg:col-span-2 flex items-baseline gap-3">
                      <span
                        className={`font-mono text-4xl sm:text-6xl font-black transition-colors ${
                          isActive ? 'text-charcoal' : 'text-charcoal/40'
                        }`}
                      >
                        {item.number}
                      </span>
                      {isActive && (
                        <span className="w-2.5 h-2.5 rounded-full bg-lime animate-ping" />
                      )}
                    </div>

                    {/* Middle: Title, Subtitle, & Description (7 cols) */}
                    <div className="lg:col-span-7 space-y-3">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-muted">
                        {item.subtitle}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-charcoal tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-muted font-normal leading-relaxed max-w-2xl">
                        {item.description}
                      </p>

                      {/* Deliverables / Capabilities Chips */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {item.deliverables.map((del) => (
                          <span
                            key={del}
                            className={`text-[11px] font-mono px-2.5 py-0.5 rounded border transition-colors ${
                              isActive
                                ? 'bg-cream border-charcoal/20 text-charcoal font-semibold'
                                : 'bg-white border-pale text-muted'
                            }`}
                          >
                            ✓ {del}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Technologies & Interactive Action Badge (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between gap-6 pt-2 lg:pt-0">
                      <div className="flex flex-wrap gap-1.5 lg:justify-end">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs font-mono px-2.5 py-1 rounded border transition-all ${
                              isActive
                                ? 'bg-charcoal text-white border-charcoal'
                                : 'bg-white text-charcoal border-pale'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div
                        className={`hidden sm:flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? 'border-charcoal bg-lime text-charcoal translate-x-1 -translate-y-1 shadow-sm'
                            : 'border-pale text-muted bg-white'
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
