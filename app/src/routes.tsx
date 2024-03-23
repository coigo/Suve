import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UploadPage from "./pages/upload/uploadPage";
import WatchPage from './pages/watch/watchPaget' 
import { SignUpDialog } from "./pages/signup/signUp-dialog";

export default function AppRoutes () {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/upload" element={<UploadPage/>} />
                <Route path="/watch" element={<WatchPage/>} />
                <Route path="/signin" element={<SignUpDialog/>} />
                <Route path="/signup" element={<SignUpDialog/>} />
            </Routes>
        </BrowserRouter>

    )
}