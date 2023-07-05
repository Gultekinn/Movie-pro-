import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const AddActivity = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
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

              title: "",
            }}
            onSubmit={(values, { resetForm }) => {
              let newProduct = {
                image: selectedFile,

                title: values.title,
              };
              const formData = new FormData();
              formData.append("image", selectedFile);

              formData.append("title", newProduct.title);
              console.log(selectedFile);

              console.log(newProduct);
              axios
                .post("http://localhost:8080/cinemas", formData)
                .then((res) => {
                  if (res.status === 200) {
                    message.open({
                      type: "success",
                      content: `Create`,
                      style: {
                        color: "black",
                      },
                    });
                    navigate("/admin/activitydata");
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
                      Title: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field name="title" placeholder="TITLE..." />
                    {errors.title ? (
                      <p style={{ color: "red" }}>{errors.title}</p>
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

export default AddActivity;
