import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { message } from "antd";
import axios from "axios";
import "../UpdateMovie/UpdateMovie.scss";

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updateproduct, setUpdateProduct] = useState("");
  const [filmType, setFilm] = useState("");
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [video, setVideo] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState(Number);
  const [time, setTime] = useState();
  const [languageType, setLanguage] = useState("");
  const [price, setPrice] = useState(Number);
  const [title, setTitle] = useState("");

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };

  const handleImageUpload2 = (event) => {
    const file = event.target.files[0];
    setSelectedFile2(file);
  };

  useEffect(() => {
    const getProductById = async () => {
      const res = await axios.get(`http://localhost:8080/films/${id}`);
      const data = res.data;
      setUpdateProduct(data);
      setFilm(data.filmType);
      setSelectedFile1(data.mainimage);
      setSelectedFile2(data.slideimage);
      setVideo(data.video);
      setDate(data.date);
      setAge(data.age);
      setTime(data.time);
      setLanguage(data.languageType);
      setPrice(data.price);
      setTitle(data.title);
    };

    getProductById();
  }, [id]);

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("filmType", values.filmType);
    formData.append("mainimage", selectedFile1);
    formData.append("slideimage", selectedFile2);
    formData.append("video", values.video);
    formData.append("date", values.date);
    formData.append("age", Number(values.age));
    formData.append("time", values.time);
    formData.append("languageType", values.languageType);
    formData.append("price", Number(values.price));
    formData.append("title", values.title);

    try {
      await axios.put(`http://localhost:8080/films/${id}`, formData);
      message.success("Updated");
      navigate("/admin/moviedata");
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
            filmType,
            mainimage: null,
            slideimage: null,
            video,
            date,
            age,
            time,
            languageType,
            price,
            title,
          }}
          onSubmit={handleSubmit}
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
                      id="inp"
                      type="file"
                      name="mainimage"
                      onChange={handleImageUpload1}
                    />
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
                      id="inp"
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
                    <Field id="inp" name="video" placeholder="URL..." />
                    {errors.video ? (
                      <p style={{ color: "red" }}>{errors.video}</p>
                    ) : null}
                  </label>

                  <label>
                    <span>
                      Date: <span style={{ color: "red" }}>*</span>
                    </span>

                    <Field id="inp" name="date" placeholder="Date..." />
                    {errors.date ? (
                      <p style={{ color: "red" }}>{errors.date}</p>
                    ) : null}
                  </label>

                  <label>
                    <span>
                      Age: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field id="inp" name="age" placeholder="AGE..." />
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
                    <Field id="inp" name="time" placeholder="TIME..." />
                    {errors.time ? (
                      <p style={{ color: "red" }}>{errors.time}</p>
                    ) : null}
                  </label>
                  <label>
                    <span>
                      Language: <span style={{ color: "red" }}>*</span>
                    </span>
                    <Field id="inp" name="languageType" as="select">
                      <option value="EN">EN</option>
                      <option value="TR">TR</option>
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
                    <Field id="inp" name="price" placeholder="PRICE..." />
                    {errors.price ? (
                      <p style={{ color: "red" }}>{errors.price}</p>
                    ) : null}
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
    </>
  );
};

export default UpdateMovie;
