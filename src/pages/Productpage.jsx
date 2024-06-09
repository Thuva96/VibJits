import { useNavigate } from "react-router-dom"
import { Header, ProductTable, Search } from "../componets"

const Productpage = () => {
  const to = useNavigate()
  return (
    <div className=' w-screen h-screen px-12 font-satoshi flex items-center flex-col gap-y-6 overflow-hidden'>
        <Header pagename="PRODUCTS"/>

        <Search/>
      
        <div className="w-full px-14 h-full mt-2 ">
            <ProductTable tag="main"/>
        </div>
       

    </div>
  )
}

export default Productpage