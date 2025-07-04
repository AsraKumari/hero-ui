import { ParallaxProvider } from 'react-scroll-parallax';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import useIsMobile from '../hooks/useIsMobile';

import stars from '../assets/stars.png';
import moon from '../assets/moon.png';
import frontCliff from '../assets/mf.png';
import mountains from '../assets/mb.png';
import { LayoutDashboard, Brush, Megaphone } from 'lucide-react';

export default function HeroSection() {
  const isMobile = useIsMobile();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const rawMoonY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const rawMountainsY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const rawCliffsY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const rawHeadingY = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);

  const moonY = useSpring(rawMoonY, { stiffness: 40, damping: 20 });
  const mountainsY = useSpring(rawMountainsY, { stiffness: 50, damping: 24 });
  const cliffsY = useSpring(rawCliffsY, { stiffness: 60, damping: 26 });
  const headingY = useSpring(rawHeadingY, { stiffness: 40, damping: 20 });

  const cards = [
  {
    title: 'Design Systems',
    icon: LayoutDashboard,
    desc: 'Build scalable libraries. Tokens, themes, variants — all supported.',
    items: [
      'Atomic architecture',
      'Token-driven styling',
      '1-line theme switching',
      'Production-ready accessibility',
    ],
  },
  {
    title: 'Marketing Pages',
    icon: Megaphone,
    desc: 'Tell your story with performance and beautiful animations.',
    items: [
      'Scroll animations',
      'SEO structure',
      'Responsive layout',
      'Conversion ready',
    ],
  },
  {
    title: 'Admin Dashboards',
    icon: Brush,
    desc: 'Robust UIs for complex data & workflows.',
    items: [
      'Chart integration',
      'Dark/light theme',
      'Keyboard accessible',
      'Config-free deploy',
    ],
  },
];
const useCaseRef = useRef(null);

const { scrollYProgress: useCaseProgress } = useScroll({
  target: useCaseRef,
  offset: ['start start', 'end start'],
});

const x = useTransform(useCaseProgress, [0, 1], ['0%', '-280%']);
const smoothX = useSpring(x, { stiffness: 40, damping: 15 });


  return (
    <ParallaxProvider>
      <div className="overflow-x-hidden">
        {isMobile ? (
          <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.30, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 overflow-hidden z-0"
            >
              <img
                src={stars}
                alt="Stars"
                className="w-full h-full object-cover object-top"
                style={{
                  maskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)',
                }}
              />
            </motion.div>

            <motion.img
              src={moon}
              alt="Moon"
              style={{ y: moonY }}
              className="absolute top-[6%] left-1/2 -translate-x-1/2 w-24 sm:w-28 md:w-32 z-20 object-contain"
            />

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute top-[28%] left-[10%] -translate-x-1/2 transform text-center w-[90%] px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold z-30"
            >
              Power Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Design System
              </span>
            </motion.h1>

            <motion.img
              src={mountains}
              alt="Mountains"
              style={{ y: mountainsY }}
              className="absolute bottom-0 w-full h-[100vh] object-cover z-10"
            />

            <motion.img
              src={frontCliff}
              alt="Cliff"
              style={{ y: cliffsY }}
              className="absolute bottom-0 w-full h-[100vh] object-cover z-20"
            />
          </section>
        ) : (
          <section
            ref={ref}
            className="relative h-screen w-full overflow-hidden bg-black text-white"
          >
            <motion.img
              src={stars}
              alt="Stars"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.30, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <motion.img
              src={moon}
              alt="Moon"
              style={{ y: moonY }}
              className="absolute top-[6%] left-1/2 -translate-x-1/2 w-32 lg:w-40 z-10 object-contain"
            />

            <motion.div
              style={{ y: headingY }}
              className="absolute top-40 left-[28%] -translate-x-1/2 w-full max-w-[600px] text-center px-6 z-20"
            >
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-extrabold text-white"
              >
                Power Your{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Design System
                </span>
              </motion.h1>
            </motion.div>

            <motion.img
              src={mountains}
              alt="Mountains"
              style={{ y: mountainsY }}
              className="absolute bottom-[-150px] left-[20%] -translate-x-1/2 w-full max-w-7xl z-20"
            />

            <motion.img
              src={frontCliff}
              alt="Cliffs"
              style={{ y: cliffsY }}
              className="absolute bottom-[-10%] left-[0%] -translate-x-1/2 w-full max-w-8xl z-30"
            />
          </section>
        )}

        {/* 🟣 Use Case Section (Updated) */}
<section ref={useCaseRef} className="relative h-[100vh] bg-gradient-to-b from-black via-[#12001c] to-black z-40">
  <div className="sticky top-0 h-screen flex flex-col justify-center px-10 sm:px-20">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="mb-20 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Where Can You Use Hero UI?
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto">
        From internal dashboards to public landing pages — build fast and beautifully.
      </p>
    </motion.div>

    <div className="relative overflow-hidden">
      <motion.div style={{ x: smoothX }} className="flex gap-16 min-w-[550vw] px-2">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
            className="shrink-0 w-[80vw] max-w-md bg-black border border-[#2b2b2b] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-purple-900/50 via-purple-800/30 to-transparent z-0" />
            <div className="relative z-10">
              <card.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{card.desc}</p>
              <div className="border-t border-white/10 my-4" />
              <ul className="text-sm text-gray-300 list-disc pl-4 space-y-1">
                {card.items.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>


        {/* How It Works Section */}
        <section className="relative z-40 bg-[#10001a]/80 backdrop-blur-xl py-32 px-6 md:px-20 text-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 45, damping: 20 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
            >
              Workflow & System Flow
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="text-gray-300 max-w-2xl mx-auto text-center mb-16"
            >
              We’ve engineered a system that’s modular, theme-aware, and optimized for every screen. Each phase in your product lifecycle — from design to deployment — benefits from clean, reusable code architecture.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -60, y: 40, rotateZ: -2 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateZ: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-purple-700/20 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold mb-3">1. Componentized Structure</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Build consistent UIs with atomic components. Each element is isolated, tested, and optimized for reusability.
                </p>
                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                  <li>Atomic Design Architecture</li>
                  <li>Strict Component Contracts</li>
                  <li>Smart State Isolation</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 60, damping: 18 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-pink-700/20 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold mb-3">2. Seamless Theming</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Adapt instantly with tokenized themes. Change colors, fonts, spacing — all dynamically and globally.
                </p>
                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                  <li>Design Token System</li>
                  <li>Dark & Light Modes</li>
                  <li>Live Theme Switching</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60, y: 40, rotateZ: 2 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateZ: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-purple-700/20 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold mb-3">3. Deployment Ready</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Ship with confidence. All components are production-optimized and accessible from day one.
                </p>
                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                  <li>SEO Optimized Layouts</li>
                  <li>A11y Standards Followed</li>
                  <li>Lazy Loading + Code Splitting</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-40 bg-black text-white py-24 px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 40, damping: 22 }}
            className="max-w-5xl mx-auto text-center border border-[#222] rounded-3xl py-20 px-10 bg-gradient-to-br from-[#1a002d] via-black to-[#1a002d]"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Let’s Build Something Incredible</h2>
            <p className="text-lg text-gray-300 mb-10">
              Supercharge your frontend with flexible, powerful, and production-ready components. Build faster, look sharper.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300">
              Get Started Now
            </button>
          </motion.div>
        </section>
      </div>
    </ParallaxProvider>
  );
}
