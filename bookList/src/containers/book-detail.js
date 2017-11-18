import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class BookDetail extends Component {
  render(){

    if(!this.props.book){ //if donest exist yet
      return <div>Select a book to get started.</div>
    }

    return (
      <div className = 'book-detail'>
        <h3>Book Detail for: </h3>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps (state){
  return ({
    book: state.activeBook
  })
}

export default connect(mapStateToProps)(BookDetail);
