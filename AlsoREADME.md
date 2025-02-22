# 🚀

For the first time I wrote main-old.js which was using sevral functions to find the location of '{{' and '}}'. It was big, comparatively hard to understand and nonflexible and sometimes unpredictable. <br/>
Then I wrote main.js which was a reimplementaiton of origial concept but using regex, also at the top of that file I have wrote how I improved so much in only 3 months. 
## Guess what, I once again reimplemented the original concept. 
- Its more efficent, more powerfull, more easy to understand and it only took me 15 lines of PURE JS.
  ### I guess thats improvement.

## The code: 

  ```JS
  let string = "{{ Greetings }}, I am an elf."

function parseString(string,object){
    let stringArr = string.split("{{");
    stringArr.forEach((subString, index)=>{
        if (index==0) return;
        let subStringArr = subString.split("}}");
        let val = object[subStringArr[0].trim()];
        subStringArr[0] = val;
        subString = subStringArr.join("");
        stringArr[index] = subString;
    });
    string = stringArr.join("");
    return string;
}

console.log("Returned String is:\n", 
    parseString(string, {
        "Greetings":"Hello there",
    })
);
// Console:

// Returned String is:
// Hello there, I am an elf.
  ```
