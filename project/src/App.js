import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Login from './Login';
import { selectUser } from './features/userSlice';
import { auth } from './firebase'; // Assuming you have a Firebase configuration for authentication
import { login, logout } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("user is", authUser);
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
        // Handle logout or redirect to login page
        dispatch(logout())
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

