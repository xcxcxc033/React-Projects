import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term: ''};
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onFormSubmitted = this.onFormSubmitted.bind(this);

  }
  onChangeInput(event){

    //this is not the the whole class
    this.setState({ term : event.target.value});
    console.log(this.state.term);
  }
//onChange = {setState(term : this.target.value)}
  onFormSubmitted(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render(){
    return(
      <form onSubmit = {this.onFormSubmitted} className = "input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities."
          className = "form-control"
          value={this.state.term}
          onChange={this.onChangeInput}
        />
        <span className = "input-group-btn">
          <button type="submit" className = "btn btn-sedoncary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
