import { FC, Fragment } from "react";

import { ES11 } from "@/molecules";

export default function esScripting() {
  return (
    <Fragment>
      <div>
        <a href="https://ecma-international.org/">ECMAScript</a>
      </div>
      <br />
      <ul>
        <li>
          <strong>ECMAScript 6 (ES2015): </strong>
          <ul>
            <li>
              Arrow Functions: Concise syntax for writing function expressions.
            </li>
            <li>
              Template Literals: Enhanced string literals with multi-line
              support and expressions.
            </li>
            <li>
              Destructuring Assignment: Easily extract values from arrays and
              objects.
            </li>
            <li>let and const: Block-scoped variable declarations.</li>
            <li>
              Class Syntax: Simplified syntax for creating and inheriting
              classes.
            </li>
            <li>Modules: mport/export modules for better code organization.</li>
            <li>
              Default Parameters: Set default values for function parameters.
            </li>
            <li>
              Rest Operators: ... syntax for handling variable arguments and
              array/object spreading.
            </li>
            <li>
              Spread Operators: ... syntax for handling variable arguments and
              array/object spreading.
            </li>
            <li>Promises: Improved asynchronous programming with promises.</li>
            <li>Symbol: A new primitive data type for unique identifiers.</li>
            <li>Generators: Functions that can be paused and resumed.</li>
            <li>
              for...of Loop: Iterating over iterable objects like arrays and
              strings.
            </li>
            <li>
              Map and Set Objects: New data structures for key-value pairs and
              unique values.
            </li>
          </ul>
        </li>
        <li>
          <strong>ECMAScript 2016 (ES7): </strong>
          <ul>
            <li>
              Array.prototype.includes: Checking if an array includes a certain
              element.
            </li>
            <li>
              Exponentiation Operator (**): A shorthand for raising a number to
              the power of another.
            </li>
          </ul>
        </li>
        <li>
          <strong>ECMAScript 2017 (ES8): </strong>
          <ul>
            <li>
              Object.values/Object.entries: Retrieving values or entries from
              objects.
            </li>
            <li>
              String Padding:Methods like <strong>padStart</strong> and{" "}
              <strong>padEnd</strong> for string padding.
            </li>
            <li>async/await: Simplifying asynchronous code.</li>
          </ul>
        </li>
        <li>
          <strong>ECMAScript 2018 (ES9): </strong>
          <ul>
            <li>
              Rest/Spread Properties: Similar to array spread/rest but for
              objects.
            </li>
            <li>
              Asynchronous Iteration: Simplifying asynchronous code when working
              with iterators.
            </li>
          </ul>
        </li>
        <li>
          <strong>ECMAScript 2019 (ES10): </strong>
          <ul>
            <li>
              Array.prototype.flat/flatMap: Flattening and mapping arrays.
            </li>
            <li>
              Object.fromEntries: Creating an object from key-value pairs.
            </li>
            <li>
              String.prototype.trimStart/trimEnd: Trimming whitespaces from the
              start/end of a string.
            </li>
          </ul>
        </li>

        <li>
          <strong>ECMAScript 2020 (ES11): </strong>
          <ul>
            <li>Optional Chaining (?.): Safely accessing nested properties.</li>
            <li>
              Nullish Coalescing Operator (??): Providing a default value for
              null or undefined.
            </li>
          </ul>
        </li>
        <li>Others</li>
      </ul>

      <h2>ES11</h2>
      <ES11 />
    </Fragment>
  );
}
esScripting.requireAuth = true;
