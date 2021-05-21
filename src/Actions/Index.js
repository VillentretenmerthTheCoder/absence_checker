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