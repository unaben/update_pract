import React from "react";

const ReadOnlyRow = ({ handleEditClick, ...contact }) => {
  return (
    <div key={contact.id}>
      <h3>{contact.fullName}</h3>
      <h3>{contact.address}</h3>
      <h3>{contact.phone_number}</h3>
      <h3>{contact.email}</h3>
      <button
        type="button"
        onClick={(e) => handleEditClick(e, contact)}
        style={{
          backgroundColor: "steelblue",
          padding: "5px",
          borderRadius: "5px",
          color: "white",
          fontSize: "15px",
          width: "160px",
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default ReadOnlyRow;
