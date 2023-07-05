import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import "../AddMovie/AddMovie.scss";
function AddMovie() {
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);

  const navigate = useNavigate();

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };

  const handleImageUpload2 = (event) => {
    const file = event.target.files[0];
    setSelectedFile2(file);
  };

  return (
    <>
      <div id="addnewproduct">
        <div className="addnewproduct-form">
          <Formik
            id="formikk"
            initialValues={{
              filmType: "",
              mainimage: null,
              slideimage: null,
              video: "",
              date: "",
              age: Number,
              time: "",
              languageType: "",
              price: Number,
              title: "",
            }}
            onSubmit={(values, { resetForm }) => {
              let newProduct = {
                filmType: values.filmType,
                mainimage: selectedFile1,
                slideimage: selectedFile2,
                video: values.video,
                date: values.date,
                age: Number(values.age),
                time: values.time,
                languageType: values.languageType,
                price: Number(values.price),
                title: values.title,
              };
              const formData = new FormData();
              formData.append("filmType", newProduct.filmType);
              formData.append("mainimage", selectedFile1);
              formData.append("slideimage", selectedFile2);
              formData.append("video", newProduct.video);
              formData.append("date", newProduct.date);
              formData.append("age", newProduct.age);
              formData.append("time", newProduct.time);
              formData.append("languageType", newProduct.languageType);
              formData.append("price", newProduct.price);
              formData.append("title", newProduct.title);
              console.log(selectedFile1);
              console.log(selectedFile2);

              console.log(newProduct);
              axios
                .post("http://localhost:8080/films", formData)
                .then((res) => {
                  if (res.status === 200) {
                    message.open({
                      type: "success",
                      content: `Create`,
                      style: {
                        color: "black",
                      },
                    });
                    navigate("/admin/moviedata");
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
                      Film: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field id="label" name="filmType" as="select">
                      <option value="2D">2D</option>
                      <option value="3D">3D</option>
                      <option value="2D 3D">2D 3D</option>
                    </Field>
                    {errors.filmType ? (
                      <p style={{ color: "red" }}>{errors.filmType}</p>
                    ) : null}
                  </label>
                  <label>
                    <span>
                      Image URL: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field
                      type="file"
                      name="mainimage"
                      onChange={handleImageUpload1}
                    />
                    {/* {errors.mainimage ? (
                      <p style={{ color: "red" }}>{errors.mainimage}</p>
                    ) : null} */}
                  </label>

                  <label>
                    <span>
                      Slideimg URL: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field
                      name="slideimage"
                      placeholder="URL..."
                      type="file"
                      onChange={handleImageUpload2}
                    />
                    {errors.slideimage ? (
                      <p style={{ color: "red" }}>{errors.slideimage}</p>
                    ) : null}
                  </label>
                </div>
                <div className="secondline">
                  <label>
                    <span>
                      Video URL: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field name="video" placeholder="URL..." />
                    {errors.video ? (
                      <p style={{ color: "red" }}>{errors.video}</p>
                    ) : null}
                  </label>

                  <label>
                    <span>
                      Date: <span style={{ color: "red" }}>*</span>
                    </span>

                    <Field name="date" placeholder="Date..." />
                    {errors.date ? (
                      <p style={{ color: "red" }}>{errors.date}</p>
                    ) : null}
                  </label>

                  <label>
                    <span>
                      Age: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field name="age" placeholder="AGE..." />
                    {errors.age ? (
                      <p style={{ color: "red" }}>{errors.age}</p>
                    ) : null}
                  </label>
                </div>
                <div className="thirdline">
                  <label>
                    <span>
                      Time: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field name="time" placeholder="TIME..." />
                    {errors.time ? (
                      <p style={{ color: "red" }}>{errors.time}</p>
                    ) : null}
                  </label>
                  <label>
                    <span>
                      Language: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field name="languageType" as="select">
                      <option value="EN">EN</option>
                      <option
                        value="TR">TR
                   </option>
                      <option value="RU">RU</option>
                    </Field>
                    {errors.languageType ? (
                      <p style={{ color: "red" }}>{errors.languageType}</p>
                    ) : null}
                  </label>
                  <label>
                    <span>
                      Price: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field name="price" placeholder="PRICE..." />
                    {errors.price ? (
                      <p style={{ color: "red" }}>{errors.price}</p>
                    ) : null}
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
}

export default AddMovie;
