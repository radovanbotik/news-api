import React from "react";
import { useGlobalContext } from "../utils/Context";

export default function Form() {
  //query is coming from initialState, aiming for controlled input
  const { query, handleInput } = useGlobalContext();
  return (
    <form
      onSubmit={e => e.preventDefault()}
      style={{
        display: "grid",
        placeContent: "center",
      }}
    >
      <label htmlFor="search">what are you interested in?</label>
      <input
        type="text"
        id="search"
        onChange={e => handleInput(e.target.value)}
        value={query}
        style={{ textAlign: "center" }}
      />
    </form>
  );
}
