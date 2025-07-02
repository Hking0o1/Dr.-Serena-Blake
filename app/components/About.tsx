import Image from 'next/image';
import img1 from '../../public/SerenaBlake.png';

const About = () => {
  return (
    <div id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
         
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-dark-text">
                About Dr. Serena Blake
              </h2>
              <div className="w-16 h-1 bg-warm-brown rounded-full"></div>
            </div>

            <div className="space-y-6 text-medium-text leading-relaxed text-base sm:text-lg">
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                Dr. Blake is committed to creating a safe, supportive space for you to thrive. 
                Her approach combines clinical expertise with genuine empathy, ensuring that 
                each session is tailored to your unique needs and goals.
              </p>
              
              <p>
                Dr. Blake believes that everyone has the capacity for growth and healing. 
                Her role is to walk alongside you on this journey, providing support, insight, 
                and practical tools to help you navigate Life’s challenges with greater confidence and resilience.
              </p>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-serif text-dark-text mb-4">Credentials & Training</h3>
              <ul className="space-y-2 text-medium-text text-sm sm:text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warm-brown rounded-full mr-3"></span>
                  Doctor of Psychology (PsyD) - Licensed Clinical Psychologist
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warm-brown rounded-full mr-3"></span>
                  Certified in Cognitive Behavioral Therapy (CBT)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warm-brown rounded-full mr-3"></span>
                  Mindfulness-Based Therapy Specialist
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warm-brown rounded-full mr-3"></span>
                  Trauma-Informed Care Certified
                </li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 mb-8 lg:mb-0 flex justify-center">
            <div className="w-full  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src={img1}
                alt="Dr. Serena Blake, Clinical Psychologist"
                className="rounded-lg shadow-xl object-cover w-full"
                width={400}
                height={400}
                priority
                style={{ maxHeight: 800, width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
