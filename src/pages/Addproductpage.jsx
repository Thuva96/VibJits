import { useRef, useState } from "react";
import { Header } from "../componets";
import axios from "axios";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";


const AddProductPage = () => {
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState([]);
  const [errorMsg, setError] = useState("");
  const [isSubmiting, setIsSubmitting] = useState(false);
  const to = useNavigate();

  const imageUpload = useRef();

  const handlePriceChange = (e) => {
    
    setPrice(e.target.value);
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

  const handleImageChange = (e) => {
  
   
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    setError("");
    e.preventDefault();
    try {
      var formData = new FormData();
      formData.set("productname", name);
      formData.set("description", description);
      formData.set("quantity", quantity);
      formData.set("price", price);
      
      const FormDataImg = new  FormData();
      images.forEach((image) => {
        FormDataImg.append("images", image);
      });



      axios({
        method: "post",
        url: "http://localhost:8000/upload/upload/multiple",
        data: FormDataImg,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((data)=>{
        
        
        if(data.status==200){
          console.log("imags are uploaded");
          formData.append("image",data.data.fileUrls);
          axios.post("http://localhost:8000/product/create",{
            image:data.data.fileUrls,
            productname:name,
            price:price,
            description:description,
            quantity:quantity
          }).then((result)=>{


            if(result.status == 201){
              setIsSubmitting(false);
              to("/")
              // setName("");
              // setDescription("");
              // setPrice("");
              // setImages([]);
              // setQuantity("");
              
             
            }


          }).catch((er)=>{
            console.error("Product upload error");
            console.error(er);
            setError("Product Can not Upload");
      isSubmiting(false)

          })

        }
        




      }).catch((er)=>{
        console.error("Image Upload error",er);
        setError("Images are not Supported");
        isSubmiting(false)

      })

     
    } catch (error) {
      console.error(error);
      isSubmiting(false);
    }
  };

  return (
    <div className="w-screen px-12 font-satoshi flex flex-col gap-y-5">
      <Header pagename="PRODUCTS" subtitle={"Add new Product"}/>
      <form className="flex flex-col gap-y-9 w-[1078px] mt-10    mx-auto" onSubmit={handleSubmit}>
        <div className="flex items-center gap-x-4 w-1/2">
        <Snackbar open={(errorMsg == "")?false:true} message={errorMsg} autoHideDuration={3000} anchorOrigin={{
          vertical:"top",
          horizontal:"right"
        }}/>
          <label
            htmlFor="sku"
            className="text-sm font-medium text-gray-700"
            style={{ fontSize: "19px" }}
          >
            Name
          </label>
          <input
            type="text"
            id="sku"
            className="border rounded-md py-2  px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-700 w-[400px]"
            style={{ fontSize: "19px" }}
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex w-full items-center gap-x-32">
          <div className="flex items-center gap-x-2 w-1/2">
            <label htmlFor="name" className="text-sm font-medium" style={{ color: "#162427", fontSize: "19px" }}>
              Price
            </label>
            <input
              type="number"
              id="name"
              className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-700  w-[400px]"
              style={{ fontSize: "19px" }}
              value={price}
              onChange={handlePriceChange}
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
          <div className=" flex items-center w-80 justify-between">
          <label htmlFor="images" className="text-sm font-medium" style={{ color: "#162427", fontSize: "19px" }}>
            Product Images
          </label>
          <label 
          onClick={()=>{
            imageUpload.current.click();
          }}
          htmlFor="image" className=" cursor-pointer underline text-[#001eb9]  font-medium text-xl" >
            Add Image
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
          <p className="text-xs text-gray-500">
            JPEG, PNG, SVG, or GIF (Maximum file size 50MB)
          </p>
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
        // disabled={isSubmiting} 
        type="submit"
        className="bg-[#001eb9] hover:bg-[#001eb9] rounded-md  hover:bg-opacity-80 text-white font-bold py-2 px-10  focus:outline-none focus:shadow-outline"
        style={{ fontSize: "19px" }}
      >
        Add product
      </button>

    
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;