# Raffle

_⚠️ For education purposes only_

# Getting Started

## Requirements

- git
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- Nodejs
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an output like: `vx.x.x`

## Quickstart

```
git clone https://github.com/ChimenaMantovam/raffle-backend
cd raffle-backend
npm install
```

## Testing

```
truffle test
```

### Test Coverage

```
truffle run coverage
```

## Estimate gas

You can estimate how much gas things cost by running:

```
truffle test
```

And you'll see and output file called `gas-report.txt`

## Local Deployment

If you'd like to run your own local network, you can run:

```
ganache-cli
```

And then **in a different terminal**

```
truffle migrate
```

## Deployment to a testnet or mainnet

1. Setup environment variables

You'll want to set your `INFURA_PROJECT_ID` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file, similar to what you see in `.env.example`.

- `PRIVATE_KEY`: The private key of your account (like from `metamask`).

- `INFURA_PROJECT_ID`: This is url of the rinkeby testnet node you're working with. You can get setup with one for free from `Infura`

2. Deploy

```
truffle migrate --network rinkeby
```

# Verify on etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/myapikey) from Etherscan and set it as an environment variable named `ETHERSCAN_API_KEY`. You can pop it into your `.env`.

Provide an explicit address of the contract. The address is appended with @<contract_address> as follows:

```
truffle run verify Raffle@0x97A73A2Abb3581bc021cA34E8eB851ae26f550aC --network rinkeby
```
