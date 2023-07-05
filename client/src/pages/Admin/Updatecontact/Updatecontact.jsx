import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { message } from "antd";
import axios from "axios";

const Updatecontact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateproduct, setUpdateProduct] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [mainPhone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    const getProductById = async () => {
      const res = await axios.get(`http://localhost:8080/contacts/${id}`);
      const data = res.data;
      setUpdateProduct(data);
      setSelectedFile(data.image);
      setPhone(data.mainPhone);
      setAddress(data.address)
      setEmail(data.email)
      
    };

    getProductById();
  }, [id]);



  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("mainPhone", values.mainPhone);
    formData.append("address", values.address);
    formData.append("email", values.email);


    try {
      await axios.put(`http://localhost:8080/contacts/${id}`, formData);
      message.success("Updated");
      navigate("/admin/contactdata");
    } catch (error) {
      message.error("Error");
    }
  };
  return (
    <>
 <div id="updateproduct">
        <div className="addnewproduct-form">
          <Formik
          initialValues={{
            image: null,

              mainPhone: "",
              address: "",
              email: "",
          }}
          onSubmit={handleSubmit}
          >
            {({ errors, handleChange }) => (
               <Form>
               <div className="firstline">
               <label>
                   <span>
                     Image URL: <span style={{ color: "red" }}>*</span>
                   </span>
                   <Field
                     type="file"
                     name="image"
                     onChange={handleImageUpload}
                   />
                 </label>
                 <label>
                   <span>
                     Phone: <span style={{ color: "red" }}>*</span>
                   </span>

                   <Field name="mainPhone" placeholder="Phone..." />
                   {errors.mainPhone ? (
                     <p style={{ color: "red" }}>{errors.mainPhone}</p>
                   ) : null}
                 </label>

              
               </div>
<div className="secondline">

<label>
                   <span>
                     Address: <span style={{ color: "red" }}>*</span>
                   </span>

                   <Field name="address" placeholder="Address..." />
                   {errors.address ? (
                     <p style={{ color: "red" }}>{errors.address}</p>
                   ) : null}
                 </label>

                 <label>
                   <span>
                     Email: <span style={{ color: "red" }}>*</span>
                   </span>
                   <Field type="email" name="email" placeholder="Email..." />
                   {errors.email ? (
                     <p style={{ color: "red" }}>{errors.email}</p>
                   ) : null}
                 </label>
</div>
               <button className="create-product" type="submit">
                 Create
               </button>
             </Form>
            )}
          </Formik>
        </div>
      </div>
    
    </>
  )
}

export default Updatecontact
