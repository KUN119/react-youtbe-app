import React from 'react'
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../../util/date';

export default function VideoCard({ video }) {
    console.log(video);
    const { id } = video;
    const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
    const navigate = useNavigate();

    const handleClick = (e) => {
        const value = e.target.getAttribute('value')
        console.log(value);
        navigate(`/videos/watch/${value}`)
    }
    
    return (
        <>
            <li onClick={handleClick} value={id}>
                <img className='w-full' src={thumbnails.medium.url} alt="title" />
                <div>
                    <p className='font-semibold my-2 line-clamp-2'>{title}</p>
                    <p className='text-sm opacity-80'>{channelTitle}</p>
                    <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
                </div>
            </li>
        </>
    )
}