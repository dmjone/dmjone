async function handleRequest(request) {
    let response = await fetch(request);
    response = new Response(response.body, response);
    response.headers.set('Last-Modified', new Date().toUTCString());
    return response;
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});
