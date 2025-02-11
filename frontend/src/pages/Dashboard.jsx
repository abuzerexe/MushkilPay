
import Balance from "../components/Balance"
import Appbar from "../components/Appbar"
import Users from "../components/Users"


export default function Dashboard(){

    return(
        <div>
            <Appbar fname={"Abuzer"} fletter={"A"}/>
            <div className="m-6">
            <Balance value={5000} />
            <Users/>
            </div>
        </div>
    )
}