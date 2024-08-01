/*
I have rebuilt this whole thing using regex, i wansnt using it before. 
Its much more better, more smoother, fexible, easy to understand, 
and it only took me less than 1 hr to build it now, seems like a lot of improvement 
(in abt 3 months). 
If you want to check out old code goto ./main-old.js but it wont be useful
OKay ByE

Author : BALTEJ SINGH
*/

function _(propFunction) {
    if (typeof propFunction == 'function') {
        propFunction();
    }
    else if (typeof propFunction == "object") {
        passedObj = propFunction;
        pObj = propFunction;
        obj = propFunction;
        varObj = propFunction;
        vObj = propFunction;
    }
    else if (typeof propFunction == "string") {
        eval(propFunction);
    }
    else {
        console.error("Data passed is not allowed, only function, object and string is allowed.");
    }
}
function ready(callback) {
    if (document.readyState != "loading") {
        callback();
    }
    else {
        document.addEventListener("DOMContentLoaded", () => {
            callback();
        })
    }
}
let tools = {
    startsWith: (string, spaceChar = ' ') => {
        try {
            string = string.split(spaceChar);
            return string[0];
        }
        catch (e) {
            console.error("an error occured, Error: ", e);
        }
    }
}
ready(
    () => {
        document.body.innerHTML = document.body.innerHTML.replace(/\{\{(.*?)\}\}/gs, (code) => {
            code = code.replace("{{","").replace("}}","").replace("\n","");
            let typeOfBlock = tools.startsWith(code);
            if (typeOfBlock.toLowerCase() == "js") {
                let result = eval(code.replace(typeOfBlock,""));
                if (result != undefined) {
                    return result;
                }
                else {
                    return "";
                }
            }
            else if (typeOfBlock.toLowerCase() == "var") {
                code = code.replace(typeOfBlock,"");
                eval(`var value = ${code}`);
                if (value != undefined) {
                    return value;
                }
                else {
                    return '';
                }
            }
            else {
                return "No type of code block defined"
            }
        });
    }
);
