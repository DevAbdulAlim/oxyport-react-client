import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploadProps {
  onFileUpload: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = [...uploadedFiles, ...acceptedFiles];
      setUploadedFiles(newFiles);
      onFileUpload(newFiles);
    },
    [uploadedFiles, onFileUpload]
  );

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
      <div className="grid grid-cols-2 gap-8 px-4 py-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {uploadedFiles.map((file, index) => (
          <div key={index}>
            <p className="my-1">{file.name}</p>
            <img
              src={URL.createObjectURL(file)}
              alt={`Uploaded File ${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FileUpload;
