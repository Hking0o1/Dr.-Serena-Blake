'use client';

import { Card, CardContent } from '@/components/ui/card';

const Fees = () => {
  const sessionTypes = [
    {
      type: "Individual Session",
      price: "$200",
      duration: "50 minutes",
      description: "One-on-one therapy sessions focused on your personal mental health goals",

      features: [
        "Personalized treatment plan",
        "Evidence-based approaches",
        "Flexible scheduling",
        "Progress tracking"
      ]
    },
    {
      type: "Couples Session",
      price: "$240",
      duration: "60 minutes",
      description: "Relationship counseling for couples at any stage of their relationship",
      features: [
        "Relationship assessment",
        "Communication skills",
        "Conflict resolution",
        "Homework assignments"
      ]
    }
  ];

  return (
    <div id="fees" className="py-20" style={{ backgroundColor: "#94b0b0" }}>
      <div className="container mx-auto px-6 md:px-20">
        {/* Session Fees */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Session Fees
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mx-auto"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Transparent pricing for quality mental health care. Investment in your well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {sessionTypes.map((session, index) => (
            <Card key={index} className="border-2 border-white hover:border-[#6e8c8c] transition-all duration-300 hover:shadow-lg bg-white rounded-xl">
              <CardContent className="p-8 text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-[#376262]">{session.type}</h3>
                  <div className="text-4xl font-bold text-[#376262]">{session.price}</div>
                  <p className="text-[#5a7c7c]">{session.duration}</p>
                </div>
                <p className="text-[#5a7c7c] leading-relaxed">
                  {session.description}
                </p>
                <ul className="space-y-2 text-left">
                  {session.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm flex items-center">
                      <span className="w-2 h-2 bg-[#94b0b0] rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#94b0b0] hover:bg-[#6e8c8c] text-white px-6 py-3 rounded-md transition-all duration-200 font-medium w-full"
                >
                  Book {session.type}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fees;
