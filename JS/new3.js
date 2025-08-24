function convert(str){
    let result=""
    let word =""
    for(let i= 0; i<=str.length;i++){
        let ch= str[i] || " ";
        if(ch!==" "){
            word +=ch;
        }else{
            if(word.length>0){
                let firstchar = word[0];
                if(firstchar>='a'&&firstchar<='z'){
                    firstchar=String.fromCharCode(firstchar.charCodeAt(0)-32)
                }
                let lastchar=word[word.length-1];
                if(lastchar>='a'&&lastchar<='z'){
                    lastchar=String.fromCharCode(lastchar.charCodeAt(0)-32)
                }
                let newword ="";
                for(let j=0;j<word.length;j++){
                    if(j===0){
                        newword+=firstchar
                    }else if(j===word.length-1){
                        newword+=lastchar
                    }
                    else{
                        newword+=word[j]
                    }
                }
                result+=newword+" ";
                word="";
            }

        }
}
let finalresult="";
for(let i=0;i<=result.length-1;i++){
    finalresult+=result[i]
}
return finalresult;
}
let str ="hello world this is a test"
console.log(convert(str));
