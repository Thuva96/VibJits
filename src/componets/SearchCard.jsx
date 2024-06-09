import {MdArrowForwardIos} from "react-icons/md"
const SearchCard = (params) => {
    const {Sku,src,description,name} = params
  return (
    <div className=" w-full border border-[#001eb9] rounded-lg h-32 flex p-1">
        <div className=" w-32 flex justify-center items-center">
                <img src={src} className=" rounded-md w-full h-full object-cover aspect-auto"/>
        </div>
        <div className="w-full flex flex-col justify-center items-start px-8">
            <section className="text-xl text-[#001eb9]">{Sku}</section>
            <section className="text-xl font-bold text-[#162427]">{name}</section>
            <section className=" text-lg line-clamp-1 text-[#162427] opacity-60">{description}</section>
        </div>
        <div className=" flex justify-center items-center px-16 cursor-pointer hover:bg-[#001eb9] hover:rounded-md hover:bg-opacity-20 ">
           <MdArrowForwardIos color="#001eb9" size={"2rem"}/>
        </div>
    </div>
  )
}

export default SearchCard