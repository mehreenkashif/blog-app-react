import {ApiService }from "./api.service"


 const categoriesUrl ={
  categoriesUrl : "/categories",

 }
  const getCategaries =async()=>{
    const resp = await ApiService.get(categoriesUrl.categoriesUrl)
    console.log  (resp)
    return resp;
  }
    export const CategoryService = {
      getCategaries,

    }