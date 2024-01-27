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
          return new Response('online', { status: 200 });
        } else {
          return new Response('offline', { status: 500 });
        }
      } catch (error) {
        return new Response('Error checking server status', { status: 500 });
      }
    }

    // Serve static assets for other paths
    return env.ASSETS.fetch(request);
  },
};
