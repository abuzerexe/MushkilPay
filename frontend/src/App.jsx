import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import SendMoney from "./pages/SendMoney"
import Redirecting from "./pages/Redirecting"
import ResultSuccess from "./pages/ResultSuccess"
import { ThemeProvider } from "./providers/ThemeProvider"



function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/success" element={<ResultSuccess/>}/>
          <Route path="/" element={<Redirecting/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/send" element={<SendMoney/>}/> 
        </Routes> 
    </BrowserRouter>
  </ThemeProvider>
  
  )
}

export default App
