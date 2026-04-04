import { useState } from "react";
import { GoDownload } from "react-icons/go";

const DownloadCVButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = "/Soumen_Das_CV.pdf";
    link.download = "Soumen_Das_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <button
      onClick={handleDownload}
      className="
        relative overflow-hidden
        flex items-center gap-2
        px-2 py-2 rounded-md
        border border-gray-700
        text-[14px] text-white
        transition-all duration-300
        before:absolute before:inset-0
        before:bg-[#B6F500]
        before:translate-y-full
        before:transition-transform before:duration-300
        hover:before:translate-y-0
        hover:text-black
        group cursor-pointer
      "
    >
      <GoDownload
        className={`
          relative z-10 text-[14px]
          ${isDownloading ? "animate-bounce" : ""}
        `}
      />

      <span className="relative z-10 text-[14px]">
        {isDownloading ? "Downloading..." : "Download CV"}
      </span>
    </button>
  );
};

export default DownloadCVButton;
