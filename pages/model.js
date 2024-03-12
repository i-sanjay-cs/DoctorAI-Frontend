// pages/models.js

import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Link from "next/link";

const ModelCard = ({ modelName, description, link }) => (
  <div className="bg-white p-6 mb-4 rounded-md shadow-md hover:bg-red-500" style={{ width: "350px", height: "370px", backgroundColor: "rgba(245, 245, 245, 0.9)", position: "relative" }}>
    <h2 className="text-xl font-semibold mb-4 text-green-800">{modelName}</h2>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    {link ? (
      <Link href={link}>
        <a className="inline-block bg-green-500 text-white px-10 py-2 rounded-md absolute bottom-2 left-20 right-15 mb-4">
          Click Here
        </a>
      </Link>
    ) : (
      <p className="text-red-500">Link not available</p>
    )}
  </div>
);


const ModelsPage = () => {
  // Sample model data, replace with your actual data
  const models = [
    {
      modelName: "Bone Fracture Detection",
      description: "Bone Fracture Detection: Swiftly identifies hand, elbow, and shoulder fractures for prompt medical intervention, enhancing diagnostic precision in orthopedic care. Elevate healthcare with our advanced AI solution.",
      link: "/models/bone",
    },
    {
      modelName: "Brain Tumour Detection",
      description: "Brain Tumour Detection Model Swiftly identify brain tumours with our advanced AI model. Seamlessly integrating with real-time image analysis, this tool aids in efficient medical diagnoses. Experience cutting-edge technology for prompt and accurate assessments.",
      link :"/models/BrainTumour"
    },
    {
      modelName: "Pneumonia Detection",
      description: "Pneumonia Detection Model Utilize our state-of-the-art AI model for rapid and precise identification of pneumonia cases. Seamlessly integrated with image processing, this tool enhances medical diagnostics with efficiency and accuracy.",
      link :"/models/Pneumonia"
    },
    {
      modelName: "Tuberculosis Detection",
      description: "Tuberculosis Detection Model Empower your diagnostics with our advanced AI model designed for tuberculosis detection. Leveraging cutting-edge technology, this tool ensures swift and accurate assessments, enabling timely medical interventions.",
      link :"/models/tuberculosis"
    },

    {
      modelName: "Cataract Detection",
      description: "Efficiently identify cataracts using our state-of-the-art AI model. Integrated seamlessly with advanced image analysis technology, our tool facilitates swift and precise diagnoses in the medical field. Experience the forefront of innovation for rapid and accurate cataract assessments, empowering early detection and enhanced patient care.",
      link :"/models/cataract"
    },

    
    // Add more models as needed
  ];

  return (
    <>
      <Header />
      {/* Your Models Content Goes Here */}
      <div className="bg-gray-100 p-8 flex flex-col items-center" style={{ minHeight: "100vh" }}>
        <h1 className="text-4xl font-bold mb-8 text-green-800">Models Page</h1>
        {/* Render model cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {models.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ModelsPage;
