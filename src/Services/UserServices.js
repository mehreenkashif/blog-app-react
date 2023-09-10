import { ApiService } from "./api.service"
 
const userservicesurl={
    login:"/login",
    register:"/register",
    getuser:"/users"
}
const login = (data)=>{
 const resp = ApiService.post(userservicesurl.login,data)
//  console.log(resp);
//  debugger
 return resp;
}
const register =(data)=>{
    const resp=ApiService.post(userservicesurl.register,data)
    return resp;
}
const getUsers =async()=>{
    const resp = await ApiService.get(userservicesurl.getuser)
    console.log(resp);
    return resp;

}
// console.log(getuser)
export const userservice ={
    login,
    register,
    getUsers,
 }
//  userservice;
 