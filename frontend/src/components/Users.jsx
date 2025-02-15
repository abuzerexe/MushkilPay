import { useEffect, useState } from "react";
import  Button  from "./Button";
import axios from "axios";
import { useNavigate, useSearchParams } from 'react-router-dom';



 function Users () {
    
    
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("")


    useEffect(()=>{
         axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${encodeURIComponent(filter)}`,{ headers: { 'Authorization': localStorage.getItem("token") } }).then((response)=>{
            console.log(encodeURIComponent(filter))

             setUsers(response.data.users)

         })
    },[filter])

    return <div>
        <div className=" font-['Poppins'] font-semibold mt-7 text-xl">
            Users
        </div>
        <div className="my-4">
            <input onChange={(e)=>{
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1.5 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User key={user._id} user={user} />)}
        </div>
    </div>
}

function User({user}) {

    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId")

    if(user._id == userId){
        return <div></div>
    }else{
        const navigate = useNavigate();
        const [searchParams] = useSearchParams();
        const userName = searchParams.get("userName")
    
    
        return <div className="flex justify-between ">
            <div className="flex">
                <div className=" rounded-full h-9 w-9 bg-slate-200 flex justify-center ml-1 mt-2.5 mr-3 dark:bg-green-800 ">
                    <div className="flex flex-col justify-center h-full text-xl ">
                        {user.firstName[0].toUpperCase()}
                    </div>
                </div>
                <div className=" font-['Poppins'] text-lg font-bold flex flex-col justify-center h-ful">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
    
            <div className="flex flex-col justify-center h-ful">
                <Button onClick={()=>{
                    navigate("/send?id="+user._id+"&name="+user.firstName+" "+user.lastName+"&userName="+userName+"&userId="+userId)
                }} label={"Send Money"} />
            </div>
        </div>
    }
  
}

export default Users;