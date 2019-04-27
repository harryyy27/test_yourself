const Javascript = [
   {
        'question':'What is JavaScript?',
        'answer': 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language',
        'keywords': ['client-side', 'server-side','object oriented'],
        'link': 'https://en.wikipedia.org/wiki/JavaScript'
    },
    {
        'question':'What are JavaScript Data Types?',
        'answer': 'Number, String, Boolean, Object, Undefined',
        'keywords': ['number', 'string', 'boolean', 'object','undefined'],
        'link': 'https://javascript.info/types'
    },
    {
        'question':'What is the use of isNaN function?',
        'answer': 'isNan function returns true if the argument is not a number otherwise it is false.',
        'keywords': ['returns true', 'is not a number'],
        'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN'
    },
    {
        'question':'What is negative infinity?',
        'answer': 'Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.',
        'keywords': ['divid', 'negative number', 'zero'],
        'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY'
    },
    {
        'question':'What are undeclared and undefined variables?',
        'answer': 'Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered. Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.',
        'keywords': ['do not exist', 'assigned a value'],
        'link': 'https://www.quora.com/What-are-undeclared-and-undefined-variables-in-JavaScript'
    },
    {
        'question':'What are global variables? How are these variable declared and what are the problems associated with using them?',
        'answer': 'Global variables are those that are available throughout the length of the code, that is, these have global scope. The problems that are faced by using global variables are the clash of variable names of local and global scope. Also, it is difficult to debug and test the code that relies on global variables.',
        'keywords': ['global scope', 'clash', 'name'],
        'link': 'https://stackoverflow.com/questions/1841916/how-to-avoid-global-variables-in-javascript'
    },
    {
        'question':'What is a prompt box?',
        'answer': 'A prompt box is a box which allows the user to enter input by providing a text box. Label and box will be provided to enter the text or number.',
        'keywords': ['provid','text box', 'user', 'input'],
        'link': 'https://www.w3schools.com/jsref/met_win_prompt.asp'
    },
    {
        'question':'What is the "this" keyword in JavaScript?',
        'answer': '"This" keyword refers to the object from where it was called.',
        'keywords': ['object','called'],
        'link': ''
    },
    {
        'question':'Explain the working of timers in JavaScript? Also elucidate the drawbacks of using the timer, if any?',
        'answer': 'Timers are used to execute a piece of code at a set time or also to repeat the code in a given interval of time. This is done by using the functions setTimeout, setInterval and clearInterval or by using the date.now(). \nThe setTimeout(function, delay) function is used to start a timer that calls a particular function after the mentioned delay. The setInterval(function, delay) function is used to repeatedly execute the given function in the mentioned delay and only halts when cancelled. The clearInterval(id) function instructs the timer to stop. \nTimers are operated within a single thread, and thus events might queue up, waiting to be executed.',
        'keywords': ['execute', 'time', 'single thread'],
        'link': ''
    },
    {
        'question':'Which symbol is used for comments in Javascript?',
        'answer': '// or /*',
        'keywords': ['//', '/*'],
        'link': ''
    },
    {
        'question':'What is === operator?',
        'answer': '=== is called a strict equality operator which returns true when the two operands are having the same value without any type conversion.',
        'keywords': ['returns true', 'same value'],
        'link': ''
    },
    {
        'question':'Explain how can you submit a form using JavaScript?',
        'answer': 'To submit a form using JavaScript use document.form[0].submit();',
        'keywords': ['submit'],
        'link': 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript'
    },
    {
        'question':'Does JavaScript support automatic type conversion?',
        'answer': 'Yes',
        'keywords': ['yes','=='],
        'link': ''
    },
    {
        'question':'How can the style/class of an element be changed?',
        'answer': '.style followed by .propertyName or use css or styled-components',
        'keywords': ['.style', '.propertyName','css','styled-components'],
        'link': ''
    },
    {
        'question':'What are all the looping structures in JavaScript?',
        'answer': 'for, while, do-while',
        'keywords': ['for', 'while', 'do-while'],
        'link': ''
    },
    {
        'question': 'Explain the difference between "==" and "==="?',
        'answer': '"==" checks only for equality in value whereas "===" is a stricter equality test and returns false if either the value or the type of the two variables are different.',
        'keywords': ['equality','type'],
        'link': 'https://stackoverflow.com/questions/523643/difference-between-and-in-javascript'
    },
    {
        'question':'What would be the result of 3+2+"7"?',
        'answer': '57',
        'keywords': ['57'],
        'link': ''
    },
    {
        'question':'What do mean by NULL in Javascript?',
        'answer': 'The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number and no array object.',
        'keywords': ['no value'],
        'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null'
    },
    {
        'question':'What is the function of delete operator?',
        'answer': 'The delete keyword is used to delete the object property as well as its value.',
        'keywords': ['delete','property','value', 'object'],
        'link': 'https://www.w3schools.com/js/js_object_properties.asp'
    },
    {
        'question':'What is an undefined value in JavaScript?',
        'answer': 'Variable used in the code doesn\'t exist. Variable is not assigned to any value. Property doesn\'t exist',
        'keywords': ['variable doesn\'t exist', 'not assigned', 'property'],
        'link': ''
    },
    {
        'question':'What are all the types of Pop up boxes available in JavaScript?',
        'answer': 'Alert, confirm and prompt',
        'keywords': ['alert','confirm','prompt'],
        'link': 'https://www.w3schools.com/js/js_popup.asp'
    },
    {
        'question':'What is the use of Void(0)?',
        'answer': 'Void(0) is used to prevent the page from refreshing and parameter "zero" is passed while calling. Void(0) is used to call another method without refreshing the page.',
        'keywords': ['prevent','refresh','call','method'],
        'link': 'https://stackoverflow.com/questions/1291942/what-does-javascriptvoid0-mean'
    },
    {
        'question':'How can a page be forced to load another page in JavaScript?',
        'answer': 'location.href',
        'keywords': ['location.href'],
        'link': 'https://www.w3schools.com/js/js_window_location.asp'
    },
    {
        'question':'What is the data type of variables of in JavaScript?',
        'answer': 'All variables in the JavaScript are object data types.',
        'keywords': ['object'],
        'link': ''
    },
    {
        'question':'What is the difference between an alert box and a confirmation box?',
        'answer': 'An alert box displays only one button which is the OK button. But a Confirmation box displays two buttons namely OK and cancel.',
        'keywords': ['ok','cancel'],
        'link': ''
    },
    {
        'question':'What are escapable characters? How do you escape them?',
        'answer': 'Escape characters (Backslash) is used when working with special characters like single quotes, double quotes, apostrophes and ampersands. Place backslash before the characters to make it display.',
        'keywords': ['/'],
        'link': ''
    },
    {
        'question':'What are cookies?',
        'answer': 'Cookies are the small test files stored in a computer and it gets created when the user visits the websites to store information that they need. Example could be User Name details and shopping cart information from the previous visits.',
        'keywords': ['store','information','data','user','needs'],
        'link': 'https://www.w3schools.com/js/js_cookies.asp'
    },
    {
        'question':'Explain what is pop()method in JavaScript?',
        'answer': 'The pop() method is similar as the shift() method but the difference is that the Shift method works at the start of the array. Also the pop() method take the last element off of the given array and returns it. The array on which is called is then altered.',
        'keywords': [],
        'link': ''
    },
    {
        'question':'Mention what is the disadvantage of using innerHTML in JavaScript?',
        'answer': 'Content is replaced everywhere. We cannot use like "appending to innerHTML". Even if you use +=like "innerHTML = innerHTML + \'html\'" still the old content is replaced by html. The entire innerHTML content is re-parsed and build into elements, therefore its much slower. The innerHTML does not provide validation and therefore we can potentially insert valid and broken HTML in the document and break it',
        'keywords': ['append','replace','slower','validation'],
        'link': 'https://www.quora.com/What-are-the-disadvantages-of-using-inner-HTML-in-JavaScript'
    },
    {
        'question':'What is break and continue statements?',
        'answer': 'Break statement exits from the current loop. Continue statement continues with next statement of the loop.',
        'keywords': ['exits','continues','loop'],
        'link': 'https://www.w3schools.com/js/js_break.asp'
    },
    {
        'question':'What are the two basic groups of dataypes in JavaScript?',
        'answer': 'Primitive & reference types. Primitive types are number and Boolean data types. Reference types are more complex types like strings and dates.',
        'keywords': ['primitive','reference'],
        'link': 'https://stackoverflow.com/questions/8790809/whats-the-difference-between-primitive-and-reference-types'
    },
    {
        'question':'How generic objects can be created?',
        'answer': 'var I = new object(); or {};',
        'keywords': ['new object()','{}'],
        'link': ''
    },
    {
        'question':'What is the use of type of operator?',
        'answer': '\'Typeof\' is an operator which is used to return a string description of the type of a variable.',
        'keywords': ['type', 'of', 'variable'],
        'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof'
    },
    {
        'question':'Which keywords are used to handle exceptions?',
        'answer': 'Try… Catch---finally is used to handle exceptions in the JavaScript',
        'keywords': ['try','catch','finally','error'],
        'link': 'https://www.w3schools.com/jsref/jsref_try_catch.asp'
    },
    {
        'question':'What is the use of blur function?',
        'answer': 'Blur function is used to remove the focus from the specified object.',
        'keywords': ['remove','focus'],
        'link': 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur'
    },
    {
        'question':'What are the different types of errors in JavaScript?',
        'answer': 'Load time errors: Errors which come up when loading a web page like improper syntax errors are known as Load time errors and it generates the errors dynamically. Run time errors: Errors that come due to misuse of the command inside the HTML language. Logical Errors: These are the errors that occur due to the bad logic performed on a function which is having different operation.',
        'keywords': ['load time',' run time', 'logical'],
        'link': 'https://www.tutorialspoint.com/javascript/javascript_error_handling.htm'
    },
    {
        'question':'What is the use of Push method in JavaScript?',
        'answer': 'The push method is used to add or append one or more elements to the end of an Array. Using this method, we can append multiple elements by passing multiple arguments',
        'keywords': ['append','end'],
        'link': ''
    },
    {
        'question':'What is unshift method in JavaScript?',
        'answer': 'Unshift method is like push method which works at the beginning of the array. This method is used to prepend one or more elements to the beginning of the array.',
        'keywords': ['add','beginning'],
        'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift'
    },
    {
        'question':'How are object properties assigned?',
        'answer': 'Using square bracket or dot notation',
        'keywords': ['square bracket','dot'],
        'link': ''
    },
    {
        'question':'What is the "Strict" mode in JavaScript and how can it be enabled?',
        'answer': 'Strict Mode adds certain compulsions to JavaScript. Under the strict mode, JavaScript shows errors for a piece of codes, which did not show an error before, but might be problematic and potentially unsafe. Strict mode also solves some mistakes that hamper the JavaScript engines to work efficiently. Strict mode can be enabled by adding the string literal "use strict" above the file.',
        'keywords': ['change','semantic'],
        'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode'
    },
    {
        'question':'What is the way to get the status of a CheckBox?',
        'answer': 'The status can be acquired as follows - alert(document.getElementById("checkbox1").checked); If the CheckBox will be checked, this alert will return TRUE.',
        'keywords': ['checked'],
        'link': ''
    },
    {
        'question':'Explain window.onload and onDocumentReady?',
        'answer': 'The onload function is not run until all the information on the page is loaded. This leads to a substantial delay before any code is executed. onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of the code.',
        'keywords': ['loaded','all'],
        'link': ''
    },
    {
        'question':'How will you explain closures in JavaScript? When are they used?',
        'answer': 'Closure is a locally declared variable related to a function which stays in memory when the function has returned. A closure is the combination of a function and the lexical environment within which that function was declared.',
        'keywords': ['free variable', ' '],
        'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures'
    },
    {
        'question':'How can a value be appended to an array?',
        'answer': 'A value can be appended to an array in the given manner - arr[arr.length] = value; or using concat or push',
        'keywords': ['arr.length','push','concat'],
        'link': ''
    },
    {
        'question':'Explain the for-in loop?',
        'answer': 'The for-in loop is used to loop through the properties of an object.',
        'keywords': ['loop','object','properties'],
        'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in'
    },
    {
        'question':'Describe the properties of an anonymous function in JavaScript?',
        'answer': 'A function that is declared without any named identifier is known as an anonymous function. In general, an anonymous function is inaccessible after its declaration.',
        'keywords': ['name','inaccessible','declar'],
        'link': ''
    },
    {
        'question':'What is the difference between .call() and .apply()?',
        'answer': 'The function .call() and .apply() are very similar in their usage except a little difference. .call() is used when the number of the function\'s arguments are known to the programmer, as they have to be mentioned as arguments in the call statement. On the other hand, .apply() is used when the number is not known. \nThe function .apply() expects the argument to be an array. The basic difference between .call() and .apply() is in the way arguments are passed to the function. Their usage can be illustrated by the given example.',
        'keywords': [''],
        'link': ''
    },
    {
        'question':'Define event bubbling?',
        'answer': 'JavaScript allows DOM elements to be nested inside each other. In such a case, if the handler of the child is clicked, the handler of parent will also work as if it were clicked too.',
        'keywords': ['dom', 'nested','child','parent','handler'],
        'link': ''
    },
    {
        'question':'Is JavaScript case sensitive? Give an example?',
        'answer': 'Yes, JavaScript is case sensitive. For example, a function parseInt is not same as the function Parseint.',
        'keywords': ['yes'],
        'link': ''
    },
    {
        'question':'What boolean operators can be used in JavaScript?',
        'answer': 'The \'And\' Operator (&&), \'Or\' Operator (||) and the \'Not\' Operator (!) can be used in JavaScript. *Operators are without the parenthesis.',
        'keywords': ['&&','||','!'],
        'link': ''
    },
    {
        'question':'How can a particular frame be targeted, from a hyperlink, in JavaScript?',
        'answer': 'This can be done by including the name of the required frame in the hyperlink using the \'target\' attribute.',
        'keywords': [],
        'link': ''
    },
    {
        'question':'Write the point of difference between web-garden and a web-farm?',
        'answer': 'Both web-garden and web-farm are web hosting systems. The only difference is that web-garden is a setup that includes many processors in a single server while web-farm is a larger setup that uses more than one server.',
        'keywords': [],
        'link': ''
    },
    {
        'question':'Explain the role of deferred scripts in JavaScript?',
        'answer': 'By default, the parsing of the HTML code, during page loading, is paused until the script has not stopped executing. It means, if the server is slow or the script is particularly heavy, then the webpage is displayed with a delay. While using Deferred, scripts delays execution of the script till the time HTML parser is running. This reduces the loading time of web pages and they get displayed faster.',
        'keywords': ['HTML parser','reduces loading time'],
        'link': 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script'
    },
    {
        'question':'What are the various functional components in JavaScript?',
        'answer': 'First-class functions: Functions in JavaScript are utilized as first class objects. This usually means that these functions can be passed as arguments to other functions, returned as values from other functions, assigned to variables or can also be stored in data structures. Nested functions: The functions, which are defined inside other functions, are called Nested functions. They are called \'everytime\' the main function is invoked.',
        'keywords': ['first class','nested'],
        'link': 'https://hackernoon.com/javascript-and-functional-programming-pt-2-first-class-functions-4437a1aec217'
    },
    {
        'question':'What is namespacing in JavaScript and how is it used?',
        'answer': 'Namespacing is used for grouping the desired functions, variables etc. under a unique name. It is a name that has been attached to the desired functions, objects and properties. This improves modularity in the coding and enables code reuse.',
        'keywords': ['grouping','function','variable','modul'],
        'link': 'https://javascriptweblog.wordpress.com/2010/12/07/namespacing-in-javascript/'
    },
]

export default Javascript