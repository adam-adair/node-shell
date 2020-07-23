const pwd = require('./pwd.js')
const ls = require('./ls.js')
const cat = require('./cat.js')
const curl = require('./curl.js')

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'pwd') pwd(done)
  if(cmd === 'ls') ls(done)
  if(cmd.startsWith('cat ')) cat(done, cmd.slice(4,cmd.length))
  if(cmd.startsWith('curl ')) curl(done, cmd.slice(5,cmd.length))
})

const done = output => {
  process.stdout.write(output)
  process.stdout.write('\nprompt > ');
}
