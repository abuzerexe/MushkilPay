import axios from "axios";
import Button from '../components/Button';
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import Appbar2 from "../components/Appbar2";

export default function ResultSuccess(){

    const navigate = useNavigate()

    const [searchParams] = useSearchParams();
    const userName = searchParams.get("userName");
    const userId = searchParams.get("userId")



    return <div>
        <Appbar2/>
    <div className="flex justify-center h-screen  bg-gray-400 dark:bg-gray-900 transition-colors duration-300 ">
        <div className="h-full flex flex-col justify-center">
            <div
                className=" p-4 space-y-5 w-110 bg-white  dark:bg-gray-800 dark:text-white shadow-2xl rounded-lg"
            >
                <div className="flex flex-col p-2">
                     <h2 className=" text-3xl font-bold text-center font-['Poppins'] text-green-700  dark:text-green-500">Yeah!!</h2>
                </div>
                <h4 className=" text-2xl font-semibold text-center font-['Poppins'] ">Transfer Successfull.</h4>
                <div className="p-5">
                        <button onClick={()=>{
                            navigate("/dashboard?userName="+userName+"&userId="+userId)

                        }} type="button" className=" w-full  text-green-700 border-green-600 dark:text-green-500 hover:text-white border hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm  py-2.5  ">{"Done"}</button>

                </div>
  
        </div>
      </div>
    </div>
    </div>
}
