import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){

  switch (action.type) {
    case FETCH_WEATHER:
      console.log("recieved: ", [action.payload.data,...state]);
      return [action.payload.data,...state];
  }

  return state;
}
