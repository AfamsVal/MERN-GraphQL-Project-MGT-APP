import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CLIENTS } from "../queries/clientQueries";
import ClientRow from "./ClientRow";
import Loader from "./Loader";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Loader />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <div>
      <h3 className="mt-4">All Clients</h3>
      {!loading && !error && (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Clients;
