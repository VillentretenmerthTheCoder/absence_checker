import { combineReducers } from 'redux';
import EnrollmentReducer from './EnrollmentReducer';
import CoursesReducer from './CoursesReducer';
import StudentsReducer from './StudentsReducer';
import TeachersReducer from './TeachersReducer';
import StudentReducer from './StudentReducer';
import CourseReducer from './CourseReducer'
import TeacherReducer from './TeacherReducer';

export default combineReducers({
    enrollments: EnrollmentReducer,
    courses: CoursesReducer,
    students: StudentsReducer,
    teachers: TeachersReducer,
    teacher:TeacherReducer,
    student: StudentReducer,
    course: CourseReducer
});