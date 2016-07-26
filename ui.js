var readlineSync = require('readline-sync'),
i = 0;
while (true) {
	console.log('\x1B[1A\x1B[K', i++)
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '}); 
  if(key === 'z') break;
}
