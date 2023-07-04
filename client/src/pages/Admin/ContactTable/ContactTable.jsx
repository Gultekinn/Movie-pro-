import React, { useEffect, useState } from "react";
import "../ContactTable/ContactTable.scss";
import { TiDeleteOutline } from "react-icons/ti";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ContactTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [deleted, setdeleted] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8080/contacts").then((res) => {
      setData(res.data);
    });
  }, [deleted]);
  //detail
  const handleDetail = (id) => {
    navigate(`/admin/contact/${id}`)
  }
//update
const handleUpdate = (id) => {
  navigate(`/admin/updatecontact/${id}`)
}
  //delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/contacts/${id}`).then((res) => {
      console.log(`${id}'s element has been deleted`);
    });
    setdeleted(true);
  };

  return (
    <>
      <div className="tablee">
        <div className="divv">
          <div>
            <button
              className="addnewproduct"
              onClick={() => navigate("/admin/addcontact")}
            >
              Add New Product
            </button>
          </div>
          <div>
            <input
              onKeyUp={(e) => setSearch(e.target.value)}
              className="searchinp"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th className="col-3" scope="col">
                Phone
              </th>
              <th className="col-3" scope="col">
                Address
              </th>
              <th className="col-3" scope="col">
                Email
              </th>
              <th className="col-3" scope="col">
                Operation
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((x) =>
                x.address.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <tr>
                  <th scope="row">{item.mainPhone}</th>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => handleDelete(item._id)}>
                      <TiDeleteOutline />
                    </button>
                    <button onClick={()=>{
                      handleUpdate(item._id)
                    }}>
                      <FaUserEdit />
                    </button>
                    <button onClick={()=>{
                      handleDetail(item._id)
                    }}>
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

export default ContactTable;
