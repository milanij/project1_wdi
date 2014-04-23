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
     $scope.cells = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
     $scope.isXTurn = true;

     $scope.makeMove = function(c) {

            $scope.cells[c] = $scope.isXTurn? 'X' : 'O';
            $scope.isXTurn = !$scope.isXTurn;

            $scope.storeVar = function(c) {
                    for
                    xArray[i] = c

            }

            var xArray = [ ];
            var yArray = [ ];


    };

    $scope.checkCell = function( ) {

    }








}










