import { validateAndParseAddress } from "starknet";

import { type NftMedia } from "../types";

const requestsHeader = {
  "Content-Type": "application/json",
  "X-API-KEY": process.env.ARK_API_KEY ?? "",
};
const nftApiUrl = process.env.NEXT_PUBLIC_ARK_API_DOMAIN ?? "";

type ArkCollectionsApiResponse = {
  result: Array<{
    contract_address: string;
    contract_type: string;
    image?: string;
    name: string;
    symbol: string;
    tokens_count: number;
  }>;
  total_count: number;
};
export async function getL2ContractsForOwner(address: string) {
  const url = `${nftApiUrl}/v1/owners/${validateAndParseAddress(
    address
  )}/contracts`;

  const contractsResponse = await fetch(url, {
    headers: requestsHeader,
  });
  const contracts =
    (await contractsResponse.json()) as ArkCollectionsApiResponse;

  return contracts;
}

type ArkBatchNftsApiResponse = {
  result: Array<{
    contract_address: string;
    metadata?: { normalized: { image?: string; name?: string } };
    owner: string;
    token_id: string;
  }>;
};
export async function getL2NftsMetadataBatch(
  tokenIds: Array<string>,
  contractAddress: string
) {
  const url = `${nftApiUrl}/v1/tokens/batch`;

  const nftsResponse = await fetch(url, {
    body: JSON.stringify({
      tokens: tokenIds.map((tokenId) => ({
        contract_address: validateAndParseAddress(contractAddress),
        token_id: tokenId,
      })),
    }),
    headers: requestsHeader,
  });

  const nfts = (await nftsResponse.json()) as ArkBatchNftsApiResponse;

  return nfts;
}

type ArkNftsApiResponse = {
  result: Array<{
    contract_address: string;
    metadata: {
      normalized: { image: null | string; name: null | string };
    } | null;
    owner: string;
    token_id: string;
  }>;
  total_count: number;
};
export async function getL2NftsForOwner(
  userAddress: string,
  contractAddress: string | undefined
) {
  const url = `${nftApiUrl}/v1/owners/${validateAndParseAddress(
    userAddress
  )}/tokens${
    contractAddress !== undefined
      ? `?contract_address=${validateAndParseAddress(contractAddress)}`
      : ""
  }`;

  const nftsResponse = await fetch(url, {
    headers: requestsHeader,
  });

  const nfts = (await nftsResponse.json()) as ArkNftsApiResponse;

  return nfts;
}

type ArkCollectionInfoApiResponse = {
  result: { contract_address: string; name: string; symbol: string };
};
export async function getL2ContractMetadata(contractAddress: string) {
  const url = `${nftApiUrl}/v1/contracts/${validateAndParseAddress(
    contractAddress
  )}`;

  const contractInfoResponse = await fetch(url, {
    headers: requestsHeader,
  });

  const contractInfo =
    (await contractInfoResponse.json()) as ArkCollectionInfoApiResponse;

  return contractInfo;
}

export function getMediaObjectFromUrl(image: string | undefined): NftMedia {
  if (image === undefined) {
    return { format: "image", src: undefined };
  }
  const mediaSrc = image.replace("ipfs://", process.env.IPFS_GATEWAY ?? "");
  const mediaFormat = mediaSrc?.split(".").pop() === "mp4" ? "video" : "image";

  return { format: mediaFormat, src: mediaSrc };
}
