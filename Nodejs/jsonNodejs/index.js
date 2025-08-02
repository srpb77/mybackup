const fs= require('fs');

const Biodata={
name:"santosh",
age:42,
designation:"software developer",


};
const jsonData=JSON.stringify(Biodata);

//console.log(jsonData);

const objdata=JSON.parse(jsonData);

//console.log(objdata);

fs.writeFile('json1.json',jsonData,(err)=>{

console.log("done");

});

fs.readFile('json1.json','utf-8',(err,data)=>{

const origdata =JSON.parse(data);

console.log(origdata);

});