import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const state = async (filePath) => {
    try {
        const stats = await fs.stat(filePath);
        console.log(stats.size);
        console.log(stats.isFile());
        console.log(stats.isDirectory());
    } catch (error) {
        console.log('unable to get stats:', error.message);
    }
}

const target = path.join(__dirname, 'os.js');
state(target);