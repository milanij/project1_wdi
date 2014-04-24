window.onload = function( ) {
    var whoGoesFirst = function ( ) {
    player1 = Math.random( );
    player2 = Math.random( );
    if ( player1 > player2 ) {
        console.log("Player 1 goes first.");
    } else {
        console.log("Player 2 goes first.");
        }

    };
whoGoesFirst( );
};

var turnNum = 0;

function TicTacController($scope) {
     $scope.cells = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
     $scope.isXTurn = true;
     $scope.isCellFilled = false;


     $scope.makeMove = function(u) {

            $scope.cells[u] = $scope.isXTurn? 'X' : 'O';
            $scope.isXTurn = !$scope.isXTurn;
            turnNum ++;
            console.log("Turn Number " + turnNum);
            console.log($scope.cells);
           $scope.winCheck( );
    };

    $scope.winCheck = function( ) {
        if( turnNum >= 5 ) {
                console.log("winCheck is running.");

                for ( i = 0; i < 9 ; i++) {
                    if( i === 0 || 3 || 6) {
                        $scope.cells[i]
                    }
                }




        }
    };

}



























