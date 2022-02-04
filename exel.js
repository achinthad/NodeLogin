var spread_sheet = require('spread_sheet');

class ExelWrite{
    constructor(row, filePath,sheetName){
        this.row = row;
        this.filePath = filePath;
        this.sheetName = sheetName;
        this.writeToExel()
    }
    getEncriptCode(){
        spread_sheet.addRow(this.row,this.filePath,this.sheetName,function(err,result){
            console.log(err,result)
        });

    }
}

module.exports = { ExelWrite }



