import { MetaMaskSDK } from '@web3-react/metamask-sdk'
import { initializeConnector } from '@web3-react/core'

import { CHAINS } from '../chains'

export const [metaMaskSDK, hooks] = initializeConnector<MetaMaskSDK>(
  (actions) =>
    new MetaMaskSDK({
      actions,
      options: {
        dappMetadata: {
          name: 'web3-react',
        },
        readonlyRPCMap: Object.keys(CHAINS).reduce<{ [chainId: number]: string }>(
          (accumulator, chainId) => {
            const validURLs: string[] = CHAINS[chainId].urls

            if (validURLs.length) {
              accumulator[chainId] = validURLs[0]
            }

            return accumulator
          },
          {},
        )
      },
    })
)
