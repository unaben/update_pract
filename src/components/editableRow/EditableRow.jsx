import React from "react";

const EditableRow = (props) => {
  const {
    handleEditFormChange,
    editFormData,
    editContactId,
    contacts,
    setContacts,
    setEditContactId,
  } = props;

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const updatedContact = contacts.map((contact) => {
      if (contact.id !== editContactId) {
        return contact;
      } else {
        return editFormData;
      }
    });
    setContacts(updatedContact);
    setEditContactId(null);

    // const editedContactValues = {
    //   id: editContactId,
    //   fullName: editFormData.fullName,
    //   address: editFormData.address,
    //   phone_number: editFormData.phone_number,
    //   email: editFormData.email,
    // };

    // const editContactIndex = contacts.findIndex(
    //   (contact) => contact.id === editContactId
    // );
    // const newContactDetails = [...contacts];
    // newContactDetails[editContactIndex] = editedContactValues;
    // setContacts(newContactDetails);
  };
  return (
    <div>
      <form
        onSubmit={handleEditFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phone_number"
          value={editFormData.phone_number}
          onChange={handleEditFormChange}
        />
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "steelblue",
            padding: "5px",
            borderRadius: "5px",
            color: "white",
            fontSize: "15px",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditableRow;
