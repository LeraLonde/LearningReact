import React from 'react';
import { connect } from 'react-redux';

const renderComponent = (song) => {
    if (song != null) {
        return (
            <div>
                <h3>Details for:</h3>
                <p>
                    Selected Song : {song.title}
                    <br></br>
                    Duration: {song.duration}
                </p>
            </div >
        );
    }
    return (
        <div>
            Selected Song :
        </div>
    );
}


const SongDetail = (props) => {
    return renderComponent(props.selectedSong);
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);