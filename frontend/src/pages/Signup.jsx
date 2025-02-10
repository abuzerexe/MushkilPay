import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';

export default function Signup(){

    return <div className='bg-[#7f7f7f] h-screen flex justify-center' >
        <div className='flex flex-col justify-center'>
        <div className='bg-white rounded-lg h-max text-center p-2 px-4'>
        <Heading label={"Sign Up"}/>
        <SubHeading text={"Enter your information to create an account"} />
        <InputBox label={"First Name"} placeholder={"John"}/>
        <InputBox label={"Last Name"} placeholder={"Doe"}/>
        <InputBox label={"Email"} placeholder={"johndoe@example.com"}/>
        <InputBox label={"Password"} />
        <Button label={"Sign Up"}/>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"}/>
        </div>
        </div>
    </div>
}