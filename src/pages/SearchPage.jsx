import { useEffect, useState } from "react"
import { Header, Search, SearchCard } from "../componets"
import axios from "axios";
import { useLocation } from "react-router-dom";

const SearchPage = () => {

    const {state}=useLocation()
    const [change,setchange]=useState(state.value?state.value:"");
    const [products,setProducts] = useState(null);

    
    useEffect(()=>{
      
      axios.get("http://localhost:8000/product/getAll").then((value)=>{
        if(value.status == 200)
          {
            console.log("filter")
            const value2 = value.data.data
            console.log(change)
            const filter = value2.filter((product)=>{
              if(product.productname.toLowerCase().includes(change.toLocaleLowerCase()))
                return product
            })
            setProducts(filter)
            console.log(filter)
          }
  
      }).catch((e)=>{
        console.error("Error caused\t"+e);
      })
      
  
    },[change])

  return (
    <div className=' w-screen h-screen px-12 font-satoshi flex items-center flex-col gap-y-6'>
        <Header pagename="PRODUCTS"/>
        <Search changed={setchange} />
        {change!=""&&
        <>
        
          <div className="flex w-full text-xl font-bold opacity-60">
              4 Results found for {change}
          </div>

          <div className=" w-full h-full flex flex-col gap-2 mb-5  overflow-scroll">
            {
              products&&
              <>
              {
                products.map((prod)=><SearchCard 
                Sku={prod.sku}
                src={prod.image}
                description={prod.productname} 
                name={prod.productname}/>)
              }
              </>
            }

          </div>
        </>




        }

    </div>
  )
}

export default SearchPage