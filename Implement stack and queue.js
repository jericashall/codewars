//queue linked list

class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.back = null
    }
    isEmpty() {
        return !this.front
    }
    enqueue(value) {
        // create a new node
        let node = new Node(value)
        // check if queue is empty
        if(this.isEmpty()) {
        // if empty point front and back pointers to node
            this.front = node
        } 
        //else queue is not empty
        else {
        //push node to back of queue 
        //by pointing the last node to the newly created node
        this.back.next = node
        //move back pointer to new node
        }
        this.back = node;
    }
    print() {
        //if queue is empty
        if(this.isEmpty()) {
            console.log('Queue is empty')
        }
        //else loop through and print values
        else {
            //to print everything on one line create a temp arr
            let queueShow = []
            // temp variable to loop with
            let curr = this.front
            while(curr) {
                queueShow.push(curr.val)
                curr = curr.next
            }
            console.log(queueShow.join(', '))
        }
    }
    dequeue() {
        //removes elements from the queue in the order they were insert
        //pointer to front of queue
        let node = this.front
        // check if queue not empty
        if(!this.isEmpty()) {
            //move front to next element
            this.front = this.front.next
        } 
        //if front is null

        if(!this.front) {
            //move back to null to indicate an empty queue
            this.back = null
        }
        // return node at front of queue
        return node
    }
    peek() {
        return this.front
    }
}

//queue - array

class QueueTwo {
    constructor() {
        this.items = []
    }
    enqueue(value) {
        this.items.push(value)
    }
    dequeue() {
        return this.items.shift()
    }
    peek() {
        return this.items[0]
    }
    getSize() {
        return this.items.length
    }
    isEmpty() {
        return this.getSize() === 0
    }
}

//stack - array

class Stack {
    constructor() {
        this.items = []
    }
    push(value) {
        this.items.push(value)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        if(this.isEmpty()) {
            return 'stack is empty'
        }
        return this.items[this.items.length-1]
    }
    getSize() {
        return this.items.length
    }
    isEmpty() {
        return this.getSize() === 0
    }
}

//stack linked list

class Node2 {
    constructor(value, next) {
        this.val = value
        this.next = next
    }
}

class Stack2 {
    constructor() {
        this.top = null
    }

    push(value) {
        let node = new Node(value, this.top)
        this.top = node
    }
    
    pop() {
        let node = null
        if(this.top) {
            node = this.top.val
            this.top = this.top.next
        }
        return node
    }

    peek() {
        return this.top
    }

    isEmpty() {
        return !this.top
    }

    print() {
        if(this.isEmpty()) {
            return 'EMPTY STACK'
        } else {
            let temp = []
            let curr = this.top
            while(curr) {
                temp.push(curr.val)
                curr = curr.next
            }
            console.log(temp.join(', '))
        }
    }
}
