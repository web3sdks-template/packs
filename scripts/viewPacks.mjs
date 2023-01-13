import { Web3sdksSDK } from "@web3sdks/sdk";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  const sdk = Web3sdksSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

  const pack = await sdk.getContract(
    "0x0Aee160411473f63be2DfF2865E81A1D59636C97",
    'pack',
  );

  const packNfts = await pack.getAll();

  console.log(packNfts);
})();
