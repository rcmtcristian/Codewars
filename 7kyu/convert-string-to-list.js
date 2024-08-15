/**
 * DESCRIPTION:
Convert a linked list to a string
Related Kata
Although this Kata is not part of an official Series, you may also want to try out Parse a linked list from a string if you enjoyed this Kata.

Preloaded
Preloaded for you is a class, struct or derived data type Node ( depending on the language ) used to construct linked lists in this Kata:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
Prerequisites
This Kata assumes that you are already familiar with the idea of a linked list. If you do not know what that is, you may want to read this article on Wikipedia. Specifically, the linked lists this Kata is referring to are singly linked lists, where the value of a specific node is stored in its data / $data / Data property, the reference to the next node is stored in its next / $next / Next / next_node property and the terminator for a list is null / NULL / None / nil / nullptr / null().

Task
Create a function stringify which accepts an argument list / $list and returns a string representation of the list. The string representation of the list starts with the value of the current Node, specified by its data / $data / Data property, followed by a whitespace character, an arrow and another whitespace character (" -> "), followed by the rest of the list. The end of the string representation of a list must always end with null / NULL / None / nil / nullptr / null() ( all caps or all lowercase depending on the language you are undertaking this Kata in ). For example, given the following list:

new Node(1, new Node(2, new Node(3)))
... its string representation would be:

"1 -> 2 -> 3 -> null"
And given the following linked list:

new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
... its string representation would be:

"0 -> 1 -> 4 -> 9 -> 16 -> null"
Note that null / NULL / None / nil / nullptr / null() itself is also considered a valid linked list. In that case, its string representation would simply be "null" / "NULL" / "None" / "nil" / "nullptr" / @"NULL" / "null()" ( again, depending on the language ).

For the simplicity of this Kata, you may assume that any Node in this Kata may only contain non-negative integer values. For example, you will not encounter a Node whose data / $data / Data property is "Hello World".

Enjoy, and don't forget to check out my other Kata Series :D
 */

// My solution
/**
 * The `stringify` function recursively converts a linked list into a string representation.
 * @param list - The `list` parameter in the `stringify` function represents a linked list. Each node
 * in the linked list has a `data` property that stores the value of the node and a `next` property
 * that points to the next node in the list. If the `list` is `null
 * @param [str] - The `str` parameter in the `stringify` function is used to store the string
 * representation of the linked list as the function recursively processes each node. It is initialized
 * as an empty string in the function signature and is updated with each node's data as the function
 * traverses the linked list.
 * @returns The `stringify()` function is returning a string representation of a linked list. If the
 * input list is `null`, it returns the string "null". Otherwise, it recursively concatenates the data
 * of each node in the list followed by " -> " and calls itself on the next node until reaching the end
 * of the list.
 */
function stringify(list, str = "") {
  return list == null ? "null" : `${list.data} -> ${stringify(list.next)}`;
}

//
const { assert } = require("chai");

describe("stringify()", () => {
  it("should pass the example tests as shown in the Description", () => {
    assert.strictEqual(
      stringify(new Node(1, new Node(2, new Node(3)))),
      "1 -> 2 -> 3 -> null"
    );
    assert.strictEqual(
      stringify(
        new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
      ),
      "0 -> 1 -> 4 -> 9 -> 16 -> null"
    );
    assert.strictEqual(stringify(null), "null");
  });
});

// Other solutions
function stringify(list, str = "") {
  if (list === null) {
    return str + "null";
  }

  return stringify(list.next, str + String(list.data) + " -> ");
}

// Other solution
// Pass in an object (linked list)
// Return a string

// Return 'null' if no list is passed in
// Let result be an array with list's head's value
// Recurse through the linked in while a next node exists
//Push each node's value to result array
// Join result into a string with ' -> ' separator, and return it
function stringify(list) {
  if (!list) return "null";
  let current = list;
  const result = [current.data || 0];

  while (current.next) {
    current = current.next;
    result.push(current.data == null ? "null" : current.data);
  }
  result.push("null");

  return result.join(" -> ");
}
