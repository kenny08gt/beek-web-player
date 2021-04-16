import React, { Fragment } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ProgressRing from "../components/progressRing";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DoneIcon from "@material-ui/icons/Done";

class Chapter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // this.togglePlayState = this.togglePlayState.bind(this);
  }

  secondsToMinutesAndSeconds = (seconds) => {
    let min = Math.floor(seconds / 60);
    let sec = (seconds - min * 60).toFixed(0);
    return (min < 10 ? `0${min}` : min) + ":" + (sec < 10 ? `0${sec}` : sec);
  };

  render() {
    return (
      <div className="flex my-2 ">
        <div
          className="icon contents relative"
          style={{
            "font-size": "36px",
            color: this.props.listened ? "#26252575" : "#262525",
          }}
        >
          {this.props.progress === 100 ? (
            <DoneIcon fontSize="inherit" color="disabled" />
          ) : (
            <Fragment>
              <ProgressRing
                radius={20}
                stroke={2}
                progress={this.props.progress}
                color={"#fff "}
              />
              <PlayCircleFilledIcon fontSize="inherit" color="inherit" />
            </Fragment>
          )}
        </div>
        <div
          className="name-time ml-2"
          style={{
            color: this.props.listened ? "#26252575" : "#262525",
          }}
        >
          <div>Nombre {(Math.random() * 10).toFixed(0)}</div>
          <div style={{ "margin-top": "-5px" }}>
            <span>{this.secondsToMinutesAndSeconds(Math.random() * 3400)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Chapter;
