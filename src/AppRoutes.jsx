import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigation
} from 'react-router-dom'

import React from 'react';

import App from './App';
import HomePage from './home';

//importando context
import { AuthProvider } from './contexts/auth';



const AppRoutes = () => {
    return (
        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path="/Login" element={<App/>}/>
            </Routes>
            
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
            </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes