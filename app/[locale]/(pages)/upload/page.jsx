"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";


const Upload = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="A coffee image"
        />
      )}
      <CldUploadWidget
        uploadPreset="qineszpg"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info ;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => open()}
          >
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default Upload;