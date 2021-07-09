import React , { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { setBookingTimeAndHall } from '../../redux/actions';
import { connect } from "react-redux";
import './showTiming.css';


class ShowTiming extends Component {
  constructor() {
    super();
    this.state = {
      "showTimingAndHallData": [
        {
          "cinemaHall": "Sunway Mall GSC Cinemas",
          "showTimings": ["10:00AM", "11:45AM", "02:45 PM", "05:30 PM", "9:55 PM"],
        },
        {
          "cinemaHall"  : "Setia Alam SA TGV Cinemas",
          "showTimings": ["9:00AM", "03:30 PM", "05:00 PM", "06:45 PM", "9:55 PM"],
        },
        {
          "cinemaHall": "Puchong IOI GSC Cinemas",
          "showTimings": ["11:00AM", "01:30 PM", "11:30 PM", "06:00 PM", "10:00 PM"],
        },
        {
          "cinemaHall": "Putrajaya IOI GSC Cinemas",
          "showTimings": ["8:00AM", "011:30 AM", "11:30 PM", "05:30 PM", "07:15 PM"],
        }
      ],
     
    }
    this.onClickTiming = this.onClickTiming.bind(this);
  }

  onClickTiming = (e) =>{
    this.setState({
      timeAndHall: e.target.value
      });
      this.props.setBookingTimeAndHall(e.target.value);
  }

  render() {
   
    return (
      <div className="showtiming-class-container">
         <h1>SELECT CINEMA & PREFERRED SHOWING TIME : 
        {(this.state.timeAndHall)}</h1><br></br>

           <FormControl className="showtiming-class-form" component="fieldset">
            <RadioGroup row aria-label="position" name="position" defaultValue="left">
        { this.state.showTimingAndHallData.map((record, index) => {

    return (
          <div key={index}>{record.cinemaHall}  :
      
            {record.showTimings.map((timing, index2) => {

    return (
              <FormControlLabel key={index2}
              value={`${record.cinemaHall} ${timing}`}
              control={<Radio color="primary" onChange={this.onClickTiming} />}
              label={timing}
              labelPlacement="left"
              />  )
          })} </div>
       )

      })}
        </RadioGroup>
      </FormControl>
      </div>)
     
  }
}

const mapDispatchToProps = {
  setBookingTimeAndHall: setBookingTimeAndHall,
}

ShowTiming = connect(null, mapDispatchToProps)(ShowTiming);
export default ShowTiming;
