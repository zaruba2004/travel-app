import React from "react";


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  };
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let newDate = {date: new Date()};
    newDate.date.setMilliseconds(this.props.time * 60 * 60 * 1000);;
    this.setState(newDate);   
  }  

  render() {
    return (
      `${this.props.city} ${this.state.date.toLocaleTimeString()}`
    );
  }
}

export default Clock;

// import React, {useState, useEffect} from "react";

// export default function Clock() {

//   const [state, setState] = useState({date: new Date()})

//   useEffect(()=>{
//     setInterval(
//       () => setState({date: new Date()}),
//       1000
//     );        
//   }, [])

//   return (
//     <div>
//       <h2>{state.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }