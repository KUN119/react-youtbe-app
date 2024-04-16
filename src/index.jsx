import React from 'react';
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoDetail from './pages/videoDetail/VideoDetail';
import App from './App';
import NotFound from './pages/NotFound';
import Videos from './pages/vidoes/Videos';
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        // <Outlet />
        children: [
            {index: true, element: <Videos />},
            {path: 'videos', element: <Videos /> },
            {path: 'videos/:keyword', element: <Videos /> },
            {path: 'videos/watch/:videoId', element: <VideoDetail />}
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
