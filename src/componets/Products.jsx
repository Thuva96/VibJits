import { useState } from "react"
import {AiFillDelete,AiFillEdit,AiFillStar,AiOutlineStar} from "react-icons/ai"


const ProductList = (params) => {
    const {SKU,pname,Psrc,Pprice} = params;

    const [click,setclick]=useState(false);



  return (
    <div className=" w-full flex items-center text-[#162427] h-32  border-b border-[#969191]">
    <div className=" bg-white w-full h-1/2 grid grid-cols-7">
    <div className="  flex items-center col-span-1 opacity-70">{SKU}</div>
    <div className="  flex items-center col-span-1">
        <div className=" h-16 w-16  justify-center items-center flex rounded-md">
            <img src={Psrc} className=" rounded-md w-full h-full object-cover aspect-square"/>
        </div>

    </div>
    <div className="  flex items-center col-span-2">{pname}</div>
    <div className="  flex items-center col-span-1">{Pprice}</div>
    <div className="  flex justify-end items-center col-span-2 gap-x-4">
        <AiFillDelete size={"2.3rem"} color="#001eb9"/>
        <AiFillEdit size={"2.3rem"} color="#001eb9"/>
        {click&&
        <AiFillStar  className="  cursor-pointer"size={"2.3rem"} color="#001eb9" onClick={()=>{
            setclick(false);
        }}/>

        }
        {!click&&
        <AiOutlineStar className="  cursor-pointer" size={"2.3rem"} color="#001eb9" onClick={()=>{
            setclick(true);
        }}/>

        }
    </div>
    </div>
</div>
  )
}

export default ProductList