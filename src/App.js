import React from "react";
import { useSelector } from "react-redux";
import "./style/App.css";
import SideBar from "./features/SideBar";
import Chat from "./features/Chat";
import { selectUser } from "./features/userSlice";
import Login from "./features/Login";
function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user ? (
        <>
          <SideBar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
