import {
  Web3sdksNftMedia,
  useMetadata,
  useContract,
} from "@web3sdks/react";
import React from "react";
import styles from "../styles/Home.module.css";

type Props = {
  reward: {
    contractAddress: string;
    quantityPerReward: string | number;
  };
};

export default function ERC20RewardBox({ reward }: Props) {
  const { contract: token } = useContract(reward.contractAddress);
  const { data } = useMetadata(token);

  return (
    <div className={styles.nftBox}>
      {data && (
        <>
          {/* @ts-ignore */}
          <Web3sdksNftMedia metadata={data} className={styles.nftMedia} />
          <h3>{data?.name}</h3>
          <p>Amount: {reward.quantityPerReward}</p>
        </>
      )}
    </div>
  );
}
