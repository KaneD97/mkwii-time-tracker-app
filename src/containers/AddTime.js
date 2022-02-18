import React, { useEffect } from "react";
import TrackComponent from "./TrackComponent";
import data from "../data/tracks.json";
import { useDispatch } from "react-redux";
import { setTracks } from "../redux/actions/track-actions";
import { Dropdown } from "semantic-ui-react";

class AddTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  get stateOptions() {
    return [{ key: "Lol", value: "hehe", text: "Mushroom" }];
  }

  handleChange = (event) => this.setState({ value: event.target.value });
  handleSubmit = (event) => {
    console.log("Submitted time" + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Add Time</h1>
        <form onSubmit={this.handleSubmit}>
          <Dropdown
            placeholder="State"
            search
            selection
            options={this.stateOptions}
          />
          <div className="ui action input">
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter time in format MM:SS:mmm"
            />
            <button className="ui button" type="submit">
              Save time
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTime;
