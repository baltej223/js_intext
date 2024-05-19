checkFor = {
        "CurlyBrackets": function () {
            document.addEventListener('DOMContentLoaded', function () {
            if (document.body.innerHTML.includes("{{") && document.body.innerHTML.includes("}}")) {
                return 1;
            }
            else {
                return 0;
            }
        });
        },
        "unwantedBrackets": function () {
            if (checkFor.CurlyBrackets) {
                let c1 = document.body.innerHTML.match(/{{/g).length;
                let c2 = document.body.innerHTML.match(/}}/g).length;
                let count;
                c1 == c2 ? count = c1 : c1 > c2 ? console.error("Double Brckets Stated but not ended") : console.error("Double brackets ended but not started");
                if (c1 == c2) {
                    return { "c": c1 };
                }
            }
        },
    };
    extract = {
        "brackets": function () {
            if (checkFor.CurlyBrackets) {
                let i = 1;
                let s = document.body.innerHTML;
                let d_a = [];
                let count = checkFor.unwantedBrackets().c;
                while (i <= count) {
                    let st = s.search("{{") + 1;
                    let ed = s.search("}}") + 1;
                    let Extracted_part = s.slice(st, ed);
                    d_a[i - 1] = "{" + Extracted_part + "}";
                    s = s.replace("{" + Extracted_part + "}", "");
                    i++;
                }
                return d_a;
            }

        },
    };

function _(f) {
console.log("_() run");
        f();
        count = checkFor.unwantedBrackets().c;
        let i = 1;
        while (i<=count){
            let js_inside_brackets_incbr = extract.brackets()[i-1];
            if (js_inside_brackets_incbr.includes("VAR ") || js_inside_brackets_incbr.includes("V ")){
                let Only_var = js_inside_brackets_incbr.replace("VAR ","").replaceAll("{{","").replaceAll("}}","");
                eval(`Only_var_val = ${Only_var}`);
                document.body.innerHTML = document.body.innerHTML.replaceAll(js_inside_brackets_incbr,Only_var_val); 
            }
            else if (js_inside_brackets_incbr.includes("JS ") || js_inside_brackets_incbr.includes("J ")){
                let inside_without_JS_brac = js_inside_brackets_incbr.replace("JS","").replaceAll("{{","").replaceAll("}}","");
                eval(`returned = ${inside_without_JS_brac}`);
                document.body.innerHTML = document.body.innerHTML.replaceAll(js_inside_brackets_incbr,returned);

            }
            else{
                document.body.innerHTML = document.body.innerHTML.replaceAll(js_inside_brackets_incbr,"#Error:1,Type of code in not specified#")
            }
            //let result_of_js_inside = eval(js_inside_brackets.toString());
           
        }
    }
