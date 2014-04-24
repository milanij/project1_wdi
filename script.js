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


            $scope.makeMove = function(u) {
                if($scope.cells[u] === ' ') {
                    $scope.cells[u] = $scope.isXTurn? 'X' : 'O';
                    $scope.isXTurn = !$scope.isXTurn;
                    turnNum ++;
                    var winArray = [8, 1, 6, 3, 5, 7, 4, 9, 2];

                }
                    console.log("Turn Number " + turnNum);
                    console.log($scope.cells);
                    $scope.winCheck( );
                    $scope.tieCheck( );
    };

// 8 | 1 | 6
// 3 | 5 | 7
// 4 | 9 | 2

        $scope.winCheck = function( ) {
            if( turnNum >= 5 ) {
                    console.log("winCheck is running.");
                    if ($scope.cells[0] === 'X' || $scope.cells[0] === 'O' || $scope.cells[0] === ' ') {
                        if($scope.cells[0]+$scope.cells[1]+$scope.cells[2] === 'XXX' || $scope.cells[0]+$scope.cells[3]+$scope.cells[6] === 'XXX' || $scope.cells[0]+$scope.cells[4]+$scope.cells[8] === 'XXX') {
                            console.log("X wins!");
                        }
                        else if($scope.cells[0]+$scope.cells[1]+$scope.cells[2] === 'OOO' || $scope.cells[0]+$scope.cells[3]+$scope.cells[6] === 'OOO' || $scope.cells[0]+$scope.cells[4]+$scope.cells[8] === 'OOO') {
                            console.log("O wins!");
                        }
                    }
                    if ($scope.cells[1] === 'X' || $scope.cells[1] === 'O' || $scope.cells[1] === ' ') {
                        if($scope.cells[1]+$scope.cells[4]+$scope.cells[7] === 'XXX') {
                            console.log("X wins!");
                        }
                        else if($scope.cells[1]+$scope.cells[4]+$scope.cells[7] === 'OOO') {
                            console.log("O wins!");
                        }
                    }
                    if ($scope.cells[2] === 'X' || $scope.cells[2] === 'O' || $scope.cells[2] === ' ') {
                        if($scope.cells[2]+$scope.cells[5]+$scope.cells[8] === 'XXX' || $scope.cells[2]+$scope.cells[4]+$scope.cells[6] === 'XXX') {
                            console.log("X wins!");
                        }
                        else if($scope.cells[2]+$scope.cells[5]+$scope.cells[8] === 'OOO' || $scope.cells[2]+$scope.cells[4]+$scope.cells[6] === 'OOO') {
                            console.log("O wins!");
                        }
                    }
                    if ($scope.cells[3] === 'X' || $scope.cells[3] === 'O' || $scope.cells[3] === ' ') {
                        if($scope.cells[3]+$scope.cells[4]+$scope.cells[5] === 'XXX') {
                            console.log("X wins!");
                        }
                        else if($scope.cells[3]+$scope.cells[4]+$scope.cells[5] === 'OOO') {
                            console.log("O wins!");
                        }
                    }
                    if ($scope.cells[6] === 'X' || $scope.cells[6] === 'O' || $scope.cells[6] === ' ') {
                        if($scope.cells[6]+$scope.cells[7]+$scope.cells[8] === 'XXX') {
                            console.log("X wins!");
                        }
                        else if($scope.cells[6]+$scope.cells[7]+$scope.cells[8] === 'OOO'){
                            ("O wins!");
                        }
                    }
            }
        };

    $scope.tieCheck = function( ){
        if(turnNum === 9){
            console.log("tieCheck is running.");
        }
    };


}












