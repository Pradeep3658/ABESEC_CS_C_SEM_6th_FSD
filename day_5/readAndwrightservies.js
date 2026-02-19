import fs from 'fs/promises';

export const readJsonFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading file from ${filePath}:`, error);
        return null;
    }
};

export const writeJsonFile = async (filePath, data) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`Data successfully written to ${filePath}`);
    } catch (error) {
        console.error(`Error writing file to ${filePath}:`, error);
    }
};