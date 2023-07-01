import React, { useState } from "react";
import "./Add.css";
import { useDispatch } from "react-redux";
import { upload } from "../../../redux/async/product";
import { axios } from "../../../apis/api.config";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [prise, setPrise] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const handleFileChange = (e) => {
    setImgFile(e.target.files[0]);
  };
  // const handleChange = (e) => {
  //   setData((previous) => ({ ...previous, [e.target.name]: e.target.value }));
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, "hhhhh");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("prise", prise);
    formData.append("image", imgFile);
    console.log(formData.get("name"),formData.get("prise"), "ggggggggg");

    // const { data } = await axios.post("product/upload/", formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });

    dispatch(
      upload({
        body: formData,
        option: {
          headers: { "Content-Type": "multipart/form-data" },
        },
      })
    );
  };

  return (
    <div className="product">
      <form action="" className="productForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prise"
          id="prise"
          value={prise}
          onChange={(e) => setPrise(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          placeholder="Select your image"
          onChange={handleFileChange}
        />
        <button className="btnSave" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
