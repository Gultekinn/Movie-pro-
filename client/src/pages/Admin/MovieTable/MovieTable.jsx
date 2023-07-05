import React, { useEffect, useState } from "react";
import "../MovieTable/MovieTable.scss";
import { TiDeleteOutline } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const MovieTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [deleted,setdeleted]=useState(false)
  useEffect(() => {
    axios.get("http://localhost:8080/films").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [deleted]);
//delete
const handleDelete = async (id) => {
  await axios.delete(`http://localhost:8080/films/${id}`).then(res => {
    console.log(`${id}'s element has been deleted`);
  })
  setdeleted(true)
}

  //detail
  const handleDetail = (id) => {
    navigate(`/admin/movie/${id}`)
  }
//update
const handleUpdate = (id) => {
  navigate(`/admin/updatemovie/${id}`)
}
  return (
    <>
      <div className="table-datas">
        <div className="divv">
          <div>
            {" "}
            <button
              className="addnewproduct"
              onClick={() => navigate("/admin/addmovie")}
            >
              Add New Product
            </button>
          </div>
          <div>
            {" "}
            <input
              onKeyUp={(e) => setSearch(e.target.value)}
              className="searchinp"
              type="text"
              placeholder="Search..."
              id="innpt"
            />
          </div>
        </div>

        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th className="col-2" scope="col">
                Title
              </th>

              <th className="col-2" scope="col">
                Date
              </th>
              <th className="col-1" scope="col">
                Age
              </th>
              <th className="col-2" scope="col">
                Time
              </th>
              <th className="col-2" scope="col">
                Language
              </th>
              <th className="col-1" scope="col">
                Price
              </th>
              <th className="col-2" scope="col">
                Operation
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((x) =>
                x.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <tr>
                  <th scope="row">{item.title}</th>
                  <td>{item.date}</td>
                  <td>{item.age}</td>
                  <td>{item.time}</td>
                  <td>{item.languageType}</td>
                  <td>{item.price}</td>
                  <td className="td">
                    <button id="buuton"  onClick={() => handleDelete(item._id)}>
                      < TiDeleteOutline/>
                    </button>
                    

                    <button id="buuton" onClick={()=>handleUpdate(item._id)}>
                      <FaUserEdit  />
                    </button>
                    <button id="buuton" onClick={() => handleDetail(item._id)}>
                      <BiMessageSquareDetail />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MovieTable;
