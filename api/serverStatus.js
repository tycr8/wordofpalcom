const fetch = require('node-fetch');

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const serverIP = 'play.worldofpal.com';
  const serverPort = 8211;

  const url = `http://${serverIP}:${serverPort}/status`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      return new Response('Server is Online', { status: 200 });
    } else {
      return new Response('Server is Offline', { status: 500 });
    }
  } catch (error) {
    return new Response('Error checking server status.', { status: 500 });
  }
}
