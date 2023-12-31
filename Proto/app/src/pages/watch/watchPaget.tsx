import React from 'react';
import VideoContent from './components/VideoContent';
import dotenv from 'dotenv';

// dotenv.config();

// const baseUrl = process.env.REACT_APP_baseUrl;

export default function WatchPage() {

    const videoUrl = () => {
        return `${baseURL()}/watch?video=${CurrentVideoID()}`
    }

    const baseURL = () => {
        return import.meta.env.VITE_REACT_APP_baseURL
    }

    const CurrentVideoID = () => {
        const urlParams = new URLSearchParams(window.location.search)
        return urlParams.get('video')
    }

    return (
           <>
           {videoUrl()}
            <VideoContent
                url={ videoUrl() }
            />
           </>
    )
}