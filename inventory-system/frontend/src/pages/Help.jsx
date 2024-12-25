import React from "react";
import {
  FaRegUser,
  FaMapMarkerAlt,
  FaBullseye,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Help = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">

      {/* Header Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Yardrainage Maintenance and Services
        </h2>
        <p className="mt-2 text-gray-600">
        </p>
      </div>

      {/* Services Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Services Offered
        </h2>
        <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-2">
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
          <li>
            <strong>Emergency Repairs:</strong> Available 24/7 for urgent
            maintenance needs.
          </li>
          <li>
            <strong>Custom Solutions:</strong> Tailored maintenance programs for
            unique client requirements.
          </li>
        </ul>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          About YAR Drainage Maintenance Services
        </h2>
        <p className="mt-2 text-gray-600">
          <FaMapMarkerAlt className="inline-block mr-2" /> Located at
          <strong>
            {" "}
            EL RICH LAND COMPOUND, National Highway, Soro Soro Karsada, Batangas
            City.
          </strong>{" "}
          We specialize in providing solutions for drain problems in both
          commercial and industrial companies.
        </p>
        <p className="mt-2 text-gray-600">
          Our services include Engineering and Facilities, Motor Pool, and
          Housekeeping Departments. We cover General Cleaning, De-clogging,
          Exhaust Cleaning, Re-piping, Re-tiling, Online Pipe Repair, Descaling,
          Chimney Cleaning, AHU Cleaning, Water Treatment, Waste Water
          Treatment, and Drain Treatment.
        </p>
      </div>

      {/* Goals Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Company Goals</h2>
        <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-2">
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

      {/* FAQ Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800">FAQs</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold">1. How can I contact YAR?</h3>
            <p className="text-gray-600">
              <FaPhoneAlt className="inline-block mr-2" /> Hotline: (123)
              456-7890
              <br />
              <FaEnvelope className="inline-block mr-2" /> Email:
              support@yardrainage.com
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              2. What types of companies do you serve?
            </h3>
            <p className="text-gray-600">
              We serve residential, commercial, and industrial companies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">3. What are your operating hours?</h3>
            <p className="text-gray-600">
              <FaClock className="inline-block mr-2" /> 24/7 Operations for your
              convenience.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h2 className="text-lg font-semibold text-gray-800">
          Need Assistance?
        </h2>
        <p className="mt-2 text-gray-600">
          Our team is ready to help you with any drainage or maintenance
          concerns. Contact us today!
        </p>
        <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Contact Us Now
        </button>
      </div>
    </div>
  );
};

export default Help;
