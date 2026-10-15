
async function scan(e) {
  e.preventDefault();

  if (!text.trim()) {
    alert("Please enter a message or URL to scan.");
    return;
  }

  // Show alert when the user clicks Analyse threat.
  alert("Scam analysis is in progress. Please wait...");

  setBusy(true);
  setError("");
  setResult(null);

  try {
    const { data } = await axios.post(
      `${API}/api/scan`,
      {
        text: text.trim(),
        scan_type: type,
      },
      {
        timeout: 15000,
      },
    );

    setResult(data);
  } catch (err) {
    const detail = err?.response?.data?.detail;

    setError(
      typeof detail === "string"
        ? detail
        : `Could not reach the API (${
            err.code || err.response?.status || "network error"
          }). Confirm backend is running at ${API}.`,
    );
  } finally {
    setBusy(false);
  }
}
