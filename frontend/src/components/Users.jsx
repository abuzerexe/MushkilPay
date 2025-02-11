import { useState } from "react"
import  Button  from "./Button"

 function Users () {
    // Replace with backend call
    const [users, setUsers] = useState([{
        firstName: "Abuzer",
        lastName: "Zia",
        _id: 1
    },{
        firstName: "Siraj",
        lastName: "Kazim",
        _id: 2
    },{
        firstName: "Saad",
        lastName: "Tiwana",
        _id: 1
    },{
        firstName: "Faizan",
        lastName: "Ahmed",
        _id: 1
    }]);

    return <>
        <div className=" font-['Poppins'] font-semibold mt-7 text-xl">
            Users
        </div>
        <div className="my-4">
            <input type="text" placeholder="Search users..." className="w-full px-2 py-1.5 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    return <div className="flex justify-between ">
        <div className="flex">
            <div className=" rounded-full h-9 w-9 bg-slate-200 flex justify-center ml-1 mt-2.5 mr-3">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className=" font-['Poppins'] text-lg font-bold flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button label={"Send Money"} />
        </div>
    </div>
}

export default Users;