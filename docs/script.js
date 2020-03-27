let contact = document.getElementsByName("h4");
  
contact.addEventListener("mouseenter", function( event ) {   
  event.target = "purple";

  // on réinitialise la couleur après quelques instants
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// Ce gestionnaire sera exécuté à chaque fois que le curseur
// se déplacera sur un autre élément de la liste
test.addEventListener("mouseover", function( event ) {   
  // on met l'accent sur la cible de mouseover
  event.target.style.color = "orange";

  // on réinitialise la couleur après quelques instants
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);