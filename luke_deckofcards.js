function Card(r, s) {
      this.rank = r;
      this.suit = s;
      this.toHTML = function() {
        return "<li class='card'>" + this.rank + " of " + this.suit + "</li>";
      }
    }
function Deck() {
  var thisDeck = this;
  this.suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
  this.ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  $.each(thisDeck.suits, function() {
    var suit = this;
    $.each(thisDeck.ranks, function() {
      var rank = this;
      var card = new Card(rank, suit);
      $('#deck').append(card.toHTML());
    });
  });
}

var deckOfCards = new Deck ();
$('li:contains("Hearts")').addClass('hearts');
$('li:contains("Clubs")').addClass('clubs');
$('li:contains("Diamonds")').addClass('diamonds');
$('li:contains("Spades")').addClass('spades');

$('#doTheShuffle').click(function() {
  var shuffle = function(m) {
    var rand, $rand;
    rand = Math.floor(Math.random() * m--);
    $('li:eq(' + m + ')').
      after($('li:eq(' + rand + ')')).
      insertBefore($('li:eq(' + rand + ')'))
    if(m) {
      setTimeout(shuffle, 100, m);
    }
  };
  shuffle($('.card').length);
});
