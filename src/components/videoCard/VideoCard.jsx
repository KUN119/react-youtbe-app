import React from 'react'
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../../util/date';

export default function VideoCard({ video, type }) {
    const { id } = video;
    const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/videos/watch/${id}`, { state: { video } })
    }

    const isList = type === 'list';
    
    return (
        <li 
            onClick={handleClick}
            className={isList ? 'flex gap-1 m-2' : ''}
        >
            <img 
                className={isList ? 'w-60 mr-2' : 'w-full'} 
                src={thumbnails.medium.url} 
                alt="title" />
            <div>
                <p className='font-semibold my-2 line-clamp-2'>{title}</p>
                <p className='text-sm opacity-80'>{channelTitle}</p>
                <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
            </div>
        </li>
    )
}