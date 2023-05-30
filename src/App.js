import React , {useEffect} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useSelector, useDispatch } from "react-redux";
import { login, selectUser,logout } from './features/userSlice';
import Login from './Login';
import {auth} from './firebase';




function App() {
  const dispatch =  useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //usdhuij
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName,
        }))
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
         
      <div className="app_body">
     
    {user? (
      <>
      {/*Sidebar*/}
      <Sidebar />
      {/*chat*/}
      <Chat />
      </>
    ) : (
       <Login />
    )}
    </div>
    </div>
  );
}

export default App;
