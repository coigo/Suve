import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UploadPage from "./pages/upload/uploadPage";
import WatchPage from './pages/watch/watchPaget' 
import { SignUpDialog } from "./components/signup/signUp-page";
import { SignInDialog } from "./components/signin/signIn-dialog";
import MainPage from "./pages/mainPage/mainPage";

export default function AppRoutes () {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/upload" element={<UploadPage/>} />
                <Route path="/watch" element={<WatchPage/>} />
                <Route path="/signin" element={<SignInDialog/>} />
                <Route path="/signup" element={<SignUpDialog/>} />
            </Routes>
        </BrowserRouter>

    )
}