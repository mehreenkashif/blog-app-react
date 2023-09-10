import { ApiService } from "./api.service"

 const userInfo ={
    USERNAME : "username",
    TOKEN :"token"
 }
const Login = (url,data) => {
 const  response = ApiService.post(url,data);
 return response;
}



const isTokenExist = ()=>{
     const Token = localStorage.getItem (userInfo.TOKEN);
   //   console.log(Token)
     if (Token){
        return Token;
        
     } 

}
 
const getUsername =()=>{
     const username =localStorage.getItem(userInfo.USERNAME)
     if(username){
        return username;
     }
}
 
const  AuthService = {
    Login ,
    getUsername, 
    isTokenExist 
}

export default AuthService;