import React from 'react';
import VideoContent from './components/VideoContent';
import dotenv from 'dotenv';

import { baseURL } from '../../helpers/env';

export default function WatchPage() {

    const videoUrl = () => {
        return `${baseURL}/watch?video=${CurrentVideoID()}`
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