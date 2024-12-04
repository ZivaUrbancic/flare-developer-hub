async function submitRequest() {
    const requestData = await prepareRequest();

    const stateConnector = await ethers.getContractAt(
        flareLib.nameToAbi("IStateConnector", "coston").data,
        flareLib.nameToAddress("StateConnector", "coston"),
    );

    // Call to the StateConnector protocol to provide attestation.
    const tx = await stateConnector.requestAttestations(
        requestData.abiEncodedRequest
    );
    const receipt = await tx.wait();

    // Get block number of the block containing contract call
    const blockNumber = receipt.blockNumber;
    const block = await ethers.provider.getBlock(blockNumber);

    // Get constants from Data Connector smart contract
    const BUFFER_TIMESTAMP_OFFSET = Number(await stateConnector.BUFFER_TIMESTAMP_OFFSET());
    const BUFFER_WINDOW = Number(await stateConnector.BUFFER_WINDOW());

    // Calculate roundId
    const roundId = Math.floor(block!.timestamp - BUFFER_TIMESTAMP_OFFSET) / BUFFER_WINDOW);
    // console.log("scRound:", roundId);
    return roundId;
}