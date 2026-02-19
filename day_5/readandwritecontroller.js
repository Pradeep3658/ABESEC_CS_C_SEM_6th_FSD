const path = require('path');
const { readJson, addStudent } = require('./readandwriteservices');

const dataFile = path.join(__dirname, 'student.json');

async function demo() {
  console.log('Reading current students...');
  const before = await readJson(dataFile);
  console.log('Before:', before);

  const newStudent = { id: Date.now(), name: 'New Student', score: 0 };
  const after = await addStudent(dataFile, newStudent);
  console.log('Added student:', newStudent);
  console.log('After:', after);
}

if (require.main === module) demo().catch(err => {
  console.error('Error in demo:', err);
  process.exit(1);
});

module.exports = { demo };
