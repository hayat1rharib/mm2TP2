
document.querySelector("iframe").src="langues.html";
document.querySelector("iframe").style.height = document.querySelector("iframe").contentDocument.body.scrollHeight+6000+'px';


var $label = $("label");
$label.append("<p></p>");
$label.append("<p></p>");

var iframeRoot = document.querySelector("iframe").contentDocument;
$label.append("<button>Basculer iframe</button>");
$( "button:first" ).click(function() {
  $( "iframe:first" ).fadeToggle( "slow", "linear" );
});

$label.append("<button id='basculerParagraphe'>Basculer paragraphe</button>");

$( '#basculerParagraphe').click(function() {    
  $('#iframe').contents().find('p').fadeToggle( "slow", "linear");
});

$label.append("<button id='Basculerboutons'>Basculer boutons</button>");

function creerLesBoutonsDansLesArticles(){
     var $article =  $('#iframe').contents().find('article');
        $article.css("position", "relative");
    
        $('#iframe').contents().find('article button').css({
            "border-radius": "5px",
            "opacity": "0.5",
            "font-weight": "bold",
            "position": "absolute",
            "right": "10px",
            "top": "10px",
            "width": "6em"
        });
    
        $('#iframe').contents().find('article button').hover(function () {
            $(this).css({
                "color": "red",
                "opacity": "1"
            });
          }, function () {
            $(this).animate({
                "opacity": "0.5"
            },"slow",function () {
                $(this).css({"color": "black"});
               });
            });
    
         $('#iframe').contents().find('article button').click(function () {
           var $action = $(this).parent().find('p,ol');
            $action.fadeToggle("slow", "linear");
        });

}

var premiereFois = true;
$( '#Basculerboutons').click(function() {  
    if(premiereFois) {
        premiereFois = false;
    
        $('#iframe').contents().find('article').append("<button '>Basculer affichage</button>");
     creerLesBoutonsDansLesArticles();
        
    }
    var $boutons= $('#iframe').contents().find('article button');
    $boutons.fadeToggle();
});


