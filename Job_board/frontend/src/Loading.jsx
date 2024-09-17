import React from "react";

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="inline-block animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-[--primary-text-color]"></div>
      </div>
    </>
  );
}
