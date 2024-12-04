async function getPreparedResponse() {
    const attestationType = toHex("Payment");
    const sourceType = toHex("testBTC");
    // Attestation Request object to be sent to API endpoint
    const requestData = {
        attestationType: attestationType,
        sourceId: sourceType,
        requestBody: {
            transactionId: BTC_TRANSACTION_ID,
            inUtxo: "8",
            utxo: "4",

        },
    };

    const response = await fetch(
        `${ATTESTATION_URL}/verifier/btc/Payment/prepareResponse`,

        {
            method: "POST",
            headers: {
                "X-API-KEY": ATTESTATION_API_KEY as string,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        },
    );
    const data = await response.json();
    console.log("Prepared response:", data);
    return data;
}