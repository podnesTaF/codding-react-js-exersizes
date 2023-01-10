import React, {useEffect} from 'react';
import NavBar from "./components/NavBar";
import './App.css'
import AppRouter from "./components/AppRouter";
import {IUser} from "./models/IUser";
import {Layout} from "antd";
import {useActions} from "./hooks/useActions";

function App() {
    const {setUser, setIsAuth} = useActions()

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true)
        }
    }, [])


    return (
      <Layout>
        <NavBar />
        <Layout.Content>
            <AppRouter />
        </Layout.Content>
      </Layout>
  );
}

export default App;
