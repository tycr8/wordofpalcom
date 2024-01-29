/* import { connect } from 'cloudflare:sockets';

  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Check if the request is for the server status endpoint
    if (url.pathname.startsWith('/api/serverStatus')) {
      
      const serverIP = 'play.worldofpal.com';
      const serverPort = 8211;
      
      const address = `${serverIP}:${serverPort}`;
  
      try {
        
        const socket = connect(address);
  
        const writer = socket.writable.getWriter()
        const encoder = new TextEncoder();
        const encoded = encoder.encode(url.pathname + "\r\n");
        await writer.write(encoded);

        console.log('Server is online');
        return new Response("online: " + socket.readable, { headers: { status: 200, "Content-Type": "text/plain" } });
        
      } catch (error) {

        console.log('Server is offline');
        return new Response("onffline: " + error, { status: 500, "Content-Type": "text/plain" });
      }
    }
  }
};
*/
