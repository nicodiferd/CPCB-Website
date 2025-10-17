const AboutUs = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003831] mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-[#FFE395] mx-auto mb-8"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#003831]">
              Cal Poly's Club Baseball Program
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              The Cal Poly Club Baseball team represents Cal Poly San Luis Obispo
              in the <strong>National Club Baseball Association (NCBA)</strong>,
              competing at the <strong>Division 1</strong> level in the
              <strong> Southern Pacific West Conference</strong>.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The inaugural season began in January of 2010. CPCB competes
              regionally and nationally as members of the National Club Baseball
              Association (NCBA). The regular season takes place from February to
              May, with non-league games occurring in the Fall and early Winter.
              The competition consists of teams throughout California as a member of
              the Southern Pacific - West conference, which includes UC Santa Barbara,
              UCLA, USC, CSUF, and Long Beach State. CPCB also competes in non-conference
              games against teams like UC Davis, UC Berkeley, Sonoma State, and many others.
              Membership consists of 25-30 players per season.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With a rich history of success, we've earned
              <strong> 2 Regional Championships</strong> and
              <strong> 8 Division Championships</strong>, establishing ourselves
              as one of the premier club baseball programs in the conference.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our program provides student-athletes the opportunity to compete
              at a high level while maintaining the balance of a rigorous
              academic schedule at Cal Poly. We foster a culture of excellence,
              teamwork, and dedication both on and off the field.
            </p>
          </div>

          {/* Right Column - Stats & Highlights */}
          <div className="space-y-6">
            {/* Key Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 border-gray-100 hover:border-[#003831] transition-colors">
                <div className="text-4xl font-bold text-[#003831] mb-2">2010</div>
                <div className="text-sm text-gray-600 font-medium">Established</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 border-gray-100 hover:border-[#003831] transition-colors">
                <div className="text-4xl font-bold text-[#003831] mb-2">25-30</div>
                <div className="text-sm text-gray-600 font-medium">Players per Season</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 border-gray-100 hover:border-[#003831] transition-colors">
                <div className="text-4xl font-bold text-[#003831] mb-2">Feb-May</div>
                <div className="text-sm text-gray-600 font-medium">Season Schedule</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 border-gray-100 hover:border-[#003831] transition-colors">
                <div className="text-4xl font-bold text-[#003831] mb-2">SoPac</div>
                <div className="text-sm text-gray-600 font-medium">West Conference</div>
              </div>
            </div>

            {/* Highlights List */}
            <div className="bg-[#003831] text-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold mb-4 text-[#FFE395]">
                Program Highlights
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FFE395] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Competitive Division 1 NCBA schedule</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FFE395] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Regular season and playoff tournaments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FFE395] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Experienced coaching staff</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FFE395] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Strong alumni network and community</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FFE395] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Balance of athletics and academics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
