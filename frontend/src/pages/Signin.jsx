import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Appbar2 from '../components/Appbar2';

export default function Signin(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return<div>
        <Appbar2/>
     <div className='bg-gray-400  dark:bg-gray-900 h-screen flex justify-center transition-colors duration-300 ' >
        <div className='flex flex-col justify-center'>
        <div className='bg-white dark:bg-gray-800 dark:text-white  rounded-lg h-max text-center p-2 px-4'>
        <Heading label={"Sign In"}/>
        <SubHeading text={"Enter your credentials to access your account"} />
        <InputBox type={"email"} onChange={e=>setUsername(e.target.value)} label={"Email"} placeholder={"johndoe@example.com"}/>
        <InputBox type={"password"} onChange={e=>setPassword(e.target.value)} label={"Password"} />
        <Button onClick={async ()=>{
                try{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                        username,
                        password
                    })
                        localStorage.removeItem("token")
                        localStorage.setItem("token","Bearer "+response.data.token)
                        navigate("/dashboard?userName="+response.data.name+"&userId="+response.data.id)
                }catch(e){
                    console.log(e.response.data.message);
                }
                                

           
        }} label={"Sign In"}/>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
        </div>
        </div>
    </div>
    </div>
}