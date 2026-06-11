import { ArrowRight, BookOpen, Mic, Activity, Users, Sparkles } from "lucide-react";
import Link from "next/link";

export function DynamicSection() {
  return (
    <section className="w-full bg-[#F8FAF9] py-24 relative overflow-hidden">
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#237E41]/10 blur-[150px] rounded-full" />
        <div className="absolute top-[30%] -right-[10%] w-[60%] h-[60%] bg-[#DC2626]/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 font-semibold text-sm mb-8 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Empowering the Student Voice</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            The Architecture of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#237E41] to-[#114221]">Islamic Leadership</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl">
            Discover our legacy of academic excellence, student empowerment, and visionary character building across campuses nationwide.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[280px]">
          
          {/* CARD 1: Naway Anjuman (Magazine) - 2x2 Hero */}
          <Link href="/magazine" className="col-span-1 md:col-span-2 md:row-span-2 min-h-[500px] md:min-h-0 relative overflow-hidden rounded-[2.5rem] bg-[#0A1910] text-white border border-white/10 shadow-2xl group flex flex-col justify-between p-8 md:p-12 cursor-pointer block">
            {/* Dynamic Background Glows inside card */}
            <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-red-600/20 blur-[100px] rounded-full group-hover:bg-red-600/30 transition-colors duration-700 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0A1910]/80 pointer-events-none z-10" />
            
            {/* Top Content */}
            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider rounded-full">New Issue</span>
                <span className="text-gray-400 text-sm font-medium">October 2024</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 group-hover:text-red-400 transition-colors">Naway Anjuman</h3>
              <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                Dive into our flagship publication. A definitive voice for student affairs and academic renaissance.
              </p>
            </div>

            {/* Floating Editorial Mockup */}
            <div className="absolute -bottom-10 -right-10 md:bottom-[-5%] md:right-[-5%] w-[85%] md:w-[75%] h-[95%] bg-[#121212] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] transform rotate-[-6deg] group-hover:rotate-[-3deg] group-hover:-translate-y-4 group-hover:-translate-x-2 transition-all duration-700 border border-white/10 overflow-hidden z-0">
              {/* Cover Image Blend */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-screen transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#237E41]/60 via-transparent to-transparent opacity-80" />
              
              {/* Fake Cover Text */}
              <div className="absolute bottom-24 left-8 right-8">
                <h4 className="text-red-500 font-bold uppercase tracking-widest text-[10px] mb-2 bg-black/50 inline-block px-2 py-1 rounded backdrop-blur-sm">Exclusive Insight</h4>
                <p className="text-white font-serif text-3xl leading-snug drop-shadow-xl">The Architecture<br/>of Tomorrow's<br/>Leadership</p>
              </div>
              
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-3xl font-bold tracking-tighter">N.A.</p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="relative z-20 mt-auto pt-8">
              <div className="flex items-center gap-2 text-white font-semibold group-hover:text-red-400 transition-colors">
                Read Latest Issue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* CARD 2: About ATI - 2x1 Light */}
          <Link href="/about" className="col-span-1 md:col-span-2 md:row-span-1 min-h-[250px] md:min-h-0 relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-200/60 shadow-lg group p-8 md:p-10 flex flex-col justify-center transition-all duration-500 hover:shadow-xl cursor-pointer block">
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Large Watermark Icon */}
            <div className="absolute -bottom-8 -right-8 p-8 opacity-5 text-[#237E41] transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
              <BookOpen className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-[#237E41] border border-green-100 group-hover:bg-[#237E41] group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-[#237E41] transition-colors">About ATI</h3>
              <p className="text-gray-600 leading-relaxed max-w-md">
                A premier organization cultivating academic awareness, student unity, and character building rooted in Islamic principles.
              </p>
            </div>
          </Link>

          {/* CARD 3: Our Activities - 1x1 Light */}
          <Link href="/activities" className="col-span-1 md:row-span-1 min-h-[250px] md:min-h-0 relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-200/60 shadow-lg group p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-xl cursor-pointer block">
            <div className="flex justify-between items-start relative z-10">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Activity className="w-6 h-6" />
              </div>
              {/* Pulsing Live indicator */}
              <div className="flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full border border-red-100">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                <span className="text-red-600 text-[10px] font-bold uppercase tracking-wider">Live</span>
              </div>
            </div>
            
            <div className="mt-8 relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-red-600 transition-colors">Our Activities</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Stay synced with the latest announcements, events, and milestones.
              </p>
            </div>
            
            {/* Abstract map/grid pattern background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[size:12px_12px] group-hover:opacity-[0.06] transition-opacity pointer-events-none" />
          </Link>

          {/* CARD 4: Press Release - 1x1 Dark Green */}
          <Link href="/press-release" className="col-span-1 md:row-span-1 min-h-[250px] md:min-h-0 relative overflow-hidden rounded-[2.5rem] bg-[#237E41] text-white border border-green-700 shadow-lg group p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(35,126,65,0.3)] cursor-pointer block">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ADE80]/20 blur-2xl rounded-full group-hover:bg-[#4ADE80]/40 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
            
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 relative z-10 group-hover:bg-white group-hover:text-[#237E41] transition-colors">
              <Mic className="w-6 h-6" />
            </div>
            
            <div className="mt-8 relative z-10">
              <h3 className="text-xl font-bold mb-2 tracking-tight">Press Release</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                Authentic student perspectives, articles, and intellectual debates.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}