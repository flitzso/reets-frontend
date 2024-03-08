import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import '../components/css/LiveVideo.css'

const LiveVideo = () => {
  return (
    <div>
      <h1>Live Video</h1>
      <div id="twitch-embed" className="twitch-embed">
        <TwitchEmbed
          channel="fritzshow_"
          parent={['www.example.com']}
          allowfullscreen={true}
        />
      </div>
    </div>
  );
};

export default LiveVideo;
