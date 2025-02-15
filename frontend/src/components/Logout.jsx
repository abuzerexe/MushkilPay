import { useNavigate } from "react-router-dom"

export default function Logout(){

    const navigate = useNavigate()

    return <div>
        <button className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mr-6 mb-1 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=>{
            navigate("/signin")
            localStorage.removeItem("token")
        }}> Logout</button>
    </div>
}