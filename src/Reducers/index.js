import { combineReducers } from 'redux';
import EnrollmentReducer from './EnrollmentReducer';
import CoursesReducer from './CoursesReducer';

export default combineReducers({
    enrollments: EnrollmentReducer,
    courses: CoursesReducer
});