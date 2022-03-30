import { useState } from 'react';

export const Switch = () => {
    return (
        //   Switch Container
        <div
            className="absolute top-0 right-0 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
        >
            {/* Switch */}
            <div
                className="bg-white h-5 w-5 rounded-full shadow-md"
            ></div>
        </div>
    );
}



