import { ParallaxProvider } from 'react-scroll-parallax';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LayoutDashboard, Brush, Megaphone } from 'lucide-react';

import stars from '../assets/stars.png';
import moon from '../assets/moon.png';
import frontCliff from '../assets/mf.png';
import mountains from '../assets/mb.png';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const moonY = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const mountainsY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const cliffsY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const headingY = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);

  return (
    <ParallaxProvider>
      {/* Hero Section (Not fixed) */}
      <section
        ref={ref}
        className="relative h-screen w-full overflow-hidden bg-black text-white"
      >
        <img src={stars} alt="Stars" className="absolute inset-0 w-full h-full object-cover z-0" />
        <motion.img src={moon} alt="Moon" style={{ y: moonY }} className="absolute top-0 left-[45%] -translate-x-1/2 w-40 z-5" />
        <motion.div style={{ y: headingY }} className="absolute top-40 left-[28%] -translate-x-1/2 w-full max-w-[600px] text-center px-6 z-15">
          <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-6xl font-extrabold text-white">
            Power Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Design System</span>
          </motion.h1>
        </motion.div>
        <motion.img src={mountains} alt="Mountains" style={{ y: mountainsY }} className="absolute bottom-[-150px] left-[20%] -translate-x-1/2 w-full max-w-7xl z-20" />
        <motion.img src={frontCliff} alt="Cliffs" style={{ y: cliffsY }} className="absolute bottom-[-10%] left-[0%] -translate-x-1/2 w-full max-w-8xl z-30" />
      </section>

      {/* Use Case Section — overlay look */}
      <section className="relative z-50 w-full bg-gradient-to-b from-black via-[#120022] to-black pt-20 pb-24 px-6 md:px-16 text-white">

        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Where Can You Use Hero UI?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From internal tools to marketing sites — Hero UI gives you performance, elegance, and a component system you can rely on.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-stretch justify-center">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="relative group bg-[#0d0d0d] rounded-3xl border border-[#2b2b2b] p-8 w-full md:max-w-xs shadow-lg overflow-hidden"
          >
            <LayoutDashboard className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Design Systems</h3>
            <p className="text-sm text-gray-400 mb-4">
              Create unified UI libraries and scale your design efficiently across teams and platforms.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
              <li>Reusable React components</li>
              <li>Design token integration</li>
              <li>Automated theming support</li>
              <li>Version-controlled styles</li>
            </ul>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-40 blur-2xl bg-gradient-to-t from-purple-700/50 to-transparent pointer-events-none" />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="relative group bg-[#0d0d0d] rounded-3xl border border-[#2b2b2b] p-8 w-full md:max-w-xs shadow-lg overflow-hidden"
          >
            <Megaphone className="w-10 h-10 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Marketing Pages</h3>
            <p className="text-sm text-gray-400 mb-4">
              Quickly deploy animated, responsive pages that impress users and drive conversions.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
              <li>Scroll-triggered animations</li>
              <li>Optimized SEO layout</li>
              <li>Hero + CTA ready</li>
              <li>Mobile-first design</li>
            </ul>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-40 blur-2xl bg-gradient-to-t from-pink-700/50 to-transparent pointer-events-none" />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="relative group bg-[#0d0d0d] rounded-3xl border border-[#2b2b2b] p-8 w-full md:max-w-xs shadow-lg overflow-hidden"
          >
            <Brush className="w-10 h-10 text-purple-300 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Admin Dashboards</h3>
            <p className="text-sm text-gray-400 mb-4">
              Build performant dashboards that display data beautifully with minimal effort.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
              <li>Analytics & charts</li>
              <li>Dark/light mode toggle</li>
              <li>Componentized layout</li>
              <li>Permission-based routing</li>
            </ul>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-40 blur-2xl bg-gradient-to-t from-purple-700/50 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>
{/* How It Works Section */}
<section className="relative z-40 bg-[#10001a]/80 backdrop-blur-xl py-32 px-6 md:px-20 text-white">
  <div className="max-w-6xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold mb-16 text-center"
    >
      Workflow & System Flow
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-12">
      {/* Block 1 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
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

      {/* Block 2 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9 }}
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

      {/* Block 3 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.1 }}
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


      {/* Final CTA Banner Section */}
      <section className="relative z-40 bg-black text-white py-24 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center border border-[#222] rounded-3xl py-20 px-10 bg-gradient-to-br from-[#1a002d] via-black to-[#1a002d]">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Let’s Build Something Incredible</h2>
          <p className="text-lg text-gray-300 mb-10">
            Supercharge your frontend with flexible, powerful, and production-ready components. Build faster, look sharper.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300">
            Get Started Now
          </button>
        </div>
      </section>
    </ParallaxProvider>
  );
}
