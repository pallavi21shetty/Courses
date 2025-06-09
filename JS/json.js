//converting any language to js use string

let json_data = 
`
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        }
    }
}`


// console.log(typeof(json_data));

// let JS_Object_Data = JSON.parse(json_data)

// console.log(typeof(JS_Object_Data));

// for(data in json_data){
//     console.log(data);
    
// }



// console.log(typeof(json_data));

// let JS_Object_Data = JSON.parse(json_data)

// console.log(typeof(JS_Object_Data));

// for(let data of JS_Object_Data){
//     console.log(data);
    
// }



console.log(typeof(json_data));

let JS_Object_Data = JSON.parse(json_data)

console.log(typeof(JS_Object_Data));

JS_Object_Data.forEach(data  => console.log(data.q1));
 