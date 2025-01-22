import type React from "react";
import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";

interface SelectImageProps {
  defaultImages: (string | File)[];
  onImageUpload: (files: (string | File)[]) => void;
  onImageState: (files: (string | File)[]) => void;
}

const SelectImage: React.FC<SelectImageProps> = ({
  defaultImages,
  onImageUpload,
  onImageState,
}) => {
  const [images, setImages] = useState<(string | File)[]>(defaultImages);

  useEffect(() => {
    setImages(defaultImages);
  }, [defaultImages]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const updatedFiles = acceptedFiles.map((file) => {
        const uniqueName = `${uuidv4()}-${file.name}`;
        const renamedFile = new File([file], uniqueName, { type: file.type });
        return renamedFile;
      });
      const newImages = [...images, ...updatedFiles];
      setImages(newImages);
      onImageUpload(newImages);
      onImageState(newImages);
    },
    [images, onImageUpload, onImageState]
  );

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onImageUpload(newImages);
    onImageState(newImages);
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
        {images.map((file, index) => (
          <div key={index} className="relative">
            {typeof file === "string" ? (
              <img
                src={`/images/${file}`}
                alt={`Image ${index}`}
                className="object-cover w-full h-48"
              />
            ) : (
              <>
                <p className="my-1 text-sm truncate">{file.name}</p>
                <img
                  src={URL.createObjectURL(file) || "/placeholder.svg"}
                  alt={`Uploaded File ${index}`}
                  className="object-cover w-full h-48"
                />
              </>
            )}
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectImage;
