import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import eduExpologo from '../../images/logo/eduexpo2.png';



const RegistrationSuccessDialog = ({ isOpen, onClose, registrationData, qrCode }) => {
  const dialogRef = useRef(null);

  const downloadAsImage = async () => {
    if (dialogRef.current) {
      try {
        const canvas = await html2canvas(dialogRef.current);
        const image = canvas.toDataURL('image/png');

        // Create a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = image;
        downloadLink.download = `Registration-${registrationData.referenceCode || 'confirmation'}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  if (!isOpen || !registrationData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
        <div ref={dialogRef} className="p-6">

          <img src={eduExpologo} alt="Edu Expo Logo" className="w-48 mx-auto" />

          {/* Header */}
          <div className="text-center mb-2">
            <h2 className="text-xl font-bold text-green-600">Registration Successful!</h2>
          </div>

          {/* QR Code */}
          <div className="flex justify-center mb-6">
            <div className="border border-gray-300 p-2 rounded">
              <img
                src={qrCode}
                alt="Registration QR Code"
                style={{ width: '150px', height: '150px' }}
              />
            </div>
          </div>

          {/* Registration Details */}
          <div className="border border-gray-300 rounded px-4 py-2">
            <h3 className="font-bold text-lg mb-2">Registration Details</h3>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-500">Name:</p>
              <p>{registrationData.name}</p>

              <p className="text-gray-500">Contact:</p>
              <p>{registrationData.contactNumber}</p>

              <p className="text-gray-500">Email:</p>
              <p>{registrationData.email}</p>

              <p className="text-gray-500">Address:</p>
              <p>{registrationData.address}</p>

              {/* <p className="text-gray-500">Reference Code:</p>
              <p className="text-sm">{registrationData.referenceCode || 'N/A'}</p> */}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 py-2 border-t border-gray-300">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={downloadAsImage}
          >
            Download Details
          </button>
          <button
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccessDialog;