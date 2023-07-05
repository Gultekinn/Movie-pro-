import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { message } from "antd";
import axios from "axios";
const Updateactivity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateproduct, setUpdateProduct] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  useEffect(() => {
    const getProductById = async () => {
      const res = await axios.get(`http://localhost:8080/cinemas/${id}`);
      const data = res.data;
      setUpdateProduct(data);
      setSelectedFile(data.image);

      setTitle(data.title);
    };

    getProductById();
  }, [id]);
  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    formData.append("title", values.title);

    try {
      await axios.put(`http://localhost:8080/cinemas/${id}`, formData);
      message.success("Updated");
      navigate("/admin/activitydata");
    } catch (error) {
      message.error("Error");
    }
  };
  return <>

<div id="updateproduct">
        <div className="addnewproduct-form">
          <Formik
          initialValues={{
            image: null,
           
            title,
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
                      id="inp"
                      type="file"
                      name="image"
                      onChange={handleImageUpload}
                    />
                  </label>
                  <label>
                    <span>
                      Title: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field id="inp" name="title" placeholder="TITLE..." />
                    {errors.title ? (
                      <p style={{ color: "red" }}>{errors.title}</p>
                    ) : null}
                  </label>
                </div>
             
            

                <button className="create-product" type="submit">
                  Update
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>


  </>;
};

export default Updateactivity;
