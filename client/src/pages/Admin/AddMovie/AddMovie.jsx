import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { message } from "antd";
import "../AddMovie/AddMovie.scss";
function AddMovie() {
  // const priceregex = /^[0-9.]+$/;

  // const CreateSchema = Yup.object().shape({
  //   img: Yup.string().required("Image url is required"),
  //   title: Yup.string().required("Title is required "),
  //   date: Yup.string().required("Date is required"),
  //   age: Yup.string().required("Age is required"),
  //   time: Yup.string().required("Time is required"),
  //   languageType: Yup.string().required("Language is required"),
  //   filmType: Yup.string().required("Film is required"),

  //   price: Yup.string()
  //     .matches(priceregex, "Invalid price")
  //     .required("Price is required"),
  // });
  const navigate = useNavigate();

  return (
    <>
      <div id="addnewproduct">
        <div className="addnewproduct-form">
          <Formik
            id="formikk"
            initialValues={{
              filmType: "",
              mainimage: null,
              slideimage:null,
              video:"",
              date: "",
              age: Number,
              time: "",
              languageType: "",
              price: Number,
              title: "",
            }}
            // validationSchema={CreateSchema}
            onSubmit={(values, { resetForm }) => {
              let newProduct = {
                filmType: values.filmType,
                mainimage: values.mainimage,
                slideimage:values.slideimage,
                video:values.video,
                date: values.date,
                age: Number(values.age),
                time: values.time,
                languageType: values.languageType,
                price: Number(values.price),
                title: values.title,
                // isSale: values.isSale === "true" ? true : false,
                // isStock: values.isStock === "true" ? true : false,
                // isNeew: values.isNeew === "true" ? true : false,
                // isBestSeller: values.isBestSeller === "true" ? true : false,
              }
              console.log(newProduct)
              axios
                .post("http://localhost:8080/films", newProduct)
                .then((res) => {
                  if (res.status === 200) {
                    message.open({
                      type: "success",
                      content: `Create`,
                      style: {
                        color: "black",
                      },
                    });
                    navigate("/admin/movie");
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
            {({ errors,handleChange }) => (
              <Form>
                <div className="firstline">
                <label>
                    <span>
                      Film: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field name="filmType" as="select">
                      <option value="2d">2D</option>
                      <option value="3d">3D</option>
                      <option value="2d/3d">2D/3D</option>
                    </Field>
                    {errors.filmType ? (
                      <p style={{ color: "red" }}>{errors.filmType}</p>
                    ) : null}
                  </label>
                  <label>
                    <span>
                      Image URL: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field name="mainimage" />
                    {/* {errors.mainimage ? (
                      <p style={{ color: "red" }}>{errors.mainimage}</p>
                    ) : null} */}
                  </label>

                  <label>
                    <span>
                      Slideimg URL: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field name="slideimage" placeholder="URL..." />
                    {errors.slideimage? (
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
                    {errors.video? (
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
                      <option value="English">En</option>
                      <option
                        value="Turkey
"
                      >
                        Tr
                      </option>
                      <option value="Russia">Ru</option>
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
