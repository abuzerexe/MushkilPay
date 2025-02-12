
import Balance from "../components/Balance"
import Appbar from "../components/Appbar"
import Users from "../components/Users"
import { useState } from "react"


export default function Dashboard(){


    return(
        <div>
            <Appbar />
            <div className="m-6">
            <Balance />
            <Users/>
            </div>
        </div>
    )
}