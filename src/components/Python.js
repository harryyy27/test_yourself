
const Python = [
    {
        'question':'What Is Python, What Are The Benefits Of Using It?',
        'answer': 'Benefits Of Python - Programming Python is a dynamic-typed language. It means that you don’t need to mention the data type of variables during their declaration. It allows to set variables like var1=101 and var2 =” You are an engineer.” without any error. Python supports object orientated programming as you can define classes along with the composition and inheritance. It doesn’t use access specifiers like public or private). Functions in Python are like first-class objects. It suggests you can assign them to variables, return from other methods and pass as arguments. Developing using Python is quick but running it is often slower than compiled languages. Luckily, Python enables to include the “C” language extensions so you can optimize your scripts. Python has several usages like web-based applications, test automation, data modeling, big data analytics and much more. Alternatively, you can utilize it as a “glue” layer to work with other languages.',
        'keywords': ['intepretted language','dynamic-typed',''],
        'link': 'https://en.wikipedia.org/wiki/Python_(programming_language)'
    },
    {
        'question':', What Do You Understand Of PEP 8?',
        'answer': 'PEP 8 is the latest Python coding standard, a set of coding recommendations. It guides to deliver more readable Python code.',
        'keywords': ['coding standard', 'readable'],
        'link': 'https://www.python.org/dev/peps/pep-0008/'
    },
    {
        'question':'What Is The Output Of The Following Python Code Fragment?',
        'answer': '',
        'keywords': [],
        'link': '',
        'markdown': ""
        /*def extendList(val, list=[]):
        list.append(val)
        return list
    
    list1 = extendList(10)
    list2 = extendList(123,[])
    list3 = extendList('a')
    
    print "list1 = %s" % list1
    print "list2 = %s" % list2
    print "list3 = %s" % list3',
    },*/
},
    {
        'question':'What Is The Statement That Can Be Used In Python If The Program Requires No Action But Requires It Syntactically?',
        'answer': 'The pass statement is a null operation. Nothing happens when it executes. You should use “pass” keyword in lowercase. If you write “Pass,” you’ll face an error like “NameError: name Pass is not defined.” Python statements are case sensitive.',
        'keywords': ['pass'],
        'link': 'https://docs.python.org/2.0/ref/pass.html'
    },
    {
        'question':'What’s The Process To Get The Home Directory Using ‘~’ In Python?',
        'answer': 'You need to import the os module, and then just a single line would do the rest.',
        'keywords': ['os.path', 'expanduser'],
        'link': 'https://docs.python.org/2/library/os.path.html'
    },
    {
        'question':'What is the purpose of the os module?',
        'answer': 'This module provides a portable way of using operating system dependent functionality. If you just want to read or write a file see open(), if you want to manipulate paths, see the os.path module, and if you want to read all the lines in all the files on the command line see the fileinput module. For creating temporary files and directories see the tempfile module, and for high-level file and directory handling see the shutil module.',
        'keywords': ['interface', 'operating system'],
        'link': 'https://docs.python.org/3/library/os.html'
    },
    {
        'question':'What Are The Built-In Types Available In Python?',
        'answer': 'Immutable: numbers, strings, tuples \nMutable: lists, dictionaries, sets \nSee link for more',
        'keywords': ['numbers', 'strings', 'tuples', 'lists', 'dictionaries', 'sets'],
        'link': 'https://docs.python.org/3/library/stdtypes.html'
    },
    {
        'question':'How To Find Bugs Or Perform Static Analysis In A Python Application?',
        'answer': 'You can use PyChecker, which is a static analyzer. It identifies the bugs in Python project and also reveals the style and complexity related bugs. Another tool is Pylint, which checks whether the Python module satisfies the coding standard.',
        'keywords': ['lint','checker'],
        'link': 'https://docs.pylint.org/en/1.6.0/run.html'
    },
    {
        'question':'When Is The Python Decorator Used?',
        'answer': 'Python decorator is a relative change that you do in Python syntax to adjust the functions quickly.',
        'keywords': ['change', 'syntax'],
        'link': 'https://hackernoon.com/decorators-in-python-8fd0dce93c08'
    },
    {
        'question':'What Is The Principal Difference Between A List And The Tuple?',
        'answer': 'Lists: Mutable, Slower, Syntax[]\nTuples: Immutable, faster, Syntax()',
        'keywords': ['Mutable, slower, syntax'],
        'link': 'https://learnbatta.com/blog/why-tuple-is-faster-than-list-in-python-22/'
    },
    {
        'question':'How Does Python Handle Memory Management?',
        'answer': 'Python uses private heaps to maintain its memory. So the heap holds all the Python objects and the data structures. This area is only accessible to the Python interpreter; programmers can’t use it.\nAnd it’s the Python memory manager that handles the Private heap. It does the required allocation of the memory for Python objects.\nPython employs a built-in garbage collector, which salvages all the unused memory and offloads it to the heap space.',
        'keywords': ['private heap', 'python interpreter','python memory manager','memory','allocation','garbage collector','unused memory', 'heap space'],
        'link': 'https://www.quora.com/How-does-Python-memory-management-work'
    },
    {
        'question':'What Are The Principal Differences Between The Lambda And Def?',
        'answer': 'Def can hold multiple expressions while lambda is a uni-expression function.\nDef generates a function and designates a name to call it later. Lambda forms a function object and returns it.\nDef can have a return statement. Lambda can’t have return statements.\nLambda supports to get used inside a list and dictionary.',
        'keywords': ['multiple expressions', 'name','return statement','list','dictionar'],
        'link': 'https://stackoverflow.com/questions/12264834/what-is-the-difference-for-python-between-lambda-and-regular-function'
    },
    {
        'question':'Write A Reg Expression That Confirms An Email Id Using The Python Reg Expression Module “Re”?',
        'answer': '',
        'keywords': [],
        'link': ''
    },
    {
        'question':'What Do You Think Is The Output Of The Following Code Fragment? Is There Any Error In The Code?',
        'answer': 'The result of the above lines of code is []. There won’t be any error like an IndexError.\n\nYou should know that trying to fetch a member from the list using an index that exceeds the member count (for example, attempting to access list[10] as given in the question) would yield an IndexError. By the way, retrieving only a slice at the starting index that surpasses the no. of items in the list won’t result in an IndexError. It will just return an empty list.',
        'keywords': ['IndexError'],
        'link': 'https://docs.python.org/2/library/exceptions.html'
    },
    {
        'question':'What Is A Built-In Function That Python Uses To Iterate Over A Number Sequence?',
        'answer': 'Range() generates a list of numbers, which is used to iterate over for loops.',
        'keywords': ['range'],
        'link': 'https://www.programiz.com/python-programming/methods/built-in'
    },
    {
        'question':'What is pickling and unpickling?',
        'answer': 'Pickle module accepts any Python object and converts it into a string representation and dumps it into a file by using dump function, this process is called pickling. While the process of retrieving original Python objects from the stored string representation is called unpickling.',
        'keywords': ['byte','stream'],
        'link': 'https://stackoverflow.com/questions/7501947/understanding-pickling-in-python'
    },
    {
        'question': 'How Python is interpreted?',
        'answer': 'Python language is an interpreted language. Python program runs directly from the source code. It converts the source code that is written by the programmer into an intermediate language, which is again translated into machine language that has to be executed.',
        'keywords': ['source', 'code', 'intermediate','language'],
        'link': 'http://net-informations.com/python/iq/interpreted.htm'
    },
    {
        'question':'How memory is managed in Python?',
        'answer': 'Python memory is managed by Python private heap space. All Python objects and data structures are located in a private heap. The programmer does not have an access to this private heap and interpreter takes care of this Python private heap. The allocation of Python heap space for Python objects is done by Python memory manager. The core API gives access to some tools for the programmer to code. Python also have an inbuilt garbage collector, which recycle all the unused memory and frees the memory and makes it available to the heap space.',
        'keywords': ['private heap space','interpreter', 'python memory manager', 'garbage collector'],
        'link': 'https://realpython.com/python-memory-management/'
    },
    {
        'question': 'How are arguments passed by value or by reference?',
        'answer': 'Everything in Python is an object and all variables hold references to the objects. The references values are according to the functions; as a result you cannot change the value of the references. However, you can change the objects if it is mutable.',
        'keywords': ['Mutate original variable'],
        'link': 'https://stackoverflow.com/questions/373419/whats-the-difference-between-passing-by-reference-vs-passing-by-value'
    },
    {
        'question':'What are Dict and List comprehensions?',
        'answer': 'They are syntax constructions to ease the creation of a Dictionary or List based on existing iterable.',
        'keywords': ['Create','iterable'],
        'link': 'https://stackoverflow.com/questions/1747817/create-a-dictionary-with-list-comprehension-in-python'
    },
    {
        'question':'What is lambda in Python?',
        'answer': 'It is a single expression anonymous function often used as inline function.',
        'keywords': ['anonymous function', 'single expression'],
        'link': 'https://www.w3schools.com/python/python_lambda.asp'
    },
    {
        'question':'Why lambda forms in python does not have statements?',
        'answer': 'A lambda form in python does not have statements as it is used to make new function object and then return them at runtime.',
        'keywords': [''],
        'link': 'http://effbot.org/pyfaq/why-can-t-lambda-forms-contain-statements.htm'
    },
    {
        'question':'What is pass in Python?',
        'answer': 'Pass means, no-operation Python statement, or in other words it is a place holder in compound statement, where there should be a blank left and nothing has to be written there.',
        'keywords': ['no-operation'],
        'link': 'https://docs.python.org/2.0/ref/pass.html'
    },
    {
        'question':'In Python what are iterators?',
        'answer': 'In Python, iterators are used to loop through a group of elements in containers like lists or dictionaries.',
        'keywords': ['loop','containers'],
        'link': 'https://www.w3schools.com/python/python_iterators.asp'
    },
    {
        'question':'What is unittest in Python?',
        'answer': 'A unit testing framework in Python is known as unittest. It supports sharing of setups, automation testing, shutdown code for tests, aggregation of tests into collections etc.',
        'keywords': ['testing framework'],
        'link': 'https://docs.python.org/3/library/unittest.html'
    },
    {
        'question':'In Python what is slicing?',
        'answer': 'A mechanism to select a range of items from sequence types like list, tuple, strings etc. is known as slicing.',
        'keywords': ['select', 'range', 'sequence types'],
        'link': 'https://www.programiz.com/python-programming/methods/built-in/slice'
    },
    {
        'question':'What are generators in Python?',
        'answer': 'The way of implementing iterators are known as generators. It is a normal function except that it yields expression in the function.',
        'keywords': ['yield'],
        'link': 'https://www.programiz.com/python-programming/generator'
    },
    {
        'question':'What is the difference between yield and return?',
        'answer': 'Return sends a specified value back to its caller whereas Yield can produce a sequence of values. We should use yield when we want to iterate over a sequence, but don’t want to store the entire sequence in memory.',
        'keywords': ['sequence'],
        'link': 'https://www.geeksforgeeks.org/use-yield-keyword-instead-return-keyword-python/'
    },
    {
        'question':'How can you copy an object in Python?',
        'answer': 'To copy an object in Python, you can try copy.copy () or copy.deepcopy() for the general case. You cannot copy all objects but most of them.',
        'keywords': ['copy module'],
        'link': 'https://docs.python.org/2/library/copy.html'
    },
    {
        'question':'What is negative index in Python?',
        'answer': 'Python sequences can be index in positive and negative numbers. For positive index, 0 is the first index, 1 is the second index and so forth. For negative index, (-1) is the last index and (-2) is the second last index and so forth.',
        'keywords': ['last index'],
        'link': 'https://www.quora.com/What-is-negative-index-in-Python'
    },
    {
        'question':'How you can convert a number to a string?',
        'answer': 'In order to convert a number into a string, use the inbuilt function str(). If you want a octal or hexadecimal representation, use the inbuilt function oct() or hex()',
        'keywords': ['str()'],
        'link': 'https://docs.python.org/2/library/functions.html'
    },
    {
        'question':'What is the difference between Xrange and range?',
        'answer': 'Xrange returns the xrange object while range returns the list, and uses the same memory and no matter what the range size is.',
        'keywords': ['Xrange object','lazy evaluation'],
        'link': 'https://www.geeksforgeeks.org/range-vs-xrange-python/'
    },
    {
        'question':'What is module and package in Python?',
        'answer': 'In Python, module is the way to structure program. Each Python program file is a module, which imports other modules like objects and attributes. The folder of Python program is a package of modules. A package can have modules or subfolders.',
        'keywords': ['divid', 'program', 'entire program'],
        'link': 'https://stackoverflow.com/questions/7948494/whats-the-difference-between-a-python-module-and-a-python-package'
    },
    {
        'question':'What are the rules for local and global variables in Python?',
        'answer': 'If a variable is assigned a new value anywhere within the function\'s body it\'s assumed to be local. Those variables that are only referenced inside a function are implicitly global.',
        'keywords': ['assigned','within','function','referenced','inside', 'function'],
        'link': 'https://matthew-brett.github.io/teaching/global_scope.html'
    },
    {
        'question':'How can you share global variables across modules?',
        'answer': 'To share global variables across modules within a single program, create a special module. Import the config module in all modules of your application. The module will be available as a global variable across modules.',
        'keywords': ['config module'],
        'link': 'https://stackoverflow.com/questions/1977362/how-to-create-module-wide-variables-in-python'
    },
    {
        'question':'Explain how can you make a Python Script executable on Unix?',
        'answer': 'Script file\'s mode must be executable and the first line must begin with # ( #!/usr/local/bin/python)',
        'keywords': ['executable mode','first line #!/usr/local/bin/python3'],
        'link': 'http://openbookproject.net/thinkcs/python/english3e/app_c.html'
    },
    {
        'question':'Explain how to delete a file in Python?',
        'answer': 'By using a command os.remove (filename) or os.unlink(filename)',
        'keywords': ['os.remove','os.unlink'],
        'link': 'https://docs.python.org/3/library/os.html'
    },
    {
        'question':'Explain how can you generate random numbers in Python?',
        'answer': 'import random',
        'keywords': ['import random'],
        'link': 'https://docs.python.org/2/library/random.html'
    },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // },
    // {
    //     'question':'',
    //     'answer': '',
    //     'keywords': [],
    //     'link': ''
    // }

    
]

export default Python