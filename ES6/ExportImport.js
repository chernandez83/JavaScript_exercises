<html>
  <body>
    <!-- Only change code below this line -->
    <script type='module' src='index.js'></script>
    <!-- Only change code above this line -->
  </body>
</html>

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString};

/*Add the appropriate import statement that will allow the current file to use 
the uppercaseString and lowercaseString functions you exported in the previous
lesson. These functions are in a file called string_functions.js, which is in 
the same directory as the current file.*/

import {uppercaseString, lowercaseString} from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

import * as stringFunctions from './string_functions.js';
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

