// pages/Tuberculosis.js

import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

const Tuberculosis = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputResult, setOutputResult] = useState("");
  const [outputStyle, setOutputStyle] = useState({});
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [confidence, setConfidence] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Display the uploaded image
    const imageUrl = URL.createObjectURL(file);
    setUploadedImageUrl(imageUrl);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please choose a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("https://0b30-2405-201-2b-d887-7549-1141-3052-7e27.ngrok-free.app/predict-tuberculosis", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setOutputResult(result.predicted_class);
      setConfidence(result.confidence_percentage);

      // Apply styles based on the result
      setOutputStyle({
        color: result.predicted_class === "Tuberculosis" ? "Red" : "Green",
      });
    } catch (error) {
      console.error("Error detecting tuberculosis:", error);
      setOutputResult("Error detecting tuberculosis. Please try again.");
      setConfidence(null);
      setOutputStyle({
        color: "black",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 p-8 pt-24 flex flex-col items-center" style={{ minHeight: "100vh" }}>
        <h1 className="text-4xl font-bold mb-4 text-green-800">Tuberculosis Detection</h1>
        {/* Input Section */}
        <div style={{ backgroundColor: "#fff" }} className="p-8 mb-8 rounded-md shadow-md flex items-center">
          <div className="mr-8">
            <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
            <label htmlFor="fileInput" className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
              Choose File
            </label>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md ml-4" onClick={handleUpload}>
              Detect Tuberculosis
            </button>
          </div>
          {uploadedImageUrl && (
            <div>
              <img src={uploadedImageUrl} alt="Uploaded" className="max-h-64 max-w-64" />
            </div>
          )}
        </div>
        {/* Output Section */}
        <div style={{ backgroundColor: "#fff", width: "600px", height: "200px" }} className="p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            <strong>Predicted Class:</strong> <span style={outputStyle}>{outputResult}</span> <br />
            <strong>Confidence:</strong> <span style={{ color: "black" }}>{confidence !== null ? confidence.toFixed(2) + "%" : ""}</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tuberculosis;
