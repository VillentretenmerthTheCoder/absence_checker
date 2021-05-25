import { combineReducers } from 'redux';
import EnrollmentReducer from './EnrollmentReducer';
import CoursesReducer from './CoursesReducer';
import StudentsReducer from './StudentsReducer';
import TeachersReducer from './TeachersReducer';

export default combineReducers({
    enrollments: EnrollmentReducer,
    courses: CoursesReducer,
    students: StudentsReducer,
    teachers: TeachersReducer
});