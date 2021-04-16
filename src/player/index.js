import React from 'react'
import ReactPlayer from 'react-player'
import PlayIconUnselected from '../icons/play_circle_black_24dp.svg';
import PlayIconSelected from '../icons/play_circle_filled_black_24dp.svg';
import PauseIconUnselected from '../icons/pause_circle_black_24dp.svg';
import PauseIconSelected from '../icons/pause_circle_filled_black_24dp.svg';
import ForwardIcon from '../icons/fast_forward_black_24dp.svg';
import RewindIcon from '../icons/fast_rewind_black_24dp.svg';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.player = null;
        this.state = {
            playing: false,
            speed: 1,
            played: 0,
            seeking: false,
            duration: 0,
        };

        this.togglePlayState = this.togglePlayState.bind(this);
        this.handleSetPlaybackRate = this.handleSetPlaybackRate.bind(this);
        this.handleSeekChange = this.handleSeekChange.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
        this.handleDuration = this.handleDuration.bind(this);
        this.handleSeekMouseUp = this.handleSeekMouseUp.bind(this);
        this.handleSeekMouseDown = this.handleSeekMouseDown.bind(this);
        this.handleRewind = this.handleRewind.bind(this);
        this.handleForward = this.handleForward.bind(this);
    
      }

      togglePlayState() {
        this.setState(
            {
                playing: !this.state.playing
            }
        )
      }

      handleProgress = state => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
          this.setState(state)
        }
      }

      handleSetPlaybackRate = e => {
        this.setState({ playbackRate: parseFloat(e.target.value) })
      }

      handleSeekMouseDown = e => {
        this.setState({ seeking: true })
      }
    
      handleSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
      }
    
      handleSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
      }

      handleDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })
      }

      handleRewind = e => {
        this.player.seekTo(this.player.getCurrentTime() - 10, 'seconds');
      }

      handleForward = e => {
        this.player.seekTo(this.player.getCurrentTime() + 10, 'seconds');
      }

      secondsToMinutesAndSeconds = (seconds) => {
          let min = Math.floor(seconds / 60);
          let sec = (seconds - min * 60).toFixed(0);
          return (min < 10 ? `0${min}` : min ) + ':' + (sec < 10 ? `0${sec}` : sec )
      }

      ref = player => {
        this.player = player
      }

    render() { return (
            <div className="player">
                <div className="information-wrapper w-screen"> 
                    <div className=" h-screen w-screen flex justify-between align-middle ">
                        <div className="cover-wrapper m-auto">
                            <div className="">
                                <div>
                                    <img className="audiobook-cover" 
                                    src={this.props.book.cover} alt=""/>
                                    <div className="author-info">
                                        <h3>{this.props.book.author}</h3>
                                        <small>{this.props.book.narrator}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chapters-wrapper glassmorphism-effect p-3">
                            <h1>{this.props.book.title}</h1>
                            <hr/>
                            <p className="pt-2">{this.props.book.description}</p>
                            <hr/>
                            <h2>Capitulos</h2>
                            <ul>
                                <li>
                                    <div className="section-name">

                                    Prefacio
                                    </div>
                                    <ul className="chapters">
                                        <li>Nombre 1 <span>23:45</span></li>
                                        <li>Nombre 2 <span>12:23</span></li>
                                    </ul>
                                </li>
                                <li>
                                <div className="section-name">

                                    Parte 1
                                    </div>
                                    <ul className="chapters">
                                        <li>Nombre 1<span>12:23</span></li>
                                        <li>Nombre 2<span>12:23</span></li>
                                        <li>Nombre 3<span>12:23</span></li>
                                        <li>Nombre 4<span>12:23</span></li>
                                        <li>Nombre 5<span>12:23</span></li>
                                    </ul>
                                </li>
                                <li>
                                <div className="section-name">

                                    Parte 2
                                    </div>
                                    <ul className="chapters">
                                        <li>Nombre 1<span>12:23</span></li>
                                        <li>Nombre 2<span>12:23</span></li>
                                        <li>Nombre 3<span>12:23</span></li>
                                        <li>Nombre 4<span>12:23</span></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="legal-info">
                            {this.props.book.meta}
                             </div>
                        </div>
                    </div>
                </div>
                <div className="player-controls w-screen glassmorphism-effect">
                    <div className="left-controls flex-row">        
                        <button onClick={this.handleRewind}><img className="icon" src={ RewindIcon } alt="Rewind" /></button>
                        <button onClick={this.togglePlayState}><img className="icon" src={ this.state.playing ? PauseIconSelected : PlayIconSelected} alt="Play" /></button>
                        <button onClick={this.handleForward}><img className="icon" src={ ForwardIcon } alt="Forward" /></button>
                    </div>
                    <div className="length-controls">
                        <span className='current-time'>{this.secondsToMinutesAndSeconds(this.state.duration * this.state.played)}</span>
                        <input
                        className="seek-bar" 
                        type='range' min={0} max={0.999999} step='any'
                        value={this.state.played}
                        onMouseDown={this.handleSeekMouseDown}
                        onChange={this.handleSeekChange}
                        onMouseUp={this.handleSeekMouseUp}
                        />
                        <span className="elapsed-time">{this.secondsToMinutesAndSeconds(this.state.duration * (1 - this.state.played))}</span>
                    </div>
                    <button onClick={this.handleSetPlaybackRate} value={1}>1x</button>
                    <button onClick={this.handleSetPlaybackRate} value={1.5}>1.5x</button>
                    <button onClick={this.handleSetPlaybackRate} value={2}>2x</button>

                    <ReactPlayer 
                    style={{'display': 'none'}}
                    onProgress={this.handleProgress} 
                    playbackRate={this.state.playbackRate} 
                    ref={this.ref}
                    playing={this.state.playing} 
                    onDuration={this.handleDuration}
                    url={this.props.book.audio}></ReactPlayer>
                </div>
            </div>  
        )
    } 
}

export default Player;
