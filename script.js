turnNum = 0;

window.onload = function( ) {
    var whoGoesFirst = function ( ) {
    player1 = Math.random( );
    player2 = Math.random( );
    if ( player1 > player2 ) {
        alert("Player 1 goes first.");
    } else {
        alert("Player 2 goes first.");
        }

    };
whoGoesFirst( );
};


function TicTacController($scope) {
     $scope.columns = [ [ '','','' ], [ '','','' ], [ '', '', '' ] ];
     $scope.isXTurn = true;

     $scope.makeMove = function(c, cell) {

            $scope.columns[c] [cell] = $scope.isXTurn? 'X' : 'O';
            $scope.isXTurn = !$scope.isXTurn;

    };
}





