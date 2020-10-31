import React from "react";

import "./style/App.css";
import SideBar from "./features/SideBar";
import Chat from "./features/Chat";
function App() {
  return (
    <div className="App">
      <SideBar />
      <Chat />
    </div>
  );
}

export default App;
