import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Button} from 'react-bootstrap';
const View = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    quality: "",
  });
  const { name, address, email, phone, quality } = user;
//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };
  useEffect(() => {
    loadUser();
  }, []);
//   const loadUser = async (e) => {
//     const result = await axios.get(`http://localhost:3001/users/${id}`);
//     // console.log(result);
//     setUser(result.data);
//   };

const loadUser = async (e) => {
    let result = await fetch(`http://127.0.0.1:8000/api/guide/show/${id}`,{
        method:'GET'
    });
    
    result = await result.json();
    // console.log(result);
    setUser(result);
}
  return (

   <>

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>
    
 
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>


    <div class="container">
      <h1 className="mb-5">View user</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div class="mb-3">
              <input
                type="text"
                name="name"
                value={name}
                class="form-control"
                placeholder="Enter Name"
                readOnly
                // onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="address"
                value={address}
                class="form-control"
                placeholder="Enter User Name"
                readOnly
                // onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="email"
                value={email}
                class="form-control"
                placeholder="Enter Email"
                readOnly
                // onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="phone"
                value={phone}
                class="form-control"
                placeholder="Enter Phone Number"
                readOnly
                // onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="quality"
                value={quality}
                class="form-control"
                placeholder="Enter Website Name"
                readOnly
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default View;
