import React from 'react'
function Displayrules({toggledisplayrules}) {
    //console.log(toggledisplayrules);
    
    return (
        <>
          
          {toggledisplayrules && (<div className="w-full max-w-xl bg-pink-100 mt-4 mx-auto p-6 sm:p-8 rounded-lg">
            <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">
                How to Play Dice Game
            </h1>
            <ol className="text-base sm:text-lg list-decimal pl-6">
                <li className="mb-2 italic">Select any number</li>
                <li className="mb-2 italic">Click on the dice image</li>
                <li className="mb-2 italic">
                    After clicking on the dice, if the selected number matches the dice number, you will get points equal to the dice
                    number.
                </li>
                <li className="mb-2 italic">If your guess is wrong, 2 points will be deducted.</li>
            </ol>
        </div>)}
        
        </>

    )
}

export default Displayrules
