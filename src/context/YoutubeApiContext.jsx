import React, { createContext, useContext } from 'react'
import Youtube from '../apis/youtube'; 
import YoutubeClient from '../apis/youtubeClient';
import MockYoutubeClient from '../apis/mockYoutubeClient';

export const YoutubeApiContext = createContext();

const client = new MockYoutubeClient(); // Youtube();
const youtube = new Youtube(client);  

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
       {children}
    </YoutubeApiContext.Provider>
  )
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}