
import Balance from "../components/Balance"
import Appbar from "../components/Appbar"
import Users from "../components/Users"
import { useState } from "react"


export default function Dashboard(){

    

    return(
        <div className=" dark:bg-gray-800 dark:text-white transition-colors duration-300 h-screen">
            <Appbar />
            <div className="m-6">
            <Balance />
            <Users/>
            </div>
        </div>
    )
}