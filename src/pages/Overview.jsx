import { ParallaxProvider } from 'react-scroll-parallax';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import useIsMobile from '../hooks/useIsMobile';

import stars from '../assets/stars.png';
import moon from '../assets/moon.png';
import frontCliff from '../assets/mf.png';
import mountains from '../assets/mb.png';
import { LayoutDashboard, Brush, Megaphone, Rocket, ShieldCheck, Code2 } from 'lucide-react';

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

  const useCaseRef = useRef(null);
  const { scrollYProgress: useCaseProgress } = useScroll({
    target: useCaseRef,
    offset: ['start start', 'end start'],
  });

  const x = useTransform(
    useCaseProgress,
    [0, 0.1, 0.9, 1],
    ['0%', '-10%', '-270%', '-280%']
  );
  const smoothX = useSpring(x, {
    stiffness: 30,
    damping: 22,
  });

  const cards = [
    {
      title: 'Design Systems',
      icon: LayoutDashboard,
      desc: 'Create centralized UI libraries that power multiple products across your company.',
      items: [
        'Consistent atomic components across projects',
        'Design tokens for theme scalability',
        'Easy to extend with new variations',
        'Built-in accessibility and responsiveness',
      ],
    },
    {
      title: 'Marketing Pages',
      icon: Megaphone,
      desc: 'Launch beautiful, animated marketing sites with zero performance tradeoffs.',
      items: [
        'SEO-first structure with semantic HTML',
        'Engaging scroll-triggered animations',
        'Responsive out of the box',
        'Conversion-focused layout patterns',
      ],
    },
    {
      title: 'Admin Dashboards',
      icon: Brush,
      desc: 'Manage internal data and workflows with powerful, customizable dashboards.',
      items: [
        'Chart.js and Recharts integration',
        'Role-based layouts and components',
        'Dark/light theme toggles',
        'Keyboard-accessible UI',
      ],
    },
    {
      title: 'Launch Platforms',
      icon: Rocket,
      desc: 'Quickly take new products or features live with production-grade performance.',
      items: [
        'Built on Next.js for fast builds',
        'CI/CD ready out of the box',
        'Scales automatically with demand',
        'Global CDN support with image optimization',
      ],
    },
    {
      title: 'Security Layers',
      icon: ShieldCheck,
      desc: 'Bake in security from day one using prebuilt auth and validation flows.',
      items: [
        'Form and input sanitization',
        'JWT and OAuth scaffolding',
        'Granular role/permission guards',
        'Session token encryption',
      ],
    },
    {
      title: 'Developer Portals',
      icon: Code2,
      desc: 'Build fully interactive API or documentation sites that devs will love.',
      items: [
        'Code highlighting and live previews',
        'Markdown support + dark mode',
        'Command palette & keyboard nav',
        'Search with Fuse.js or Algolia',
      ],
    },
  ];

  return (
    <ParallaxProvider>
      <div className="overflow-x-hidden">

        {/* Hero Section */}
        <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black text-white">
          <motion.img
            src={stars}
            alt="Stars"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
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
              Power Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Design System</span>
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

        {/*  Use Case Section */}
        <section ref={useCaseRef} className="relative h-[100vh] bg-gradient-to-b from-black via-[#12001c] to-black z-40">
          <div className="sticky top-0 h-screen flex flex-col justify-center px-10 sm:px-20">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="mb-20 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Where Can You Use Hero UI?</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Whether you're building internal dashboards, elegant marketing pages, or scalable design systems — Hero UI helps you move fast with confidence.
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

        {/*  Workflow Section */}
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
              From ideation to deployment, our architecture ensures modularity, speed, and maintainability. Scale confidently without rework.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold mb-3">Plan & Scaffold</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Begin with structure. Hero UI helps define consistent layout, token design, and theming from day one.
                </p>
                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                  <li>Component-first scaffolding</li>
                  <li>Tokenized global styling</li>
                  <li>Shared theme presets</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.2 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold mb-3">Build & Extend</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Design and develop simultaneously using reusable components that adapt to your needs.
                </p>
                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                  <li>Slot-based layouting</li>
                  <li>Variants & overrides</li>
                  <li>Hooks-based logic layers</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.4 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold mb-3">Deploy & Scale</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Ship to production with confidence using battle-tested, performance-optimized components.
                </p>
                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                  <li>Pre-optimized build output</li>
                  <li>Accessible from day one</li>
                  <li>Scales with team and traffic</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/*  CTA Section */}
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
              Power your next project with Hero UI — designed to help you move faster, launch sooner, and scale smoother.
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
