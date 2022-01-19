class Node{
    constructor(val){
        this.val =val;
        this.left =null;
        this.right=null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
a.left=b;
b.left=d;
b.right=e;
a.right=c;
c.right=f;

const DFS_tree =(node) =>{
    let stack=[];
    stack.push(node);
    console.log(stack);
    while(stack.length>0){
        let q= stack.pop();
        console.log(q.val);
        if(q.right!=null){
            stack.push(q.right);
        }
        if(q.left!=null){
            stack.push(q.left);
        }
    }
}
// console.log(a);
DFS_tree(a);

const DFS_recur=(node)=>{
if(node == null) return[];
  let lefttree=DFS_recur(node.left);
  let righttree=DFS_recur(node.right);
  return [node.val,...lefttree,...righttree];
}

console.log("---------------------");
console.log(DFS_recur(a));
console.log("---------------------");
const BFS_tree =(node) =>{
    let queue=[];
    queue.push(node);
    while(queue.length>0){
        let q= queue.shift();
        console.log(q.val);
        if(q.left!=null){
            queue.push(q.left);
        }
        if(q.right!=null){
            queue.push(q.right);
        }
    }
}

BFS_tree(a);

const findTarget =(root,target)=>{
    if(root ===null)return false;
    if(root.val ===target) return true;
    let queue =[root];
    while(queue.length>0){
        let q = queue.shift();
        if(q.val === target){
            return true;
        }
    if(q.left) queue.push(q.left);
    if(q.right) queue.push(q.right);
    }
    return false;
}

const findTarget_recur =(root,target)=>{
    //bfs approach
    if(root ===null)return false;
    if(root.val ===target) return true;
    return treeIncludes(root.left,target) || treeIncludes(root.right,target);
}


const treeMinValue = (root,min=Infinity) => {
    if(root === null) return Infinity;
    let left=treeMinValue(root.left,min);
    let right=treeMinValue(root.right,min)
    return Math.min(root.val,left,right);
    // todo
  };
const a1 = new Node(3);
const b1= new Node(11);
const c1 = new Node(4);
const d1 = new Node(4);
const e1 = new Node(-2);
const f1 = new Node(1);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

console.log(treeMinValue(a1));

const treeSumrec = (root) => {
    if(root === null) return 0;
      let left=treeSumrec(root.left);
      let right=treeSumrec(root.right)
      return root.val+left+right;
    // todo
  };


  const treeSum = (root) => {
    if(root === null) return 0;
    // DFS approach in iterative
    let sum =0;
    const stack =[root];
    while(stack.length>0){
      let q= stack.pop();
      sum+=q.val;
      if(q.left)stack.push(q.left);
      if(q.right)stack.push(q.right);
    }
    return sum;
  };

  const maxPathSum = (root) => {
    if(root === null) return -Infinity;
    if(root.left ===null && root.right===null) return root.val;
    let left =maxPathSum(root.left);
    let right =maxPathSum(root.right);
    return root.val+Math.max(left,right);
    // todo
  };

  console.log("maxpathsum :"+maxPathSum(a1));