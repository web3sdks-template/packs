import { Web3sdksSDK } from "@web3sdks/sdk";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  const sdk = Web3sdksSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

  const packAddress = await sdk.deployer.deployPack({
    name: "Treasure Chests",
    primary_sale_recipient: "0xb371d1C5629C70ACd726B20a045D197c256E1054",
  });

  console.log(`Pack address: ${packAddress}`);
})();
