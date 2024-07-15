import '@dialectlabs/blinks/index.css';
import { Blink } from "@dialectlabs/blinks";
import { useAction } from '@dialectlabs/blinks/react';

// const RPC = 'https://api.devnet.solana.com';
const RPC = 'https://api.mainnet-beta.solana.com';

// needs to be wrapped with <WalletProvider /> and <WalletModalProvider />
export const Blinks = () => {
    const actionApiUrl = 'https://tiplink.io/api/blinks/donate/0.0001?dest=HXtBm8XZbxaTt41uqaKhwUAa6Z1aPyvJdsZVENiWsetg';
    
    // useAction initiates registry, adapter and fetches the action.
    const { action } = useAction(actionApiUrl, {
        rpcUrlOrConnection: RPC
    });

    return action ? <Blink action={action} websiteText={new URL(actionApiUrl).hostname} /> : null;
}