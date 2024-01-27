export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Check if the request is for the server status endpoint
    if (url.pathname.startsWith('/api/serverStatus')) {
      const serverIP = 'play.worldofpal.com';
      const serverPort = 8123;
      const serverStatusUrl = `http://${serverIP}:${serverPort}/status`;

      try {
        const response = await fetch(serverStatusUrl);

        if (response.ok) {
          console.log('Server is online');
          return new Response('Server is online', { status: 200 });
        } else {
          console.log('Server is offline');
          return new Response('Server is offline', { status: 500 });
        }
      } catch (error) {
        console.error('Error checking server status:', error);
        return new Response('Error checking server status', { status: 500 });
      }
    }

    // Serve static assets for other paths
    return env.ASSETS.fetch(request);
  },
};
