import { Avatar } from "@mui/material"
import { MdArrowDropDown } from "react-icons/md";

const Header = (params) => {
    const {pagename} = params;
  return (
    <div className=" w-full flex flex-col">
        <div className=" h-16  w-full flex justify-end gap-3">
            <div className=" h-full flex justify-center items-center px-5 text-md font-semibold ">
                <p>ADMIN</p>
                <MdArrowDropDown size={"1.5em"} className=" cursor-pointer"/>
            </div>
            <div className=" h-full flex justify-center items-center ">
                <Avatar className=" cursor-pointer" alt="imageofUser" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOKMwJV8RHldEpP0R4VVxvlUPNxK-b38X5_qVOJkO_bc3YDUDazRB1swFDQ&s"/>
            </div>
        </div>
        <div className=" flex w-full font-extrabold text-2xl">
         <p>{pagename}</p>
        </div>
    </div>
  )
}

export default Header