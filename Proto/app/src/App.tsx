import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await axios.get('http://localhost:3000/', {
          headers: {
            'Content-Type': 'video/mp4',
          },
        });
        console.log(response)
        setVideoUrl(URL.createObjectURL(new Blob([response.data], { type: 'video/mp4' })));
      } catch (error) {
        console.error('Erro ao buscar o vídeo:', error);
      }
    }

    fetchVideo();
  }, []); 

  return (
    <div>
      <video controls width="400" src="http://localhost:3000" ></video>
    </div>
  );
}

export default App
