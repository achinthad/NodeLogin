const md5 = require("blueimp-md5");
class Md5{
    constructor(password){
        this.password = password
        this.getEncriptCode()
    }
    getEncriptCode(){

        const strPassword = toString(this.password);

        const hash = md5(strPassword);

        return hash;
    }
}

module.exports = { Md5 }