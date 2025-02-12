import { useEffect, useState } from "react"
import axios from "axios"

export default function Balance(){

    const [balance,setBalance] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers : { "Authorization" : localStorage.getItem("token")}
        }).then((response)=>{
            setBalance(Math.round(response.data.balance*100)/100)
        })
    },[])

    return <div className="flex">
        <div className=" font-['Poppins'] font-bold text-xl">
            Your Balance
        </div>
        <div className=" font-['Poppins'] font-semibold text-xl ml-6">
            Rs. {balance}
        </div>
    </div>
}