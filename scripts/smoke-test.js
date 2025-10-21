const http = require('http');

const options = { host: '127.0.0.1', port: 5000, path: '/' };

const req = http.get(options, (res) => {
  console.log('STATUS', res.statusCode);
  let d = '';
  res.on('data', (c) => (d += c));
  res.on('end', () => {
    console.log('BODY_PREVIEW\n', d.slice(0, 1000));
    process.exit(0);
  });
});

req.on('error', (e) => {
  console.error('ERROR', e.message);
  process.exit(2);
});
