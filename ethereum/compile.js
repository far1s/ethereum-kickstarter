const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
// deletes the eth/build folder
console.log('Deleting build folder...');
fs.removeSync(buildPath);

console.log('Getting contract by path...')
// get path of contract source
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
// get contract by path
const source = fs.readFileSync(campaignPath, 'utf8');
console.log('Compiling contract...');
// get compiled contract output
const output = solc.compile(source, 1).contracts;
// check or create build folder
fs.ensureDirSync(buildPath);

for (let contract in output) {
    /**
     * outputJsonSync(file, object, [options])
     *
     * Almost the same as writeJsonSync, except
     * that if the directory does not exist, it's created.
     * Alias: outputJSONSync()
     * file <String>
     * object <Object>
     * options <Object>
     * spaces <Number|String> Number of spaces to indent;
     * or a string to use for indentation (i.e. pass '\t'
     * for tab indentation). See the docs for more info.
     * EOL <String> Set EOL character. Default is \n.
     * replacer JSON replacer
     * Also accepts fs.writeFileSync options
     */
    console.log('contract: ', contract);
    fs.outputJsonSync(
        path.resolve(buildPath, `${contract.replace(':', '')}.json`),
        output[contract]
    );
}
