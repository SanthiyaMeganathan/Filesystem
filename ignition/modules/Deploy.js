const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy(); // deploy the contract

  // No need to await upload.deployed() in ethers v6
  console.log("Contract deployed to:", upload.target); // use 'target' instead of 'address'
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
