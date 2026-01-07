class Node{
  constructor(val){
    this.value=val
    this.next=null
  }
}

class LinkList{
  constructor(){
    this.head=null
  }
  
  isEmpty(){
    return this.head === null ? true : false
  }
  
  print(){
    if(this.isEmpty()){
      console.log('List is Empty')
    }
    else{
      console.log('List Has')

      let curr=this.head
      while(curr !== null){
        console.log(curr.value)
        curr=curr.next
      }
    }
  }
  
  insertStart(value){
    const newNode= new Node(value)
    if(this.isEmpty()){
      this.head =newNode
    }else{
      newNode.next=this.head
      this.head=newNode
    }
  }
  
  insertEnd(value){
    const newNode= new Node(value)
    if(this.isEmpty()){
      this.head=newNode
    } else
    {
    let curr = this.head
      while(curr.next !== null){
      
      curr=curr.next
      
      }
      curr.next=newNode
     }
  } 
  
  deleteStart(){
    if(this.isEmpty()){
      console.log('List is Already Empty')
    }else{
      console.log('Node deleted')
      this.head=this.head.next
    }
  }
  
  deleteEnd(){
    if(this.isEmpty()){
      console.log('List is Already Empty')
    }else if(this.head.next === null){
      console.log('Node deleted')
      this.head=null
    }else{
      let curr = this.head
      while(curr.next.next !== null){
        curr=curr.next
      }
      console.log('Node deleted')
      curr.next =null
    }
  }
  
  deleteAnyNode(value){
    if(this.isEmpty()){
      console.log('List is Already Empty')
    }else if(this.head.next === null && this.head.value === value){
      console.log('Node deleted')
      this.head=null
    }else if(this.head.next !== null && this.head.value === value){
     this.head=this.head.next
    }
    else {
      let prev = this.head
      let curr = this.head.next
      
      while(curr !== null){
        if(curr.value === value){
          prev.next=curr.next // Else prev.next= prev.next.next
                console.log('Node deleted')
          return
        }
        prev = prev.next
        curr = curr.next; 
        // prev=curr
        // curr=curr.next
      }
      
      // prev.next =prev.next.next
      // curr.next =null
      console.log('Value not found');
    }
  }
  
  searchElement(ele){
    let curr= this.head
    
    while(curr.next !== null){
      if(curr.value === ele){
        console.log('Element Found')
        return
      }
      curr=curr.next
    }
        console.log('Element Not Found')
  }
  
  createCycle(position) {
    if (this.head === null || this.head.next === null) return;

    let tail = this.head;
    let target = this.head;
    let index = 0;

    while (tail.next !== null) {
      tail = tail.next;

      if (index === position) {
        target = tail; // Remember the target node to create the cycle
      }

      index++;
    }

    tail.next = target; // Create the cycle
  }
  
  detectCycle() {
  let slow = this.head; // Start slow pointer at the head
  let fast = this.head; // Start fast pointer at the head

  while (fast !== null && fast.next !== null) {
    slow = slow.next;        // Move slow one step
    fast = fast.next.next;   // Move fast two steps

    if (slow === fast) {     // If slow and fast point to the same node
      console.log('CYCLE Detected');
      return;
    }
  }

  console.log('No-CYCLE Detected');
}
}

const newNode= new LinkList()
// newNode.insertStart(10)
// newNode.insertStart(20)
// newNode.insertStart(30)

newNode.insertEnd(10)
newNode.insertEnd(20)
newNode.insertEnd(30)
newNode.insertEnd(40)
newNode.insertEnd(50)

// newNode.createCycle(1)
// newNode.deleteAnyNode(40)

// newNode.deleteEnd()
newNode.detectCycle()

newNode.print()
