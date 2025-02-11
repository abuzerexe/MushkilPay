export default function Appbar({fname,fletter}){
    return <div className="shadow-sm h-14 flex justify-between">
    <div className="flex flex-col justify-center h-full ml-4 text-xl font-bold">
        Mushkil Pay
    </div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-3 font-medium">
            Hello, {fname}
        </div>
        <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-2 mr-3">
            <div className="flex flex-col justify-center h-full text-xl">
                {fletter}
            </div>
        </div>
    </div>
</div>
    
}