import React, { FC } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import "../scss/addNotes.scss";

const AddNotesSection: FC = () => {
  const handleAddNotes = () => {
    console.log("Notes added");
  };

  return (
    <div className="add-notes-section">
      <Input />
      <Button label="Add Notes" onClick={handleAddNotes} />
    </div>
  );
};

export default AddNotesSection;
