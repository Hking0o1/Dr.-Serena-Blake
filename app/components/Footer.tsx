
const Footer = () => {
  return (
    <footer className="bg-[#faf7ee] text-gray-800 py-16 font-serif">
      <div className="container mx-auto px-4 text-center space-y-8">
        {/* Name */}
        <h2 className="text-3xl md:text-4xl font-serif mb-2">
          Dr. Serena Blake, PsyD, Licensed Psychologist
        </h2>
        {/* Contact */}
        <div className="space-y-1 text-lg">
          <a href="mailto:serena@blakepsychology.com" className="underline hover:text-blue-700 transition-colors">
            serena@blakepsychology.com
          </a>
          <div>
            Phone: <a href="tel:3235550192" className="underline hover:text-blue-700">(323) 555-0192</a>
          </div>
          <div>
            1287 Maplewood Drive, Los Angeles, CA 90026
          </div>
        </div>
        {/* Links */}
        <div className="space-x-6 text-base mt-4">
          <a href="#home" className="underline hover:text-blue-700 transition-colors">Home</a>
          <a href="#privacy" className="underline hover:text-blue-700 transition-colors">Privacy Policy</a>
          <a href="#goodfaith" className="underline hover:text-blue-700 transition-colors">Good Faith Estimate</a>
        </div>
        <div className="mt-8">
          <a href="#portal" className="underline text-lg hover:text-blue-700 transition-colors">Client Portal</a>
        </div>
        <div className="text-sm text-gray-500 mt-8">
          © 2025 Dr. Serena Blake, PsyD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
