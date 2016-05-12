(function(){
    "use strict";

    var todoTexte=[
    "chose à faire",
    "Autre chose à faire",
    "Encore une chose à faire"
];
    
    var template= document.querySelector("template").content.firstElementChild;
function ajouterTodo(todotext)
{
    var article = template.cloneNode(true);
    todolist.insertBefore(article, todolist.firstElementChild);
    article.querySelector(".text").textContent=todotext;
    article.querySelector("img").onclick = deleteTodo; 
    article.querySelector("img").onkeypress = deleteTodo; 
    article.querySelector("input").addEventListener("change", verifierActionCheckbox);
    article.querySelector("input").addEventListener("keypress", verifierEnterCheckbox);
    var inpu = article.querySelector("div");
    inpu.onkeypress=passfocus; 
    input.onkeypress=inputSet;
    storage();
} 

function deleteTodo(){
     this.parentNode.outerHTML =""; 
     storage();   
     bouton1.disabled=false;
}

function verifierActionCheckbox()
{
    
    var article = this.parentNode;
    if(this.checked)
    {  
        donelist.appendChild(article);
        this.focus();
        article.classList.add("tacheComplete");
     
    }
    
    else
    {
        article.classList.remove("tacheComplete");
        todolist.appendChild(article);
        this.focus();
    }
   bouton2.disabled = false;
   storage();   
}

function verifierEnterCheckbox(){
  var article = this.parentNode;
    if(this.checked==false)
    {  
         donelist.appendChild(article);
         article.classList.add("tacheComplete");
         this.checked=true;
         this.focus();   
    }
    
    else
    {
        article.classList.remove("tacheComplete");
        todolist.appendChild(article); 
        this.checked=false;
        this.focus();   
    }
     storage(); 
}

function passfocus(event)
{        
    if(event.keyCode === 13){
       event.target.parentElement.nextElementSibling.querySelector(".text").focus();
       return false;
    }
 
}

for(var i=0; i<todoTexte.length; i++){
   ajouterTodo(todoTexte[i]);
}

function verifierEnterCheckbox(event)
{
     var article = this.parentNode;
    if(event.keyCode===13)
    {  
       this.checked;
    }
}

var text = document.querySelector('input');

function inputSet(event)
{
    if (event.keyCode === 13){
       ajouterTodo(text.value);
       text.value="";
        bouton1.disabled=false;
    }
    
     
}
   
function enterPress(event)
{        
    if(event.keyCode === 13){
        deleteTodo(this);
    }
        return false;
}


  
bouton1.onclick=()=>{ 
    while(todolist.hasChildNodes){
            var article = todolist.querySelector("article");
            donelist.appendChild(article);
            article.classList.add("tacheComplete");
            article.firstElementChild.checked =true;
            bouton1.disabled=true;
            bouton2.disabled=false;
        
    }
}


bouton2.onclick = () => {
   
    donelist.innerHTML = "";
    bouton2.disabled=true;
}


function storage() {
        var todolisteS = [];
        var donelisteS = [];
            
        for (var i = 0; i < todolist.children.length; i++) {
            todolisteS.push(todolist.children[i].querySelector("div").textContent);
        }
        for (var i = 0; i < donelist.children.length; i++) 
        {
            donelisteS.push(donelist.children[i].querySelector("div").textContent);
        }
    localStorage.setItem("todolisteS", JSON.stringify(todolisteS));
    localStorage.setItem("donelisteS", JSON.stringify(donelisteS));
}

function initialisation(){     
    var listeAfaire = JSON.parse(localStorage.getItem("todoliste"));
    var listeDejaFaite = JSON.parse(localStorage.getItem("donelisteS"));
        for (var i in listeAfaire)
           {
                ajouterTodo(listeAfaire[i]);
           }
        for (var i in listeDejaFaite)
           {
            ajouterTodo(listeDejaFaite[i]); 
           }
   }
    
bouton2.disabled=true;
    
initialisation();

var html = document.querySelector("html");
selectSkin.onchange = function(){
      
        if(selectSkin.selectedIndex===1){
            html.className = ("blue-on-orange");
        }
        else if(selectSkin.selectedIndex===2){
              html.className = ("yellow-on-maron");
        }
        else if(selectSkin.selectedIndex===0){
              html.className =("red-on-black");
        }
         else if(selectSkin.selectedIndex===3){
              html.className =("bleu-on-rose");
        }
       
}    

function parseQueryString(qstr){
       var query={};
       var parametres = qstr.substr(1).split('&');
        for(var i=0 ; i<parametres.length; i++){
           var keyAndValue= parametres[i].split('=');
           var key =decodeURIComponent(keyAndValue[0]) ;  
           var value = decodeURIComponent(keyAndValue[1] || '');
           query[key] =value;
        }
        return query;
    }
    
    var qstr = window.location.search;
    html.className = parseQueryString(qstr).skin;
    

})();

