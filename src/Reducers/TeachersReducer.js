export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_TEACHERS' : return action.payload;
        default: return state; 
    }
 };