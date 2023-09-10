import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { CategoryService } from '../../Services/CategariesService';
// import CustumButton from '../../CustomLayout/CustumButton';
import CustumButton from '../../CustomLayout/CustumButton';
import { UtilService } from '../../Services/util.service';

function Categaries (){
const [categories,setCategories] =useState([]);

const getCategaries =  async()=>{
     
     const { ok, data } =  await CategoryService.getCategaries()
if (ok){
  setCategories(data?.results)
  //  console.log(data.results)

  
  }

}



useEffect(() => {
  function load (){
    getCategaries()
  }
  load()

  return () => {
    
  }
}, [])

// alert('c')

const columns = [
  {
    title: "Category Name",
    dataIndex: "cat_title",
    key: "cat_title",
  },
   {
    title: "Created At",
    key: "created_at",
    render: (text, record, index) => {
      return UtilService.convertDateToOurFormat(record?.created_at);
    },
  },
  {
     title: "Edit",
     key: "edit",
  //   render: (text, record, index) => {
  //     // return <CustomButton type="ghost ">Edit</CustomButton>;
  //   },
   },
   {
     title: 'Delete',
     key: 'delete',
    render: (record, index) => {
      return <CustumButton ></CustumButton>;
    }
   },
  //  {
  //   title :'Delete',
  //   key: 'delete',
  //   render: (record,index)=>{
  //     return <CustumButton></CustumButton>
  //   }


  // }
];


return(
  <>
  <Table columns={columns} dataSource={categories} />;
  </>
)

 

}

export default Categaries;