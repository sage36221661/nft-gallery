import { Footer } from "@/components/Nav/Footer";
import { Header } from "@/components/Nav/Header";
import { NFTCard } from "@/components/NFTCard";
import { nftContract } from "@/consts/parameters";
import useDebounce from "@/hooks/useDebounce";
import { SearchIcon } from "@/icons/SearchIcon";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NFT } from "thirdweb";
import { getNFT, getNFTs, totalSupply } from "thirdweb/extensions/erc721";
import { useReadContract } from "thirdweb/react";

function App() {
  const nftsPerPage = 30;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounce(search, 500);
  const { data: nfts, isLoading } = useReadContract(getNFTs, {
    contract: nftContract,
    count: nftsPerPage,
    start: (page - 1) * nftsPerPage,
  });
  const { data: totalCount } = useReadContract(totalSupply, {
    contract: nftContract,
  });
  const [nft, setNft] = useState<NFT | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const fetchNFT = async () => {
    const nft = await getNFT({
      contract: nftContract,
      tokenId: BigInt(debouncedSearchTerm),
    });
    setNft(nft!);
    setIsSearching(false);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetchNFT();
    } else {
      setNft(null);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="m-0 bg-[#0A1A2A] p-0 font-inter text-neutral-200 min-h-screen web3-bg">
      <Header />

      <Helmet>
        <title>SupaBald Jesse NFT Collection</title>
        <meta name="description" content="Explore the unique pixel art collection of SupaBald Jesse NFTs" />
      </Helmet>

      <div className="z-20 mx-auto flex min-h-screen w-full flex-col px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <div className="floating">
            <h1 className="text-4xl font-pixel text-yellow-300 mb-4">
              SupaBald Jesse Collection
            </h1>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#2A3A4A] p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-pixel text-blue-400 mb-4">About the NFT</h2>
                <p className="text-white/90 leading-relaxed">
                  This NFT, a derivative of CryptoPunk 8566, is exclusive to builders at the Onchain Summer Buildathon—for their commitment to creating based experiences and holding Jesse Pollak (Creator, Base) to his promise of shaving his head when Base hits 10 billion in TVL.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-8 flex h-12 w-96 max-w-full items-center rounded-lg border border-yellow-300/20 
          bg-[#2A3A4A] px-4 text-xl text-white shadow-lg hover-effect">
          <SearchIcon className="text-yellow-300" />
          <input
            type="number"
            onChange={(e) => {
              if (
                e.target.value.match(/^[0-9]*$/) &&
                Number(e.target.value) > 0
              ) {
                setSearch(e.target.value);
              } else {
                setSearch("");
              }
            }}
            placeholder="Search by Token ID"
            className="w-full bg-transparent px-4 text-white font-pixel focus:outline-none placeholder:text-white/50"
          />
        </div>

        {isSearching ? (
          <div className="mx-auto !h-60 !w-60 animate-pulse rounded-lg bg-[#2A3A4A] glow" />
        ) : null}

        {search && nft && !isSearching ? (
          <NFTCard nft={nft} key={nft.id.toString()} />
        ) : null}

        {isLoading && (
          <div className="mx-auto flex flex-wrap items-center justify-center gap-8">
            {Array.from({ length: nftsPerPage }).map((_, i) => (
              <div
                className="!h-60 !w-60 animate-pulse rounded-lg bg-[#2A3A4A]"
                key={i}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        )}

        {nfts && !search && (
          <div className="flex flex-wrap items-center justify-center gap-8 pixel-rain">
            {nfts.map((nft) => (
              <NFTCard nft={nft} key={nft.id.toString()} />
            ))}
          </div>
        )}

        {!search && (
          <Footer
            page={page}
            setPage={setPage}
            nftsPerPage={nftsPerPage}
            totalCount={totalCount ? Number(totalCount) : undefined}
            loading={isLoading}
          />
        )}
      </div>
    </div>
  );
}

export default App;
