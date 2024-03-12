// pages/data.js
import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const DataPage = () => {
  const modelsData = [
    {
      modelName: "Bone Fracture Detection",
      description: "Bone Fracture Detection: Swiftly identifies hand, elbow, and shoulder fractures for prompt medical intervention, enhancing diagnostic precision in orthopedic care. Elevate healthcare with our advanced AI solution.",
      imageUrl: "https://movementortho.com/wp-content/uploads/2019/08/Common-Types-of-Bone-Fractures.png",
      link: "#",
    },
    {
      modelName: "Brain Tumour Detection",
      description: "Brain Tumour Detection Model: Swiftly identify brain tumours with our advanced AI model. Seamlessly integrating with real-time image analysis, this tool aids in efficient medical diagnoses. Experience cutting-edge technology for prompt and accurate assessments.",
      imageUrl: "https://api.parashospitals.com/uploads/2020/06/xBraintumor.jpg.resize.jpg.pagespeed.ic_.AnPHJzshHy.jpg",
      link: "#",
    },
    {
      modelName: "Pneumonia Detection",
      description: "Pneumonia Detection Model: Utilize our state-of-the-art AI model for rapid and precise identification of pneumonia cases. Seamlessly integrated with image processing, this tool enhances medical diagnostics with efficiency and accuracy.",
      imageUrl: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/5/shutterstock_1062330374.jpg",
      link: "#",
    },
    {
      modelName: "Tuberculosis Detection",
      description: "Tuberculosis Detection Model: Empower your diagnostics with our advanced AI model designed for tuberculosis detection. Leveraging cutting-edge technology, this tool ensures swift and accurate assessments, enabling timely medical interventions.",
      imageUrl: "https://etimg.etb2bimg.com/photo/104284391.cms",
      link: "/Data/tuberculosisdata",
    },

    {
      modelName: "cataract Detection",
      description: "Efficiently identify cataracts using our state-of-the-art AI model. Integrated seamlessly with advanced image analysis technology, our tool facilitates swift and precise diagnoses in the medical field. Experience the forefront of innovation for rapid and accurate cataract assessments.",
      imageUrl: "https://www.health.com/thmb/OLIkIKmczEGBTTwczVvKc5KZjGw=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-cataracts-overview-7376241-final-89bc5cb9ef3140678c712449aab4316f.jpg",
      link: "/Data/tuberculosisdata",
    },
    // Add more models as needed
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 p-8 flex flex-col items-center" style={{ minHeight: "100vh" }}>
        <h1 className="text-4xl font-bold mb-8 text-green-800">Data Page</h1>
        {/* Render model cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {modelsData.map((model, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md hover:shadow-lg" style={{ width: "300px", minHeight: "300px" }}>
              <div className="rounded-lg overflow-hidden mb-4">
                <img src={model.imageUrl} alt={model.modelName} className="w-full h-48 object-cover" />
              </div>
              <h2 className="text-lg font-semibold mb-2 text-green-800">{model.modelName}</h2>
              <p className="text-gray-600 mb-4">{model.description}</p>
              <a href={model.link} className="inline-block bg-green-500 text-white px-4 py-2 rounded-md">
                More Details
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataPage;
