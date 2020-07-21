import React from "react";

export default function Form(props) {
  const { form, members } = props;
  const handleChange = (e) => {
    props.handleState("form", {
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleState("members", [...members, form]);
  };

  console.log(props);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="Age"
        name="age"
        value={form.age}
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="Location"
        name="location"
        value={form.location}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Add Member</button>
    </form>
  );
}
