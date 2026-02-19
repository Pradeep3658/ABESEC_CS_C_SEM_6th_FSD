import { readJsonFile, writeJsonFile } from "../day5/readAndwrightservies";

const FILE = "./students.json";

const deleteStudentById = async (id) => {
    try {
        const students = await readJsonFile(FILE);

        if (!students) {
            console.log("No data found");
            return;
        }

        const initialLen = students.length;
        const updated = students.filter((student) => student.id !== id);

        if (updated.length === initialLen) {
            console.log("Student not found");
            return;
        }

        await writeJsonFile(FILE, updated);
        console.log(`Student with id ${id} deleted`);
    } catch (error) {
        console.error("Error deleting student:", error);
    }
};

deleteStudentById(222);