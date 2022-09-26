//*Es-6 consepect
/** 
import { ageCal,info } from "./function.js";

//*Es 5 consecpt
 const {age,info,students} = require('./function.js')
console.log(age('Bijoy',1997));

const { writeFileSync } = require('fs');
writeFileSync('data.js','Hi node love you');
//*Es-6
import {appendFileSync, writeFileSync} from 'fs';
writeFileSync('data.txt','hello');

 appendFileSync('data.txt','\n We are Developer')
 // End //
*/
//* readFilesync and read file work
/** 
import { readFileSync,readFile } from 'fs';


// Asyncornas Behaveiour
readFile('./index.html',(err,data) => {
    console.log(data.toString());
})

// Syncornaz Behavoir
let data = readFileSync('./index.html');

console.log(data.toString());

/ End /
*/

//* Rename
/**

import { renameSync,rename } from 'fs';

 rename('./data.html', 'index.html',(err,data) =>{
    console.log(data);
 })
 * End
 */

//*Delete unlink
/**
 import { unlinkSync,unlink } from 'fs';
 unlinkSync('./data.txt')
 * End
 */

//* url module
/**
 import { parse } from 'url';

const url =  parse('http://joysarker.com/shop');

console.log(url);
 * End
 */

//* Path module
/**

import { basename,dirname,extname,parse } from 'path';

const url = extname('http://joysarker.com/box/inex.php');

console.log(url);
 *End
 */

import { createServer, METHODS } from "http";
import {readFileSync} from 'fs';

let page = readFileSync('./db.json');
let data = JSON.parse(page);



createServer((req,res) => {

    res.writeHead(200,{ "content-Type" : "application/json" })
    if (req.url === '/') {
        res.write(page);  
    }else if(req.url == '/deves'){
        res.write( JSON.stringify(data.deves) )
    }else if (req.url == '/Student'){
        res.write(JSON.stringify(data.Student))
    } else if ( req.url == '/Catagory' ){
        res.write(JSON.stringify(data.Catagory))
    }else{
      res.write(JSON.stringify({
        status : 'Data Faile'
      }));
    }
    res.end();

}).listen("5050",() => {
    console.log('Our test server is runing');
});
