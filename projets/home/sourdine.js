
    "use strict";


    
	document.getElementById('lebel').title='activé la sourdine';
	var player = document.querySelector('audio');

    if( localStorage.checked==="true"){
        myCheck.checked="true";
    }
    else{
        player.play();
    }

    

    function validate(){
        localStorage.checked = myCheck.checked;
        if (myCheck.checked ){
            player.load();
             document.getElementById('lebel').title='Désaactivé la sourdine';
        }else{
            player.play();
              document.getElementById('lebel').title='activé la sourdine';
        }

    }
 

function menu(projet){ 
   var templateScript=document.querySelector("#templateScript").innerHTML;
    var template = Handlebars.compile(templateScript);
    var CompileHTML=template(projet);
    document.querySelector("ul").innerHTML = CompileHTML;
}

jQuery.getJSON("projets.json").done(function(jsonData){
 console.log(JSON.stringify(jsonData,null,4));
    menu(jsonData);
})
.fail(function(){
 console.log("Imposible de charger le Json");   
});


