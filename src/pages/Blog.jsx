import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, Paintbrush, BarChart, PenTool, Users, Briefcase, Plus } from 'lucide-react';

// Import your local images from src/assets
import heroImage from '../assets/Card1.AVIF';
import revolutionImage from '../assets/card1.AVIF';
import storytellingImage from '../assets/creative.jpg';
import dataImage from '../assets/discussion.jpg';
import designSystemImage from '../assets/type.jpg';
import cultureImage from '../assets/team.jpg';
import openSourceImage from '../assets/work.jpg';

// ====================================================================
// DUMMY DATA
// ====================================================================
const postsData = {
  heroPost: {
    id: 1,
    category: 'UI/UX',
    title: ['The Unseen', 'Structure of', 'Clean Design'],
    imageUrl: heroImage,
    author: 'Elena Petrova',
    authorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    authorTitle: 'Lead Product Designer'
  },
  bentoPosts: [
    { id: 2, title: "The Digital Revolution", description: "Dive into the transformative power of modern technology.", header: <img src={revolutionImage} className="w-full h-full object-cover" alt="Digital dashboard"/>, icon: <Code className="h-4 w-4 text-neutral-400" />, className: "md:col-span-2" },
    { id: 3, title: "The Art of Visual Storytelling", description: "Discover the beauty of thoughtful and functional design.", header: <img src={storytellingImage} className="w-full h-full object-cover" alt="Creative design process"/>, icon: <Paintbrush className="h-4 w-4 text-neutral-400" />, className: "md:col-span-1" },
    { id: 4, title: "Data-Driven Decisions", description: "Leverage analytics to build better, more effective products.", header: <img src={dataImage} className="w-full h-full object-cover" alt="Team discussion with charts"/>, icon: <BarChart className="h-4 w-4 text-neutral-400" />, className: "md:col-span-1" },
    { id: 5, title: "The Power of a Unified Design System", description: "Accelerate development and strengthen brand identity.", header: <img src={designSystemImage} className="w-full h-full object-cover" alt="Abstract design components"/>, icon: <PenTool className="h-4 w-4 text-neutral-400" />, className: "md:col-span-1" },
    { id: 6, title: "Building a Remote-First Culture", description: "Key strategies for a strong, collaborative distributed team.", header: <img src={cultureImage} className="w-full h-full object-cover" alt="Team working together"/>, icon: <Users className="h-4 w-4 text-neutral-400" />, className: "md:col-span-1" },
    { id: 7, title: "The Economics of Open Source", description: "How do open-source projects sustain themselves? We explore the business models.", header: <img src={openSourceImage} className="w-full h-full object-cover" alt="Person working on a laptop"/>, icon: <Briefcase className="h-4 w-4 text-neutral-400" />, className: "md:col-span-3" },
  ],
};

// ====================================================================
// ANIMATION HOOK
// ====================================================================
const useIntersectionObserver = (options) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isVisible];
};

// ====================================================================
// COMPONENTS
// ====================================================================

const FeaturedHero = ({ post }) => (
  <div className="relative w-full h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden flex flex-col justify-end p-8 md:p-12">
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    <img src={post.imageUrl} alt={post.title.join(' ')} className="absolute inset-0 w-full h-full object-cover animate-zoom-in" />
    <div className="relative z-20 text-white">
      <div className="mb-8">
        <span className="text-sm font-semibold bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">{post.category}</span>
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tighter">
        {post.title.map((line, index) => (
          <span key={index} className="block overflow-hidden">
            <span className="block animate-text-reveal" style={{ animationDelay: `${index * 0.15}s` }}>{line}</span>
          </span>
        ))}
      </h1>
      <div className="mt-8 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <img src={post.authorAvatar} alt={post.author} className="w-12 h-12 rounded-full border-2 border-purple-400 object-cover"/>
        <div>
          <p className="font-semibold text-white">{post.author}</p>
          <p className="text-sm text-gray-300">{post.authorTitle}</p>
        </div>
      </div>
    </div>
  </div>
);

