
var Quest = Quest || {};

function treeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Quest = {
    init: function () {
        var tree = new treeNode(1);
        tree.left = new treeNode(2);
        tree.right = new treeNode(3);
        tree.left.left = new treeNode(7);
        tree.left.right = new treeNode(6);
        tree.right.left = new treeNode(5);
        tree.right.right = new treeNode(4);

        // Quest.getTreeHeight(tree);
        // Quest.levelOrderTraversal(tree);
    },
    getTreeHeight: function(root){
        var lh=0,rh=0;
        function getHeight(root){
            if(!root){
                return 0;
            }
            else {
                return (Math.max(getHeight(root.left), getHeight(root.right)) + 1);
            }
        }
        return getHeight(root);
    },
    levelOrderTraversal: function(treeRoot){ // time complexity worst case O(n^2)
        var h = Quest.getTreeHeight(treeRoot),dir=0;
        for(var i=0;i<h;i++){
            dir = i%2;
            Quest.levelPrint(i,treeRoot,dir);
        }
    },
    levelPrint: function (level, root, dir) { 
        if (!root) {
            return;
        }

        if (level == 0) {
            console.log(root.data);
        } else {
            if(dir == 1){
                if (root.left) {
                    Quest.levelPrint(level - 1, root.left);
                }
                if (root.right) {
                    Quest.levelPrint(level - 1, root.right);
                }
            } else {
                if (root.right) {
                    Quest.levelPrint(level - 1, root.right);
                }
                if (root.left) {
                    Quest.levelPrint(level - 1, root.left);
                }
            }
        }
    },

    levelOrderTraversalQueue: function(root){ // O(n)
        var queue=[],te=null;
        if(!root){
            return;
        }
        queue.push(root);
        while(queue.length>0){
            te=queue.shift();
            console.log(te.data);

            if(te.left){
                queue.push(te.left);
            }
            if(te.right){
                queue.push(te.right);
            }
        }
    },

    flattenObject: function(obj){
        var returnObj={};
        if(!obj){
            return;
        }
        for(var key in obj){
            if(!obj.hasOwnProperty(key)) continue;
            if(typeof(obj[key]) == 'object'){
                var flatObj = this.flattenObject(obj[key]);
                for(var i in flatObj){
                    if(!flatObj.hasOwnProperty(i)) continue;
                    else {
                        returnObj[ key + "." + i] = flatObj[i];
                    }
                }
                
            } else {
                returnObj[key] = obj[key];
            }
        }
        return returnObj;
    }
}

Quest.init();