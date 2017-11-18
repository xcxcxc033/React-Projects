import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook1} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.book.map((book) => {
      return (
        <li
          key={book.title}
          onClick = {() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render(){
    //console.log(this.props.asdf); //=>123
    return (
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) { //is glue btw react and redux
  //what ever it returned will show up as props
  //inside of BookList
  return {
    book : state.books
  };
}

//Anything returned from this function will be end up as props on the bookList Container
function mapDispatchToProps(dispatch) {

  //whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook : selectBook1}, dispatch)
}

//promote BookList from a Component to a container- it
//need to know new dispatch method, selectBook. Make it
//valiable as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
