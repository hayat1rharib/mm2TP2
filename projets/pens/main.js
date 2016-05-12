(function(){
    "use strict";
    
    var main =document.querySelector('main');  
    var maTemplate=main.firstElementChild; 
    main.innerHTML = ""; 
    initialiser();
      
function initialiser(){
    var Liste=[
            {p:"NNwQvZ",a:"NNwQvZ",c:"JS stylage direct (exercice)"},
            {p:"YqYppg",a:"YqYppg",c:"JS DOM innerHTML (exercice)"},
            {p:"aNEwmg",a:"aNEwmg",c:"JS Objets Passifs (Exercice)"},
            {p:"grWXpq",a:"grWXpq",c:"Texte CSS Exercice"},
            {p:"xVdpvb",a:"xVdpvb",c:"Flexbox Exercice"}      
         ]; 
    
    for(var i = 0; i < Liste.length; i++)
        {
            var clone = maTemplate.cloneNode(true);
            clone.querySelector("p").setAttribute("data-slug-hash",Liste[i].p);                  
            clone.querySelector("a").setAttribute("href","http://codepen.io/hayat1rharib/"+Liste[i].a+"/");
            clone.querySelector("a").textContent = Liste[i].c;
            main.appendChild(clone); 
       }
}
})();