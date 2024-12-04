async function testAttestation(scRound, requestData) {
    const attestationProof = {
        roundId: scRound,
        requestBytes: requestData.abiEncodedRequest,
    };
    const response = await fetch(
        `${process.env.ATTESTER_BASE}/attestation-client/api/proof/get-specific-proof`,
        {
            method: "POST",
            headers: {
                "X-API-KEY": process.env.API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(attestationProof),
        },
    );

    // Verified attestation proof from verifiers API endpoint.
    const responseData = await response.json();
    console.log("Response", responseData);
}