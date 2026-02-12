import fs from "fs";
const removeDir = (path)=>{
    try {
       fs.rmdirSync(path);
       console.log("dir has been removed");       
    } catch (error) {
        console.log("unable to remove");       
    }
}
removeDir("../day_06");

const readDir = (path)=>{
    try {
       const data = fs.readdirSync(path);
       console.log(data);       
    } catch (error) {
        console.log("unable to read");       
    }
}
readDir("../day_02");


const makeDir = (path)=>{
   try {
    fs.mkdirSync(path);
    console.log("Directory has been created successfully.");    
   } catch (error) {
    console.log("unable to make dir");   
   }
}


