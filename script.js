function generateNonce() {
    return crypto.randomUUID().replace(/-/g, "");
}

function launchTruecaller() {

    const nonce = generateNonce();

    const url =
        "truecallersdk://truesdk/web_verify?" +
        "type=btmsheet" +
        "&requestNonce=" + nonce +
        "&partnerKey=hHCe51b0dd747cd5c4cf28e54dfd0dfea5cd7" +
        "&partnerName=Carisma" +
        "&lang=en" +
        "&privacyUrl=" + encodeURIComponent("https://carisma-github.netlify.app/privacy.html") +
        "&termsUrl=" + encodeURIComponent("https://carisma-github.netlify.app/terms.html") +
        "&loginPrefix=placeorder" +
        "&loginSuffix=verifymobile" +
        "&ctaPrefix=continuewith" +
        "&btnShape=round" +
        "&skipOption=manualdetails";

    window.location.href = url;
}