import DarkModeToggle from "./DarkModeToggle";

export default function Appbar2(){


    return <div className="shadow-lg h-16 flex justify-between  dark:bg-gray-800 dark:text-white transition-colors duration-300">
    <div className=" font-['Poppins'] flex flex-col justify-center h-full ml-5 text-2xl font-bold ">
        Mushkil Pay
    </div>
    
      <DarkModeToggle />
</div>
    
}