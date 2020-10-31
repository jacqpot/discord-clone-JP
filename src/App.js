import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style/App.css";
import SideBar from "./features/SideBar";
import Chat from "./features/Chat";
import { selectUser } from "./features/userSlice";
import Login from "./features/Login";
import { auth } from "./features/firebase";
import { login, logout } from "./features/userSlice";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
      }
    });
  }, []);

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
