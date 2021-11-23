var itemTwo = document.getElementById('two');

var elText = itemTwo.firstChild.noteValue ;

elText = elText.replace( 'pine nuts', 'kale');

itemTwo.firstChild.nodeValue = elText ;
