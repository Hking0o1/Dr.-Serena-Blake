'use client';
import Image from "next/image";

const Services = () => {
  const focusAreas = [
    {
      title: "Therapy for Healthcare Providers and Students",
      description:
        "Support for burnout, compassion fatigue, and perfectionism in healthcare professionals and students. Address unique work stressors and personal challenges.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Therapy for Trauma and Grief",
      description:
        "A safe space to process trauma, loss, and difficult emotions. Find grounding, healing, and meaning after challenging experiences.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Therapy for Second Generation Individuals In Immigrant Families",
      description:
        "Explore the challenges of balancing multiple cultures and expectations. Support for identity, belonging, and family relationships.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="services" className="py-20 bg-fuchsia-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-dark-text">
            Services & Specialties
          </h2>
          <div className="w-16 h-1 bg-warm-brown rounded-full mx-auto"></div>
          <p className="text-lg text-medium-text max-w-3xl mx-auto">
            Personalized, evidence-based therapy approaches designed to support
            your unique journey toward mental wellness and personal growth
          </p>
        </div>
        <hr className="border-b-4 border-black mb-4" />
        <div className="mb-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-gray-800">
            Areas of Focus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center"
              >
                <div className="w-56 h-56 sm:w-64 sm:h-64 mb-8 rounded-full overflow-hidden shadow-lg relative">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 256px"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-4 text-gray-800">
                  {area.title}
                </h3>
                <p className="text-base text-gray-700">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
