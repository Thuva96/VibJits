import { Header, ProductTable, Search } from "../componets"


const FavouritePage = () => {
    return (
        <div className=' w-screen h-screen px-12 font-satoshi flex items-center flex-col gap-y-6'>
            <Header pagename="FAVOURITE PRODUCTS"/>
            <Search/>
            <div className="w-full px-14 h-full mt-2">
                <ProductTable/>
            </div>
        </div>
      )
}  

export default FavouritePage