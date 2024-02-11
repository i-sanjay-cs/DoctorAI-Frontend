import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

const PneumoniaDetection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputCondition, setOutputCondition] = useState("");
  const [outputAccuracy, setOutputAccuracy] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

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
    formData.append("file", selectedFile); // Updated key to "file"

    try {
      const response = await fetch("https://6b9f-34-148-116-246.ngrok-free.app/predict-pneumonia", {
          method: "POST",
          body: formData,
      });
            
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json(); // Parse the response
      console.log(result); // Log the parsed response
      setOutputCondition(result.predicted_class_name); // Update state with the predicted class name
      setOutputAccuracy(result.confidence_percentage.toFixed(2));

  } catch (error) {
      console.error("Error detecting pneumonia:", error);
      setOutputCondition("Error");
      setOutputAccuracy("Error detecting pneumonia. Please try again.");
  }
  
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 p-8 pt-24 flex flex-col items-center" style={{ minHeight: "100vh" }}>
        <h1 className="text-4xl font-bold mb-4 text-green-800">Pneumonia Detection</h1>
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
              Detect Pneumonia
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
            <strong>Condition:</strong> <span style={{ color: "black" }}>{outputCondition}</span> <br />
            <strong>Accuracy:</strong> <span style={{ color: "black" }}>{outputAccuracy}%</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PneumoniaDetection;
