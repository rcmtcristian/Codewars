// Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

// For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.


// Main Solution
function indexOf(head, value) {
  let current = head;
  let index = 0;
  
  while (current !== null) {
    if (current.data === value) {
      return index;
    }
    
    current = current.next;
    index++;
  }
  
  return -1;
}

// Refactor Solution
function indexOf(head: Node, value: any): number {
  let current = head;
  let index = 0;
  
  while (current !== null) {
    if (current.data === value) {
      return index;
    }
    
    current = current.next;
    index++;
  }
  
  return -1;
}


// Alternate Solution

const indexOf = (head, value, i=0) => (
  head == null? -1 : head.data === value? i : indexOf(head.next, value, i+1)
)