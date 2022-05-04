import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'

import React, {useContext} from 'react';

import App from './App';
import HomePage from './home';

//importando context
import { AuthProvider, AuthContext } from './contexts/auth';



const AppRoutes = () => {
    const Private = ({children}) =>{
        const { authenticated, loading} = useContext (AuthContext);

        if(loading){
            return <div className="loading">carregando...</div>
        }

        if(!authenticated) {
            return <Navigate to="/login" />
        }

        return children;
    }


    return (
        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path="/Login" element={<App/>}/>
            </Routes>
            
            <Routes>
                <Route exact path="/" element=
                {<Private> <HomePage/> </Private>}/>
            </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes