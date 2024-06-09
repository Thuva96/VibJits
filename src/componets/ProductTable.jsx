import { useEffect, useState } from "react"
import { ListElement } from "."
import axios from "axios"


const ProductTable = (params) => {


  const {tag} = params;

  const [products,setProducts] = useState(null);
  const [reFresh,setRefresh] = useState(1);


  if(tag == "main")
    {
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
        
    
      },[reFresh])
      
  
    }
    else{
      useEffect(()=>{
        axios.get("http://localhost:8000/favourite/getAll").then((value)=>{
          if(value.status == 200)
            {
              const  _list = value.data.data;
              const productRead = _list.filter((fav)=>(fav.user._id == import.meta.env.VITE_USER)&&fav)
              setProducts(productRead[0].products); 
              console.log(products)
            }
    
        }).catch((e)=>{
          console.error(e);
        })
        
    
      },[])
    }





  return (
    <div className=" w-full h-full pb-28">
        {/* headers */}
        <div className="w-full text-xl font-bold text-[#001eb9] grid grid-cols-7 items-center align-middle ">
            <div className="  flex col-span-1">SKU</div>
            <div className="  flex col-span-1">IMAGE</div>
            <div className="  flex col-span-2">PRODUCT NAME</div>
            <div className="  flex col-span-1">PRICE</div>
            <div className=" col-span-2"></div>
        </div>


        {/* ROWS */}
        <div className=" w-full overflow-y-scroll h-3/4">
            {
              products&&
              <>
              {
                products.map((prod)=>{
                  return  <ListElement  key={prod.sku} refresh={setRefresh} id={prod._id} SKU={prod.sku} pname={prod.productname} Pprice={prod.price} Psrc={prod.image[0]}/>
                })
              }
              </>
            }
           
        </div>
    </div>
  )
}

export default ProductTable