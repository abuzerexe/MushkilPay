import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Redirecting(){

    const navigate = useNavigate();

    useState(()=>{
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/user/me",{
                    headers : { 'Authorization': localStorage.getItem("token") }
                 })
                const data = await response.data;
                navigate("/dashboard?userName="+data.userName+"&userId="+data.userId)
            } catch (e) {
                navigate("/signin")
            }
        };
        fetchData();

    },[])

}

