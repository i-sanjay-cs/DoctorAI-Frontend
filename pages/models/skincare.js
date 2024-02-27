import React, { useState, useEffect } from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

const SkinCarePrediction = () => {
  // State variables
  const [videoStream, setVideoStream] = useState(null);
  const [outputResult, setOutputResult] = useState("");
  const [generatedText, setGeneratedText] = useState("Wait for generating the response"); // Initial state
  const [capturing, setCapturing] = useState(false);

  // Function to start video streaming
  const startVideoStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideoStream(stream);
    } catch (error) {
      console.error("Error accessing video stream:", error);
    }
  };

  // Function to stop video streaming
  const stopVideoStream = () => {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      setVideoStream(null);
    }
  };

  // Function to capture frame from video stream and send to backend for processing
  const captureAndProcessFrame = async () => {
    if (!videoStream) {
      alert("Video stream not available.");
      return;
    }

    const videoElement = document.getElementById('videoElement');
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    canvas.getContext('2d').drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/jpeg');

    try {
      const response = await fetch("http://localhost:5000/upload", { // Change the URL to match your Flask server address
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: imageData }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setOutputResult(result.result);

      // Set the generated text directly from the response
      setGeneratedText(result.result);

    } catch (error) {
      console.error("Error processing image:", error);
      setOutputResult("Error");
    }
  };

  // Function to handle capturing button click
  const handleCaptureButtonClick = () => {
    if (!capturing) {
      setCapturing(true);
      captureAndProcessFrame();
    }
  };

  // Effect to start video streaming when component mounts
  useEffect(() => {
    startVideoStream();
    return () => {
      stopVideoStream();
    };
  }, []);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="bg-gray-100 p-8 pt-24 flex flex-col items-center" style={{ minHeight: "100vh" }}>
        <h1 className="text-4xl font-bold mb-4 text-green-800">Skin Care Prediction</h1>

        {/* Live Video Feed Section */}
        <div className="mb-8">
          <video id="videoElement" autoPlay playsInline className="max-w-full max-h-96"></video>
        </div>

        {/* Button to Capture Frame */}
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mb-4" onClick={handleCaptureButtonClick}>
          {capturing ? "Capturing..." : "Capture Frame"}
        </button>

        {/* Output Section */}
        <div style={{ backgroundColor: "#fff", width: "600px", height: "200px" }} className="p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            <strong>Condition:</strong> <span style={{ color: "black" }}>{outputResult}</span> <br />
          </p>
        </div>

        {/* Generated Text Section */}
        <div style={{ backgroundColor: "#fff", width: "600px", minHeight: "200px", marginTop: "20px", overflow: "auto", wordWrap: "break-word", fontSize: "10px" }} className="p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Response from User Input</h2>
          <pre style={{ fontSize: "16px" }}>{generatedText}</pre>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default SkinCarePrediction;
