import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const EventTiming = () => {
    const handleMapClick = () => {
        // const lat = 29.0365;
        // const lng = 79.7181;
        const url = `https://maps.app.goo.gl/1gqUmUub9ZbRZhLW8`;
        // const url = `https://www.google.com/maps?q=${lat},${lng}`;
        window.open(url, '_blank');
    };
    return (
        <div className="flex justify-center items-center bg-gray-50">
            <div className="flex flex-col  gap-3 md:flex-row items-start md:items-center justify-center p-6 rounded-lg w-full max-w-6xl px-auto">
                {/* Date and Time Section */}
                <div className="flex items-center bg-white px-4 rounded-lg shadow-md w-full md:w-1/2  py-2 sm:py-0  sm:min-h-28 border border-gray-200">
                    <div className="flex flex-col items-center bg-gray-200 p-3 rounded-lg cursor-pointer" onClick={handleMapClick}>
                        <MdAccessTime className="text-gray-600 text-lg" />
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-500  sm:text-sm text-xs">Date</p>
                        <p className="text-sm sm:text-base font-semibold">Announcing Soon</p>
                        {/* <p className=" text-xs sm:text-sm text-gray-500">10:00 AM - 4:00 PM</p> */}
                    </div>
                </div>

                {/* Location Section */}
                <div className="flex items-center bg-white px-4 rounded-lg shadow-md w-full md:w-1/2 mt-0  py-2 sm:py-0 sm:min-h-28 border border-gray-200">
                    <div className="flex flex-col items-center bg-gray-200 p-3 mr-3 rounded-lg cursor-pointer" onClick={handleMapClick}>
                        <FaMapMarkerAlt className="text-gray-600 text-lg" />
                    </div>
                    <div className="flex-1">
                        <p className="text-gray-500 text-sm sm:text-base">Venue</p>
                        <p className="text-sm sm:text-base font-semibold">Announcing Soon</p>
                        {/* <p className="text-sm sm:text-base font-semibold">Taj Palace, Nanakmatta (262311), Uttarakhand</p> */}
                    </div>
                    {/* <FaPaperPlane className="text-gray-600 text-lg" /> */}
                </div>
            </div>
        </div>
    );
};

export default EventTiming;
