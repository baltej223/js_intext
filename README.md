# JS Intext
## Discription : You can use this small framework to write Js as Normal text.
Example:
```
<body>
{{JS Math.PI}}
</body>
```
Output:
```3.141592653589793```
## Usage:
Put the following link in your Head tag.
```
<script src="https://baltej223.github.io/js_intext/main.js"></script>
```
So basically it is used to write JS as normal text in body tag and the value that written js is going to return will be printed on orginal place. 
You have to specify what you have written in double brackets is JS or is some Variable by adding JS/VAR as a indentifier in the begining. For example
```
{{JS Math.random()}}
{{VAR someVariable}}
<script>
_(function(){
someVariable = "value of some variable";
});
</script>
```
What will be printed:
```
0.057917814022973246value of some variable
```
As you have already seen above, only the variable written in a function which is passed as a parameter of function ```_()``` and is written in double brackets as ```{{VAR someHere}}}``` will be printed and if variable written in double brackets dont exist, then the script will not work and can possible misbehave.

Any function written in ```_()``` function, will be invoked even before DOM content has loaded.
Basically 
```
_(function(){alert("hello")});
```
will behave same as 
```
alert("hello");
```
Feel free to change something to make this code run better. I know this code have bugs and is barely running by god's grace but I will try to optimise it afterwards ```basically i am procrastinating```
An example project made by me to demostrate its powers:
https://baltej223.github.io/js_intext/example.html

Bye for now, see you soon again!
some of bugs to rectify : 
```<script>//{{JS alert("also works")}}
</script>```
```Made and organised by: Baltej Singh```
