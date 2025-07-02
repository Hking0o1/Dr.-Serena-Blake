'use client';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="space-y-6">
          {/* Subtitle */}
          <p className="text-lg md:text-xl opacity-90 font-light tracking-wide">
            Professional Counseling Services
          </p>
          
          {/* Main headline (H1) */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight">
            Professional Counseling for
            <span className="block text-therapy-sage">Healing and Growth</span>
          </h1>
          
          {/* Sub-headline (H2) */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 leading-relaxed max-w-3xl mx-auto">
            Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.
          </h2>
          
          {/* Service highlights */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base opacity-80 mt-8">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              Top Rated
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              20+ Years Experience
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              Proven Results
            </span>
          </div>
          
          {/* Call-to-action button */}
          <div className="pt-8">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-50 text-gray-800 hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
            >
              ✨ Book a Free Consult
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;