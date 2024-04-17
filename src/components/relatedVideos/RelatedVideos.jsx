import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import VideoCard from '../videoCard/VideoCard';

export default function RelatedVideos({ channelId }) {
  const { youtube } = useYoutubeApi();
  const { error, isLoading, data: videos } = useQuery({
      queryKey: ['realted', channelId],
      queryFn: () => youtube.relatedVideos(channelId),
      staleTime: 1000 * 6 * 5
  })

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Sometgin is wrong.</p>}
      {videos && (
        <ul className=''> 
          {videos.map((video) => (
            <VideoCard
              key={video.channelId}
              video={video}
              type='list'
            />
          ))}
        </ul>
      )}
    </>
  )
}
