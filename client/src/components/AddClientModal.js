import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const AddClientModal = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name: user.name, email: user.email, phone: user.phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const onChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.name === "" || user.email === "" || user.phone === "") {
      return alert("Please fill all feilds!");
    }
    addClient(user.name, user.email, user.phone);
    setUser({ name: "", email: "", phone: "" });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        <FaUser className="icon" /> Add Client
      </button>

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">New Client</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              {" "}
              <form onSubmit={onSubmit}>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    value={user.name}
                    onChange={onChange}
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    name="name"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={onChange}
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd" className="form-label">
                    Phone:
                  </label>
                  <input
                    type="text"
                    value={user.phone}
                    onChange={onChange}
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone"
                    name="phone"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </form>{" "}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClientModal;
