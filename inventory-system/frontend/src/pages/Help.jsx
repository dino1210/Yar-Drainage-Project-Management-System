import React from "react";
import { FaRegUser, FaMapMarkerAlt, FaBullseye } from "react-icons/fa";

const Help = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6 text-[#800020]">
        Yardrainage Maintenance and Services
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#800020]">
          One Call Does It All
        </h2>
        <p className="mt-2 text-gray-700">
          If Water Runs Through It, We Fix It. Call The Best and Flush The Rest.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#800020]">
          Services Offered
        </h2>
        <ul className="list-disc pl-5 mt-4 text-gray-700 space-y-2">
          <li>
            <strong>De-scaling and Cleaning:</strong> Removing limescale from
            tubing such as Boilers, Heat Exchangers, and Condenser tubes.
          </li>
          <li>
            <strong>Pipe Cleaning and Repair:</strong> Addressing cracks,
            breaks, and overloading in plumbing systems.
          </li>
          <li>
            <strong>Water Treatment:</strong> Improving water quality for
            specific uses.
          </li>
          <li>
            <strong>Waste Water Treatment:</strong> Following DENR standards
            with proper WWTP processes and effluent issue resolution.
          </li>
          <li>
            <strong>Exhaust Cleaning:</strong> Removing grease from ducts,
            hoods, fans, and vents to prevent fire hazards.
          </li>
          <li>
            <strong>Tank Cleaning:</strong> Removing hydrocarbon vapors,
            liquids, or residues from tanks.
          </li>
        </ul>
      </section>

      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#800020]">
          About YAR Drainage Maintenance Services
        </h2>
        <p className="mt-2 text-gray-700">
          <FaMapMarkerAlt className="inline-block mr-2" />
          Located at{" "}
          <strong>
            EL RICH LAND COMPOUND, National Highway, Soro Soro Karsada, Batangas
            City.
          </strong>{" "}
          We specialize in providing solutions for drain problems in both
          commercial and industrial companies.
        </p>
        <p className="mt-2 text-gray-700">
          Our services include Engineering and Facilities, Motor Pool, and
          Housekeeping Departments. We cover General Cleaning, De-clogging,
          Exhaust Cleaning, Re-piping, Re-tiling, Online Pipe Repair, Descaling,
          Chimney Cleaning, AHU Cleaning, Water Treatment, Waste Water
          Treatment, and Drain Treatment.
        </p>
      </section>

      {/* Goals Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#800020]">Company Goals</h2>
        <div className="mt-2 text-gray-700 flex items-start space-x-4">
          <FaBullseye className="text-3xl text-[#800020] mt-1" />
          <ul className="list-disc pl-5">
            <li>
              Create a service-based company that prioritizes exceeding customer
              expectations.
            </li>
            <li>Increase client base through exceptional service delivery.</li>
            <li>
              Develop a sustainable business model with profitable contracts and
              services.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#800020]">FAQs</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold">1. How can I contact YAR?</h3>
            <p className="text-gray-700">
              You can reach us via our hotline, email, or visit our office at EL
              RICH LAND COMPOUND, Batangas City.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              2. What types of companies do you serve?
            </h3>
            <p className="text-gray-700">
              We serve residential, commercial, and industrial companies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">3. What are your operating hours?</h3>
            <p className="text-gray-700">
              We operate 24/7 to serve your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center bg-[#800020] text-white p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
        <p className="text-lg mb-4">
          Our team is ready to help you with any drainage or maintenance
          concerns. Contact us today!
        </p>
        <button className="px-6 py-2 bg-white text-[#800020] font-semibold rounded-md hover:bg-gray-200">
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default Help;
