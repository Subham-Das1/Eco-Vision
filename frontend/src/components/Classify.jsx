import { Upload, ImageIcon } from "lucide-react";

function Classify() {
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

          <p className="mt-5 text-lg text-[#ffffff] max-w-2xl mx-auto leading-relaxed">
            Take a photo or upload an image of waste material
            for instant AI classification
          </p>
        </div>

        {/* Upload Box */}
        <div
          className="
            mt-14
            border-2
            border-dashed
            border-[#e6c77a]
            rounded-3xl
            bg-[#112716]
            hover:bg-[#204820]
            transition-all
            duration-300
            p-14
            flex
            flex-col
            items-center
            justify-center
            text-center
            cursor-pointer
            shadow-2xl
          "
        >
          {/* Icon */}
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
              animate-pulse
            "
          >
            <Upload
              className="text-[#18361f]"
              size={40}
            />
          </div>

          {/* Upload Text */}
          <h3 className="mt-8 text-3xl font-semibold text-[#f5e7c2]">
            Drag and drop your image
          </h3>

          <p className="mt-3 text-[#cfc8b3]">
            or click to browse from your device
          </p>

          {/* Supported Formats */}
          <div className="flex items-center gap-3 mt-8 text-[#e4cf9a]">
            <ImageIcon size={18} />
            <span>PNG, JPG, JPEG supported</span>
          </div>

          {/* Upload Button */}
          <button
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
        </div>
      </div>
    </section>
  );
}

export default Classify;