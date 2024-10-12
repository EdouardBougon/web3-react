import CoinbaseWalletCard from '../components/connectorCards/CoinbaseWalletCard'
import GnosisSafeCard from '../components/connectorCards/GnosisSafeCard'
import MetaMaskCard from '../components/connectorCards/MetaMaskCard'
import MetaMaskSDKCard from '../components/connectorCards/MetaMaskSDKCard'
import NetworkCard from '../components/connectorCards/NetworkCard'
import WalletConnectV2Card from '../components/connectorCards/WalletConnectV2Card'
import ProviderExample from '../components/ProviderExample'

export default function Home() {
  return (
    <>
      <ProviderExample />
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        {/* <MetaMaskCard />
        <WalletConnectV2Card /> */}
        <MetaMaskSDKCard />
        {/* <CoinbaseWalletCard />
        <NetworkCard />
        <GnosisSafeCard /> */}
      </div>
    </>
  )
}
