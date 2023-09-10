import { Space, Table, Tag } from 'antd';
import { Col, Row } from "antd";
import React, { useEffect, useState } from 'react';  
import CustumButton from '../../CustomLayout/CustumButton';
import {userservice} from '../../Services/UserServices'; 


function Users() {
  
const[Users,setUsers ] = useState([]) ;

const getUsers = async ()=>{

  const { ok,data} = await userservice.getUsers();

   if (ok){
     setUsers(data?.results);
  

     
    }
  }
    
    useEffect(() => {
      function load (){
        getUsers()
      }
      load()
    
      return () => {
        load()
        
      }
    }, [])
    
    const columns = [
      {
        title: "Id",
        dataIndex: " Id",
        key: "Id",
      },
      {
        title: "User Name",
        dataIndex: " username",
        key: "name",
      },
      {
        title: "First Name",
        dataIndex :"user_firstname",
        key: "user_firstname",
      },
      {
        title: "Last Name",
        dataIndex: "user_lastname",
        key: "user_lastname",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
    {
    title: 'image',
    key: 'image',
   },
    
    {
    title: 'Edit',
    key: 'Edit'
    ,
  
    },
    {
    title :'Delete',
    key: 'delete',
    render: (record,index)=>{
      return <CustumButton></CustumButton>
    }


  }
 ];

return(
  
  
 <Table columns={columns} dataSource= {Users}/> 
)
};



export default Users;