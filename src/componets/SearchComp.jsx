
import {FiSearch} from "react-icons/fi"
import {BsStarFill} from "react-icons/bs"
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchComp = (params) => {
  const {changed} = params;
  const [changeValue,setChangeValue] = useState("");
  const [products,setProducts] = useState(null);
  const to=useNavigate();
 

  useEffect(()=>{
    axios.get("http://localhost:8000/product/getAll").then((value)=>{
      if(value.status == 200)
        {
          setProducts(value.data.data); 
          console.log(value.data.data)
        }

    }).catch((e)=>{
      console.error(e);
    })
    

  },[])
  return (
    <>
<div className=" w-full justify-between flex " >
    <div className=" bg-[#f7f7f7] w-1/2 rounded-full flex justify-between p-3 ">
        <span className=" w-3/4 flex items-center">
        <input type="text" className=" w-full bg-transparent px-6 border clear-none" onChange={(e)=>{
          setChangeValue(e.target.value);

        }} placeholder=" Search for products"/>
        </span>  
        <section 
        onClick={()=>{

          to('/search',{
            state:{
              value:changeValue
            }
          })
          changed(changeValue);

        }}
        className="cursor-pointer w-1/4 flex gap-3 py-2 items-center text-xl font-bold text-white rounded-full  justify-center   bg-[#001eb9]">
          <FiSearch color="#ffffff"/>
          <span> Search</span>
        </section>    
    </div>
    <div className=" w-1/2 flex justify-end gap-3 py-1  items-center ">
        
            <section className=" w-1/4 flex gap-3 py-2 items-center text-xl font-bold text-white rounded-md  justify-center   bg-[#001eb9]">
                <span 
                className=" cursor-pointer"
                onClick={()=>{
                  to('/addproduct')
                }}> New Product</span>
            </section>
            <section 
             onClick={()=>{
              to('/favourite')
            }}
            className=" cursor-pointer p-4 flex gap-3 py-3 items-center text-xl font-bold text-white rounded-md  justify-center   border border-[#001eb9]">
                <BsStarFill color="#001eb9"/> 
            </section>
       

    </div>
</div>
    
    </>
  )
}

export default SearchComp