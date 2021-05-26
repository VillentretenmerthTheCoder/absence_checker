import azurehost from '../Api/azurehost';

//GETS

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

export const fetchStudent = (id) =>{return (dispatch) =>{
    azurehost.get('/student/'+id).then(response =>{
        dispatch({type:'FETCH_STUDENT',payload:response.data})
    })
}};

export const fetchTeachings = () => {return (dispatch) =>{

    azurehost.get('/teachings').then(response =>{
        dispatch({type: 'FETCH_TEACHINGS', payload: response.data})
    })
}};

export const fetchTeachers = () => {return (dispatch) =>{

    azurehost.get('/teachers').then(response =>{
        dispatch({type: 'FETCH_TEACHERS', payload: response.data})
    })
}};

// POSTS

export const updateStudent = (data,id) =>{
    return azurehost.put('/student/'+id,data).then(response =>{
        console.log(response);
    })
};

export const postStudent = (data) =>{
    return azurehost.post('/student',data).then(response =>{
        console.log(response);
    })
};

export const postCourse = (data) =>{
    return azurehost.post('/courses',data).then(response =>{
        console.log(response);
    })
};

export const postTeachers = (data) =>{
    return azurehost.post('/teachers',data).then(response =>{
        console.log(response);
    })
};