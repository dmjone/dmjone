addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === 'POST') {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const key = `contact-form-${Date.now()}`;
    const value = JSON.stringify({ name, email, message });

    const kv = await new WorkersKV();
    await kv.put(key, value);

    return new Response('Form received', { status: 200 });
  } else {
    return new Response('Only POST requests are accepted', { status: 400 });
  }
}
