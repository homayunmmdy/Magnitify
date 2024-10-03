import { Button, Input } from "@/components";
import React from "react";

//@ts-ignore
const DataForm = ({ formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="space-y-4 p-4  shadow-md rounded-md">
      <Input
        type="text"
        name="name"
        label="Name"
        color="input-primary"
        value={formData.name}
        onChange={handleChange}
        required={true}
        style="mt-1 w-full block"
      />
      <Input
        type="number"
        name="secid"
        label="Secid"
        value={formData.secid}
        color="input-primary"
        onChange={handleChange}
        required={true}
        style="mt-1 w-full block"
      />
    <Button type="submit" title="Submit" color="btn-primary" style="w-full" />
  </form>
);

export default DataForm;