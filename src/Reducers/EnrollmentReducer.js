export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_ENROLLMENTS' : return action.payload;
        default: return state; 
    }
 };