const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const acountBalance = await deployer.getBalance();

    console.log('Deploying contract with account: ', deployer.address);
    console.log('Deployer balance: ', acountBalance.toString());

    const NFTContractFactory = await hre.ethers.getContractFactory("GamePunks");
    const NFTContract = await NFTContractFactory.deploy();
    await NFTContract.deployed();
    console.log('Contract deployed to: ', NFTContract.address);

    await NFTContract.safeMint(deployer.address, "QmY2um32yyQGYENz2k78DGcoutk9wUKkpoQxzXnW6bH92b");
    await NFTContract.safeMint(deployer.address, "QmZfYzv4fF6mdJxdrehBzwJ2ZHwnyFnF82bzhsLnMafTS7");

    console.log('Minted 2 NFTs');
}

const runMain = async () => {
    try {
        await main();
        process.exit(0); // exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
}

runMain();