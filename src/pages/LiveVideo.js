import React from 'react';
import YouTube from 'react-youtube';
import '../components/css/LiveVideo.css';

function LiveVideo() {
  // ID do vídeo do YouTube
  const videoId = 'qORYO0atB6g';

  // Opções para o componente do YouTube
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default LiveVideo;
