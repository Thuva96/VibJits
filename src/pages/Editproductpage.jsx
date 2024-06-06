import { useRef,useState } from "react";
import { Header } from "../componets";

const Editproductpage = () => {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState([]);
  const imageUpload = useRef();

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

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("sku", sku);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("quantity", quantity);
      images.forEach((image) => {
        formData.append("images", image);
      });
      const response = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Product created successfully");
        // Redirect to product list page or show a success message
      } else {
        console.error("Error creating product");
        // Handle error appropriately
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen px-12 font-satoshi flex flex-col gap-y-5">
    <Header pagename="PRODUCTS" subtitle={"Edit Product"}/>
    <form className="flex flex-col gap-y-9 w-[1078px] mt-10    mx-auto" onSubmit={handleSubmit}>
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
          className="border rounded-md py-2  px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-700 w-[400px]"
          style={{ fontSize: "19px" }}
          value={sku}
          onChange={handleSkuChange}
        />
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

          type="submit"
          className="bg-[#001eb9] hover:bg-[#001eb9] rounded-md  hover:bg-opacity-80 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          style={{ fontSize: "19px" }}
        >
          Save changes
        </button>
      </div>
    </form>
  </div>
  );
};

export default Editproductpage;
