import React from "react";
import { useGlobalContext } from "../utils/Context";

export default function Buttons() {
  const { isLoading, page, totalPages, handlePage } = useGlobalContext();
  return (
    <div
      className="buttons"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2ex",
        margin: "2ex",
      }}
    >
      <button
        disabled={isLoading}
        style={{ backgroundColor: "gold" }}
        onClick={e => {
          handlePage("decrease");
        }}
      >
        prev
      </button>
      <p>
        {page + 1} / {totalPages}
      </p>
      <button
        disabled={isLoading}
        style={{ backgroundColor: "gold" }}
        onClick={e => {
          handlePage("increase");
        }}
      >
        next
      </button>
    </div>
  );
}
