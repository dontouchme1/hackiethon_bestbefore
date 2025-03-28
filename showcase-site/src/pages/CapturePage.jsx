import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./CapturePage.css";

export default function CapturePage() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setCapturedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="capture-container">
      {capturedImage ? (
        <img src={capturedImage} alt="captured" className="preview-image" />
      ) : (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="webcam-view"
        />
      )}

      <div className="camera-controls">
        <label className="upload-btn">
          📁
          <input type="file" accept="image/*" onChange={handleUpload} hidden />
        </label>
        <button className="shutter-btn" onClick={capture}>📸</button>
      </div>
    </div>
  );
}