const BentoGridItem = ({ className, title, description, header, icon, isTiltEnabled = true }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!isTiltEnabled) return;
    const card = cardRef.current;
    if (!card) return;
    let animationFrameId = null;
    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    const lerp = (start, end, amount) => (1 - amount) * start + amount * end;
    const animate = () => {
      currentX = lerp(currentX, targetX, 0.04);
      currentY = lerp(currentY, targetY, 0.04);
      card.style.transform = `perspective(1000px) rotateX(${-currentY}deg) rotateY(${currentX}deg) scale3d(1, 1, 1)`;
      animationFrameId = requestAnimationFrame(animate);
    };
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    };
    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTiltEnabled]);

  return (
    <div ref={cardRef} className={`group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.1] bg-black p-4 transition-shadow duration-300 ${isTiltEnabled ? 'bento-tilt-card hover:shadow-2xl hover:shadow-purple-500/10' : 'hover:-translate-y-1'} ${className}`}>
      <div className="h-full w-full rounded-lg overflow-hidden relative transition-transform duration-300 group-hover/bento:scale-[1.03]">
        {header}
        <div className={`bento-sheen absolute inset-0 opacity-0 transition-opacity duration-300 ${isTiltEnabled ? 'group-hover/bento:opacity-100' : ''}`}></div>
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">{title}</div>
        <div className="font-sans text-xs font-normal text-neutral-300">{description}</div>
      </div>
    </div>
  );
};

const AuthorInfoCard = ({ author, avatar, title }) => (
  <div className="hidden md:flex flex-col items-center text-center bg-zinc-900 border border-white/10 rounded-2xl p-8 h-fit sticky top-24">
    <img src={avatar} alt={author} className="w-24 h-24 rounded-full border-2 border-purple-400 object-cover mb-4"/>
    <p className="text-xl font-bold text-white">{author}</p>
    <p className="text-sm text-gray-400 mb-6">{title}</p>
    <button className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold transition-colors duration-300 hover:bg-purple-700">
      <Plus size={16} />
      Follow
    </button>
  </div>
);

// ====================================================================
// MAIN BLOG PAGE COMPONENT
// ====================================================================
const Blog = () => {
  const [ctaRef, ctaVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="bg-black text-white min-h-screen font-outfit">
      {/* ✅ UPDATED: Smoother keyframe animation for the hero image */}
      <style>{`
        @keyframes zoom-in { 0% { transform: scale(1.08); } 100% { transform: scale(1); } }
        .animate-zoom-in { animation: zoom-in 2s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        @keyframes text-reveal { 0% { transform: translateY(100%); } 100% { transform: translateY(0); } }
        .animate-text-reveal { animation: text-reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .bento-tilt-card { transform-style: preserve-3d; will-change: transform; }
        .bento-sheen { background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%); }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="mb-16 md:mb-24">
          <FeaturedHero post={postsData.heroPost} />
        </header>
        
        <article className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-24 md:mb-32">
          <div className="md:col-span-2">
            <p className="text-2xl text-gray-300 leading-relaxed">
              <span className="float-left text-7xl font-bold text-purple-400 mr-4 mt-1">T</span>he digital landscape is in a perpetual state of evolution, and at the heart of this transformation is the user interface. For years, designers have meticulously crafted static layouts, but a new paradigm is emerging—one powered by artificial intelligence. <strong>Generative UI is not just a buzzword;</strong> it's a fundamental shift in how we create and interact with digital products.
            </p>
            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              This has profound implications. For businesses, it means higher engagement and a stickier product. For users, it means less friction and a feeling that the application truly understands them.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
             <AuthorInfoCard 
                author={postsData.heroPost.author}
                avatar={postsData.heroPost.authorAvatar}
                title={postsData.heroPost.authorTitle}
             />
          </div>
        </article>

        <main>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">More Stories</h2>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3">
            {postsData.bentoPosts.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={item.className}
                isTiltEnabled={!item.className.includes("md:col-span-")}
              />
            ))}
          </div>

          <section ref={ctaRef} className={`mt-24 md:mt-32 py-16 md:py-20 rounded-2xl bg-zinc-900 border border-white/10 transition-all duration-700 ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-2xl mx-auto text-center px-4">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Stay Ahead of the Curve
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Subscribe to our newsletter for the latest insights on design and technology, delivered straight to your inbox.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                <button 
                  type="submit"
                  className="w-full sm:w-auto flex-shrink-0 px-6 py-3 rounded-lg bg-purple-600 text-white font-bold shadow-lg transition-all duration-300 ease-in-out transform hover:bg-purple-700 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Blog;
