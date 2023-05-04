import React, { useEffect, useState } from "react";

const Filter1 = (props) => {
    const [showFilters, setShowfilters] = useState(false);
    const [check, setCheck] = useState({
        bodyweight: false,
        dumbell: false,
        barbell: false,
        machine: false,
        beginner: false,
        intermediate: false,
        advanced: false,
        expert: false
    });

    useEffect(()=>{
        let x = {...check}
        if(props.filter.type.length) props.filter.type.forEach((type)=>check[type]=true)
        if(props.filter.difficulty.length) props.filter.difficulty.forEach((difficulty)=>check[difficulty]=true)
    },[props.filter])

    const { bodyweight, dumbell, barbell, machine, beginner, intermediate, advanced, expert} = check;

    const changeHandler = (e) => {
        setCheck({
            ...check,
            [e.target.name]: e.target.checked,
        });
    };

    const applyFilters = (e) => {
        setCheck({
            ...check,
            bodyweight: false,
            dumbell: false,
            barbell: false,
            machine: false,
            beginner: false,
            intermediate: false,
            advanced: false,
            expert: false
        });
        let x = {}
        x["type"] = []
        x["difficulty"] = []
        if(bodyweight) x["type"].push("bodyweight")
        if(dumbell) x["type"].push("dumbell")
        if(barbell) x["type"].push("barbell")
        if(machine) x["type"].push("machine")
        if(beginner) x["difficulty"].push("beginner")
        if(intermediate) x["difficulty"].push("intermediate")
        if(advanced) x["difficulty"].push("advanced")
        if(expert) x["difficulty"].push("expert")
        console.log(x)
        props.setFilter(x)
        setShowfilters(false)
    };

    return (
        <div>
            <div >
                <div className=" flex justify-between items-center mb-4">
                    {/*  filters Button (md and plus Screen) */}
                    <button onClick={() => setShowfilters(!showFilters)} className=" cursor-pointer hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center ">
                        <svg className=" mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 12V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 4V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 18V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 4V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 9V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Filters
                    </button>
                </div>
                {/* <button onClick={() => setShowfilters(!showFilters)} className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center">
                    <svg className=" mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 12V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 4V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 18V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 4V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 9V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Filters
                </button> */}
            </div>
            <div id="filterSection" className={"relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full " + (showFilters ? "block" : "hidden")}>
                {/* Cross button Code  */}
                <div onClick={() => setShowfilters(false)} className=" cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
                    <svg className=" lg:w-6 lg:h-6 w-4 h-4" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 1L1 25" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 1L25 25" stroke="#27272A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {/* Type Section */}
                <div>
                    <div className=" flex space-x-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 10H12C10.8954 10 10 10.8954 10 12V19C10 20.1046 10.8954 21 12 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8954 20.1046 10 19 10Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">Type</p>
                    </div>
                    <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-2 gap-y-8 flex-wrap">
                        <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                            <input className="w-4 h-4 mr-2" type="checkbox" id="Bodyweight" name="bodyweight" value="bodyweight" checked={bodyweight} onChange={changeHandler} />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Bodyweight">
                                        BodyWeight
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center">
                            <input className="w-4 h-4 mr-2" type="checkbox" id="Dumbell" name="dumbell" value="dumbell" checked={dumbell} onChange={changeHandler} />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Dumbell">
                                        Dumbell
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-2 justify-start">
                            <input className="w-4 h-4 mr-2" type="checkbox" id="Barbell" name="barbell" value="barbell" checked={barbell} onChange={changeHandler} />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Barbell">
                                        Barbell
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-2 justify-start">
                            <input className="w-4 h-4 mr-2" type="checkbox" id="Machine" name="machine" value="machine" checked={machine} onChange={changeHandler} />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Machine">
                                        Machine
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                {/* Difficulty Section */}
                <div>
                    <div className=" flex space-x-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 5H14" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 7L14 5L12 3" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 3L3 5L5 7" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 10V21" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 19L19 21L21 19" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 12L19 10L17 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21H12C13.1046 21 14 20.1046 14 19V12C14 10.8954 13.1046 10 12 10Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">Difficulty</p>
                    </div>
                    <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-2 gap-y-8 flex-wrap">
                        <div className=" flex md:justify-center md:items-center items-center justify-start ">
                            <input className="w-4 h-4 mr-2" type="checkbox" id="Beginner" name="beginner" value="beginner" checked={beginner} onChange={changeHandler} />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Beginner">
                                        Beginner
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center ">
                            <input className="w-4 h-4 mr-2" type="checkbox" id="Intermediate" name="intermediate" value="intermediate" checked={intermediate} onChange={changeHandler} />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Intermediate">
                                        Intermediate
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className=" flex space-x-2 justify-start">
                            <input className="w-4 h-4 mr-2" type="checkbox" id="Advanced" name="advanced" value="advanced" checked={advanced} onChange={changeHandler} />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Advanced">
                                        Advanced
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className=" flex space-x-2 justify-start ">
                            <input className="w-4 h-4 mr-2" type="checkbox" id="Expert" name="expert" value="expert" checked={expert} onChange={changeHandler} />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Expert">
                                        Expert
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                {/* Collection Section */}

                <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
                    <button onClick={applyFilters} className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter1;
