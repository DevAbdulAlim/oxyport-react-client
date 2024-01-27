import React, { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      onFileUpload(file);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const fileDisplay = useMemo(() => {
    if (uploadedFile) {
      return (
        <div>
          <p>Uploaded File: {uploadedFile.name}</p>
          <img
            src={URL.createObjectURL(uploadedFile)}
            alt="Uploaded File"
            className="max-w-full max-h-200px"
          />
        </div>
      );
    }
    return null;
  }, [uploadedFile]);

  return (
    <div>
      <div
        {...getRootProps()}
        className="w-full p-4 text-center border-2 border-gray-600 border-dashed rounded-md cursor-pointer min-h-100px"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag 'n' drop a file here, or click to select a file</p>
        )}
      </div>
      {fileDisplay}
    </div>
  );
};

export default FileUpload;
