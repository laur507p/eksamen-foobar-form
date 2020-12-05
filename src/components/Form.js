import React from "react";
import FormField from "./FormField";

export default function Main() {
  return (
    <form className="form-container">
      <FormField name="firstname" placeholder="First Name" type="text" id="firstname" />
      <FormField name="lastname" placeholder="Last Name" type="text" id="lastname" />
      <FormField name="telephone" placeholder="Telephone number" type="number" id="telephone" />
    </form>
  );
}
