const args = process.argv.length > 2 ?  process.argv.slice(2) : [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('npm', args, opts);
