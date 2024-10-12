import { useEffect, useState } from 'react'

import { hooks, metaMaskSDK } from '../../connectors/metaMaskSDK'
import { Card } from '../Card'

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function MetaMaskSDKCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  const [error, setError] = useState(undefined)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMaskSDK.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask')
    })
  }, [])

  return (
    <Card
      connector={metaMaskSDK}
      activeChainId={chainId}
      isActivating={isActivating}
      isActive={isActive}
      error={error}
      setError={setError}
      accounts={accounts}
      provider={provider}
      ENSNames={ENSNames}
    />
  )
}
