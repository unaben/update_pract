import "./App.css";
import contactData from "./components/contact.json";
import React, { useState } from "react";
import ReadOnlyRow from "./components/readOnlyRow/ReadOnlyRow";
import EditableRow from "./components/editableRow/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(contactData);
  const [editContactId, setEditContactId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phone_number: "",
    email: "",
  });

  const handleEditFormChange = (e) => { 
    const { name, value } = e.target;
    const newData = { ...editFormData, [name]: value };
    setEditFormData(newData);
  };

  const handleEditClick = (contact) => {
    setEditContactId(contact.id);
    const { fullName, address, phone_number, email } = contact;
    const formValues = {
      fullName,
      address,
      phone_number,
      email,
    };
    setEditFormData(formValues);
  };

  return (
    <div className="App">
      <h1 style={{ fontFamily: "cursive" }}>Edit Tutorial</h1>
      {contacts?.map((contact, index) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "auto",
            }}
          >
            <div
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                maxWidth: "350px",
                width: "300px",
                height: "auto",
                marginTop: "10px",
                marginBottom: "20px",
                padding: "20px",
              }}
            >
              {editContactId === contact.id ? (
                <EditableRow
                  handleEditFormChange={handleEditFormChange}
                  editFormData={editFormData}
                  editContactId={editContactId}
                  contacts={contacts}
                  setContacts={setContacts}
                  setEditContactId={setEditContactId}
                />
              ) : (
                <ReadOnlyRow
                  key={contact.id}
                  {...contact}
                  handleEditClick={handleEditClick}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
