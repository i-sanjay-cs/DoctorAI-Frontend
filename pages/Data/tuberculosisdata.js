// pages/tuberculosisdata.js
import React from "react";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";



const TuberculosisDataPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 p-8 flex flex-col items-center" style={{ minHeight: "100vh" }}>
        <h1 className="text-4xl font-bold mb-8 text-green-800">Tuberculosis Detection Model Data</h1>
        <div className="max-w-xl">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p><strong>Model Purpose:</strong> Detection of tuberculosis infection or disease.</p>
            <p><strong>Data Source:</strong> <a href="https://www.kaggle.com/datasets/tawsifurrahman/tuberculosis-tb-chest-xray-dataset" target="_blank" rel="noopener noreferrer">Tuberculosis (TB) Chest X-ray Database</a></p>
            <p><strong>Features Used:</strong> The input features are the chest X-ray images. These images are preprocessed and augmented using techniques like rescaling, rotation, shifting, shearing, zooming, and horizontal flipping.</p>
            <p><strong>Model Architecture:</strong> The base architecture used is DenseNet121, a convolutional neural network (CNN) pre-trained on ImageNet. A custom dense layer is added on top of the base model for binary classification.</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Model Performance</h2>
            <ul>
              <li>Training accuracy - 97.80%</li>
              <li>Test accuracy - 83.33%</li>
              <li>Validation accuracy - 87.66%</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Extra Details</h2>
            <p><strong>Batch Size:</strong> The batch size used for training and validation data generators is set to 32.</p>
            <p><strong>Number of Models:</strong> The code trains an ensemble of 3 models with different architectures or initializations.</p>
            <p><strong>Epochs and Early Stopping:</strong> Each model is trained for 10 epochs, with early stopping applied based on validation loss to prevent overfitting.</p>
            <p><strong>Model Compilation:</strong> The models are compiled using the Adam optimizer with a learning rate of 0.0001 and binary cross-entropy loss function. Accuracy is used as the evaluation metric.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TuberculosisDataPage;
