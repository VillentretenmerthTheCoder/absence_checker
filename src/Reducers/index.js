import { combineReducers } from 'redux';
import EnrollmentReducer from './EnrollmentReducer';
import CoursesReducer from './CoursesReducer';
import StudentsReducer from './StudentsReducer';

export default combineReducers({
    enrollments: EnrollmentReducer,
    courses: CoursesReducer,
    students: StudentsReducer
});