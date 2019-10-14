function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  return getLastChild(document.querySelector('#grand-node'))
}

function getLastChild(node){
    if(node.childElementCount == 1){
        return getLastChild(node.children[0]);
    } else {
        return node;
    }
}

function increaseRankBy(n){
  let listItems = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i<listItems.length; i++){
    listItems[i].innerHTML = parseInt(listItems[i].innerHTML)+n
  }
}
