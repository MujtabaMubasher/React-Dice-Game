import React from 'react'
import { useState } from 'react';

function Dicerole({ setRandomimage, randomimage, selectednumber, setScore, setDisplaymessage, setToggledisplayrules, toggledisplayrules }) {
    

    const randomNumber = () => {
        setRandomimage(Math.floor(Math.random() * 6 + 1))

    }
    return (
        <>
            <main className='mt-36'>
                <div onClick={() => {
                    if (selectednumber) {
                        randomNumber(); // Call the function
                    } else {
                        setDisplaymessage(true)
                    }
                }} className='cursor-pointer'>
                    <img
                        src={`/dice_${randomimage}.png`}
                        alt="Dice"
                        className="max-w-48 md:max-w-full  h-auto object-contain mx-auto"
                    />

                    <p className='text-center text-2xl'>Click on Dice to roll</p>
                </div>
                <div className='flex flex-col gap-1 mt-5'>
                    <div className="flex gap-4 mt-4">
                        <button
                            className="bg-white hover:bg-black text-black hover:text-white border border-black font-bold py-2 px-4 rounded shadow-md transition-transform transform hover:scale-105"
                            onClick={() => setScore(0)}
                        >
                            Reset Score
                        </button>
                        <button
                            onClick={() => setToggledisplayrules((prev)=> !prev)}
                            className="bg-black hover:bg-white text-white hover:text-black border border-black font-bold py-2 px-4 rounded shadow-md transition-transform transform hover:scale-105"
                        >
                            {toggledisplayrules? <span>Hide Rules</span>: <span>Show Rules</span>}
                        </button>
                    </div>

                </div>
            </main>
        </>

    )
}

export default Dicerole