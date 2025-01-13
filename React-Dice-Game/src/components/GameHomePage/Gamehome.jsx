import React from 'react'

function Gamehome({SetPlay}) {
    return (
        <>

            <main
                className="flex justify-center items-center min-h-screen"
            >
                <div
                    className="flex flex-wrap max-w-full shadow-sm"
                    style={{
                        width: "100%",
                        maxWidth: "1182px",
                    }}
                >
                    {/* Left Section */}
                    <div className="w-full sm:w-1/2 h-auto flex justify-center items-center">
                        <img
                            src="/dices 1.png"
                            alt="Dice"
                            
                        />
                    </div>

                    {/* Right Section */}
                    <div className="w-full sm:w-1/2  flex justify-center items-center p-6">
                        <div className="flex items-end flex-col gap-3 text-center sm:text-right">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
                                DICE GAME
                            </h1>
                            <button 
                              onClick={() => SetPlay(true)}
                            className="bg-black p-2 text-white w-full sm:w-40 flex justify-center items-center cursor-pointer hover:bg-gray-800">
                                Play Now
                            </button>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}

export default Gamehome