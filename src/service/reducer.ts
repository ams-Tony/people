import actiontype from './actiontype';
const initilalState = {
  allData: [],
  activeUser: null
}

export const reducer = (state= initilalState, action) => {
  switch(action.type) {
    case actiontype.ALL_DATA_SUCCESS:
      return ({
        ...state,
        allData:action.payload
      })
    case actiontype.SET_ACTIVE_USER:
      return ({
        ...state,
        activeUser: action.payload
      })
    default:
      return state;
  }
}
export default reducer;