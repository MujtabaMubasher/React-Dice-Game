
function Selectnumbers({ setSelectednumber, selectednumber, displaymessage, setDisplaymessage }) {
    const arr = [1, 2, 3, 4, 5, 6];


    return (
        <>

            <div
                className="flex flex-wrap gap-2 p-4 -mt-3 md:mt-12 rounded-lg justify-center md:justify-between max-w-full"
                style={{
                    width: "min(100%, 512px)", // Responsive width for small screens
                }}
            >
                {displaymessage && (<p className="w-full text-center text-red-500 font-bold text-sm sm:text-base md:text-lg ">You have not selected any number</p>)}
                {arr.map((value, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setSelectednumber(value)
                            setDisplaymessage(false)
                        }}
                        className="flex justify-center items-center border border-black rounded-lg"
                        style={{
                            width: "72px",
                            height: "72px",
                            background: selectednumber === value ? 'black' : 'white',
                            color: selectednumber === value ? 'white' : 'black',
                        }}
                    >
                        {value}
                    </div>
                ))}
                <p className="text-gray-600 font-bold text-2xl text-center md:text-right w-full mt-0 md:mt-2">Select a number</p>
            </div>

        </>
    );
}

export default Selectnumbers;
