import fs from 'fs';

const readFileAsString = (fileName: string) => fs.readFileSync(fileName, { encoding: 'utf8' });

export default readFileAsString;
