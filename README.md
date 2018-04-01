# Description
This repo gives an example of soldity smart contract usage for a real world example. The smart contract located in `./ethereum/contracts` contains a simple factory to create multiple campaign contracts and get data from them. The goal here is to have a Dapp where users can create a funding campaign for a specific product and get funded in ether.

# Usage

1. Clone repo
2. Install dependencies
```shell
npm install
```
3. Deploy the contract
```shell
npm run deploy:contract
```

4. Optional: Exchange your contract public key
In `./ethereum/factory.js` you can use your own smart contract public key received from step 3.

5. Start the next.js app
```shell
npm run dev
```
