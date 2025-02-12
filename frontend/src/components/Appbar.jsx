import { useSearchParams } from "react-router-dom"

export default function Appbar(){

    const [searchParams] = useSearchParams();
    const name = searchParams.get("name")


    return <div className="shadow-sm h-16 flex justify-between">
    <div className=" font-['Poppins'] flex flex-col justify-center h-full ml-5 text-2xl font-bold">
        Mushkil Pay
    </div>
    <div className="flex">
        <div className=" font-['Poppins'] flex flex-col justify-center h-full mr-3 text-xl font-medium">
            Hello, {name}
        </div>
        <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-3 mr-4">
            <div className="flex flex-col justify-center h-full text-xl">
                {name[0].toUpperCase()}
            </div>
        </div>
    </div>
</div>
    
}