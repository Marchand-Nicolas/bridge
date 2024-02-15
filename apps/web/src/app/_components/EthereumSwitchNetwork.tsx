import { Button, Dialog, Typography } from "design-system";
import { useEffect, useState } from "react";
import { useAccount, useSwitchChain } from "wagmi";

export default function EthereumSwitchNetwork() {
  const { chainId } = useAccount();
  const { chains, switchChain } = useSwitchChain();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (chainId !== chains[0].id && chainId !== undefined) {
      setIsOpen(true);
      return;
    }
    setIsOpen(false);
  }, [chainId, chains]);

  return (
    <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
      <svg
        fill="none"
        height="100"
        viewBox="0 0 101 100"
        width="101"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M84.8034 18.8759L81.7691 36.585L88.8057 33.0811L88.5358 19.1569C88.517 18.1858 87.7614 17.3889 86.7926 17.3185C85.8276 17.2483 84.9669 17.9222 84.8034 18.8759Z"
          fill="#FFABA7"
          stroke="#740D1D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M98.2141 48.0583C98.7582 52.3212 98.2062 56.2724 96.9256 59.2041C95.6357 62.1571 93.6969 63.9094 91.5355 64.2006C89.3742 64.4918 87.0612 63.3124 85.0739 60.801C83.1009 58.3076 81.5761 54.6362 81.0321 50.3733C80.488 46.1104 81.0399 42.1592 82.3206 39.2275C83.6105 36.2745 85.5492 34.5222 87.7106 34.231C89.872 33.9398 92.1849 35.1192 94.1722 37.6306C96.1453 40.124 97.67 43.7954 98.2141 48.0583Z"
          fill="#FFABA7"
          stroke="#740D1D"
          strokeWidth="2"
        />
        <path
          d="M94.1669 51.0171C95.0301 70.0404 77.2347 86.301 54.4198 87.3362C31.6049 88.3714 12.41 73.7892 11.5469 54.7658C10.6837 35.7425 31.3594 19.2121 54.419 18.4467C80.5781 17.5783 93.3038 31.9938 94.1669 51.0171Z"
          fill="#FFF6F5"
        />
        <path
          d="M83.2151 74.4929C48.5365 90.7229 29.6599 73.4031 23.8996 64.4513C22.375 67.5782 19.9088 70.3168 18.4688 71.4844C29.0156 87.1094 62.1978 95.2767 83.2151 74.4929Z"
          fill="#FFABA7"
        />
        <path
          d="M93.168 51.0625C93.9987 69.3718 76.8153 85.3191 54.3745 86.3373C31.9336 87.3555 13.3766 73.0299 12.5458 54.7206C12.1322 45.6039 16.8772 36.9938 24.6513 30.5285C32.422 24.066 43.1419 19.8216 54.4522 19.4462C67.3436 19.0183 76.7907 22.3574 83.1119 28.0175C89.4325 33.6772 92.746 41.7628 93.168 51.0625Z"
          stroke="#740D1D"
          strokeWidth="2"
        />
        <path
          d="M87.1844 44.0899C88.3652 57.0714 79.873 73.6839 64.3435 76.136C44.7273 79.2333 29.0475 61.1308 28.1809 49.8647C27.3144 38.5986 39.8955 29.0274 58.5775 27.8598C77.2596 26.6921 85.5366 33.5244 87.1844 44.0899Z"
          fill="#F8545C"
        />
        <path
          d="M81.3915 63.8312C47.0632 76.5584 31.8394 45.2574 39.5458 34.2817C33.9023 35.2937 25.977 45.0239 30.2048 54.7152C37.7944 72.1129 63.7813 86.7189 81.3915 63.8312Z"
          fill="#ED424C"
        />
        <path
          d="M86.1917 44.2156C86.7519 50.4642 84.9863 57.6269 81.1904 63.5216C77.3955 69.415 71.618 73.9751 64.1908 75.1479C54.7418 76.6399 46.2016 73.0344 39.8825 67.6256C33.531 62.1892 29.5844 55.072 29.1777 49.7847C28.7781 44.5894 31.4616 39.6843 36.6385 35.8808C41.8208 32.0733 49.4389 29.4329 58.6366 28.8581C67.8661 28.2812 74.37 29.6931 78.737 32.4236C83.0568 35.1246 85.4004 39.1878 86.1917 44.2156Z"
          stroke="#740D1D"
          strokeWidth="2"
        />
        <path
          d="M2.18851 34.5618L9.24341 51.0991L14.4421 46.5588L5.46846 32.8092C4.93583 31.9931 3.86501 31.7241 3.00994 32.1916C2.16693 32.6525 1.81151 33.6781 2.18851 34.5618Z"
          fill="#FFF6F5"
        />
        <path
          d="M10.0051 45.3106L3.23289 31.8828C0.804222 33.284 1.71496 34.1013 7.66988 47.7626L10.0051 45.3106Z"
          fill="#FFABA7"
        />
        <path
          d="M2.18851 33.7807L9.24341 50.3181L14.4421 45.7778L5.46846 32.0282C4.93583 31.2121 3.86501 30.9431 3.00994 31.4106C2.16693 31.8715 1.81151 32.897 2.18851 33.7807Z"
          stroke="#740D1D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <ellipse
          cx="10.4176"
          cy="16.1063"
          fill="#FFF6F5"
          rx="10.4176"
          ry="16.1063"
          transform="matrix(0.991045 -0.133531 0.1266 0.991954 2.34082 46.1332)"
        />
        <path
          d="M8.83778 47.3764C5.91866 55.3163 10.3517 74.4846 23.4292 69.6974C15.7294 88.3133 -4.34857 63.2646 8.83778 47.3764Z"
          fill="#FFABA7"
        />
        <path
          d="M24.0375 59.4613C24.5798 63.7106 23.95 67.6617 22.5455 70.6059C21.1359 73.5608 19.019 75.38 16.6167 75.7036C14.2143 76.0273 11.7125 74.8305 9.60904 72.3489C7.51324 69.8764 5.91325 66.2256 5.37093 61.9764C4.82861 57.7271 5.45839 53.776 6.86287 50.8318C8.27251 47.8769 10.3894 46.0577 12.7917 45.7341C15.1941 45.4104 17.6959 46.6072 19.7994 49.0888C21.8952 51.5613 23.4951 55.2121 24.0375 59.4613Z"
          stroke="#740D1D"
          strokeWidth="2"
        />
        <path
          d="M44.9554 70.6984C52.9994 59.6501 72.8351 57.1045 80.2774 66.0036"
          stroke="#740D1D"
          strokeWidth="2.20312"
        />
        <path
          d="M37.2188 43.988L55.7642 50.2199C56.7315 50.5449 56.775 51.897 55.8305 52.2836L44.6595 56.855"
          stroke="#740D1D"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M78.0039 38.8645L64.056 49.0673C63.3285 49.5995 63.6532 50.7495 64.5517 50.8225L75.1783 51.6857"
          stroke="#740D1D"
          strokeLinecap="round"
          strokeWidth="1.94602"
        />
      </svg>

      <Typography className="mt-6" component="h3" variant="heading_light_xxs">
        Wrong Network
      </Typography>
      <Typography className="mx-7 mt-4" component="p" variant="body_text_14">
        The bridge is not available on this chain.
        <br />
        You must switch to Ethereum Mainnet to transfer your Nfts.
      </Typography>
      <div className="w-full px-7">
        <Button
          className="mt-6 w-full"
          onClick={() => switchChain({ chainId: chains[0].id })}
          size="small"
        >
          Switch network
        </Button>
      </div>
    </Dialog>
  );
}
