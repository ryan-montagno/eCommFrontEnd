import React from "react";
import guitarImage from "../assets/guitar2.jpg";

const Slider = () => {
    return (
        <div className="bg-gray-600 flex items-center justify-around w-full">
            <div className="bg-gray-300 p-4">
                <img
                    src={guitarImage}
                    alt="Product image"
                    className="rounded-lg"
                />
            </div>
            <div className="bg-gray-400 p-4"></div>
            <div className="bg-gray-500 p-4"></div>

        </div>
    );
};

export default Slider;