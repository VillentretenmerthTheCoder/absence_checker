export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_TEACHER' : return action.payload;
        default: return state; 
    }
 };