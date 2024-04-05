const fs = require('fs');

(async () => {
	fs.rmSync(__dirname + '/../dist', { recursive: true, force: true });
})();
