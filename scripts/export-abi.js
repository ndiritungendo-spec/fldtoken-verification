const fs = require("fs");
const path = require("path");
const hre = require("hardhat");

async function main() {
  const contractName = "FluidToken"; // Replace with your contract name
  const contractArtifact = await hre.artifacts.readArtifact(contractName);

  const outputDir = path.join(__dirname, "..", "artifacts-abi");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  fs.writeFileSync(
    path.join(outputDir, `${contractName}.json`),
    JSON.stringify(contractArtifact.abi, null, 2)
  );

  console.log(`ABI saved to ${outputDir}/${contractName}.json`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});