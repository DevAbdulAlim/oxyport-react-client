import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import config from "../config";

interface SelectImageProps {
  image: File[];
  onImageUpload: (files: File[]) => void;
}

const SelectImage: React.FC<SelectImageProps> = ({ image, onImageUpload }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>(image);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = [...uploadedFiles, ...acceptedFiles];
      setUploadedFiles(newFiles);
      onImageUpload(newFiles);
    },
    [uploadedFiles, onImageUpload]
  );

  const removeImage = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    onImageUpload(newFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    multiple: true,
  });

  return (
    <>
      <div
        {...getRootProps()}
        className="w-full p-4 text-center border-2 border-gray-600 border-dashed rounded-md cursor-pointer min-h-64"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag 'n' drop files here, or click to select files</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {uploadedFiles.map((file, index) => (
          <div key={index}>
            <p className="my-1">{file.name}</p>
            <img
              src={`${config.apiStaticPath}/images/${file.name}`}
              alt={`Uploaded File ${index}`}
              className="object-cover w-full h-full"
            />
            <button
              onClick={() => removeImage(index)}
              className="mt-4 text-sm text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectImage;
