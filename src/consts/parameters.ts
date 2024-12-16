import { createThirdwebClient, getContract } from "thirdweb";
import { base } from "thirdweb/chains";

/** Configuration for SupaBald Jesse NFT Gallery on Base Chain **/

export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_TEMPLATE_CLIENT_ID,
});

export const nftContract = getContract({
  // SupaBald Jesse NFT Contract Address on Base Chain
  address: "0xB27b1369808c817d61bACA58833232f97aDd28EA",
  chain: base,
  client,
});

// The block explorer for Base chain
export const blockExplorer = "https://basescan.org";
