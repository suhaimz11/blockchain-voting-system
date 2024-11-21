// interact.js
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Interacting with contract using account:", deployer.address);
  
    // Replace with your deployed contract address
    const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  
    const Contract = await ethers.getContractFactory("MyContract");
    const contract = await Contract.attach(contractAddress);
  
    // Example of calling a function from the contract
    const value = await contract.getValue();  // Assuming you have a function like `getValue()`
    console.log("Current value in contract:", value);
  
    // Example of sending a transaction to update the contract state
    const tx = await contract.setValue(42);  // Replace with the function and parameters you need
    await tx.wait();
    console.log("Transaction confirmed, new value set!");
  }
  
  main()
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  