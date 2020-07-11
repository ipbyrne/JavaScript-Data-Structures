// Hashing function for keys
var hash = function(string, max) {
    var hash = 0; // create the hash
    
    // Convert the string to a charcode string;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }

    return hash % max; // Return hash key
}

function HashTable() {
    var storage = []; // Array to store data
    var storageLimit = 14; // Max number of items in table;

    // Function to print what is in storage
    this.print = function () {
        console.log(storage);
    }

    // Function to add item to hash table storage
    this.add = function (key, value) {
        var index = hash(key, storageLimit); // Get the hash of place in storage to be checked

        if (storage[index] === undefined) { // Check if the hash is unused
            storage[index] = [[key, value]]; // Add the key, value pair in the storage
        } else {
            // Search in storage if key already exists and update it
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index[i][1]] = value;
                    break;
                }
            }
            storage[index].push([key, value]); // Push key value pair into storage
        }   
    }

    // Function to remove item form hashtable storage
    this.remove = function(key) {
        var index = hash(key, storageLimit); // Key the item of place is storage to be checked
        if (storage[index].length === 1 && storage[index][0][0] === key) { // If there is only one item in that slot, and keys match
            delete storage[index]; // delete it
        } else {
            // Move through items in storage slot till match found
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }    
        }
    }

    // Function to retreive elements value
    this.lookup = function (key) {
        var index = hash(key, storageLimit); // Grab the index of storage space item would be in

        if (storage[index] === undefined) { // If no item exists in storage
            return undefined; 
        } else {
            // Move through items in storage slot, looking for a key match
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) { // If found, return the value of the key match
                    return storage[index][i][1];
                }
            }
        }
    }
}

let ht = new HashTable();
ht.print();
ht.add('Isaac', 'dad');
ht.add('Mackenzie', 'mom');
ht.add('Everett', 'son');
ht.add('Olivia', 'daughter');
ht.add('Sloane', 'dog');
ht.add('Charlotte', 'dog');
console.log(ht.lookup('Olivia'));
console.log(ht.lookup('Isaac'));
console.log(ht.lookup('Beau'));
ht.print();