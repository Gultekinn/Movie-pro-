import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const AddContact = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  return (
    <>
      <div id="addnewproduct">
        <div className="addnewproduct-form">
          <Formik
            id="formikk"
            initialValues={{
              image: null,

              mainPhone: "",
              address: "",
              email: "",
            }}
            onSubmit={(values, { resetForm }) => {
              let newProduct = {
                image: selectedFile,

                mainPhone: values.mainPhone,
                address: values.address,
                email: values.email,
              };
              const formData = new FormData();
              formData.append("mainPhone", newProduct.mainPhone);
              formData.append("image", selectedFile);
              formData.append("address", newProduct.address);
              formData.append("email", newProduct.email);

              console.log(newProduct);
              axios
                .post("http://localhost:8080/contacts", formData)
                .then((res) => {
                  if (res.status === 200) {
                    message.open({
                      type: "success",
                      content: `Create`,
                      style: {
                        color: "black",
                      },
                    });
                    navigate("/admin/contactdata");
                  }
                })
                .catch((err) => {
                  message.open({
                    type: "error",
                    content: `Error`,
                    style: {
                      color: "black",
                    },
                  });
                });
            }}
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
  );
};

export default AddContact;
