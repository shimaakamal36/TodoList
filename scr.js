let todoList=document.querySelector('ul');
let btn=document.getElementsByTagName('button')[0];
function addItem(val,parent){
    let listItem=document.createElement('LI');
    listItem.innerHTML='<section><span>' +val +'</span>'+ '<button class="set"> x </button></section>';
    parent.appendChild(listItem);
    let close=listItem.lastElementChild.lastElementChild;
    close.addEventListener('click',function(){
    this.parentElement.parentElement.remove();
}); 
}

btn.addEventListener('click',(e) => {
    e.preventDefault();
    let formInput=document.getElementsByTagName('input')[0].value;
    if(formInput){
        addItem(formInput,todoList);
    }
});
let todoData =async function(){
    let res=await fetch("https://jsonplaceholder.typicode.com/todos");
    let data= await res.json();
    // console.log(data);
    let fetchData=data.slice(0,10);
    for(var item of fetchData){
        addItem(item.title,todoList);
    }
}
todoData();

