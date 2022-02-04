var crypto = require('crypto');
class Sha256{
    constructor(password){
        this.password = password
        this.getEncriptCode()
    }
    getEncriptCode(){

        const strPassword = toString(this.password);
        //Name of the file : sha256-hash.js
        //Loading the crypto module in node.js
        //creating hash object 
        const hash = crypto.createHash('sha256');
        //passing the data to be hashed
        const data = hash.update(strPassword, 'utf-8');
        // console.log(data);
        //Creating the hash in the required format
        const gen_hash= data.digest('hex');
        //Printing the output on the console
        // console.log("hash : " + gen_hash);

        return gen_hash;
    }
}

module.exports = { Sha256 }