import { useState } from "react"
import { Header, Search, SearchCard } from "../componets"

const SearchPage = () => {

    const [change,setchange]=useState("");

  return (
    <div className=' w-screen h-screen px-12 font-satoshi flex items-center flex-col gap-y-6'>
        <Header pagename="PRODUCTS"/>
        <Search changed={setchange}/>
        {change!=""&&
        <>
        
          <div className="flex w-full text-xl font-bold opacity-60">
              4 Results found for {change}
          </div>

          <div className=" w-full h-full flex flex-col gap-2 mb-5  overflow-scroll">
            <SearchCard 
            Sku="#CA40" 
            src="https://images.pexels.com/photos/5786759/pexels-photo-5786759.jpeg?auto=compress&cs=tinysrgb&w=600" 
            description="Helow world" 
            name="Teddy"/>
            <SearchCard 
            Sku="#CA40" 
            src="https://images.pexels.com/photos/5786759/pexels-photo-5786759.jpeg?auto=compress&cs=tinysrgb&w=600" 
            description="Helow world" 
            name="Teddy"/>
            <SearchCard 
            Sku="#CA40" 
            src="https://images.pexels.com/photos/5786759/pexels-photo-5786759.jpeg?auto=compress&cs=tinysrgb&w=600" 
            description="Helow world" 
            name="Teddy"/>
            <SearchCard 
            Sku="#CA40" 
            src="https://images.pexels.com/photos/5786759/pexels-photo-5786759.jpeg?auto=compress&cs=tinysrgb&w=600" 
            description="Helow world" 
            name="Teddy"/>
            <SearchCard 
            Sku="#CA40" 
            src="https://images.pexels.com/photos/5786759/pexels-photo-5786759.jpeg?auto=compress&cs=tinysrgb&w=600" 
            description="Helow world" 
            name="Teddy"/>
            <SearchCard 
            Sku="#CA40" 
            src="https://images.pexels.com/photos/5786759/pexels-photo-5786759.jpeg?auto=compress&cs=tinysrgb&w=600" 
            description="Helow world" 
            name="Teddy"/>
            <SearchCard 
            Sku="#CA40" 
            src="https://images.pexels.com/photos/5786759/pexels-photo-5786759.jpeg?auto=compress&cs=tinysrgb&w=600" 
            description="Helow world" 
            name="Teddy"/>

          </div>
        </>




        }

    </div>
  )
}

export default SearchPage