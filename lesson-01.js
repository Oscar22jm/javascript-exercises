"use strict";

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.

// ..................MY ANSWEER......................
// PS C:\Users\dell\documents\Startupistan\maison-sarah\javascript-1\JS-Exercises> node
//Welcome to Node.js v24.18.0.
//Type ".help" for more information.
// > 158 + 52
// 210
// > (300 - 50) * 200
// 50000
// > (200 / 50) * 35
// 140
// > 52 * 78 * 85
// 344760
// > .exit

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.

console.log("Greetings New World");

// PS C:\Users\dell\documents\Startupistan\maison-sarah\javascript-1\JS-Exercises> node lesson-01.js
//Greetings New World

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.

console.log("Hello normal world");
//once we edit the Javascript and save it recorded in the Disk so we can run it in the terminal, when its not on the disk it wont work

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.

// ..................MY ANSWEER......................

//The experience match because the results pop up just below the code line and both use REPL lopp
//  it differed in the way that its not necesary to run Chrome DevTools first and Node is local while Chrome Devtools is on the web

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.

// ..................MY ANSWEER (My console is in Spanish)......................

// lesson-01.js : El término 'lesson-01.js' no se reconoce como nombre de un cmdlet, función, archivo de script o programa ejecutable.
// Compruebe si escribió correctamente el nombre o, si incluyó una ruta de acceso, compruebe que dicha ruta es correcta e inténtelo de
// nuevo.
// En línea: 1 Carácter: 1
// + lesson-01.js code
// + ~~~~~~~~~~~~
//     + CategoryInfo          : ObjectNotFound: (lesson-01.js:String) [], CommandNotFoundException
//     + FullyQualifiedErrorId : CommandNotFoundException
// ....... Solution:  Windows PowerShell does not load commands from the current location by default.So I had to comeback with CD ..
// to the place I cloned the folder

// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
