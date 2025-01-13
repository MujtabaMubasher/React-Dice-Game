import React, {useEffect, useState} from 'react';
import Score from './Score';
import Selectnumbers from './Selectnumbers';
import Dicerole from './Dicerole';
import Displayrules from './Displayrules';

function Gameplay() {
    const [selectednumber, setSelectednumber] = useState(0)
    const [randomimage, setRandomimage] = useState(1);
    const [score, setScore] = useState(0)
    const [displaymessage, setDisplaymessage] = useState(false)
    const [toggledisplayrules, setToggledisplayrules] = useState(false)
    useEffect(() => {
        if (selectednumber !== 0) { 
            if (selectednumber === randomimage) {
                setScore(prevScore => prevScore + randomimage);
                setSelectednumber(0)
                // console.log("Number Matched: ", selectednumber);
            } else {
                if (score > 1) {
                    setScore(prevScore => prevScore - 2) 
                }else if(score === 1){
                    setScore(0)
                }
                // console.log("Number Mismatched: ", selectednumber);
                setSelectednumber(0)
            }
        }
    }, [randomimage]);


    return (
        <main
            className="flex items-center flex-col w-full h-screen"
        >
            <div
                className=" w-11/12 sm:w-9/12 md:w-3/4 h-40 flex flex-col md:flex-row items-center justify-between rounded-lg p-4 mb-[50px] md:mb-0"
            >
                <Score score={score} />
                <Selectnumbers selectednumber={selectednumber} setSelectednumber={setSelectednumber} displaymessage = {displaymessage} setDisplaymessage = {setDisplaymessage} />
            </div>
            <Dicerole selectednumber = {selectednumber} setScore = {setScore} randomimage={randomimage} setRandomimage={setRandomimage} setDisplaymessage={setDisplaymessage} setToggledisplayrules = {setToggledisplayrules} toggledisplayrules = {toggledisplayrules} />
            <Displayrules toggledisplayrules = {toggledisplayrules}/>
        </main>
    );
}

export default Gameplay;
