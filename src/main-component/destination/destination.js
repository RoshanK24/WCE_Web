import React from 'react';
import { RiClockwiseFill, RiGlobeFill, RiMailFill, RiMapPin2Fill, RiPhoneFill } from 'react-icons/ri'; 

const StudyDestinationsPage = () => {
  // const [activeTab, setActiveTab] = useState('all');

  // const destinations = [
  //   {
  //     id: 'usa',
  //     flag: '🇺🇸',
  //     name: 'USA',
  //     tagline: 'The Land of Innovation',
  //     benefits: [
  //       'World-Ranked Universities – Ivy League & top public institutions',
  //       'Diverse Course Options – STEM, Business, Arts, and more',
  //       'Career Prospects – Internships & post-study work (OPT) opportunities',
  //       'Scholarships – Merit-based and need-based financial aid available'
  //     ],
  //     universities: 'Harvard, MIT, Stanford, UC Berkeley',
  //     cities: 'New York, Boston, Los Angeles, Chicago'
  //   },
  //   {
  //     id: 'canada',
  //     flag: '🇨🇦',
  //     name: 'Canada',
  //     tagline: 'A Hub for Quality Education',
  //     benefits: [
  //       'Affordable Tuition Fees – Lower cost compared to the US & UK',
  //       'Post-Study Work Opportunities – Up to 3 years of work permit',
  //       'PR Pathways – Easy transition from student visa to permanent residency',
  //       'High Quality of Life – Safe and multicultural environment'
  //     ],
  //     universities: 'University of Toronto, UBC, McGill University',
  //     cities: 'Toronto, Vancouver, Montreal, Calgary'
  //   },
  //   {
  //     id: 'uk',
  //     flag: '🇬🇧',
  //     name: 'United Kingdom',
  //     tagline: 'Academic Excellence & Tradition',
  //     benefits: [
  //       'Globally Recognized Degrees – Oxbridge & Russell Group universities',
  //       "Shorter Courses – Bachelor's in 3 years, Master's in 1 year",
  //       'Strong Research Opportunities – Cutting-edge innovations',
  //       'Post-Study Work Visa – 2-year work permit after graduation'
  //     ],
  //     universities: 'Oxford, Cambridge, Imperial College, UCL',
  //     cities: 'London, Manchester, Edinburgh, Birmingham'
  //   },
  //   {
  //     id: 'australia',
  //     flag: '🇦🇺',
  //     name: 'Australia',
  //     tagline: 'A Student-Friendly Nation',
  //     benefits: [
  //       'High Employability Rate – Strong demand for skilled graduates',
  //       'Part-Time Work Benefits – Earn while you study',
  //       'Permanent Residency Pathways – Migration opportunities after graduation',
  //       'Natural Beauty & Lifestyle – Great climate and outdoor activities'
  //     ],
  //     universities: 'University of Melbourne, ANU, University of Sydney',
  //     cities: 'Sydney, Melbourne, Brisbane, Perth'
  //   },
  //   {
  //     id: 'germany',
  //     flag: '🇩🇪',
  //     name: 'Germany',
  //     tagline: 'Tuition-Free Excellence',
  //     benefits: [
  //       'No Tuition Fees at Public Universities – Only minimal semester charges',
  //       'Strong Industrial & Research Collaboration – Internships & job placements',
  //       'English-Taught Programs – Wide range of courses available',
  //       'High Employability – Engineering, IT, Business, and more'
  //     ],
  //     universities: 'TU Munich, Heidelberg University, RWTH Aachen',
  //     cities: 'Berlin, Munich, Frankfurt, Hamburg'
  //   },
  //   {
  //     id: 'italy',
  //     flag: '🇮🇹',
  //     name: 'Italy',
  //     tagline: 'A Blend of Culture & Academia',
  //     benefits: [
  //       'Affordable Public Universities – Low tuition costs',
  //       'Specialized Fields – Architecture, Fashion, Engineering, Arts',
  //       'Rich History & Lifestyle – Study in a cultural hotspot',
  //       'Internship & Job Prospects – Strong business and design industries'
  //     ],
  //     universities: 'University of Bologna, Politechno di Milano, Sapienza University',
  //     cities: 'Milan, Rome, Florence, Venice'
  //   },
  //   {
  //     id: 'japan',
  //     flag: '🇯🇵',
  //     name: 'Japan',
  //     tagline: 'Innovation & Technological Leadership',
  //     benefits: [
  //       'Top-Ranked Universities – Strong focus on Science & Technology',
  //       "High Employability – Japan's demand for skilled foreign professionals",
  //       'Scholarship Opportunities – MEXT & university-funded scholarships',
  //       'Cultural & Language Immersion – Learn Japanese while studying'
  //     ],
  //     universities: 'University of Tokyo, Kyoto University, Osaka University',
  //     cities: 'Tokyo, Kyoto, Osaka, Fukuoka'
  //   }
  // ];

  // const filteredDestinations = activeTab === 'all'
  //   ? destinations
  //   : destinations.filter(dest => dest.id === activeTab);

  return (
    // <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
    //   {/* Hero Section */}
    //   <div className="bg-indigo-600 text-white">
    //     <div className="container mx-auto px-4 py-12">
    //       <h1 className="text-4xl font-bold mb-4">Study Destinations 🌍</h1>
    //       <p className="text-xl max-w-3xl">
    //         Your dream of studying abroad starts with choosing the right destination! Each country offers unique opportunities,
    //         world-class universities, and career pathways. Explore our expert insights on the top study destinations across the globe.
    //       </p>
    //     </div>
    //   </div>

    //   {/* Tabs Navigation */}
    //   <div className="bg-white shadow-md">
    //     <div className="container mx-auto px-4">
    //       <div className="flex overflow-x-auto py-2 space-x-2">
    //         <button
    //           className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
    //           onClick={() => setActiveTab('all')}
    //         >
    //           All Destinations
    //         </button>
    //         {destinations.map(dest => (
    //           <button
    //             key={dest.id}
    //             className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === dest.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
    //             onClick={() => setActiveTab(dest.id)}
    //           >
    //             {dest.flag} {dest.name}
    //           </button>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   {/* Destinations Grid */}
    //   <div className="container mx-auto px-4 py-12">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {filteredDestinations.map(destination => (
    //         <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    //           <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-6 text-white">
    //             <div className="text-3xl mb-2">{destination.flag}</div>
    //             <h2 className="text-2xl font-bold">{destination.name}</h2>
    //             <p className="text-indigo-100 font-medium">{destination.tagline}</p>
    //           </div>

    //           <div className="p-6">
    //             <h3 className="font-semibold text-indigo-800 mb-3">Key Benefits:</h3>
    //             <ul className="space-y-2 mb-4">
    //               {destination.benefits.map((benefit, idx) => (
    //                 <li key={idx} className="flex items-start">
    //                   <span className="text-green-500 mr-2">✅</span>
    //                   <span>{benefit}</span>
    //                 </li>
    //               ))}
    //             </ul>

    //             <div className="mt-4 space-y-2 text-gray-700">
    //               <p><span className="font-medium text-indigo-700">Top Universities:</span> {destination.universities}</p>
    //               <p><span className="font-medium text-indigo-700">Popular Cities:</span> {destination.cities}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Help Section */}
    //   <div className="bg-indigo-900 text-white py-12">
    //     <div className="container mx-auto px-4">
    //       <div className="max-w-3xl mx-auto text-center">
    //         <h2 className="text-3xl font-bold mb-4">How We Help You Choose the Right Destination</h2>
    //         <p className="text-xl mb-8">
    //           Not sure which country fits your goals? Our expert counselors analyze your profile, career aspirations,
    //           and financial situation to suggest the best study destinations for you.
    //         </p>
    //         <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-100 transition-colors">
    //           Book a Free Consultation Today!
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Footer */}
    //   <footer className="bg-gray-800 text-gray-300 py-8">
    //     <div className="container mx-auto px-4 text-center">
    //       <p>© {new Date().getFullYear()} Study Abroad Consultants. All rights reserved.</p>
    //       <div className="mt-4 flex justify-center space-x-4">
    //         <Link to="#" className="hover:text-white">About Us</Link>
    //         <Link to="#" className="hover:text-white">Contact</Link>
    //         <Link to="#" className="hover:text-white">Privacy Policy</Link>
    //         <Link to="#" className="hover:text-white">Terms of Service</Link>
    //       </div>
    //     </div>
    //   </footer>
    // </div>

    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">EduExpo 2K25</h2>
            <p className="text-lg font-medium text-gray-700 mb-6">🎓 Your Gateway to Global Education 🌍</p>
            <p className="text-gray-700 mb-6">Are you dreaming of studying abroad but unsure where to start? EduExpo 2K25 is your one-stop destination to explore top universities, scholarships, visa guidance, and career opportunities—all in one place!</p>

            <div className="space-y-4">
              <ContactDetail icon={<RiClockwiseFill />} title="Date & Time:" detail="20 April 2025 | 9:00 AM - 5:00 PM" />
              <ContactDetail icon={<RiMapPin2Fill />} title="Venue:" detail="Taj Palace, Nanakmatta(262311), Uttarakhand" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6">Why Attend EduExpo 2K25?</h3>
            <ul className="list-disc ml-6 text-gray-700 mt-4 space-y-2">
              <li><strong>🔥 Meet University Representatives:</strong> Speak directly with officials from top international universities.</li>
              <li><strong>🔥 Free Profile Evaluation:</strong> Bring your academic documents for real-time eligibility assessment.</li>
              <li><strong>🔥 Visa & Immigration Guidance:</strong> Understand the latest student visa policies.</li>
              <li><strong>🔥 Live Career Counseling:</strong> One-on-one sessions with study abroad experts.</li>
              <li><strong>🔥 Scholarship & Financial Aid Info:</strong> Explore fully-funded & merit-based scholarships.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6">Who Should Attend?</h3>
            <ul className="list-disc ml-6 text-gray-700 mt-4 space-y-2">
              <li>🎓 Students planning to study in USA, Canada, UK, Australia, Germany, New Zealand & more.</li>
              <li>📌 Those looking for scholarships and financial aid.</li>
              <li>📌 Students & parents seeking expert guidance on admissions & visa procedures.</li>
            </ul>

            <div className="mt-6 bg-indigo-100 p-4 rounded-lg text-center">
              <p className="font-semibold text-indigo-700">🎟 Limited Seats Available! Register Now!</p>
            </div>

            <div className="mt-6">
              <ContactDetail icon={<RiPhoneFill />} title="Call Us:" detail="+91-7618666001" />
              <ContactDetail icon={<RiMailFill />} title="Email:" detail="info@worldconnecteducation.com" />
              <ContactDetail icon={<RiGlobeFill />} title="Visit Us:" detail="[Full Address Here]" />
            </div>
          </div>
          <div className="flex justify-center">
            {/* <img src={Bg} alt="EduExpo 2K25" className='h-[40rem] object-cover rounded-lg shadow-lg' /> */}
          </div>
        </div>
      </div>
    </section>
  );

};


const ContactDetail = ({ icon, title, detail }) => (
  <div className="flex items-start space-x-3">
    <div className="text-indigo-600 text-xl mt-1">{icon}</div>
    <div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-gray-600">{detail}</p>
    </div>
  </div>
);

export default StudyDestinationsPage;