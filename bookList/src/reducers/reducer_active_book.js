//state agument is not application state, only state
//this reducer is responsiable for
export default function(state = null, action){ //if state is undefined, set it to null
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.playload;

  }
  return state;
}
