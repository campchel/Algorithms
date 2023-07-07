class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        var newNode = new Node(data);
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    printList() {
        if (!this.head) {
            console.log("Empty list");
            return;
        }
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    contains(data) {
        var runner = this.head;
        while (runner) {
            if (runner.data === data) {
            return true;
        }
            runner = runner.next;
        }
        return false;
    }

    removeBack() {
        if (!this.head) {
            console.log("Empty list");
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        var runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        runner.next = null;
        }

    average() {
        if (!this.head) {
            console.log("Empty list");
            return;
        }
        var sum = 0;
        var count = 0;
        var runner = this.head;
        while (runner) {
            sum += runner.data;
            count++;
            runner = runner.next;
        }
        return sum / count;
    }

    containsRecursive(data, curr = this.head) {
        if (curr === null) {
            return false;
        }
        if (curr.data === data) {
            return true;
        }
        return this.containsRecursive(data, curr.next);
    }
}

var list1 = new SLL();

var list2 = new SLL();
list2.insertAtBack(1);
list2.insertAtBack(2);
list2.insertAtBack(3);

list1.printList();
list2.printList();

console.log(list2.contains(3));
console.log(list2.contains(1000));
