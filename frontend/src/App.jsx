// import './App.css'

import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider.jsx";
import Leftpart from "./home/leftpart/Leftpart";
import Rightpart from "./home/rightpart/Rightpart";
import Right from "./home/rightpart/Rightpart";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
   
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Leftpart />
              <Rightpart />
            </div>
          ) : (
            <Navigate to={"/login"}/>
          )
        }
      />
      <Route path="/signup" element={ authUser ? <Navigate to="/"/> : <Signup/>}/>
      <Route path="/login"  element={ authUser ? <Navigate to="/"/> : <Login/>}/>
    </Routes>
  );
}

export default App;
