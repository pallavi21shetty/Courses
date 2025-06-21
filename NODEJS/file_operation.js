const fs= require('fs');


// let read_file =(file)=> {
//     fs.readFile(file, 'utf8', (err,data)=>{
//     if(err){
//         console.error('error reading file:',err);
//         return;
//     }
//     console.log('file content:');
//     console.log(data);
//     });
// }


let write_file=(file,contentToWrite) => {
    fs.writeFile(file, contentToWrite, (err) =>{
        if(err){
            console.error('Error writing to file:',err);
            return;
        }
        console.log('content successfully written to file');  
    });
}

let append_file = (file, contentToAppend) => {
    fs.appendFile(file, contentToAppend, (err) =>{
        if(err){
            console.error('Error appending to file:',err);
            return;
        }
        console.log('content successfully appended to file');
    })
}


let delete_file =(file) => {
    fs.unlink(file, (err) => {
        if (err){
            console.error('Error deleting file:',err);
            return;
        }
        console.log('File deleted successfully.'); 
    })
}



let file_name1 = "one.txt"
let file_name2 = "two2.txt"
let some_content = "\n\n Great Day!!"

// read_file(file_name1)
// write_file(file_name2, some_content)
// append_file(file_name2, some_content)
delete_file(file_name2)