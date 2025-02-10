import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';

export default function Signin(){

    return <div className='bg-[#7f7f7f] h-screen flex justify-center' >
        <div className='flex flex-col justify-center'>
        <div className='bg-white rounded-lg h-max text-center p-2 px-4'>
        <Heading label={"Sign In"}/>
        <SubHeading text={"Enter your credentials to access your account"} />
        <InputBox label={"Email"} placeholder={"johndoe@example.com"}/>
        <InputBox label={"Password"} />
        <Button label={"Sign In"}/>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
        </div>
        </div>
    </div>
}