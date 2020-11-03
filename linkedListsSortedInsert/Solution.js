function Node(data) {
    this.data = data;
    this.next = null;
}
  
function sortedInsert(head, data) {
    const newNode = new Node(data);
    
    if(head === null) {
      return newNode;
    }
    
    let current = head;
    let PreNode = null;
    while (current !== null && current.data < newNode.data) {
      PreNode = current;
      current = current.next;
    }
    
    if(current === head) {
      newNode.next = current;
      return newNode;
    }
    
    if(current === null) {
      PreNode.next = newNode;
      return head;
    }
    
    PreNode.next = newNode;
    newNode.next = current;
    
    return head;
}