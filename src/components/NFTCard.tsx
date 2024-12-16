import { client } from "@/consts/parameters";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { NFT } from "thirdweb";
import { MediaRenderer } from "thirdweb/react";

interface INFTCardProps {
  nft: NFT;
}

export const NFTCard: FC<INFTCardProps> = ({ nft }) => {
  const [hover, setHover] = useState<boolean>(false);
  
  return (
    <Link to={`/nft/${nft.id.toString()}`}>
      <div
        className={`z-10 mx-auto flex h-36 w-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg 
          bg-[#2A3A4A] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-300/20 
          md:h-72 md:w-60 hover-effect ${hover ? 'glow' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative w-full h-[80%] p-2">
          <div className={`w-full h-full ${hover ? 'floating' : ''}`}>
            <MediaRenderer 
              client={client} 
              src={nft.metadata.image} 
              className="rounded-lg pixel-art pixel-transition"
            />
          </div>

          {hover && (
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/70 backdrop-blur-sm pixel-rain">
              <div className="floating">
                <h1 className="text-2xl font-pixel text-yellow-300 mb-2">
                  SupaBald Jesse
                </h1>
              </div>
            </div>
          )}
        </div>
        
        <div className="w-full px-4 pb-2">
          <h2 className="text-lg font-pixel text-blue-400 text-center">
            #{nft.id.toString().padStart(4, '0')}
          </h2>
        </div>
      </div>
    </Link>
  );
};

// Add pixel art styles to index.css
const style = document.createElement('style');
style.textContent = `
  .pixel-art {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
  
  @font-face {
    font-family: 'PixelFont';
    src: url('/fonts/pixel.woff2') format('woff2');
  }
  
  .font-pixel {
    font-family: 'PixelFont', monospace;
  }
`;
