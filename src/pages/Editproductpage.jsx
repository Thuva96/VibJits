import { useEffect, useRef,useState } from "react";
import { Header } from "../componets";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "@mui/material";

const Editproductpage = () => {
  const [sku, setSku] = useState("");
  const [existingProduct,setEdprod] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const imageUpload = useRef();
  const to = useNavigate();


  const {state} = useLocation();
  const ID = state?state._id:null;



  useEffect(()=>{


    axios.get(import.meta.env.VITE_BACKEND+"/product/get/"+ID).then((data)=>{
      const Thiraviyan = data.data.data;
      setSku(Thiraviyan?.sku);
      setName(Thiraviyan.productname);
      setPrice(Thiraviyan.price);
      setDescription(Thiraviyan.description);
      setQuantity(Thiraviyan.quantity);
      setImages(Thiraviyan.image);
      setEdprod(Thiraviyan);

    }).catch((e)=>{
      console.error("Error while fetching for update"+e)
    })

  },[])




  const handleSkuChange = (e) => {
    setSku(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const Fd = new FormData();
    files.map((files)=>{
      Fd.append("images",files);

    })



   

    axios.post(import.meta.env.VITE_BACKEND+"/upload/upload/multiple",Fd).then((data)=>{

      console.log("Data is :\t")
      console.log(data.data)
      data.data.fileUrls.map((links)=>{
        setImages([...images,links]);
      })
    }).catch((err)=>{
      console.error("Error : \t"+err);
    })



    // 
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    try {
      
      const FormDate = {
        sku:sku,
        productname:name,
        description:description,
        quantity:quantity,
        image:images,
        price:price
      }

      console.log(name)
      console.log(ID)

      axios.patch(import.meta.env.VITE_BACKEND+"/product/update/"+ID,FormDate).then((data)=>{
        
          console.log(data)
          to("/")
      
        
      }).catch((e)=>{
        console.error(" error : "+e)
      })
    }
    catch(e){
      console.error(e);

    }
  };

  return (
    <div className="w-screen px-12 font-satoshi flex flex-col gap-y-5">
    <Header pagename="PRODUCTS" subtitle={"Edit Product"}/>
    {existingProduct&&
    <form className="flex flex-col gap-y-9 w-[1078px] mt-10    mx-auto" onSubmit={handleSubmit}>
    
    <div className="flex w-full items-center gap-x-32">
      <div className="flex items-center gap-x-4 w-1/2">
      <label
        htmlFor="sku"
        className="text-sm font-medium text-gray-700"
        style={{ fontSize: "19px" }}
      >
        SKU
      </label>
      <input
        type="text"
        id="sku"
        disabled
        className="border rounded-md py-2  px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-700 w-[400px]"
        style={{ fontSize: "19px" }}
        value={sku}
        onChange={handleSkuChange}
      />
      </div>
      <div className="flex items-center w-1/2 gap-x-2">
        <label htmlFor="Price" className="text-sm font-medium" style={{ color: "#162427", fontSize: "19px" }}>
          Price
        </label>
        <input
            type="number"
            id="price"
            className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-700  w-[400px] "  // Adjust width as needed
            style={{ fontSize: "19px" }}
            value={price}
            onChange={handlePriceChange}
          />
      </div>
    </div>

    <div className="flex w-full items-center gap-x-32">
      <div className="flex items-center gap-x-2 w-1/2">
        <label htmlFor="name" className="text-sm font-medium" style={{ color: "#162427", fontSize: "19px" }}>
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-700  w-[400px]"
          style={{ fontSize: "19px" }}
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="flex items-center w-1/2 gap-x-2">
        <label htmlFor="quantity" className="text-sm font-medium" style={{ color: "#162427", fontSize: "19px" }}>
          QTY
        </label>
        <input
            type="number"
            id="quantity"
            className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-700  w-[400px] "  // Adjust width as needed
            style={{ fontSize: "19px" }}
            value={quantity}
            onChange={handleQuantityChange}
          />
      </div>
    </div>

    <div className="w-full text-left">
      <label htmlFor="description" className="text-sm font-medium" style={{ color: "#162427", fontSize: "19px" }}>
        Product Description
      </label>
      <p className="text-xs text-gray-500 mt-1">A small description about the project</p>
      <textarea
        id="description"
        className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none w-full bg-gray-200 text-gray-700"
        style={{ fontSize: "19px" }}
        rows="4"
        value={description}
        onChange={handleDescriptionChange}
      />
    </div>

    <div className="w-full text-left">
      <div className=" flex items-start w-fit justify-between">
      <div className="flex flex-col">
        <label htmlFor="images" className="text-sm font-medium" style={{ color: "#162427", fontSize: "19px" }}>
          Product Images
        </label>
        <p className="text-xs text-gray-500">
         JPEG, PNG, SVG, or GIF
        </p>
        <p className="text-xs text-gray-500">
        Maximum file size 50MB
        </p>
      </div>
      <section className=" flex gap-3 mx-5">
        {
          images.map((imges,index)=> <div  key={index}  className="w-20 h-20 rounded-md  bg-red-200">
            <img src={imges} alt="" className=" w-full h-full rounded-md object-cover"/>
          </div>)
        } 
      </section>
      <label 
      onClick={()=>{
        imageUpload.current.click();
      }}
      htmlFor="image" className=" cursor-pointer underline text-[#001eb9]  font-medium text-xl" >
        Edit Images
      </label>

      </div>
      <input
        ref={imageUpload}
        type="file"
        id="images"
        className="border rounded-md py-2 px-3 hidden focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        style={{ fontSize: "19px" }}
        multiple
        accept="image/*"
        onChange={handleImageChange}
      />
      
      <div className="mt-3 grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt="Product Image"
              className="rounded-md w-full h-auto"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                const updatedImages = [...images];
                updatedImages.splice(index, 1);
                setImages(updatedImages);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-end">  
    <button
        type="submit"
        className="bg-[#001eb9] hover:bg-[#001eb9] rounded-md  hover:bg-opacity-80 text-white font-bold py-2 px-10 focus:outline-none focus:shadow-outline"
        style={{ fontSize: "19px" }}
      >
        Save changes
      </button>
    </div>

  </form>
    }

    {!existingProduct&&
    <>
    <form className="flex flex-col gap-y-9 w-[1078px] mt-10    mx-auto">
    <div className="flex items-center gap-x-4 w-1/2">
      <label
        htmlFor="sku"
        className="text-sm font-medium text-gray-700"
        style={{ fontSize: "19px" }}
      >
        SKU
      </label>
      <Skeleton variant="rounded" className=" border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-700  w-[400px]"/>
    </div>
    <div className="flex w-full items-center gap-x-32">
      <div className="flex items-center gap-x-2 w-1/2">
        <label htmlFor="name" className="text-sm font-medium" style={{ color: "#162427", fontSize: "19px" }}>
          Name
        </label>
        <Skeleton variant="rounded" className=" border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-700  w-[400px]"/>

      </div>
      <div className="flex items-center w-1/2 gap-x-2">
        <label htmlFor="quantity" className="text-sm font-medium" style={{ color: "#162427", fontSize: "19px" }}>
          QTY
        </label>
        <Skeleton variant="rounded" className=" border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-700  w-[400px]"/>

        </div>
    </div>
    <div className="w-full text-left">
      <label htmlFor="description" className="text-sm font-medium" style={{ color: "#162427", fontSize: "19px" }}>
        Product Description
      </label>
      <p className="text-xs text-gray-500 mt-1">A small description about the project</p>
      <Skeleton height={"100px"} variant="rounded" className=" border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-700  w-[400px]"/>

    </div>
    <div className="w-full text-left">
      <div className=" flex items-start w-fit justify-between">
      <div className="flex flex-col">
        <label htmlFor="images" className="text-sm font-medium" style={{ color: "#162427", fontSize: "19px" }}>
          Product Images
        </label>
        <p className="text-xs text-gray-500">
         JPEG, PNG, SVG, or GIF
        </p>
        <p className="text-xs text-gray-500">
        Maximum file size 50MB
        </p>
      </div>
      <section className=" flex gap-3 mx-5">
          <div className="  w-20 h-20 rounded-md  bg-red-200"></div>
          <div className=" w-20 h-20 rounded-md  bg-red-200"></div>
          <div className="  w-20 h-20 rounded-md  bg-red-200"></div>
      </section>
      <label 
      onClick={()=>{
        imageUpload.current.click();
      }}
      htmlFor="image" className=" cursor-pointer underline text-[#001eb9]  font-medium text-xl" >
        Edit Images
      </label>

      </div>
      <input

        ref={imageUpload}
        type="file"
        id="images"
        className="border rounded-md py-2 px-3 hidden focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        style={{ fontSize: "19px" }}
        multiple
        accept="image/*"
        onChange={handleImageChange}
      />
      
      <div className="mt-3 grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(image)}
              alt="Product Image"
              className="rounded-md w-full h-auto"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                const updatedImages = [...images];
                updatedImages.splice(index, 1);
                setImages(updatedImages);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-end">  
    <button

        
        className="bg-[#001eb9] hover:bg-[#001eb9] rounded-md  hover:bg-opacity-80 text-white font-bold py-2 px-10 focus:outline-none focus:shadow-outline"
        style={{ fontSize: "19px" }}
      >
        Save changes
      </button>
    </div>
  </form>
    
    
    
    </>

    }

  </div>
  );
};

export default Editproductpage;
