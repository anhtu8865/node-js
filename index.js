const AnchorLink = require('anchor-link')
const AnchorLinkConsoleTransport = require('anchor-link-console-transport')
const transport = new AnchorLinkConsoleTransport()
const link = new AnchorLink({
  transport,
  chains: [
    {
      chainId:
        'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12',
      rpcEndpoints: [
        {
          protocol: 'https',
          host: 'testnet.waxsweden.org',
          port: '443',
        },
      ],
    },
  ],
})

async function login() {
  // Perform the login, which returns the users identity
  const identity = await link.login('mydapp')

  // Save the session within your application for future use
  const { session } = identity
  console.log(`Logged in as ${session.auth}`)
}

login()
