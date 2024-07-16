// You will need two classes or factories:

// LinkedList class / factory, which will represent the full list.
// Node class / factory, containing a value property and a link to the nextNode, set both as null by default.
// Build the following functions in your linked list class / factory:




//Once get the last two functions implemented go and make sure everything has a proper input checker.



//Maybe add a few buttons or a number input for it to create as many nodes as selected.
function listVisualizer(list) {
    let listelement = document.querySelector('#list')
    let listdepth = list
    let i = 0

        while (listelement.firstChild && i < 100) {
                i++
                listelement.removeChild(listelement.lastChild)           
            }

    while (listdepth.next !== null) {

        let listentry = document.createElement('li')
        if (listdepth.head === null && listdepth.next !== null) {
            listentry.textContent = `Head of List the Next node contains: "${listdepth.next.data}"`

        }
        else {
          if (listdepth.next !== null) {
                    listentry.textContent = `List entry containing "${listdepth.data}" Next node contains ${listdepth.next.data}`
                } 
                
             }
                 listelement.appendChild(listentry)
                 listdepth = listdepth.next
    }

    if (listdepth.next === null) {
        let listentry = document.createElement('li')

        listentry.textContent = `List entry containing "${listdepth.data}" is the end of the list`
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
    append(list, value) {
        let createnode = LinkedList.createListNode(value)

                  
        if (list.head === null) {
            let listdepth = list   
        
            if (listdepth.head === null && listdepth.next === null) { 
                listdepth.next = createnode

            } else {
                let i = 0;

                while (listdepth !== null || i < 10000) {
                    i++;
                    listdepth = listdepth.next;
                   
                    if (listdepth.next === null) {
                        listdepth.next = createnode
                        listVisualizer(list)
                        return                    
                    } 

                }
            }

        } else {
            alert('Invalid object, please input a Linked List Head node.')
        }  
    }

    // prepend(value) adds a new node containing value to the start of the list
    prepend(list, value) {

        if (typeof(list) === 'object' && list.head === null) {
            let createnode = LinkedList.createListNode(value)
            createnode.next = list.next
            list.next = createnode
            listVisualizer(list)
        } else {
            alert('Invalid object, please input a Linked List Head node.')
        }
   

    }

    // size returns the total number of nodes in the list
    size(list) {
        let i = 0;
        let listdepth = list

        while (listdepth !== null && i < 10000) {
            i++;
            listdepth = listdepth.next;
           
            if (listdepth.next === null) {
                return i                    
            } 
        }
        if (list.head === null)
            return i
    }


       // head returns the first node in the list
    headNode(list) {
    
        if (list.head === null)
            return list
        }   
  

    // tail returns the last node in the list
    tailNode(list) {
        let i = 0;
        let listdepth = list

        while (listdepth !== null || i < 10000) {
            i++;
            listdepth = listdepth.next;
           
            if (listdepth.next === null) {
                return listdepth                                   
            } 
        }
    }

    // at(index) returns the node at the given index
    at(list, index){
        let listdepth = list
        for (let i = 0; i < index; i++) {
            listdepth = listdepth.next
            
        }

        return listdepth

    }

    // pop removes the last element from the list and returns it to a provided array.
    pop(list, newvar) {

        if (Array.isArray(newvar) === false) {
            return alert('Please provide an array for the second parameter')
        }

        let i = 0
        let listdepth = list
          
        while (listdepth.next !== null || i < 10000) {

            i++;
 
            if (listdepth.next.next === null) {
            
                newvar.push(listdepth.next)
                listdepth.next = null
                listVisualizer(list)
                return 
                
            }
            listdepth = listdepth.next

        }

    }

    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    contains(list, value){

        let i = 0
        let listdepth = list
   

        while (listdepth.next !== null || i < 10000) {
            i++;
            listdepth = listdepth.next
           
            if (listdepth.data === value) {
                return true                                  
            } 

            if (listdepth.next === null) {
                return false
            }
        }

    }

    // find(value) returns the index of the node containing value, or null if not found.
    find(list, value){

        let i = 0
        let listdepth = list
   

        while (listdepth.next !== null || i < 10000) {
            i++;
            listdepth = listdepth.next
           
            if (listdepth.data === value) {
                return i                                  
            } 
        }

    }

    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString(list) {
        let nodestring = 'The data contents of the linked list are as follows:'
        let i = 0
        let listdepth = list.next
   

        while (listdepth !== null || i < 10000) {
            i++;
            nodestring += ` ${listdepth.data},`
            listdepth = listdepth.next
           
            if (listdepth.next === null) {
                nodestring += ` ${listdepth.data},`
                return nodestring                                   
            } 
        }

    }

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
let headnode = LinkedList.createHead()



headnode.append(headnode, '1 append test')
headnode.append(headnode, '2 appened test')
headnode.append(headnode, '3 append test')
headnode.prepend(headnode, '1 prepend test')
