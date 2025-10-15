import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-[#003831] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-45 -left-20 -top-20 w-96 h-96 bg-[#FFE395] rounded-full blur-3xl"></div>
        <div className="absolute transform -rotate-45 right-0 bottom-0 w-96 h-96 bg-[#B38F4F] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="py-20 md:py-32 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Cal Poly Club Baseball
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl mb-4 text-[#FFE395] font-semibold">
            NCBA Division 1 | Southern Pacific West Conference
          </div>

          {/* Achievements */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10 text-lg md:text-xl">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-[#FFE395]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <span>2x Regional Champions</span>
            </div>
            <div className="hidden md:block text-[#B38F4F]">|</div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-[#FFE395]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <span>8x Division Champions</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
            Representing Cal Poly San Luis Obispo in competitive club baseball.
            Join us for an exciting season of championship-level baseball.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/schedule" variant="secondary" size="lg">
              View Schedule
            </Button>
            <Button href="/live-updates" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-[#003831]">
              Live Updates
            </Button>
          </div>

          {/* Quick Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FFE395] mb-2">D1</div>
              <div className="text-sm md:text-base text-gray-300">NCBA Division</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FFE395] mb-2">2x</div>
              <div className="text-sm md:text-base text-gray-300">Regional Champs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FFE395] mb-2">8x</div>
              <div className="text-sm md:text-base text-gray-300">Division Champs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FFE395] mb-2">SLO</div>
              <div className="text-sm md:text-base text-gray-300">San Luis Obispo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
