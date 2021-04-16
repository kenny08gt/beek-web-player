import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

class Chapter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // this.togglePlayState = this.togglePlayState.bind(this);
  }

  render() {
    return (
      <div className="flex my-2 ">
        <div
          className="icon contents"
          style={{
            "font-size": "36px",
            color: this.props.listened ? "#26252575" : "#262525",
          }}
        >
          <PlayCircleFilledIcon fontSize="inherit" color="inherit" />
        </div>
        <div
          className="name-time ml-2"
          style={{
            color: this.props.listened ? "#26252575" : "#262525",
          }}
        >
          <div>Nombre {(Math.random() * 10).toFixed(0)}</div>
          <div style={{ "margin-top": "-5px" }}>
            <span>
              {(Math.random() * 60).toFixed(0)}:
              {(Math.random() * 60).toFixed(0)}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Chapter;
