import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return <div className='bg-[#c2cedb] h-screen flex justify-center' >
        <div className='flex flex-col justify-center'>
        <div className='bg-white rounded-lg h-max text-center p-2 px-4'>
        <Heading label={"Sign Up"}/>
        <SubHeading text={"Enter your information to create an account"} />
        <InputBox onChange={(e)=>{
            setFirstName(e.target.value)
        }} label={"First Name"} placeholder={"John"}/>
        <InputBox onChange={e=>setlastName(e.target.value)} label={"Last Name"} placeholder={"Doe"}/>
        <InputBox onChange={(e)=>{
            setUsername(e.target.value)
        }} label={"Email"} placeholder={"johndoe@example.com"}/>
        <InputBox onChange={(e)=>{
            setPassword(e.target.value)
        }} label={"Password"} />
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
}