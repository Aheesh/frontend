// Connect to the metamask wallet
async function connect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("Metamask in sight");
    await ethereum.request({ method: "eth_requestAccounts" });
  }

  async function execute() {}

  module.exports = {
    connect,
    execute,
  };
}
