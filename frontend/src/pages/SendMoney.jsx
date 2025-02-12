
export default function SendMoney(){

    return <div class="flex justify-center h-screen bg-[#c2cedb]">
        <div className="h-full flex flex-col justify-center">
            <div
                className=" p-4 space-y-5 w-110 bg-white shadow-2xl rounded-lg"
            >
                <div className="flex flex-col p-3">
                     <h2 className=" text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-5">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-2xl text-white font-['Poppins'] ">A</span>
                        </div>
                        <h3 className=" text-xl font-semibold font-['Poppins']">Abuzer Zia</h3>
                    </div>
                    <div className="space-y-5">
                        <div className="pt-5">
                        <label
                            className=" text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                            for="amount"
                        >
                            Amount (in Rs)
                        </label>
                        <input
                            type="number"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            id="amount"
                            placeholder="Enter amount"
                        />
                        </div>
                        <button className=" font-['Poppins'] justify-center rounded-md text-md font-medium  focus:ring-4 focus:ring-gray-300  h-10 px-4 py-2 w-full bg-green-500 hover:bg-green-600 text-white">
                            Initiate Transfer
                        </button>
                    </div>
                </div>
        </div>
      </div>
    </div>
}