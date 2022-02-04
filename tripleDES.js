// const md5 = require("blueimp-md5");
const crypto = require('crypto');

class TripleDes{
    constructor(password){
        this.password = password
        this.getEncriptCode()
        
    }
    getEncriptCode(){

        const strPassword = toString(this.password);
        let text = strPassword;
        let secretKey = "secretCode";
       
        const md5 = text => {
            return crypto
            .createHash('md5')
            .update(text)
            .digest();
        }

        // const encrypt = (text, secretKey) => {
                secretKey = md5(secretKey);
                console.log(secretKey.toString("base64"));
                secretKey = Buffer.concat([secretKey, secretKey.slice(0, 8)]); // properly expand 3DES key from 128 bit to 192 bit

                const cipher = crypto.createCipheriv("des-ede3", secretKey, "");
                const encrypted = cipher.update(text, "utf8", "base64");

                return encrypted + cipher.final("base64");
                // IQ9tGrJ5onTaMeE22FAcHUYgJti1zeqw
        // };

        // encrypt(text,secretKey);

    }
}

module.exports = { TripleDes }