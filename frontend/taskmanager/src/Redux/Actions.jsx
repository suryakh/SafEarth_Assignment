import  { LOGIN,LOGOUT,PROJECTLIST,PROJ_REQ,CURR_TASK,ALL_TASKS } from './Action_types'
import axios from 'axios'

const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}
const logout = () => {
    return {
        type: LOGOUT
    }
}

const projectList =(data)=>{
    return {
        type:PROJECTLIST,
        payload:data
    }
}
const projectReqSent=()=>{
    return{
        type:PROJ_REQ
    }
}
const currentTask=(data)=>{
    return{
        type:CURR_TASK,
        payload:data
    }
}
const allTasks = (data)=>{
    return {
        type:ALL_TASKS,
        payload:data
    }
}

const loginUser = (data) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/auth/login',
            data: data
        })
            .then(res => {
                if (res.data.token) {
                    dispatch(login(res.data))
                }
                else {
                    alert("invalid credentials")
                }
            }
            )
    };
}
const singupUser = (data) => {
    return dispatch => {
        axios({
            method: "POST",
            url: "http://localhost:5000/auth/signup",
            data: data,
        })
            .then((res) => {
                alert("user suceessfully registered")
            })
            .catch((res) => {
                console.log("error")
            })
    }
}

const getProjects = (token)=>{
    return dispatch=>{
        dispatch(projectReqSent())
        axios({
            method:'GET',
            url:"http://localhost:5000/projects/list",
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then((res)=>dispatch(projectList(res.data)))
        .catch((err)=>console.log(err))
    }

}

const addTask = (data,token)=>{
    return dispatch=>{
        axios({
            method:'POST',
            url:"http://localhost:5000/task/add",
            headers: { 'Authorization': `Bearer ${token}` },
            data:data
        })
        .then((res)=>alert("successfully added"))
        .catch((err)=>console.log(err))
    }
}
const getCurrTask = (token)=>{
    return dispatch=>{
        dispatch(projectReqSent())
        axios({
            method:'GET',
            url:"http://localhost:5000/task/add",
            headers: { 'Authorization': `Bearer ${token}` },
        })
        .then((res)=>dispatch(currentTask(res.data)))
        .catch((err)=>console.log(err))
    }
}
const endTask = (id,token)=>{
    return dispatch=>{
        axios({
            method:'PATCH',
            url:"http://localhost:5000/task/add",
            headers: { 'Authorization': `Bearer ${token}` },
            data:{
                'id':id
            }
        })
        .then((res)=>alert("successfully ended"))
        .catch((err)=>console.log(err))
    }
}
const getAllTasks = (token)=>{
    return dispatch=>{
        dispatch(projectReqSent())
        axios({
            method:'GET',
            url:"http://localhost:5000/task/alllist",
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then((res)=>dispatch(allTasks(res.data)))
        .catch((err)=>console.log(err))
    }

}

export {loginUser,singupUser,logout,getProjects,addTask,getCurrTask,endTask,getAllTasks}