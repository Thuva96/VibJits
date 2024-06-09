import axios from "axios";
import { useEffect, useState } from "react"
import {AiFillDelete,AiFillEdit,AiFillStar,AiOutlineStar} from "react-icons/ai"
import { useNavigate } from "react-router-dom";


const ProductList = (params) => {
    const {SKU,pname,Psrc,Pprice,id,refresh} = params;
    const [click,setclick]=useState(false);
    const [FavAvailable,setFavAvailble] = useState(false); 
    const [FavId,setFavId] = useState("")

    const to = useNavigate();

    
    const CreateFavourites = ()=>{
        // console.log("Inside Create")
        console.log("Favv value",FavAvailable)
        if(!FavAvailable){
        console.log("Inside Create- no available")
            
            axios.post(import.meta.env.VITE_BACKEND+"/favourite/create",{
                user:import.meta.env.VITE_USER,
                products:JSON.parse(localStorage.getItem("FavItem"))
            }).then((data)=>{setFavAvailble(true)}).catch((er)=>{
                console.error(er);
            })

        }else if(FavAvailable){
        console.log("Inside Update - no avalable fav")

            axios.patch(import.meta.env.VITE_BACKEND+"/favourite/update/"+FavId,{
                products:JSON.parse(localStorage.getItem("FavItem"))
            }).then((data)=>{
                console.log(data);
                setFavAvailble(false)
                
            }).catch((er)=>{
                console.error(er);
            })


        }
    }


    const handleDelete = () =>{
        axios.delete('http://localhost:8000/product/delete/'+id).then(()=>{
            refresh(id);
            console.log("Deletion success");

        }).catch((er)=>{
            console.error("Deletion Error : "+er);
        })

    }

    const handleFav = () =>{
        const FavArr =JSON.parse(localStorage.getItem("FavItem"));
        if(FavArr){
            FavArr.push(id);
            localStorage.setItem("FavItem",JSON.stringify(FavArr));
        }else{
            localStorage.setItem("FavItem",JSON.stringify([id]));
        }

        setclick(true);
        CreateFavourites()

    }


    const handleRemoveFav = () =>{
        const FavArr =JSON.parse(localStorage.getItem("FavItem"));
        const FavArrNew = FavArr.filter((ids)=>{
            if(ids!=id)
                return ids;
        })
        localStorage.setItem("FavItem",JSON.stringify(FavArrNew));
        setclick(false);
        CreateFavourites()
    }
    

    useEffect(()=>{
        console.log("im the effect sp callme use effect")
        axios.get(import.meta.env.VITE_BACKEND+'/favourite/get/'+import.meta.env.VITE_USER).then((data)=>{
            // console.log("Favorites",data);
            if(data.status == 200){
                setFavAvailble(true);
                setFavId(data.data.data._id);
            }
        }).catch((er)=>{
            console.log("sdsd")
            setFavAvailble(false);
        })
    },[click,FavAvailable]);

    



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
        <AiFillDelete
            onClick={handleDelete}
            className=" cursor-pointer"
        size={"2.3rem"} color="#001eb9"/>
        <AiFillEdit 
        onClick={()=>{
            to('/editproduct',{
                state:{
                    _id:id
                }
            })
        }}
        className=" cursor-pointer"
        size={"2.3rem"} color="#001eb9"/>
        {click&&
        <AiFillStar  
            className="  cursor-pointer"size={"2.3rem"} color="#001eb9" 
            onClick={handleRemoveFav}/>
        }
        {!click&&
        <AiOutlineStar className="  cursor-pointer" size={"2.3rem"} color="#001eb9" onClick={handleFav}/>
        }
    </div>
    </div>
</div>
  )
}

export default ProductList