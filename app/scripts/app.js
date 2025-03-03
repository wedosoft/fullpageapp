
let client;

init();

async function init() {
  client = await app.initialized();
  client.events.on('app.activated', setupApp);
}

async function setupApp() {
  // Register event listener for the 'Check Call Module' button
  await document.getElementById('check-call-module').addEventListener('click', checkCallModule);
}

// Function to check the call module
async function checkCallModule() {
  try {
    // Invoke the server method to check the call module
    const response = await client.request.invoke('checkCallModule', {});
    
    // Display the result in the call information container
    const callInfoContainer = document.getElementById('call-info-container');
    callInfoContainer.innerHTML = `<p class="fw-type-body">${response.message}</p>`;
  } catch (error) {
    // Handle any errors and display an appropriate message
    const callInfoContainer = document.getElementById('call-info-container');
    callInfoContainer.innerHTML = `<p class="fw-type-body fw-text-danger">Error: ${error.message}</p>`;
  }
}
