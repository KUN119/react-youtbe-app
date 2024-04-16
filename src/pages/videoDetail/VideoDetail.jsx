import React from 'react'
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
    const { videoId } = useParams();

    const iframeProps = {
        id: "ytplayer",
        type: "text/html",
        width: "720",
        height: "405",
        src: `https://www.youtube.com/embed/${videoId}`,
        frameborder: "0",
        allowfullscreen: "allowfullscreen",
      };

    return (
        <div>
            <iframe {...iframeProps}></iframe>
        </div>
    )
}
