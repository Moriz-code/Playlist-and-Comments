import React from 'react';

export default function PlaylistList(props) {

    const getEmbdedUrl = (url) => {
        let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        let match = url.match(regExp)
        if (match && match[2].length == 11) {
            return 'https://www.youtube.com/embed/' + match[2] + '/v/' + match[2] + '?playsinline=1&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&widgetid=2&playlist=' + match[2] + '>'
        }
        else {
            return ''
        }

    }

    return (<React.Fragment>

        {props.videolist ? props.videolist.map(video => {

            console.log(video.id.videoId);
            let videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
            let videoSrc = getEmbdedUrl(videoUrl);
            console.log(videoSrc);

            return <iframe id={video.id.videoId} src={videoSrc}></iframe>
        })
            : console.log('nope')}

    </React.Fragment>)
}

// curl \
//   'https://www.googleapis.com/youtube/v3/search?part=snippet&forDeveloper=true&maxResults=25&q=surfing&videoEmbeddable=true&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed
