import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import config from "../config/config";

interface SelectImageProps {
  defaultImages: File[]; // URLs of default images from the server
  onImageUpload: (files: File[]) => void;
  onImageState: (files: File[]) => void;
}

const SelectImage: React.FC<SelectImageProps> = ({
  defaultImages,
  onImageUpload,
  onImageState,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = [...uploadedFiles, ...acceptedFiles];
      setUploadedFiles(newFiles);
      const finalFiles = [...newFiles, ...defaultImages];
      onImageUpload(finalFiles);
    },
    [uploadedFiles, onImageUpload, defaultImages]
  );

  const removeImage = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    onImageUpload(newFiles);
  };

  const removeDefaultImage = (index: number) => {
    const newFiles = defaultImages.filter((_, i) => i !== index);
    onImageState(newFiles);
    const finalFiles = [...uploadedFiles, ...newFiles];
    onImageUpload(finalFiles);
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
        {/* Render default images */}
        {defaultImages.map((file, index) => (
          <div key={index}>
            <p className="my-1">{file.name}</p>
            <img
              src={`${config.apiStaticPath}/images/${file.name}`}
              alt={`Default ${index}`}
              className="object-cover w-full h-full"
            />
            <button
              onClick={() => removeDefaultImage(index)}
              className="mt-4 text-sm text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        {/* Render uploaded images */}
        {uploadedFiles.map((file, index) => (
          <div key={index + defaultImages.length}>
            <p className="my-1">{file.name}</p>
            <img
              src={URL.createObjectURL(file)}
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
