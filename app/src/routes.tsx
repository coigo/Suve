import React from "react";
import UploadPage from "./pages/upload/uploadPage";
import WatchPage from './pages/watch/watchPage' 
import MainPage from "./pages/mainPage/mainPage";
import UserPerfil from "./pages/userPerfil/userPerfil";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUpDialog } from "./components/signup/signUp-page";
import { SignInDialog } from "./components/signin/signIn-dialog";
import SearchPage from "./pages/search";

export default function AppRoutes () {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/upload" element={<UploadPage/>} />
                <Route path="/watch" element={<WatchPage/>} />
                <Route path="/signin" element={<SignInDialog/>} />
                <Route path="/signup" element={<SignUpDialog/>} />
                <Route path="/signup" element={<SignUpDialog/>} />
                <Route path="/perfil/:userId" element={<UserPerfil/>} />
                <Route path="/search" element={<SearchPage/>} />
            </Routes>
        </BrowserRouter>

    )
}