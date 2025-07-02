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
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl md:max-w-4xl mx-auto animate-fade-in pb-24">
        <div className="space-y-5 md:space-y-6">
          <p className="text-base sm:text-lg md:text-xl opacity-90 font-light tracking-wide">
            Professional Counseling Services
          </p>

          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
            Professional Counseling for
            <span className="block text-therapy-sage">Healing and Growth</span>
          </h1>

          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light opacity-90 leading-relaxed max-w-3xl mx-auto">
            Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs sm:text-sm md:text-base opacity-80 mt-6 md:mt-8">
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

          <div className="pt-6 md:pt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-blue-50 text-gray-800 hover:bg-gray-100 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
            >
              ✨ Book a Free Consult
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator: only visible on desktop (lg+) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
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