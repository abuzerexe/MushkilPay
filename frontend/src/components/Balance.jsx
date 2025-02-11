export default function Balance({value}){

    return <div className="flex">
        <div className=" font-['Poppins'] font-bold text-xl">
            Your Balance
        </div>
        <div className=" font-['Poppins'] font-semibold text-xl ml-6">
            Rs. {value}
        </div>
    </div>
}