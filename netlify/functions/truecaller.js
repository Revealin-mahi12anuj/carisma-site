exports.handler = async (event) => {

  console.log("========== TRUECALLER CALLBACK ==========");
  console.log("Method:", event.httpMethod);
  console.log("Headers:", JSON.stringify(event.headers, null, 2));
  console.log("Body:", event.body);

  try {

    const googleScriptURL =
      "https://script.google.com/macros/s/AKfycbzvWrSYFA-uWq2R-iKjqUf0MRVPI5VSYdNNcliudaXN_TDg9E2ihpsRl3W0MJEK6X1YXg/exec";

    const payload = {
      name: "Callback Test",
      phone: "9999999999",
      countryCode: "91",
      source: "Truecaller Callback",
      device: event.headers["user-agent"] || ""
    };

    const response = await fetch(googleScriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.text();

    console.log("Google Sheet Response:", result);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: true
      })
    };

  } catch (err) {

    console.error("ERROR:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: err.toString()
      })
    };

  }

};