import React from "react";
import './THEOplayerWrapper.css';

class Player extends React.Component {
    _player = null;
    _el = React.createRef();

    componentDidMount() {
        // props like the source, or the sourcedesciption as a whole can be passed through
        // the can then be used to be called on the player itself
        const { source, onPlay } = this.props;

        if (this._el.current) {
            this._player = new window.THEOplayer.Player(this._el.current, {
                libraryLocation: "https://cdn.myth.theoplayer.com/d3358365-f842-4eab-bc16-6d271857bbd6",
                license: "sZP7IYe6T6P60u5cIQ0r06kKIQC_FSat3Da-CS0r3ZziIlIe3uAl0DBr0lC6FOPlUY3zWokgbgjNIOf9fKfk3oCz0lhrFDBi0oB-3QX636k60lCzFSbz3oCzIKBcCS410OfVfK4_bQgZCYxNWoryIQXzImf90SCL3Lht3Sfi0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3l0Z0Lfk0ufL0u5kFOPeWok1dDrLYtA1Ioh6TgV6CYPldQjpFGAZCDUiWQXrFK3qWmfVfKcqCoXVdQjLUOfVfGAVCYggb6ribKXGbQc1smrlWoz6FOPibKXGbQc1smrlWoz6FOPzIY3zFGAZCDUiWQXrFK3qWmfVfGxEIDjiWQXrIYfpCoj-fgzVfKxqWDXNWG3ybojkbK3gflNWfKXZCo1qW6ribKXGbQc1smrlWoz6FOPVWo31WQ1qbta6FOPibKXGbQc1smrlWoz6FOPzdQ4qbQc1sD4ZFK3qWmPUFOPLIQ-LflNWfK1zWDikfgzVfG3gWKxydDkibK4LbogqW6f9UwPkIYz",
           
                pip: {
                    "visibility": 0.6,
                    nativePictureInPicture: true,
                    retainPresentationModeOnSourceChange: true, 
                }
            });

            // this._player.source = source;
            {console.log("player working",source)}
            this._player.source = {
                sources: [{
                    "src": `${source}`,
                    // "type": "application/x-mpegurl",
                    "lowLatency": false
                }]
    
            };
            this._player.addEventListener('play', onPlay)
        }
    }

    componentWillUnmount() {
      if (this._player) {
        this._player.destroy();
      }
    }

    render() {
        return ( <
            div
            className = { "theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer" }
            // The ref prop here is key it returns the actual dom element and not the virtual react dom elements
            // Which is need by the player
            ref = { this._el }
            />
        );
    }
}

export default Player;
