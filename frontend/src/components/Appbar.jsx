import { useSearchParams } from "react-router-dom"
import DarkModeToggle from "./DarkModeToggle";
import Logout from "./Logout";

export default function Appbar(){

    const [searchParams] = useSearchParams();
    const userName = searchParams.get("userName")


    return <div className="shadow-sm h-16 flex justify-between">
    <div className=" font-['Poppins'] flex flex-col justify-center h-full ml-5 text-2xl font-bold ">
        Mushkil Pay
    </div>
    <div className="flex ">
        <div className=" font-['Poppins'] flex flex-col justify-center h-full mr-3 text-xl font-medium">
            Hello, {userName.split(" ")[0]}
        </div>
        <div className="rounded-full h-10 w-10 bg-slate-400 flex justify-center mt-3 mr-4 dark:bg-green-800 ">
            <div className="flex flex-col justify-center h-full text-xl">
                {userName[0].toUpperCase()}
            </div>
        </div>
    </div>
    <div className="flex justify-around">
      <DarkModeToggle />
      <Logout/>
      </div>
</div>
    
}