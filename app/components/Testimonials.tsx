'use client';
import  { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Dr. Mitchell provided me with the tools and support I needed to overcome my anxiety. Her compassionate approach made all the difference in my healing journey.",
      author: "Emily R.",
      role: "Individual Therapy Client"
    },
    {
      text: "The couples counseling sessions helped my partner and I communicate better than we ever have. We're stronger now because of the work we did together.",
      author: "Michael & Sarah T.",
      role: "Couples Counseling Clients"
    },
    {
      text: "I was skeptical about therapy at first, but Dr. Mitchell created such a safe space that I felt comfortable opening up. It's been life-changing.",
      author: "David L.",
      role: "Individual Therapy Client"
    },
    {
      text: "The group therapy sessions showed me I wasn't alone in my struggles. Having that community support alongside professional guidance was invaluable.",
      author: "Maria S.",
      role: "Group Therapy Participant"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-blue-900">
            Client Stories
          </h2>
          <div className="w-16 h-1 bg-blue-400 rounded-full mx-auto"></div>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Hear from those who have found healing and growth through our therapeutic services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-blue-100 shadow-md rounded-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <div className="text-4xl text-blue-400 mb-4">“</div>
                <blockquote className="text-lg md:text-xl text-blue-900 leading-relaxed italic">
                  {testimonials[activeIndex].text}
                </blockquote>
                <div className="space-y-2">
                  <cite className="text-blue-500 font-medium not-italic">
                    {testimonials[activeIndex].author}
                  </cite>
                  <p className="text-sm text-blue-700">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full border border-blue-400 transition-all duration-200 ${
                  index === activeIndex ? 'bg-blue-500' : 'bg-blue-200'
                }`}
                aria-label={`Show testimonial ${index + 1}`}
                title={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-700 text-sm italic">
            *Client names have been changed to protect privacy. Testimonials used with permission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
