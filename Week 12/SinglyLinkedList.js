/** 
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 https://kalkicode.com/data-structure/single-linked-list-visualization
 */
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * SLL(Singly Linked List) 
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
    constructor() {
        this.head = null;
    }

    /**
     * Determines if this list is empty.
     * @returns {boolean}
     */
    isEmpty() {
        if (this.head === null) {
            return true
        }
        else {
            return false
        }
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
        const newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newNode
            return this
        }

        let runner = this.head;
        while (runner.next) {
            runner = runner.next
        }
        runner.next = newNode
        return this
    }


    //given
    printList() {
        if (this.head) {
            console.log("Head: " + this.head.data)
        } else {
            console.log("this is an empty list")
        }

        let runner = this.head;
        while (runner) {
            console.log(runner.data)
            runner = runner.next
        }

    }
}


const emptyList = new SLL();

const list1 = new SLL();
list1.insertAtBack(3).insertAtBack(5).insertAtBack(8)

emptyList.printList()

list1.printList()

list1.insertAtBack(10);
list1.printList()





