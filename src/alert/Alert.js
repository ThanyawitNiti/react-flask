import React from "react";

export default function AlertMessage({ message, type }) {
  return (
    <div
      className={`fixed top-5 right-5 px-4 py-2 text-white rounded shadow-md transition ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
}
