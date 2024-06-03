import { Header, ProductTable, Search } from "../componets"

const Productpage = () => {
  return (
    <div className=' w-screen h-screen px-12 font-satoshi flex items-center flex-col gap-y-6 overflow-hidden'>
        <Header pagename="PRODUCTS"/>
        <Search/>
        <div className="w-full px-14 h-full mt-2 mb-10">
            <ProductTable/>
        </div>
       

    </div>
  )
}

export default Productpage