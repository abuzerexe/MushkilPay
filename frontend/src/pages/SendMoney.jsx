import axios from "axios";
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import Appbar2 from "../components/Appbar2";


export default function SendMoney(){

    const navigate = useNavigate()

    const [amount, setAmount] = useState("");
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const userName = searchParams.get("userName");
    const userId = searchParams.get("userId")



    return(<div>
    <Appbar2 />
    <div className="flex justify-center h-screen bg-gray-400 dark:bg-gray-900 transition-colors duration-300 ">
        <div className="h-full flex flex-col justify-center">
            <div
                className=" p-4 space-y-5 w-110 bg-white  dark:bg-gray-800 dark:text-white shadow-2xl rounded-lg"
            >
                <div className="flex flex-col p-3">
                     <h2 className=" text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-5">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-green-500  dark:bg-green-800 flex items-center justify-center">
                            <span className="text-2xl text-white font-['Poppins'] ">{name[0].toUpperCase()}</span>
                        </div>
                        <h3 className=" text-xl font-semibold font-['Poppins']">{name}</h3>
                    </div>
                    <div className="space-y-5">
                        <div className="pt-5">
                        <label
                            className=" text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                            for="amount" 
                        >
                            Amount (in Rs)
                        </label>
                        <input  onChange={(e)=>{
                            setAmount(e.target.value)
                        }}
                            type="number"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            id="amount"
                            placeholder="Enter amount"
                        />
                        </div>
                        <button onClick={async ()=>{
                            try{
                                await axios.post("http://localhost:3000/api/v1/account/transfer",{
                                    to : id,
                                    amount : parseInt(amount)
                                },{
                                    headers :{
                                        "Authorization" : localStorage.getItem("token")
                                    }
                                }).then((response)=>{
                                    console.log(response.data.message)
                                    
                                    navigate("/success?userName="+userName+"&userId="+userId)

                                })

                            }catch(e){
                                console.log(e.response.data.message)
                            }

                        }} className= " font-['Poppins'] justify-center rounded-md text-md font-medium  focus:ring-4 focus:ring-gray-300 mb-3 h-10   w-full bg-green-500 hover:bg-green-600 text-white  dark:bg-green-700 ">
                            Initiate Transfer
                        </button>
                        <button onClick={()=>{
                            navigate("/dashboard?userName="+userName+"&userId="+userId)

                        }} type="button" className=" w-full text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  py-2.5  mb-1 ">{"Back"}</button>
                    </div>
                </div>
        </div>
      </div>
    </div>
    </div>
)}