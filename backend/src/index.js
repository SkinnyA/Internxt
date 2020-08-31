// Before app inizialize, it will import every entorn variable
require('dotenv').config();

const app = require('./app');
require('./database');

// Main function to inizialize the server
async function main(){
    // Make the server listen the port and once inizialized, console.log
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();