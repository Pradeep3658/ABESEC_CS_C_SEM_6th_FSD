const { readJson, writeJson } = require("../day_5/readandwriteservices");

const FILE = "./students.json";

const deleteStudentById = async (id) => {
    try {
        const students = await readJson(FILE);

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

        await writeJson(FILE, updated);
        console.log(`Student with id ${id} deleted`);
    } catch (error) {
        console.error("Error deleting student:", error);
    }
};

deleteStudentById(222);