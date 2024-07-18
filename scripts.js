// You will need two classes or factories:

// LinkedList class / factory, which will represent the full list.
// Node class / factory, containing a value property and a link to the nextNode, set both as null by default.
// Build the following functions in your linked list class / factory:


function listVisualizer(list) {
    if (typeof(list) !== 'object' || list.head !== null ) {
        alert("Please provide a LinkedList object")

        return
    }

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

function listTraverser(list, value) {
    if (typeof(list) !== 'object' || list.head !== null ) {
        alert("Please provide a LinkedList object")

        return
    }

    let targetnode = list
    let i = 0
    while (targetnode.next !== null || i < 10000) {
        if (targetnode.head === null && targetnode.next === null) {
            return result = {'target': targetnode, 'depth': i}
        }

        if (targetnode.next === null && targetnode.data !== value && targetnode.head !== null) {
            return result = {'target': targetnode, 'depth': i}
        } 
        
        if(targetnode.data === value && targetnode.head !== null) {
            return result = {'target': targetnode, 'depth': i, 'valuedepth': i}
        }
        i++;
        targetnode = targetnode.next; 


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
        if (typeof(list) !== 'object' || list.head !== null ) {
            alert("Please provide a LinkedList object")

            return
        }

        let createnode = LinkedList.createListNode(value)
        let tailnode = listTraverser(list)
            
        if (list.head === null) {

            if (list.head === null && list.next === null) { 
                tailnode.target.next = createnode

            } else {

                if (tailnode.target.next === null) {
                    tailnode.target.next = createnode
                    listVisualizer(list)
                    return                    
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
        if (typeof(list) !== 'object' || list.head !== null ) {
            alert("Please provide a LinkedList object")
        }

        list = listTraverser(list)

        if (list.target.next === null) {
            return list.depth
        } 
      
        if (list.target.head === null) {
            return list.depth
        }
    }

       // head returns the first node in the list
    headNode(list) {
        if (typeof(list) !== 'object' || list.head !== null ) {
            alert("Please provide a LinkedList object")
        }

        if (list.head === null)
            return list
        }   
  
    // tail returns the last node in the list
    tailNode(list) {
             
        if (typeof(list) !== 'object' || list.head !== null ) {
            alert("Please provide a LinkedList object")
        }

        list = listTraverser(list)
        if (list.target.next === null) {
            return list.target                                   
        } 
    }

    // at(index) returns the node at the given index
    at(list, index){
        if (typeof(list) !== 'object' || list.head !== null ) {
            alert("Please provide a LinkedList object")

            return
        }

        if ( typeof(index) !== 'number' || typeof(index) === 'function') {
            return alert('Please input a number for second parameter.')
        }

        let listdepth = list
        for (let i = 0; i < index; i++) {
            if (listdepth.next !== null) {
                listdepth = listdepth.next  

            } else {
                break
            }

        }
        return null 
    }

    // pop removes the last element from the list and returns it to a provided array.
    pop(list, ) {
        if (typeof(list) !== 'object' || list.head !== null ) {
            alert("Please provide a LinkedList object")

            return
        }

        let i = 0
        let listdepth = list
          
        while (listdepth.next.next !== null || i < 10000 || listdepth.head !== null) {              
              
                if (listdepth.next.next === null && !listdepth.head) {
                    break
                }
                 i++;
                listdepth = listdepth.next; 
                }

        if (listdepth.next.next === null ) {

           let tobepopped =  listdepth.next
            listdepth.next = null
            listVisualizer(list)
            return  tobepopped
            
        }
    }

    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    contains(list, value){

        if (typeof(list) !== 'object' || list.head !== null ) {
            alert("Please provide a LinkedList object")

            return
        }

        list = listTraverser(list, value)
     
        if (list.target.data === value) {
            return true                                  
        } 

        if (list.target.next === null) {
            return false
        }

    }

    // find(value) returns the index of the node containing value, or null if not found.
    find(list, value){
        if (typeof(list) !== 'object' || list.head !== null ) {
            alert("Please provide a LinkedList object")

            return
        }

        list = listTraverser(list, value)

        if (list.valuedepth) {
               return list.valuedepth
        } else {
            return false
        }       

    }

    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString(list) {

        if (typeof(list) !== 'object' || list.head !== null ) {
            alert("Please provide a LinkedList object")

            return
        }

        let nodestring = 'The data contents of the linked list are as follows:'
        let i = 0
        let listdepth = list.next
   
        while (listdepth !== null || i < 10000) {
            i++;
            nodestring += ` ( ${listdepth.data} ) -> `
            listdepth = listdepth.next
           
            if (listdepth.next === null) {
                nodestring += ` ( ${listdepth.data} ) -> null`
                return nodestring                                   
            } 
        }

    }

    // insertAt(value, index) that inserts a new node with the provided value at the given index.
    insertAt(list, value, index){

        if (typeof(list) !== 'object' || list.head !== null ) {
            alert("Please provide a LinkedList object")

            return
        }

        if ( typeof(index) !== 'number' || typeof(index) === 'function') {
            return alert('Please input a number for second parameter.')
        }

        let createnode = LinkedList.createListNode(value)
        let i = 0
        let listdepth = list

        for (let i = 0; i < index; i++) {
            if (listdepth.next !== null) {
                listdepth = listdepth.next  
            } else {
                listdepth.next = null
                break
            }
        }

       if (listdepth.next === null) {
        createnode.next === null
       } else {
        createnode.next = listdepth.next

       }
       
        createnode.next = listdepth.next
        listdepth.next = createnode
        listVisualizer(list)     
   
    }

    // removeAt(index) that removes the node at the given index.
    removeAt(list, index) {
        if (typeof(list) !== 'object' || list.head !== null ) {
            alert("Please provide a LinkedList object")

            return
        }

        if ( typeof(index) !== 'number' || typeof(index) === 'function') {
            return alert('Please input a number for second parameter.')
        }

        let i = 0
        let listdepth = list

        for (let i = 0; i < index - 1; i++) {
            if (listdepth.next.next === null) {
                break
            } else {
            listdepth = listdepth.next; 
            }
         
        }
            
            listdepth.next = listdepth.next.next
            listVisualizer(list)
            return      

    }

    //Reverses the input linkedlist.
    reverse(source) {

        if (typeof(source) !== 'object' || source.head !== null) {
            alert("Please provide a LinkedList object")

            return
        }

        if (source === null) return;
        let reversed = source

        let currentNode = reversed;

        let prevNode = null;
        let nextNode = null;
        let i = 0


        while (currentNode && i < 100) {

            i++
   
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            nextNode = null;
      
        }
     
        reversed = source
        reversed.next = prevNode
        i = 0

        let finalNode = reversed;
        while (finalNode.next.head !== null && i < 100) {
            i++
            finalNode = finalNode.next;
     
        }
        finalNode.next = null;

        listVisualizer(reversed)
        return reversed;
    }

}

//list creation testing and function testing
let headnode = LinkedList.createHead()

headnode.append(headnode, '1 append test')
headnode.append(headnode, '2 append test')
headnode.append(headnode, '3 append test')
headnode.prepend(headnode, '1 prepend test')

// let reversed = headnode.reverse(headnode)