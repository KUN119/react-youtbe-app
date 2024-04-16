import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import VideoCard from '../../components/videoCard/VideoCard';
import { useYoutubeApi } from '../../context/YoutubeApiContext';

export default function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();
    const { isLoading, error, data: videos } = useQuery({
        queryKey: ['videos', keyword],
        queryFn: () => youtube.search(keyword)
    })

    return (
        <>
            <div>Videos { keyword ? `🔍${keyword}` : '🔥🔥' }</div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Sometgin is wrong.</p>}
            {videos && <ul className='grid grid-cols-1 sm:gird-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
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
