const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const acountBalance = await deployer.getBalance();

    console.log('Deploying contract with account: ', deployer.address);
    console.log('Deployer balance: ', acountBalance.toString());

    const tokenContractFactory = await hre.ethers.getContractFactory("WonderToken");
    const tokenContract = await tokenContractFactory.deploy(1000000);
    await tokenContract.deployed();
    console.log('Contract deployed to: ', tokenContract.address);
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