import React from "react";
import Dashboard from "./Components/dashboard";
import Login from "./Components/login";
import SignUp from "./Components/signUp";

function App() {
  return (
    <div className="App">
      <Login />
      <Dashboard/>
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
