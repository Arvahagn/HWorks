//...1 Create a function that builds a tree like object given an array with object which contains parent and id properties.
function getTree(treeNodes, parent, tree, parentId) {
    tree = tree != undefined ? tree : {}
   
    if(parent === undefined) {
     parentId = 0
     parent = {[parentId] : {}}
     tree = parent
    }
   
    children = treeNodes.filter(el => el.parent == parentId).map(el => {
     return {[el.id]:{}}
    })
    children.forEach(el=>{
     tree[parentId]={...tree[parentId], ...el}
    })
   
     children.forEach(( child )=>{ 
      getTree( treeNodes, child, tree[parentId], Object.keys(child)[0]) 
     } )
     return tree
   }

// ...2 Write a JavaScript function to get all possible subsets of given length of the given array.
// Assume that all elements in the array are unique.
const getAllSubsets = (theArray,length) => theArray.reduce( (subsets, value) => subsets.concat(subsets.map(set => [value,...set])),[[]]).filter(el=>el.length===length);

    
