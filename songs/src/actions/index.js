// Action Creator
export const selectSong = (song) => {
    // Return an action
    // Payload is optional
    // Type is required
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
