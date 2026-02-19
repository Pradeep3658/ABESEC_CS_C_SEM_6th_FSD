import { readJsonFile } from "../day5/readAndwrightservies";

const FILE="./students.json";
const updateFile = async (path, id, data) => {
    const students = await readJsonFile(FILE);

    if (!students) {
        console.log("No data found");
        return;
    }

    const studentIndex = students.findIndex((student) => student.id === id);

    if (studentIndex === -1) {
        console.log("Student not found");
        return;
    }   
   students.map((student)=>{
    student.id ===id ? {...student,} : student;
   })

   
}
updateFile(222, {firstName:"abc",lastname :"xyz"});