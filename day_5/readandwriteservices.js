import fs from 'fs/promises';

export async function readJson(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

export async function writeJson(filePath, data) {
  const text = JSON.stringify(data, null, 2);
  await fs.writeFile(filePath, text, 'utf8');
}

export async function addStudent(filePath, student) {
  const list = await readJson(filePath);
  list.push(student);
  await writeJson(filePath, list);
}
