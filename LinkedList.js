

class Node{
    constructor(val){
        this.val =val;
        this.next =null;
    }
}

let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");
a.next =b;
b.next =c;
c.next=d;

const iterate = (head,tail=head)=>{
    let current = head;
    while(current!=null){
        console.log(current.val);
        current=current.next;
    }
    console.log(`TAIL pointer :\n`,{tail});
}

const recur = (head)=>{
    if(head==null) return;
    console.log(head.val);
    recur(head.next);
}


iterate(a);
recur(a);


const store =(head,list=[])=>{
    if(head ===null)return [];
        list.push(head.val);
        store(head.next,list);
    return list;
};

console.log(store(a));

const sumList = (head) => {
    let sum=0;
    while(head!==null){
      sum+=head.val;
      head=head.next;
    }
    return sum;
    // todo
  };

  const sumList_recu = (head,sum=0) => {
    if(head===null)return 0;
    sum+=head.val+sumList_recu(head.next,sum);
    return sum;
    // todo
  };
  
  const getNodeValue_rec = (head, index,count=0) => {
    if(head===null)return null;
    if(count ===index) return head.val;
    return getNodeValue_rec(head.next,index,count+1);
  };

  const getNodeValue = (head, index) => {
    while(head!==null){
      if(index ===0){
        return head.val;
      }
      index-=1;
      head=head.next;
    }
    return null;
  };

  const reverseList = (head) => {
    let prev= null;
    let current=head;
   
    while(current!==null){
      let next = current.next;
      current.next=prev;
      prev=current;
      current=next;
    }
    return prev;
  };

  const reverseList_recu = (head,prev=null) => {
    if(head===null)return prev;
    let next=head.next;
    head.next=prev;
    return reverseList_recu(next,head);
    
  };

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;

  const zipperLists = (head1, head2) => {
    if(head1===null&&head2===null) return;
    if(head1 === null) return head2;
    if(head2===null)return head2;
    const next1 = head1.next;
    const next2= head2.next;
    head1.next=head2;
    head2.next =zipperLists(next1,next2);
    return head1;
  };
  const newNode =zipperLists(a,x);
  let n = newNode;
  while(n!==null){
      console.log(n.val);
      n=n.next;
  }