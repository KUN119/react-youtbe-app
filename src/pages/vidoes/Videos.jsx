import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import VideoCard from '../../components/videoCard/VideoCard';
import MockYoutube from '../../apis/mockYoutube';
import Youtube from '../../apis/youtube';

export default function Videos() {
    const { keyword } = useParams();
    const { isLoading, error, data: videos } = useQuery({
        queryKey: ['videos', keyword],
        queryFn: () => {
            const youtuebe = new MockYoutube();
            return youtuebe.search(keyword)
        }
    })

    return (
        <>
            <div>Videos { keyword ? `🔍${keyword}` : '🔥🔥' }</div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Sometgin is wrong.</p>}
            {videos && <ul>
                {videos.map((video) => (
                    <VideoCard 
                        key={video.id}
                        video={video}
                    />
                ))}
                </ul>}
        </> 
    )
}
