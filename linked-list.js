function LinkedList() {
    var length = 0;
    var head = null;

    // Node or Link Object
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    // Function to get the size of the list
    this.size = function() {
        return length;
    }

    // Function to add an item to the end of the list
    this.add = function(element) {
        var node = new Node(element); // create the node to be added in the list.
        if (head === null) { // If we have an empty list, make this node the head.
            head = node;
        } else {
            var currentNode = head; // Create a new object to track movement through the list

            while (currentNode.next) { // Move through the list, till you find the bottom
                currentNode = currentNode.next;
            }

            // Add new node to the bottom of the list
            currentNode.next = node;
        }

        // Increase the length tracker
        length++;
    }

    // Function to remove Element in the list
    this.remove = function(element) {
        var currentNode = head; // Create a new object to track movement through the list
        var previousNode; // Initialize tracker for previous node

        if (currentNode.element === element) { // Check if head of list is node to be removed
            head = currentNode.next; // move the head to the next node, removing the first one
        } else {
            while (currentNode.element !== element) { // Move through the list till you find the node to be updated.
                previousNode = currentNode;
                currentNode = currentNode.next
            }

            // Set the previous node next to the next node after the current one, removing the current node
            previousNode.next = currentNode.next;
        }

        // Reduce the length traker
        length--;
    }

    // Function to check if list is empty
    this.isEmpty = function () {
        return length === 0;
    }

    // Function to get the index of an item in the list
    this.indexOf = function(element) {
        var currentNode = head; // Create a new object to track movement through the list
        var index = -1;

        while (currentNode) { // Move through the list
            index++;
            if (currentNode.element === element) return index; // If you find the node, return it's index
            currentNode = currentNode.next;
        }
        return -1; // if nothing is found, return -1;
    }

    // Function to get the element at a certain index
    this.elementAt = function(index) {
        var currentNode = head; // Create a new object to track movement through the list
        var count = 0;
        while (count < index) { // Move through list n items (n = index)
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element; // return that element
    }

    // Function to add element at a specific index of the list
    this.addAt = function (index, element) {
        var node = new Node(element); // Create the new node to be added.

        var currentNode = head; // Create a new object to track movement through the list
        var previousNode; // create object to track previous node as you move through list
        var currentIndex = 0;

        // Check if index if out of range
        if (index > length) {
            return false;
        }

        if (index === 0) { // If Adding item to top of list
            node.next = currentNode; // Set the new nodes next to the head.
            head = node; // Update the head to the new node.
        } else {
            // Move to the index
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            node.next = curretNode; // Set the node.next to the current node at target index.
            previousNode.next = node; // set the previous node.next to the new node.
        }

        // Increase length tracker
        length++;
    }

    this.removeAt = function(index) {
        var currentNode = head; // Create a new object to track movement through the list
        var previousNode; // create object to track previous node as you move through list
        var currentIndex = 0;

        // Check if index if out of range
        if (index >= length || index < 0) {
            return null;
        }

        if (index === 0) {
            head = currentNode.next; // Removing first node, set the head to the next node.
        } else {
            // Move to index being removed
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // Update the previous node.next to the current node.next, cutting out the current node
            previousNode.next = currentNode.next;
        }

        // Reduce the list length
        length--;
        return currentNode.element; // return the removed element;
    }
}

var ll = new LinkedList();
ll.add('Isaac');
ll.add('Everett');
ll.add('Mackenzie');
ll.add('Sloane');
ll.add('Charlotte');
console.log(ll.size());
console.log(ll.removeAt(3));
console.log(ll.elementAt(3));
console.log(ll.indexOf('Mackenzie'));
console.log(ll.elementAt(0),ll.elementAt(1),ll.elementAt(2))
console.log(ll.size());