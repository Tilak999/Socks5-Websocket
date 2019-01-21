const TCPRelay = require('./lib/tcprelay').TCPRelay;
const local = require('commander');
const config = require('./local-config.json')

local
    .version('1.0.1')
    .option('-m --method <method>', 'encryption method, default: aes-256-cfb')
    .option('-k --password <password>', 'password')
    .option('-s --server-address <address>', 'server address')
    .option('-p --server-port <port>', 'server port, default: 8388')
    .option('-b --local-address <address>', 'local binding address, default: 127.0.0.1')
    .option('-l --local-port <port>', 'local port, default: 1080')
    .option('--log-level <level>', 'log level(debug|info|warn|error|fatal)', /^(debug|info|warn|error|fatal)$/i, 'info')
    .option('--log-file <file>', 'log file')
    .parse(process.argv);

var relay = new TCPRelay({
    localAddress: local.localAddress || '127.0.0.1',
    localPort: local.localPort || config.localPort ||1080,
    serverAddress: local.serverAddress || config.serverAddress ||'127.0.0.1',
    serverPort: local.serverPort || config.serverPort ||8388,
    password: local.password || config.password ||'shadowsocks-over-websocket',
    method: local.method || config.method ||'aes-256-cfb'
}, true);
relay.setLogLevel(local.logLevel);
relay.setLogFile(local.logFile);
relay.bootstrap();