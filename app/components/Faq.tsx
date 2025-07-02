'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
    
const Faqs = () => {
    const faqs = [
        {
        question: "Do you accept insurance?",
        answer: "No, but a superbill is provided for self-submission to your insurance company for potential reimbursement."
        },
        {
        question: "Are online sessions available?",
        answer: "Yes—all virtual sessions are conducted via Zoom with secure, HIPAA-compliant technology."
        },
        {
        question: "What is your cancellation policy?",
        answer: "24-hour notice is required for cancellations. Late cancellations or no-shows may be charged the full session fee."
        },
        {
        question: "How do I know if therapy is right for me?",
        answer: "Therapy can be beneficial for anyone looking to improve their mental health, work through challenges, or gain new perspectives on life situations. If you're experiencing persistent stress, anxiety, depression, relationship issues, or simply want to understand yourself better, therapy can provide valuable support and tools for growth."
        },
        {
        question: "What should I expect in my first session?",
        answer: "Your first session is an opportunity for us to get to know each other. We'll discuss your goals for therapy, your current concerns, and your background. I'll explain my approach and answer any questions you have about the therapeutic process. This session helps us determine if we're a good fit and create a plan moving forward."
        },
        {
        question: "How long does therapy typically take?",
        answer: "The length of therapy varies greatly depending on your individual needs and goals. Some people benefit from short-term therapy (8-12 sessions) for specific issues, while others find longer-term therapy helpful for deeper work. We'll regularly check in about your progress and adjust our approach as needed."
        },
        {
        question: "Is everything I share in therapy confidential?",
        answer: "Yes, confidentiality is a cornerstone of therapy. Everything you share is kept strictly confidential, with very few exceptions required by law (such as imminent danger to yourself or others). We'll discuss these limits during our first session so you feel completely informed and comfortable."
        },
        {
        question: "Do you accept insurance, and what are your fees?",
        answer: "I work with most major insurance providers and also offer self-pay options. Fees vary depending on the type of session and your insurance coverage. I believe everyone deserves access to mental health care, so please don't hesitate to discuss financial concerns with me. We can work together to find an arrangement that works for your situation."
        }
    ];

  return (
    <section id="fees" className="py-20 bg-blue-50">
      <div className="container mx-auto px-20">
        <div className="bg-green-200 rounded-lg p-8 ">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-serif text-blue-900">
              Frequently Asked Questions
            </h3>
            <div className="w-12 h-1 bg-blue-400 rounded-full mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-blue-100 shadow-md rounded-xl">
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, idx) => (
                    <AccordionItem
                      value={`item-${idx}`}
                      key={idx}
                      className={
                        "transition-colors " +
                        (idx !== faqs.length - 1 ? "border-b border-blue-100" : "")
                      }
                    >
                      <AccordionTrigger
                        className="px-8 py-5 text-left bg-white hover:bg-blue-100 focus:bg-blue-200 transition rounded-t-xl outline-none group"
                        style={{ borderRadius: idx === 0 ? '0.75rem 0.75rem 0 0' : undefined }}
                      >
                        <span className="text-lg md:text-xl font-semibold text-blue-900 group-hover:text-blue-500 transition">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 pt-2 bg-white text-blue-700 rounded-b-xl">
                        <p className="leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
            <div className="text-center mt-12">
              <p className="text-blue-700 mb-4">
                Have more questions about fees or insurance?
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-500 font-md text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-2xl transition-all duration-200 font-medium"
              >
                Contact Dr. Blake
              </button>
            </div>
          </div>
        </div>
         </div>
    </section>
  );
};

export default Faqs;
