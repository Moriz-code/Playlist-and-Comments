import React, { useEffect, useState } from 'react';
import YoutubeService from '../services/YoutubeService';
import PlaylistList from '../cmp/playlist/PlaylistList';

const PlaylistPage = () => {
    const [videolist, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        console.log('on load');
    }, [])


    const onSearch = async () => {
        const videos = await YoutubeService.SearchVideo(searchTerm)
        setVideos(videos)
    }

    // useEffect(() => {
    //     console.log('videolist', videolist);
    // }, [videolist])





    return (
        <div className="playlist-container">
            <h1>Playlist</h1>
            <input onChange={e => setSearchTerm(e.target.value)} type="text" />
            <button onClick={onSearch}>Search</button>
            <PlaylistList videolist={videolist} />
        </div>
    )
}

export default (PlaylistPage);