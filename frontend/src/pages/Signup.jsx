import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Appbar2 from '../components/Appbar2';


export default function Signup(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return <div>
            <Appbar2/>
    <div className='bg-gray-400  dark:bg-[#121826]  h-screen flex justify-center transition-colors duration-300' >
        <div className='flex flex-col justify-center'>
        <div className='bg-white  dark:bg-gray-800 dark:text-white rounded-lg h-max text-center p-2 px-4'>
        <Heading label={"Sign Up"}/>
        <SubHeading text={"Enter your information to create an account"} />
        <InputBox type={"text"} onChange={(e)=>{
            setFirstName(e.target.value)
        }} label={"First Name"} placeholder={"John"}/>
        <InputBox type={"text"} onChange={e=>setlastName(e.target.value)} label={"Last Name"} placeholder={"Doe"}/>
        <InputBox type={"email"} onChange={(e)=>{
            setUsername(e.target.value)
        }}  label={"Email"} placeholder={"johndoe@example.com"}/>
        <InputBox  onChange={(e)=>{
            setPassword(e.target.value)
        }} type={"password"} label={"Password"} />
        <Button onClick={async()=>{
            try{
                const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                    username,
                    firstName,
                    lastName,
                    password
                })
                localStorage.removeItem("token")
                localStorage.setItem("token", "Bearer "+response.data.token)
                navigate("/signin")
            }catch(e){
                console.log(e.response.data.message)
            }
        }} label={"Sign Up"}/>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"}/>
        </div>
        </div>
    </div>
    </div>
}