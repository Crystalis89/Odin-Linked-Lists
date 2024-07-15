// You will need two classes or factories:

// LinkedList class / factory, which will represent the full list.
// Node class / factory, containing a value property and a link to the nextNode, set both as null by default.
// Build the following functions in your linked list class / factory:

function listvisualizer(list, nodes) {
    let listelement = document.querySelector('#list')
    let listdepth = list
    let i = 0

    while (listelement.firstChild && i < 100) {
                i++
                listelement.removeChild(listelement.lastChild)           
            }
            
    for (let i = 0; i < nodes; i++) {     

        listdepth = listdepth.next
        let listentry = document.createElement('li')

        if (listdepth.next !== null) {
            listentry.textContent = `List entry ${listdepth.data}'s Next node is ${listdepth.next.data}`
        } else (
            listentry.textContent = `List entry ${listdepth.data} is the end of the list`

        )
          listelement.appendChild(listentry)
    
        }
    
}


//Depending on if it has a head or data value will either produce the head of the linked list or a node to add to one.
class LinkedList {
    constructor (data) {
        if (data === null) {
            this.head = data
            this.next = null

        } else if(data !== null) {

            this.data = data
            this.next = null}
       }

       static createHead(head = null){
        return new LinkedList(head)
        }
        static createListNode(data){
        return new LinkedList(data)
        }
       

// append(value) adds a new node containing value to the end of the list
//Maybe add way to submit an array of list node entries for it to iterate through and add them all instead of calling the function multiple times
    append(list, appendWith) {
                  
        if (list.head === null) {
            let listdepth = list   
        
            if (listdepth.head === null && listdepth.next === null) { 
                listdepth.next = appendWith

            } else {
                let i = 0;

                while (listdepth !== null || i < 1000) {
                    i++;
                    listdepth = listdepth.next;
                   
                    if (listdepth.next === null) {
                        listdepth.next = appendWith
                        listvisualizer(list, i)
                        return                    
                    } 

                }
            }

        } else {
            alert('Invalid object, please input a Linked List Head node.')
        }  
    }

    // prepend(value) adds a new node containing value to the start of the list
    prepend() {}

    // size returns the total number of nodes in the list
    //interate through til hit next: null and return the number
    size(list) {
        let i = 0;
        let listdepth = list

        while (listdepth !== null && i < 1000) {
            i++;
            listdepth = listdepth.next;
           
            if (listdepth.next === null) {
                return i                    
            } 
        }

    }
    
    // head returns the first node in the list
    //add head: null and remove it from the current holder
    head(list, newnode) {}

    // tail returns the last node in the list
    //go til reach next = null and replace next = null with the list entry
    tail(list, newnode) {}

    // at(index) returns the node at the given index
    //add number of .next to match the index and return the contents there.
    at(list, index){
        let listdepth = list
        for (let i = 0; i < index; i++) {
            listdepth = listdepth.next
            
        }

        return listdepth

    }

    // pop removes the last element from the list
    //Same as at just saving the list entry and updating the next values of the parent.
    pop() {}

    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    contains(list, value){}

    // find(value) returns the index of the node containing value, or null if not found.
    //Loop through each time adding another .next then check for value
    find(list, value){}

    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    //depending on if it is an entry in the list or the whole list either loop through converting the data contents of whole thing to text or just the single entry.
    toString() {}

    // insertAt(value, index) that inserts a new node with the provided value at the given index.
    //Add however many .next it takes to reach the index value then change the target's next to null.
    insertAt(list, value, index){
        appendWith.next = appendTo.next
        appendTo.next = appendWith

    }

    // removeAt(index) that removes the node at the given index.
    //Same as for insert
    removeAt(list, index) {}

}



//list creation testing and function testing
let head = LinkedList.createHead()
let createnode1 = LinkedList.createListNode('test')
let createnode2 = LinkedList.createListNode('test2')
let createnode3 = LinkedList.createListNode('test3')
let createnode4 = LinkedList.createListNode('test4')
let createnode5 = LinkedList.createListNode('test5')
let createnode6 = LinkedList.createListNode('test6')


head.append(head, createnode1)
head.append(head, createnode2)
head.append(head, createnode3)
head.append(head, createnode4)
head.append(head, createnode5)
head.append(head, createnode6)