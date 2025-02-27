import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import emailjs from "emailjs-com"; // Import EmailJS

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    address: "",
    fencingService: "",
    timeLimit: "",
  });

  const [showPopup, setShowPopup] = useState(false); // State for showing popup

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const templateParams = {
      from_name: formData.name,
      contact_no: formData.contactNo,
      reply_to: formData.email,
      address: formData.address,
      fencing_service: formData.fencingService,
      time_limit: formData.timeLimit,
    };

    // Accessing environment variables for EmailJS service
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (response) => {
        setFormData({
          name: "",
          contactNo: "",
          email: "",
          address: "",
          fencingService: "",
          timeLimit: "",
        });

        // Show success popup
        setShowPopup(true);

        // Hide popup after 3 seconds
        setTimeout(() => setShowPopup(false), 3000);
      },
      (error) => {
        alert("Something went wrong! Please try again.");
      }
    );
  };

  return (
    <div className="bg-bluish min-h-screen">
      <div className="p-4 sm:p-6 md:p-8 sm:mt-4 md:my-6">
        <div className="bg-light-buish p-6 sm:p-8 rounded-lg max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto shadow-white-glow-hover transition-shadow duration-300 w-full sm:w-9/12 md:w-7/12 lg:w-5/12">
          <h2 className="text-white text-2xl font-bold text-center mb-4">
            GET A FREE QUOTE
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label className="block text-white mb-1 text-sm">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded-md"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1 text-sm">
                Contact No. *
              </label>
              <input
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="w-full p-2 rounded-md"
                placeholder="Contact No."
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1 text-sm">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-md"
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1 text-sm">
                Your Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 rounded-md"
                placeholder="Your Address"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1 text-sm">
                Select Fencing Service *
              </label>
              <select
                name="fencingService"
                value={formData.fencingService}
                onChange={handleChange}
                className="w-full p-2 rounded-md"
                required
              >
                <option value="">Select Fencing Service</option>
                <option value="Wooden Fencing">Timber Fencing</option>
                <option value="Aluminium Fencing">Aluminium Fencing</option>
                <option value="Picket Fencing">Picket Fencing</option>
                <option value="Farm Fencing">Colorbond Fencing</option>
                <option value="Fencing Installation">
                  Fencing Installation
                </option>
                <option value="Repair Fencing">Repair Fencing</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-1 text-sm">
                Time Limit For Job Done *
              </label>
              <select
                name="timeLimit"
                value={formData.timeLimit}
                onChange={handleChange}
                className="w-full p-2 rounded-md"
                required
              >
                <option value="">Select Time Limit</option>
                <option value="One Week">One Week</option>
                <option value="Two Weeks">Two Weeks</option>
                <option value="Three Weeks">Three Weeks</option>
                <option value="Month">Month</option>
                <option value="Couple  of Months">Couple of Months</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-bluish text-white py-2 rounded-lg border border-white hover:scale-105 hover:bg-bluish transition text-sm flex justify-center items-center w-40"
              >
                GET QUOTATION
                <IoIosArrowDropright className="mx-2" />
              </button>
            </div>
          </form>

          {/* Popup for successful message */}
          {showPopup && (
            <div className="text-green-800 font-bold text-center mt-6 px-4 py-3 bg-white rounded-md">
              Quotation Request Sent Successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
