import Axios from 'axios';

export default {
    SearchVideo
};


// import fetch from 'node-fetch';
// global.fetch = fetch;

async function SearchVideo(searchKey) {
    // console.log('SearchVideo(searchKey)', searchKey);

    const ACCESS_KEY = 'AIzaSyBZVU3-oAazJ_YLkT8bYPC9Nd1MHaiEkzo';
    let results = await Axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchKey}&key=${ACCESS_KEY}`);
    return results.data.items

}

