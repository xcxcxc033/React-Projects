import React, {Component} from 'react';
import { connect } from 'react-redux';
//import {Sparklines, SparklinesLine, SparklinesBar} from 'react-sparklines';
import { Sparklines, SparklinesLine } from 'react-sparklines';

/**
function add(sum1) {
var sum = 0;
sum += sum1;

    return function temp(y) {
        if (typeof y !== 'undefined') {
            //x = x + y;
            sum = sum + y;
            return temp;
        } else {
            return sum;
        }
    };
}
*/
function add(x) {
  var sum = x;
  var tmp = function (y) {
    //console.log("y: " + y);
    sum = sum + y;
    //console.log("inner: " + tmp);
    return tmp;
  };
  // console.log("tmp first",tmp.toString);
  tmp.toString = function(){
    // console.log(sum);
    return sum;
  };
  // console.log("tmp: ",tmp);
  // console.log("tmpstring: ",tmp.toString);
  return tmp;

}

class WeatherList extends Component{

  constructor(props){
    super(props);
    //this.getTemp = this.getTemp.bind(this);
  };

  renderWeather(cityData){

    console.log("city data: " + cityData);
    //const temps = cityData.list.map(list => list.main.temp);
    const temps = cityData.list.map(weather => weather.main.temp);// weather => {


    console.log("temp: ", temps);
    return(
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          // <Sparklines height={120} width={180} data={temps}>
          //   <SparklinesLine />
          // </Sparklines>
          <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
          </Sparklines>
        </td>
      </tr>
    );
  };

  render(){
    return (
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidty</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return {
    weather:  state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);
