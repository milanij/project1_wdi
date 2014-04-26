// The below is a function to be able to randomly generate who plays first.
// .... although it is not hooked up.
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


// Establishes a global variable for turn number.
var turnNum = 0;

// Below is the app and controller for tic tac toe.
angular.module( "TicTacApp", ["firebase"] )
    .controller( "TicTacAppController", function( $scope, $firebase ) {
        var ticTacRef = new Firebase("https://original-ttt.firebaseio.com//games");

        ticTacRef.once("value", function( data ) {
                var games = data.val( ); // Get the real objects out of the angularified blob.

                if( games !== null ) {
                        console.log(games);
                        var keys = Object.keys(games);  // Get all the screwy text keys.
                        var lastKey = keys[keys.length - 1];    // Find the last key.
                        var lastGame = games[lastKey];  // Use the last key to get the last game object.

                        if( lastGame.waiting === true ) {
                                // // Currently someone is waiting to play.
                                // // Find the Angular version of this game.
                            lastGame = ticTacRef.child(lastKey);
                            lastGame.set( {waiting: false, isXTurn: true, cells: [' ',' ',' ',' ',' ',' ',' ',' ',' '] } );
                            refFire = $firebase(lastGame);
                        }
                        else {
                            // A person has arrived and wants to start playing TicTacToe.
                            refFire = $firebase(ticTacRef.push( {waiting: true} ) );
                        }
                }
                else // I got no game :(
                {
                            refFire = $firebase(ticTacRef.push( {waiting: true} ) );
                }
                refFire.$bind($scope, "game");
            }
        );


            $scope.makeMove = function(u) {
                if($scope.game.cells[u] === ' ') {
                    $scope.game.cells[u] = $scope.isXTurn? 'X' : 'O';
                    $scope.isXTurn = !$scope.isXTurn;
                    turnNum ++;
                }
                    console.log("Turn Number " + turnNum);
                    console.log($scope.game.cells);
                    $scope.winCheck( );
                    $scope.tieCheck( );
            };

            $scope.winCheck = function( ) {
                if( turnNum >= 5 ) {
                    if ($scope.game.cells[0] === 'X' || $scope.game.cells[0] === 'O') {
                        if($scope.game.cells[0]+$scope.game.cells[1]+$scope.game.cells[2] === 'XXX' || $scope.game.cells[0]+$scope.game.cells[3]+$scope.game.cells[6] === 'XXX' || $scope.game.cells[0]+$scope.game.cells[4]+$scope.game.cells[8] === 'XXX') {
                            alert("X wins!");
                            return;
                        }
                        else if($scope.game.cells[0]+$scope.game.cells[1]+$scope.game.cells[2] === 'OOO' || $scope.game.cells[0]+$scope.game.cells[3]+$scope.game.cells[6] === 'OOO' || $scope.game.cells[0]+$scope.game.cells[4]+$scope.game.cells[8] === 'OOO') {
                            alert("O wins!");
                            return;
                        }
                    }
                    if ($scope.game.cells[1] === 'X' || $scope.game.cells[1] === 'O') {
                        if($scope.game.cells[1]+$scope.game.cells[4]+$scope.game.cells[7] === 'XXX') {
                            alert("X wins!");
                            return;
                        }
                        else if($scope.game.cells[1]+$scope.game.cells[4]+$scope.game.cells[7] === 'OOO') {
                            alert("O wins!");
                            return;
                        }
                    }
                    if ($scope.game.cells[2] === 'X' || $scope.game.cells[2] === 'O') {
                        if($scope.game.cells[2]+$scope.game.cells[5]+$scope.game.cells[8] === 'XXX' || $scope.game.cells[2]+$scope.game.cells[4]+$scope.game.cells[6] === 'XXX') {
                            alert("X wins!");
                            return;
                        }
                        else if($scope.game.cells[2]+$scope.game.cells[5]+$scope.game.cells[8] === 'OOO' || $scope.game.cells[2]+$scope.game.cells[4]+$scope.game.cells[6] === 'OOO') {
                            alert("O wins!");
                            return;
                        }
                    }
                    if ($scope.game.cells[3] === 'X' || $scope.game.cells[3] === 'O') {
                        if($scope.game.cells[3]+$scope.game.cells[4]+$scope.game.cells[5] === 'XXX') {
                            alert("X wins!");
                            return;
                        }
                        else if($scope.game.cells[3]+$scope.game.cells[4]+$scope.game.cells[5] === 'OOO') {
                            alert("O wins!");
                            return;
                        }
                    }
                    if ($scope.game.cells[6] === 'X' || $scope.game.cells[6] === 'O') {
                        if($scope.game.cells[6]+$scope.game.cells[7]+$scope.game.cells[8] === 'XXX') {
                            alert("X wins!");
                            return;
                        }
                        else if($scope.game.cells[6]+$scope.game.cells[7]+$scope.game.cells[8] === 'OOO') {
                            alert("O wins!");
                            return;
                        }
                        else if (turnNum === 9) {
                        alert("This game is a tie.");
                    }
                    }

                }
            };

} );
// This is the end of the controller and the app.
