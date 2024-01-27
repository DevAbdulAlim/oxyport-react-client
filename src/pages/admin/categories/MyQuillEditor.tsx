import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface MyQuillEditorProps {
  onEditorChange: (content: string) => void;
}

const MyQuillEditor: React.FC<MyQuillEditorProps> = ({ onEditorChange }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (content: string) => {
    setValue(content);
    onEditorChange(content); // Pass the editor content to the parent component
  };

  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["clean"],
        ],
      }}
      formats={[
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
      ]}
      theme="snow"
      className="h-full"
    />
  );
};

export default MyQuillEditor;
