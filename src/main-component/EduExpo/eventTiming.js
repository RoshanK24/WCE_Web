import { FaMapMarkerAlt } from "react-icons/fa";

const EventTiming = () => {
    return (
        <div className="flex justify-center items-center bg-gray-50">
            <div className="flex flex-col  gap-3 md:flex-row items-start md:items-center justify-center p-6 rounded-lg w-full max-w-5xl px-auto">
                {/* Date and Time Section */}
                <div className="flex items-center bg-white px-4 rounded-lg shadow-md w-full md:w-1/2  py-2 sm:py-0  sm:min-h-28 border border-gray-200">
                    <div className="flex flex-col items-center bg-gray-200 px-3 py-1 sm:px-4 sm:py-2 rounded-lg">
                        <span className="text-[0.75rem]  text-gray-500">Apr</span>
                        <span className="text-base sm:text-lg font-semibold">20</span>
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-500  sm:text-sm text-xs">Date</p>
                        <p className="text-sm sm:text-base font-semibold">20 April 2025</p>
                        <p className=" text-xs sm:text-sm text-gray-500">9:00 AM - 5:00 PM</p>
                    </div>
                </div>

                {/* Location Section */}
                <div className="flex items-center bg-white px-4 rounded-lg shadow-md w-full md:w-1/2 mt-0  py-2 sm:py-0 sm:min-h-28 border border-gray-200">
                    <div className="flex flex-col items-center bg-gray-200 p-3 mr-3 rounded-lg">
                        <FaMapMarkerAlt className="text-gray-600 text-lg" />
                    </div>
                    <div className="flex-1">
                        <p className="text-gray-500 text-sm sm:text-base">Venue</p>
                        <p className="text-sm sm:text-base font-semibold">Taj Palace, Nanakmatta (262311), Uttarakhand</p>
                    </div>
                    {/* <FaPaperPlane className="text-gray-600 text-lg" /> */}
                </div>
            </div>
        </div>
    );
};

export default EventTiming;
