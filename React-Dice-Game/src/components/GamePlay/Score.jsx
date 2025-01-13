import React from "react";

function Score({score}) {
    // console.log(score);
    
    return (
        <div
            className="flex flex-col items-center justify-center gap-0 p-4 rounded-lg -mt-4 md:mt-0"
            style={{ width: "min(90%, 135px)" }} // Limit width for smaller screens
        >
            <div className=" flex justify-center items-center w-full h-16 sm:h-20 md:h-24 rounded-lg">
                <h1 className="text-7xl sm:text-6xl md:text-7xl font-semibold">{score}</h1>
            </div>
            <p className="text-xl sm:text-base md:text-lg text-center font-semibold">Total Score</p>
        </div>
    );
}

export default Score;
