exports.handler = async (event) => {
  try {

    const googleScriptURL =
      "https://script.google.com/macros/s/AKfycbzvWrSYFA-uWq2R-iKjqUf0MRVPI5VSYdNNcliudaXN_TDg9E2ihpsRl3W0MJEK6X1YXg/exec";

    // Temporary test data
    const payload = {
      name: "Test User",
      phone: "9999999999",
      countryCode: "91",
      source: "Carisma Website",
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

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: true,
        googleResponse: result
      })
    };

  } catch (err) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: err.toString()
      })
    };

  }
};