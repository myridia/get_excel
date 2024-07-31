import {read} from '../../xlsx/xlsx.mjs';

async function test() {
  console.log("test");
}

export class Get_excel {
  constructor(){
    this.module_name = "Excelreader";
  }

    
/**
@alias module:get_excel
@returns {string} - Get Module Name
@example
* let e = new Get_excel();
* let s = await e.get_module_name();
*/
  get_module_name()
  {
    var workbook = xlsx.XLSX;
    return this.module_name;
  };


/**
@alias module:get_excel
@returns {obj} - Get Excel Read
@example
* let e = new Get_excel()
* let v = await e.get_read();
*/
  get_read()
  {
      return read;
  };   


/**
@alias module:get_excel
@parameters {object} - file object 
@returns {array} - array of all excel sheets
@example
document.querySelector("#input").addEventListener("change", function(){
 var e = new Get_excel();
 let arr = await e.get_array(file);
}, false);


*/
async get_array(file) {
  let rows = [];
  const workbook = XLSX.read(await file.arrayBuffer(), {type: 'binary'});
  for(let i in workbook.Sheets)
  {
    const row = XLSX.utils.sheet_to_json(workbook.Sheets[i],{raw:true,header:1});
    rows = rows.concat(row);
  }
  return rows;
}


    
}



