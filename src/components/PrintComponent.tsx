const PrintComponent = () => {
  return (
    <div className="hidden print:block">
      {/* Content to be printed */}
      <h1 className="mb-2 text-2xl font-bold">Printable Content</h1>
      <p className="text-gray-600">This is the content you want to print.</p>
    </div>
  );
};

export default PrintComponent;
