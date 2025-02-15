
import Balance from "../components/Balance"
import Appbar from "../components/Appbar"
import Users from "../components/Users"
import { useState } from "react"


export default function Dashboard(){

    

    return(
        <div className=" bg-gray-100  dark:bg-gray-800 dark:text-white transition-colors duration-300 h-screen">
            <div className="bg-gray-300 dark:bg-gray-800">
            <Appbar />
            </div>
            <div className="m-6">
            <Balance />
            <Users/>
            </div>
        </div>
    )
}