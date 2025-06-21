const mysql =require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'test',
      port: 3307
});

connection.connect((err)=>{
    if(err){
        console.error('error connecting to MYSQL server:', err);
        return;
    }
    console.log('Connected to MYSQL server');

    connection.query(
        'SELECT * FROM user',
        (err,results, fields) =>{
            if(err){
                console.error('Error quering databases:',err);
                return;
            }
            console.log('query results:', results);
            connection.end();
            console.log('Disconnected from MYSQL server');
        }
    ) 
})