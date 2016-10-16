// console.log("JS file is connected to HTML! Woo!")
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
if ( cardOne == cardTwo ) {
	alert( "You found a match" );
}
else if( cardThree == cardFour )
	alert( "You have found a match" );
else
	alert( "Sorry, try again" );*/

// assign the cards values.
var cards = [ 'queen', 'queen', 'king', 'king' ];

// Get an element with the id of game-board and set it to variable game-board.
var gameBoard = document.getElementById( 'game-board' );

// create an empty array.
var cardsInPlay = [];

// creates the game board
var createBoard = function( )
{
	// Loop through the length of the cards and make an HTML element for each card. 
	// Each HTML element should be a div as well as have the class card
	for( var i = 0; i < cards.length; i++ )
	{
		var cardElement = document.createElement( 'div' );
		cardElement.className = 'card';
		// Append each newly created card to the div that has the id game-board.
		gameBoard.appendChild( cardElement );

		// this will set the card's 'data-card' to be the element of the array
  		// data- attributes are meant to store data about an element that is not
  		// tied to a style.
  		// i.e. "king"
		cardElement.setAttribute( 'data-card', cards[i] );

		// when a card is clicked the function isTwoCards will be executed
		cardElement.addEventListener( 'click', isTwoCards );
 	}
 }

// This function tests if two cards in play are a match
var isMatch = function( cards )
{
	if( cards[0] === cards[1] )
		alert( "You have found a match" );
	else
		alert( "Sorry, try again" );
}

// This function checks to see if there are cards in play
var isTwoCards = function()
{
	// add card to array of cardsInPlay
	cardsInPlay.push( this.getAttribute( 'data-card' ));

	// set the cardElement's innerHTML to an image of either a King of Queen
	// depending on the data-card attribute to decide which image to display.
	if (this.getAttribute('data-card') === 'king') 
	{
		this.innerHTML = "<img src='images/king.png'>"; // king
	} 
	else 
	{
		this.innerHTML = "<img src='images/queen.png'>"; //queen
	}

	// if you have two cards in play check for a match
	if( cardsInPlay.length === 2 )
	{
		// pass the cardsInPlay as an argument to isMatch function
	    isMatch( cardsInPlay );

	    // clear cards in play array for next try
	    cardsInPlay = [];
	}
}

createBoard();