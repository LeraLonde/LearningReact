import React from 'react';

const renderVideoDetail = (video) => {
    if (video != null) {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe title="Video Player" src={videoSrc} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div>No video selected.</div>
        );
    }
}

const VideoDetail = ({ video }) => {
    return renderVideoDetail(video);
}

export default VideoDetail;