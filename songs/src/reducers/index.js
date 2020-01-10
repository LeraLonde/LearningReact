import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'All Stars', duration: '4:15' },
        { title: 'I want it that way', duration: '3:05' },
        { title: 'Marcarena', duration: '4:25' },
        { title: 'ASD!!', duration: '4:25' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});