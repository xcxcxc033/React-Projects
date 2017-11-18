import React, {Component} from 'react';

// const SearchBar = () => {
//   return <input />;
// }
//
// export default SearchBar;

export class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {
      term : ""
    };
  }
  onInputChange(term){
    //console.log(event);
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render(){
    return (
      <div className = "search-bar" >
        <input
          value = {this.state.term }
          onChange = {event1 => this.onInputChange(event1.target.value)}/>

      </div>
    );
  }
}
