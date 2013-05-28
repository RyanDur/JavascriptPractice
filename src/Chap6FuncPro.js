////////////////////////////////////////////////////////////////////////////////////////////////////////
// function forEach(array, action) {								      //
//     for (var i = 0; i < array.length; i++)							      //
//         action(array[i]);									      //
// }												      //
// 												      //
// function oldSum(numbers) {									      //
//     var total = 0;										      //
//     forEach(numbers, function (number) {							      //
//         total += number;									      //
//     });											      //
//     return total;										      //
// }												      //
// 												      //
// //------------------------------------							      //
// 												      //
// function reduce(combine, base, array) {							      //
//     forEach(array, function (element) {							      //
//         base = combine(base, element);							      //
//     });											      //
//     return base;										      //
// }												      //
// 												      //
// function add(a, b) {										      //
//     return a + b;										      //
// }												      //
// 												      //
// function sum(numbers) {									      //
//     return reduce(add, 0, numbers);								      //
// }												      //
// 												      //
// //////////////////////////////////////							      //
// //////////////////////////////////////							      //
// //////////////////////////////////////							      //
// 												      //
// function oldCountZeros(array) {								      //
//     function counter(total, element) {							      //
//         return total + (element === 0 ? 1 : 0);						      //
//     }											      //
// 												      //
//     return reduce(counter, 0, array);							      //
// }												      //
// 												      //
// //------------------------------------							      //
// 												      //
// function count(test, array) {								      //
//     return reduce(function(total, element) {							      //
//         return total + (test(element) ? 1 : 0);						      //
//     }, 0, array);										      //
// }												      //
// 												      //
// function equals(x) {										      //
//     return function(element) {return x === element;};					      //
// }												      //
// 												      //
// function countZeros(array) {									      //
//     return count(equals(0), array);								      //
// }												      //
// 												      //
// //////////////////////////////////////							      //
// //////////////////////////////////////							      //
// //////////////////////////////////////							      //
// 												      //
// txt = "% The Book of Programming\n"+								      //
//     "\n"+											      //
//     "%% The Two Aspects\n"+									      //
//     "\n"+											      //
//     "Below the surface of the machine, the program moves. Without effort,\n"+		      //
//     "it expands and contracts. In great harmony, electrons scatter and\n"+			      //
//     "regroup. The forms on the monitor are but ripples on the water. The\n"+			      //
//     "essence stays invisibly below.\n"+							      //
//     "\n"+											      //
//     "When the creators built the machine, they put in the processor and the\n"+		      //
//     "memory. From these arise the two aspects of the program.\n"+				      //
//     "\n"+											      //
//     "The aspect of the processor is the active substance. It is called\n"+			      //
//     "Control. The aspect of the memory is the passive substance. It is\n"+			      //
//     "called Data.\n"+									      //
//     "\n"+											      //
//     "Data is made of merely bits, yet it takes complex forms. Control\n"+			      //
//     "consists only of simple instructions, yet it performs difficult\n"+			      //
//     "tasks. From the small and trivial, the large and complex arise.\n"+			      //
//     "\n"+											      //
//     "The program source is Data. Control arises from it. The Control\n"+			      //
//     "proceeds to create new Data. The one is born from the other, the\n"+			      //
//     "other is useless without the one. This is the harmonious cycle of\n"+			      //
//     "Data and Control.\n"+									      //
//     "\n"+											      //
//     "Of themselves, Data and Control are without structure. The programmers\n"+		      //
//     "of old moulded their programs out of this raw substance. Over time,\n"+			      //
//     "the amorphous Data has crystallised into data types, and the chaotic\n"+		      //
//     "Control was restricted into control structures and functions.\n"+			      //
//     "\n"+											      //
//     "%% Short Sayings\n"+									      //
//     "\n"+											      //
//     "When a student asked Fu-Tzu about the nature of the cycle of Data and\n"+		      //
//     "Control, Fu-Tzu replied 'Think of a compiler, compiling itself.'\n"+			      //
//     "\n"+											      //
//     "A student asked 'The programmers of old used only simple machines and\n"+		      //
//     "no programming languages, yet they made beautiful programs. Why do we\n"+		      //
//     "use complicated machines and programming languages?'. Fu-Tzu replied\n"+		      //
//     "'The builders of old used only sticks and clay, yet they made\n"+			      //
//     "beautiful huts.'\n"+									      //
//     "\n"+											      //
//     "A hermit spent ten years writing a program. 'My program can compute\n"+			      //
//     "the motion of the stars on a 286-computer running MS DOS', he proudly\n"+		      //
//     "announced. 'Nobody owns a 286-computer or uses MS DOS anymore.',\n"+			      //
//     "Fu-Tzu responded.\n"+									      //
//     "\n"+											      //
//     "Fu-Tzu had written a small program that was full of global state and\n"+		      //
//     "dubious shortcuts. Reading it, a student asked 'You warned us against\n"+		      //
//     "these techniques, yet I find them in your program. How can this be?'\n"+		      //
//     "Fu-Tzu said 'There is no need to fetch a water hose when the house is\n"+		      //
//     "not on fire.'{This is not to be read as an encouragement of sloppy\n"+			      //
//     "programming, but rather as a warning against neurotic adherence to\n"+			      //
//     "rules of thumb.}\n"+									      //
//     "\n"+											      //
//     "%% Wisdom\n"+										      //
//     "\n"+											      //
//     "A student was complaining about digital numbers. 'When I take the root\n"+		      //
//     "of two and then square it again, the result is already inaccurate!'.\n"+		      //
//     "Overhearing him, Fu-Tzu laughed. 'Here is a sheet of paper. Write down\n"+		      //
//     "the precise value of the square root of two for me.'\n"+				      //
//     "\n"+											      //
//     "Fu-Tzu said 'When you cut against the grain of the wood, much strength\n"+		      //
//     "is needed. When you program against the grain of a problem, much code\n"+		      //
//     "is needed.'\n"+										      //
//     "\n"+											      //
//     "Tzu-li and Tzu-ssu were boasting about the size of their latest\n"+			      //
//     "programs. 'Two-hundred thousand lines', said Tzu-li, 'not counting\n"+			      //
//     "comments!'. 'Psah', said Tzu-ssu, 'mine is almost a *million* lines\n"+			      //
//     "already.' Fu-Tzu said 'My best program has five hundred lines.'\n"+			      //
//     "Hearing this, Tzu-li and Tzu-ssu were enlightened.\n"+					      //
//     "\n"+											      //
//     "A student had been sitting motionless behind his computer for hours,\n"+		      //
//     "frowning darkly. He was trying to write a beautiful solution to a\n"+			      //
//     "difficult problem, but could not find the right approach. Fu-Tzu hit\n"+		      //
//     "him on the back of his head and shouted '*Type something!*' The student\n"+		      //
//     "started writing an ugly solution. After he had finished, he suddenly\n"+		      //
//     "understood the beautiful solution.\n"+							      //
//     "\n"+											      //
//     "%% Progression\n"+									      //
//     "\n"+											      //
//     "A beginning programmer writes his programs like an ant builds her\n"+			      //
//     "hill, one piece at a time, without thought for the bigger structure.\n"+		      //
//     "His programs will be like loose sand. They may stand for a while, but\n"+		      //
//     "growing too big they fall apart{Referring to the danger of internal\n"+			      //
//     "inconsistency and duplicated structure in unorganised code.}.\n"+			      //
//     "\n"+											      //
//     "Realising this problem, the programmer will start to spend a lot of\n"+			      //
//     "time thinking about structure. His programs will be rigidly\n"+				      //
//     "structured, like rock sculptures. They are solid, but when they must\n"+		      //
//     "change, violence must be done to them{Referring to the fact that\n"+			      //
//     "structure tends to put restrictions on the evolution of a program.}.\n"+		      //
//     "\n"+											      //
//     "The master programmer knows when to apply structure and when to leave\n"+		      //
//     "things in their simple form. His programs are like clay, solid yet\n"+			      //
//     "malleable.\n"+										      //
//     "\n"+											      //
//     "%% Language\n"+										      //
//     "\n"+											      //
//     "When a programming language is created, it is given syntax and\n"+			      //
//     "semantics. The syntax describes the form of the program, the semantics\n"+		      //
//     "describe the function. When the syntax is beautiful and the semantics\n"+		      //
//     "are clear, the program will be like a stately tree. When the syntax is\n"+		      //
//     "clumsy and the semantics confusing, the program will be like a bramble\n"+		      //
//     "bush.\n"+										      //
//     "\n"+											      //
//     "    Tzu-ssu was asked to write a program in the language called Java,\n"+		      //
//     "which takes a very primitive approach to functions. Every morning, as\n"+		      //
//     "he sat down in front of his computer, he started complaining. All day\n"+		      //
//     "he cursed, blaming the language for all that went wrong. Fu-Tzu\n"+			      //
//     "listened for a while, and then reproached him, saying 'Every language\n"+		      //
//     "has its own way. Follow its form, do not try to program as if you\n"+			      //
//     "were using another language.'";								      //
// 												      //
// 												      //
// var paragraphs = map(processParagraph, txt.split("\n\n"));					      //
// 												      //
// function map(func, array) {									      //
//     var result = [];										      //
//     forEach(array, function (element) {							      //
//         result.push(func(element));								      //
//     });											      //
//     return result;										      //
// }												      //
// 												      //
// function countLeading(test, par) {								      //
//     var leading = 0;										      //
//     while(test(par.charAt(leading))) {							      //
//         leading++;										      //
//     }											      //
//     return leading;										      //
// }												      //
// 												      //
// function splitParagraph(paragraph) {								      //
// 												      //
//     function indexOrEnd(character) {								      //
//         var index = paragraph.indexOf(character);						      //
//         return index == -1 ? paragraph.length : index;					      //
//     }											      //
// 												      //
//     function takeNormal() {									      //
//         var end = reduce(Math.min, paragraph.length,						      //
//                          map(indexOrEnd, ["*", "{"]));					      //
//         var part = paragraph.slice(0, end);							      //
//         paragraph = paragraph.slice(end);							      //
//         return part;										      //
//     }											      //
// 												      //
//     function takeUpTo(character) {								      //
//         var end = paragraph.indexOf(character, 1);						      //
//         if (end == -1)									      //
//             throw new Error("Missing closing '" + character + "'");				      //
//         var part = paragraph.slice(1, end);							      //
//         paragraph = paragraph.slice(end + 1);						      //
//         return part;										      //
//     }											      //
// 												      //
//     var fragments = [];									      //
//     while(paragraph != "") {									      //
//         if(paragraph.charAt(0) == "*") {							      //
//             fragments.push({type:"emphasised", content:takeUpTo("*")});			      //
//         } else if(paragraph.charAt(0) == "{") {						      //
//             fragments.push({type:"footnote", content:takeUpTo("}")});			      //
// 												      //
//         } else {										      //
//             fragments.push({type:"normal", contnent:takeNormal()});				      //
//         }											      //
//     }											      //
// 												      //
//     return fragments;									      //
// }												      //
// 												      //
// function processParagraph(par) {								      //
//     var headerCount = countLeading(equals('%'), par);					      //
//     par = par.replace(/%*/, "");								      //
//     return {type:(headerCount === 0 ? 'p':'h' + headerCount), content:splitParagraph(par.trim())}; //
// }												      //
// 												      //
// function extractFootnotes(paragraphs) {							      //
//     var footnotes = [];									      //
//     var currentNote = 0;									      //
// 												      //
//     function replaceFootnote(fragment) {							      //
//         if (fragment.type == "footnote") {							      //
//             currentNote++;									      //
//             footnotes.push(fragment);							      //
//             fragment.number = currentNote;							      //
//             return {type: "reference", number: currentNote};					      //
//         }											      //
//         else {										      //
//             return fragment;									      //
//         }											      //
//     }											      //
// 												      //
//     forEach(paragraphs, function(paragraph) {						      //
//         paragraph.content = map(replaceFootnote,						      //
//                                 paragraph.content);						      //
//     });											      //
// 												      //
//     return footnotes;									      //
// }												      //
// 												      //
// function renderHTML(element) {								      //
//     var pieces = [];										      //
// 												      //
//     function renderAttributes(attributes) {							      //
//         var result = [];									      //
//         if (attributes) {									      //
//             for (var name in attributes)							      //
//                 result.push(" " + name + "=\"" +						      //
//                             escapeHTML(attributes[name]) + "\"");				      //
//         }											      //
//         return result.join("");								      //
//     }											      //
// 												      //
//     function render(element) {								      //
//         // Text node										      //
//         if (typeof element == "string") {							      //
//             pieces.push(escapeHTML(element));						      //
//         }											      //
//         // Empty tag										      //
//         else if (!element.content || element.content.length == 0) {				      //
//             pieces.push("<" + element.name +							      //
//                         renderAttributes(element.attributes) + "/>");			      //
//         }											      //
//         // Tag with content									      //
//         else {										      //
//             pieces.push("<" + element.name +							      //
//                         renderAttributes(element.attributes) + ">");				      //
//             forEach(element.content, render);						      //
//             pieces.push("</" + element.name + ">");						      //
//         }											      //
//     }											      //
// 												      //
//     render(element);										      //
//     return pieces.join("");									      //
// }												      //
// 												      //
// function tag(name, content, attributes) {							      //
//     return {name: name, attributes: attributes, content: content};				      //
// }												      //
// 												      //
// function link(target, text) {								      //
//     return tag("a", [text], {href: target});							      //
// }												      //
// 												      //
// function htmlDoc(title, bodyContent) {							      //
//     return tag("html", [tag("head", [tag("title", [title])]),				      //
//                         tag("body", bodyContent)]);						      //
// }												      //
// 												      //
// function footnote(number) {									      //
//     return tag("sup", [link("#footnote" + number,						      //
//                             String(number))]);						      //
// }												      //
// 												      //
// function renderParagraph(paragraph) {							      //
//     debugger;										      //
//     return tag(paragraph.type, map(renderFragment,						      //
//                                    paragraph.content));					      //
// }												      //
// 												      //
// function renderFragment(fragment) {								      //
//     if (fragment.type == "reference")							      //
//         return footnote(fragment.number);							      //
//     else if (fragment.type == "emphasised")							      //
//         return tag("em", [fragment.content]);						      //
//     else if (fragment.type == "normal")							      //
//         return fragment.content;								      //
// }												      //
////////////////////////////////////////////////////////////////////////////////////////////////////////