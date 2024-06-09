import { Avatar } from "@mui/material";
import { FiChevronRight } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";

const Header = (params) => {
    const {pagename,subtitle} = params;
  return (
    <div className=" w-full flex flex-col">
        <div className=" h-16  w-full flex justify-end gap-3">
            <div className=" h-full flex justify-center items-center px-5 text-md font-semibold ">
                <p>ADMIN</p>
                <MdArrowDropDown size={"1.5em"} className=" cursor-pointer"/>
            </div>
            <div className=" h-full flex justify-center items-center ">
                <Avatar className=" cursor-pointer" alt="imageofUser" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s"/>
            </div>
        </div>
        <div className=" flex w-full font-extrabold text-2xl gap-x-2 items-center">
         <p>{pagename}</p> 
         {
            subtitle&&
            <>

            
            <FiChevronRight color="#001eb9"/>
            <p className=" font-bold text-xl text-[#001eb9]">{subtitle}</p> 
            </>
         }

        </div>
    </div>
  )
}

export default Header
