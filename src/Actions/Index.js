import azurehost from '../Api/azurehost';


export const fetchEnrollments = () => { return (dispatch) => {
    azurehost.get('/enrollments').then(response => {
    dispatch({type: 'FETCH_ENROLLMENTS', payload: response.data})
    })
}};

export const fetchCourses = () => { return (dispatch) => {
    azurehost.get('/courses').then(response => {
    dispatch({type: 'FETCH_COURSES', payload: response.data})
    })
}};

export const fetchStudents = () => { return (dispatch) => {
    azurehost.get('/student').then(response => {
    dispatch({type: 'FETCH_STUDENTS', payload: response.data})
    })
}};

export const fetchTeachings = () => {return (dispatch) =>{

    azurehost.get('/teachings').then(response =>{
        dispatch({type: 'FETCH_TEACHINGS', payload: response.data})
    })
}}