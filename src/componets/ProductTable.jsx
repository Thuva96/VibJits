import { ListElement } from "."


const ProductTable = () => {
  return (
    <div className=" w-full h-full ">
        {/* headers */}
        <div className="w-full text-xl font-bold text-[#001eb9] grid grid-cols-7 items-center align-middle ">
            <div className="  flex col-span-1">SKU</div>
            <div className="  flex col-span-1">IMAGE</div>
            <div className="  flex col-span-2">PRODUCT NAME</div>
            <div className="  flex col-span-1">PRICE</div>
            <div className=" col-span-2"></div>
        </div>


        {/* ROWS */}
        <div className=" w-full overflow-y-scroll max-h-full">
            <ListElement SKU={"#CA25"} pname={"Teddy Bear"} Pprice={"$90.99"} Psrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHkYxlGHR6XkT-zSBXf8aFxDNtuCMZJ39JDKSeWZaLEj0jineaFX_eFXmGA&s"}/>
            <ListElement SKU={"#CA25"} pname={"Teddy Bear"} Pprice={"$90.99"} Psrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHkYxlGHR6XkT-zSBXf8aFxDNtuCMZJ39JDKSeWZaLEj0jineaFX_eFXmGA&s"}/>
            <ListElement SKU={"#CA25"} pname={"Teddy Bear"} Pprice={"$90.99"} Psrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHkYxlGHR6XkT-zSBXf8aFxDNtuCMZJ39JDKSeWZaLEj0jineaFX_eFXmGA&s"}/>
            <ListElement SKU={"#CA25"} pname={"Teddy Bear"} Pprice={"$90.99"} Psrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHkYxlGHR6XkT-zSBXf8aFxDNtuCMZJ39JDKSeWZaLEj0jineaFX_eFXmGA&s"}/>
            <ListElement SKU={"#CA25"} pname={"Teddy Bear"} Pprice={"$90.99"} Psrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHkYxlGHR6XkT-zSBXf8aFxDNtuCMZJ39JDKSeWZaLEj0jineaFX_eFXmGA&s"}/>
            <ListElement SKU={"#CA25"} pname={"Teddy Bear"} Pprice={"$90.99"} Psrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHkYxlGHR6XkT-zSBXf8aFxDNtuCMZJ39JDKSeWZaLEj0jineaFX_eFXmGA&s"}/>
            <ListElement SKU={"#CA25"} pname={"Teddy Bear"} Pprice={"$90.99"} Psrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHkYxlGHR6XkT-zSBXf8aFxDNtuCMZJ39JDKSeWZaLEj0jineaFX_eFXmGA&s"}/>
            <ListElement SKU={"#CA25"} pname={"Teddy Bear"} Pprice={"$90.99"} Psrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHkYxlGHR6XkT-zSBXf8aFxDNtuCMZJ39JDKSeWZaLEj0jineaFX_eFXmGA&s"}/>
            <ListElement SKU={"#CA25"} pname={"Teddy Bear"} Pprice={"$90.99"} Psrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHkYxlGHR6XkT-zSBXf8aFxDNtuCMZJ39JDKSeWZaLEj0jineaFX_eFXmGA&s"}/>
            <ListElement SKU={"#CA25"} pname={"Teddy Bear"} Pprice={"$90.99"} Psrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHkYxlGHR6XkT-zSBXf8aFxDNtuCMZJ39JDKSeWZaLEj0jineaFX_eFXmGA&s"}/>
            <ListElement SKU={"#CA25"} pname={"Teddy Bear"} Pprice={"$90.99"} Psrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHkYxlGHR6XkT-zSBXf8aFxDNtuCMZJ39JDKSeWZaLEj0jineaFX_eFXmGA&s"}/>
        </div>
    </div>
  )
}

export default ProductTable