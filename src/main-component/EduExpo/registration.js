import React, { useState } from 'react';
import EventTiming from './eventTiming';
import eduExpoBg from '../../images/bg/eduexpoBg3.jpg';
import eduExpologo from '../../images/logo/eduexpo2.png';
import axios from 'axios';
import RegistrationSuccessDialog from './successDialog';

const ExpoRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        address: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    // Add these state variables
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [registrationResult, setRegistrationResult] = useState(null);
    const [qrCode, setQrCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('Form submitted:', formData);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/eduexpo/registration', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // console.log('API Response:', response.data);

            if (response.data.success) {
                // Store the registration data and QR code
                setRegistrationResult(response.data.data);
                setQrCode(response.data.qrCode);

                // Open the success dialog
                setIsDialogOpen(true);

                // Reset the form
                setFormData({
                    name: '',
                    contactNumber: '',
                    address: '',
                    email: ''
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert(`Error submitting form: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    return (<>
        {/* Include the dialog component */}
        <RegistrationSuccessDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            registrationData={registrationResult}
            qrCode={qrCode}
        />
        <div className="max-w-6xl mx-auto p-2 sm:p-4 font-sans">

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-purple-800 to-blue-600 text-white" style={{
                    backgroundImage: `url(${eduExpoBg})`,
                    backgroundBlendMode: "overlay",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                    <div className="p-3 sm:p-4">
                        {/* Banner Headline */}
                        <div className="bg-yellow-400 text-purple-900 font-bold text-center text-xl sm:text-2xl md:text-3xl p-2 rounded-md mb-4">
                            Edu Expo 2025 Registration
                        </div>

                        {/* Main Banner Content */}
                        <div className="flex flex-col md:flex-row items-center justify-between m-0 sm:m-4 sm:py-16">
                            {/* Edu Expo Logo */}
                            <img src={eduExpologo} alt="Edu Expo Logo" className="w-32 sm:w-40 md:w-48 lg:w-56 mx-auto shadow-lg bg-white p-2 rounded-lg" />
                        </div>

                        {/* Event Date and Location */}
                        <div className="mt-6 bg-pink-600 rounded-md p-1 sm:p-2 md:p-4 flex justify-between items-center text-center">
                            <div className='ms-2'>
                                <div className="text-yellow-400 font-bold text-xs sm:text-2xl md:text-3xl">27th</div>
                                <div className="text-white font-bold text-sm sm:text-2xl">April 2025</div>
                            </div>
                            <div className='text-yellow-400 font-bold text-[0.75rem] sm:text-xl md:text-2xl'>10:00 AM - 4:00 PM</div>
                            <div className='me-2'>
                                <div className="text-white text-xs sm:text-base">Taj Palace</div>
                                <div className="text-white text-xs sm:text-base"> Nanakmatta</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Info Section */}
                <EventTiming />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 p-4 sm:p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registration Form</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Your answer"
                        />
                    </div>

                    <div>
                        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Contact Number<span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-purple-500">
                            <span className="ms-2 px-2 py-2 bg-gray-100 border-r border-gray-300 text-gray-700 rounded-md">+91</span>
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber.replace(/^\+91/, "")} // Remove prefix from stored value
                                onChange={(e) => {
                                    const newValue = e.target.value.replace(/\D/g, ""); // Allow only numbers
                                    setFormData({ ...formData, contactNumber: `+91${newValue}` });
                                }}
                                maxLength={10}
                                minLength={10}
                                required
                                className="w-full px-3 py-2 focus:outline-none"
                                placeholder="Enter mobile number"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Address<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            rows="3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your address"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            E-mail address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required={false}
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email (optional)"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
                        >
                            Register Now
                        </button>
                    </div>
                </form>
            </div>
        </div></>
    );
};

export default ExpoRegistration;