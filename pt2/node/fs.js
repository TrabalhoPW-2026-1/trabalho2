const { log } = require('console');
const fs = require('fs');
const path = require('path');

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log('Directory contents:', files);
});

// const base_name = 'example.txt';

// const p = path.join(__dirname, base_name);
// fs.existsSync(p);
// fs.readFileSync(p, 'utf-8');
// // List directory contents
// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     console.error('Error reading directory:', err);
//     return;
//   }
//   console.log('Directory contents:', files);
// });

// log(1)

// // Write to a file
// const content = 'Hello, this is a sample text.';
// fs.writeFile(file_path, content, (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//     return;
//   }
//   console.log('File has been written successfully.');
// });

// log(2)

// // List directory contents
// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     console.error('Error reading directory:', err);
//     return;
//   }
//   console.log('Directory contents:', files);
// });

// // Append to a file
// const additionalContent = '\nThis is additional content.';
// fs.appendFile(base_name, additionalContent, (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//     return;
//   }
//   console.log('Content has been appended successfully.');
// });

// // Read a file
// fs.readFile(base_name, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File contents:', data);
// });

// // Delete a file
// fs.unlink(base_name, (err) => {
//   if (err) {
//     console.error('Error deleting file:', err);
//     return;
//   }
//   console.log('File has been deleted successfully.');
// });

// // Check if a file exists
// fs.access(base_name, fs.constants.F_OK, (err) => {
//   if (err) {
//     console.error('File does not exist:', err);
//     return;
//   }
//   console.log('File exists.');
// });

// // Create a directory
// fs.mkdir('new_directory', (err) => {
//   if (err) {
//     console.error('Error creating directory:', err);
//     return;
//   }
//   console.log('Directory has been created successfully.');
// });

// // Remove a directory
// fs.rmdir('new_directory', (err) => {
//   if (err) {
//     console.error('Error removing directory:', err);
//     return;
//   }
//   console.log('Directory has been removed successfully.');
// });

// // Rename a file
// const new_file_path = './renamed_example.txt';
// fs.rename(base_name, new_file_path, (err) => {
//   if (err) {
//     console.error('Error renaming file:', err);
//     return;
//   }
//   console.log('File has been renamed successfully.');
// });
