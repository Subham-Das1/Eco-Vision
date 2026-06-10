import { Upload, ImageIcon } from "lucide-react";
import { useRef, useState } from "react";
import axios from "axios";

function Classify() {
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      setResult(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please choose an image first");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setResult(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section
      id="classify"
      className="w-full flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-4xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#e6c77a]">
            Upload Your Waste
          </h2>

          <p className="mt-5 text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Take a photo or upload an image of waste material
            for instant AI classification
          </p>
        </div>

        {/* Main Container */}
        <div
          className="
            mt-14
            border-2
            border-dashed
            border-[#e6c77a]
            rounded-3xl
            bg-[#112716]
            transition-all
            duration-300
            p-14
            flex
            flex-col
            items-center
            justify-center
            text-center
            shadow-2xl
          "
        >

          {/* Hidden Input */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Upload UI */}
          {!result && (
            <>
              <div
                className="
                  w-24
                  h-24
                  rounded-full
                  bg-[#e4cf9a]
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <Upload
                  className="text-[#18361f]"
                  size={40}
                />
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-[#f5e7c2]">
                Drag and drop your image
              </h3>

              <p className="mt-3 text-[#cfc8b3]">
                or click to browse from your device
              </p>

              <div className="flex items-center gap-3 mt-8 text-[#e4cf9a]">
                <ImageIcon size={18} />
                <span>PNG, JPG, JPEG supported</span>
              </div>

              {!selectedFile ? (
                <button
                  onClick={handleChooseFile}
                  className="
                    mt-8
                    bg-transparent
                    hover:bg-[#e6c77a]
                    hover:text-[#18361f]
                    text-[#e6c77a]
                    border-2
                    border-dashed
                    border-[#e6c77a]
                    px-8
                    py-4
                    rounded-2xl
                    font-bold
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Choose File
                </button>
              ) : (
                <>
                  {/* Selected File */}
                  <div className="mt-8">
                    <p className="text-[#e6c77a] text-sm uppercase tracking-wider">
                      Selected Image
                    </p>

                    <p className="text-white mt-2 font-medium break-all">
                      {selectedFile.name}
                    </p>
                  </div>

                  {/* Preview */}
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="preview"
                    className="
                      mt-6
                      w-64
                      h-64
                      object-cover
                      rounded-2xl
                      border
                      border-[#e6c77a]
                    "
                  />

                  {/* Upload Button */}
                  <button
                    onClick={handleUpload}
                    disabled={loading}
                    className="
                      mt-8
                      bg-[#e6c77a]
                      text-[#18361f]
                      px-8
                      py-4
                      rounded-2xl
                      font-bold
                      shadow-lg
                      transition-all
                      duration-300
                      hover:scale-105
                      disabled:opacity-50
                    "
                  >
                    {loading
                      ? "Classifying..."
                      : "Classify Waste"}
                  </button>
                </>
              )}
            </>
          )}

          {/* Result UI */}
          {result?.success && (
            <>
              <button
                onClick={handleReset}
                className="
                  mb-8
                  bg-transparent
                  border
                  border-[#e6c77a]
                  text-[#e6c77a]
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  hover:bg-[#e6c77a]
                  hover:text-[#18361f]
                  transition-all
                  duration-300
                "
              >
                ♻️ Analyze Another Image
              </button>

              <div
                className="
                  w-full
                  max-w-2xl
                  bg-[#18361f]
                  border
                  border-[#e6c77a]
                  rounded-3xl
                  p-8
                  text-left
                "
              >
                <h3 className="text-3xl font-bold text-[#e6c77a]">
                  Classification Result
                </h3>

                {/* Waste Type */}
                <div className="mt-8">
                  <p className="text-gray-400 text-sm uppercase tracking-wider">
                    Waste Type
                  </p>

                  <p className="text-4xl font-bold text-white mt-2">
                    {result.prediction}
                  </p>
                </div>

                {/* Confidence */}
                <div className="mt-8">
                  <p className="text-gray-400 text-sm uppercase tracking-wider">
                    Confidence Score
                  </p>

                  <p className="text-2xl font-semibold text-[#e6c77a] mt-2">
                    {result.confidence}%
                  </p>

                  <div className="mt-4 w-full bg-[#28402c] rounded-full h-3">
                    <div
                      className="bg-[#e6c77a] h-3 rounded-full"
                      style={{
                        width: `${result.confidence}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Instructions */}
                <div className="mt-10 border-t border-[#2d5b36] pt-6">
                  <h4 className="text-xl font-semibold text-[#e6c77a]">
                    Recommended Actions
                  </h4>

                  <ul className="mt-4 space-y-4">
                    {result.instructions?.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-white"
                      >
                        <span className="text-[#e6c77a] font-bold">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Note */}
                <div className="mt-10 border-t border-[#2d5b36] pt-6">
                  <p className="text-gray-300 leading-relaxed">
                    This classification is generated using Eco Vision's
                    AI-powered waste recognition model. Please follow
                    local waste management and recycling guidelines
                    for best disposal practices.
                  </p>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
}

export default Classify;