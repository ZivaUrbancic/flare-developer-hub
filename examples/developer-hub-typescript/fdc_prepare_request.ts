// Simple hex encoding
function toHex(data) {
    var result = "";
    for (var i = 0; i < data.length; i++) {
        result += data.charCodeAt(i).toString(16);
    }
    return result;
}

const BTC_TRANSACTION_ID =
    "0x" + "01c17d143c03b459707f540fd5ee9f02a730c4cd114f310ef294b706ccf131d1";

async function prepareRequest() {
    const attestationType = toHex("Payment");
    const sourceType = toHex("testBTC");
    // Attestation Request object to be sent to API endpoint
    const requestData = {
        attestationType: attestationType,
        sourceId: sourceType,
        requestBody: {
            transactionId: BTC_TRANSACTION_ID,
            inUtxo: "3",
            utxo: "4",
        },
    };
    const response = await fetch(
        `${ATTESTATION_URL}/verifier/btc/Payment/prepareRequest`,
        {
            method: "POST",
            headers: {
                "X-API-KEY": API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        },
    );
    const data = await response.json();
    console.log("Prepared request:", data);
    return data;
}