import { client, nftContract } from "@/consts/parameters";
import { Link } from "react-router-dom";
import { ConnectButton } from "thirdweb/react";

export const Header: React.FC = () => {
  return (
    <header className="mx-auto mb-12 flex w-full max-w-7xl items-center justify-between p-4 bg-[#1A2A3A] rounded-b-lg shadow-lg">
      <Link to="/">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-lg overflow-hidden pixel-art bg-[#2A3A4A] p-1">
            <img
              className="h-full w-full object-contain"
              src="/supabald-logo.webp"
              alt="SupaBald Jesse"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-pixel text-yellow-300">
              SupaBald Jesse
            </h1>
            <p className="text-sm font-pixel text-blue-400">
              Pixel Art Collection
            </p>
          </div>
        </div>
      </Link>

      <div className="max-w-xs">
        <ConnectButton 
          client={client}
          theme={{
            type: "dark",
            fontFamily: "PixelFont",
            colors: {
              primaryText: "#FFFFFF",
              secondaryText: "#A0AEC0",
              accentText: "#FFFFFF",
              accentButtonBg: "#0052FF",
              accentButtonText: "#FFFFFF",
              primaryButtonBg: "#2A3A4A",
              primaryButtonText: "#FFFFFF",
              secondaryButtonBg: "#1A2A3A",
              secondaryButtonText: "#A0AEC0",
              secondaryButtonHoverBg: "#2A3A4A",
              connectedButtonBg: "#2A3A4A",
              connectedButtonBgHover: "#1A2A3A",
              borderColor: "#0052FF",
              modalOverlayBg: "#1A2A3A",
              modalBg: "#2A3A4A",
              tooltipBg: "#2A3A4A",
              tooltipText: "#FFFFFF",
              danger: "#FF4444",
              success: "#00CC00",
              inputAutofillBg: "#2A3A4A",
              scrollbarBg: "#1A2A3A",
              tertiaryBg: "#1A2A3A",
              separatorLine: "#2A3A4A",
              skeletonBg: "#2A3A4A",
              selectedTextBg: "#0052FF",
              selectedTextColor: "#FFFFFF",
              secondaryIconColor: "#A0AEC0",
              secondaryIconHoverBg: "#2A3A4A",
              secondaryIconHoverColor: "#FFFFFF"
            }
          }}
        />
      </div>
    </header>
  );
};
