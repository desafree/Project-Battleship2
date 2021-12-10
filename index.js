
let subscribers = {};

const pubsub = {
    publish(event, data) {
        if (!subscribers[event]) return;    
        
        subscribers[event].forEach(subscriberCallback => subscriberCallback(data));
    },
    subscribe(event, callback) {
        let index;    if (!subscribers[event]) {
            subscribers[event] = [];
        }    index = subscribers[event].push(callback) - 1;
        
        return {
            unsubscribe() {
                subscribers[event].splice(index, 1);
            }
        };
    }
};


const cointeinerShipFunc = ()=>{
    const ships = [];

    
    const createShip = (arrayCord)=>{
        
        const cord = arrayCord;

        for(let h=0; h<= cord.length; h++) {
            for(let i=0; i<ships.length; i++) {
                if(ships[i].arrayCord.includes(cord[h])) {
                    throw new TypeError('already occupaid cordinate')
                }
            }
        }

        if(cord.some(isNaN)) {
            throw new TypeError('only array number')
        }

        const isBiggerThan100 = (value) => value > 99;
        if(cord.some(isBiggerThan100)) {
            throw new TypeError('only number between 0 and 99')
        }

        const isNegative = (value) => value < 0;
        if(cord.some(isNegative)) {
            throw new TypeError('only number between 0 and 99')
        }

        const isValidCombination = function(array) {
            for(let i=0; i<array.length; i++) {
                if(i===0) {
                    continue
                }
        
                if((array[i] === array[i-1]+1) || (array[i] === array[i-1] +10)) {
                    continue
                }
        
                
                throw new TypeError('invalid combination')
    
        
            }
            
            
        }
    
        isValidCombination(cord);
        
        const isHit = (x,cordX)=>{
            pubsub.publish('isHit1',x);
            console.log('isHit fired',cordX)
            isSunk(cordX);
        }

        const isSunk = (cordX)=>{
            const isEqualX = (currentValue) => currentValue === 'x';
            console.log('isSunk fired')
            if(cordX.every(isEqualX)) {
                console.log('isSunk check fired')
                pubsub.publish('isSunk1',cordX);
            }
            
        }

        ships.push({arrayCord,isHit});
        pubsub.publish('createShip1',arrayCord)
    }

    
    
    const hit = (x) => {
        for(let i=0; i<ships.length; i++) {
            if(ships[i].arrayCord.includes(x)) {
                const index = ships[i].arrayCord.indexOf(x);
                ships[i].arrayCord[index] = 'x';
                ships[i].isHit(x,ships[i].arrayCord);
            }
        }
    
    }  

    
    
    
    return{ships,createShip,hit}
}





const gameBoardFunc = ()=>{

    board1 = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
        59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
        78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
        97, 98, 99
      ];

      const createShip = (cordX)=>{
          for(let i=0; i<cordX.length; i++) {
              board1[cordX[i]] = 'barc'
          }
      }

      const colorBoard = (x)=>{
        if(x<0 || x >= board1.length) {
            throw new TypeError('invalid cordinate')
          }
      
          if(isNaN(x)){
            throw new TypeError('invalid cordinate Nan')
          }

        board1[x]='x'
      }

      const attackShip = (x)=>{
        pubsub.publish('attackShip2',x)
      }

      const checkLoose =(x)=>{
        function equalX(value) {
            return value === 'x'
        }
        const times = board1.filter(equalX)
        
        if(times.length == 17) {
            alert('Player 1 LOOSE');
            restartGame();
        }
        else if(times.length > 3) {
            throw new TypeError('invalid count of x')
          }
      }


      return {board1,attackShip,colorBoard,checkLoose,createShip}

}




const cointeinerShipFunc2 = ()=>{
    const ships = [];

    
    const createShip = (arrayCord)=>{
        
        const cord = arrayCord;

        for(let h=0; h<= cord.length; h++) {
            for(let i=0; i<ships.length; i++) {
                if(ships[i].arrayCord.includes(cord[h])) {
                    throw new TypeError('already occupaid cordinate')
                }
            }
        }

        if(cord.some(isNaN)) {
            throw new TypeError('only array number')
        }

        const isBiggerThan100 = (value) => value > 99;
        if(cord.some(isBiggerThan100)) {
            throw new TypeError('only number between 0 and 99')
        }

        const isNegative = (value) => value < 0;
        if(cord.some(isNegative)) {
            throw new TypeError('only number between 0 and 99')
        }

        const isValidCombination = function(array) {
            for(let i=0; i<array.length; i++) {
                if(i===0) {
                    continue
                }
        
                if((array[i] === array[i-1]+1) || (array[i] === array[i-1] +10)) {
                    continue
                }
        
                
                throw new TypeError('invalid combination')
    
        
            }
            
            
        }
    
        isValidCombination(cord);

        const isHit = (x,cordX)=>{
            pubsub.publish('isHit2',x);
            console.log('isHit fired',cordX)
            isSunk(cordX);
        }

        const isSunk = (cordX)=>{
            const isEqualX = (currentValue) => currentValue === 'x';
            console.log('isSunk fired')
            if(cordX.every(isEqualX)) {
                console.log('isSunk check fired')
                pubsub.publish('isSunk2',cordX);
            }
            
        }

        ships.push({arrayCord,isHit});
        pubsub.publish('createShip2',arrayCord)
    }

    
    
    const hit = (x) => {
        for(let i=0; i<ships.length; i++) {
            if(ships[i].arrayCord.includes(x)) {
                const index = ships[i].arrayCord.indexOf(x);
                ships[i].arrayCord[index] = 'x';
                ships[i].isHit(x,ships[i].arrayCord);
            }
        }
    
    }  

    
    
    
    return{ships,createShip,hit}
}





const gameBoardFunc2 = ()=>{

    board2 = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
        59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
        78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
        97, 98, 99
      ];

      const createShip = (cordX)=>{
          for(let i=0; i<cordX.length; i++) {
              board2[cordX[i]] = 'barc'
          }
      }

      const colorBoard = (x)=>{
        if(x<0 || x >= board2.length) {
            throw new TypeError('invalid cordinate')
          }
      
          if(isNaN(x)){
            throw new TypeError('invalid cordinate Nan')
          }
        board2[x]='x'
      }

      const attackShip = (x)=>{
        pubsub.publish('attackShip1',x)
      }

      const checkLoose =(x)=>{
        function equalX(value) {
            return value === 'x'
        }
        const times = board2.filter(equalX)
        
        if(times.length == 17) {
            alert('Player 2 LOOSE');
            restartGame();
        }
        else if(times.length > 17) {
            throw new TypeError('invalid count of x')
          }
      }


      return {board2,attackShip,colorBoard,checkLoose,createShip}

}






const player1Ships = cointeinerShipFunc();
const player1Board = gameBoardFunc();

const player2Ships = cointeinerShipFunc2();
const player2Board = gameBoardFunc2();








pubsub.subscribe('createShip1',player1Board.createShip);
pubsub.subscribe('createShip2',player2Board.createShip);

pubsub.subscribe('attackShip2',player2Ships.hit)
pubsub.subscribe('attackShip1',player1Ships.hit)
pubsub.subscribe('attackShip2', displayAttack1)
pubsub.subscribe('attackShip1', displayAttack2)

pubsub.subscribe('isHit1',player1Board.colorBoard)
pubsub.subscribe('isHit2',player2Board.colorBoard)

pubsub.subscribe('isHit1',displayBoard1)
pubsub.subscribe('isHit2',displayBoard2)

pubsub.subscribe('isSunk1',player1Board.checkLoose)
pubsub.subscribe('isSunk2',player2Board.checkLoose)


let direction = 1;
let round = 0;
let arrayRound = [5,4,3,3,2];

const display = displayFactoryFunc();
display.displayBasicInterface();
display.displayStartInterface();
recordPlacement()



function displayFactoryFunc() {
    const displayBasicInterface =function() {
        const boxes = document.querySelectorAll('.cointeinerBox');
    
        for(let i=0; i<boxes.length; i++) {
        let number = 0;
    
            for(let h=0; h<10; h++) {
                const boxRow = document.createElement('div');
                
                for(let l=0; l<10; l++) {
                    const box = document.createElement('div');
                    box.classList = number;
                    number += 1;
                    boxRow.appendChild(box);
                }
    
                boxes[i].appendChild(boxRow);
            }
        }
    }

    const displayStartInterface = function() {
        const body = document.querySelector('body')
        const boxCreateCointeiner = document.createElement('div')
        boxCreateCointeiner.classList = 'boxCreateCointeiner'


        const title = document.createElement('h1')
        title.textContent = 'Place you ship'
        title.classList = 'titleTex'
        const button = document.createElement('button')
        button.textContent = 'Rotate'
        button.classList = 'button-6'
        boxCreateCointeiner.appendChild(title)
        boxCreateCointeiner.appendChild(button)
        
        
        button.addEventListener('click', ()=>{
            if(direction == 1) {
                direction = 2;
            }
            else if(direction == 2) {
                direction = 1;
            }
        })


        const boxCreate = document.createElement('div')
        boxCreate.classList = 'boxCreate'
        
        let number = 0;

        for(let h=0; h<10; h++) {
            const boxRow = document.createElement('div');
            
            
            for(let l=0; l<10; l++) {
                const box = document.createElement('div');
                box.classList = l;
                box.setAttribute("id", h);
                boxRow.appendChild(box);
            }

            boxCreate.appendChild(boxRow);
        }

        boxCreateCointeiner.appendChild(boxCreate)
        body.appendChild(boxCreateCointeiner)
    }

    const removeStartInterface = ()=>{
        const container = document.querySelector('.boxCreateCointeiner')
        container.remove()
    }

    const removeInterface = ()=>{
        const cointainer = document.querySelectorAll('.cointeinerBox')
        for(let i=0; i<cointainer.length; i++) {
            cointainer[i].remove()
        }
    }

    
    
    return {displayBasicInterface,displayStartInterface,removeStartInterface,removeInterface}
}
    



function recordPlacement() {
    const boxList1 = document.querySelectorAll('.boxCreate div div')

    for(let i=0; i<boxList1.length; i++) {
        boxList1[i].addEventListener('mouseenter', (e)=>{
            
            const index = parseInt(e.target.className)
            const row = parseInt(e.target.id)

            const array = returnArray(arrayRound[round],direction,index,row)
            for(let i=0; i<array.length; i++) {
                boxList1[array[i]].style.backgroundColor = 'red'
            }
            // console.log(returnArray(5,2,index,row))
            
        })
    }

    for(let i=0; i<boxList1.length; i++) {
        boxList1[i].addEventListener('mouseleave', (e)=>{
            const index = parseInt(e.target.className)
            const row = parseInt(e.target.id)
            const array = returnArray(arrayRound[round],direction,index,row)
            for(let i=0; i<array.length; i++) {
                boxList1[array[i]].style.backgroundColor = 'white'
            }
            // console.log(returnArray(5,2,index,row))
            
        })
    }

    for(let i=0; i<boxList1.length; i++) {
        boxList1[i].addEventListener('click', (e)=>{
            const index = parseInt(e.target.className)
            const row = parseInt(e.target.id)
            const array = returnArray(arrayRound[round],direction,index,row)
            
            
            const returnObj = player1Ships.createShip(array)
            if(typeof returnObj === 'error') {

            }
            else{
                for(let i=0; i<array.length; i++) {
                    boxList1[array[i]].style.backgroundColor = 'white'
                    boxList1[array[i]].textContent = 'X'
                }
                round += 1;
                const boxes = document.querySelectorAll('.cointeinerBox.uno div div');
                for(let i=0; i<array.length; i++) {
                    boxes[array[i]].style.backgroundColor = 'white'
                }
            }
            
            
            if(round==5){
                faseAttack()
                display.removeStartInterface()
                
            }
            
        })
    }



    function returnArray(length,axis,x,row) {
        if(axis==1){
            let array = []
            let finalArray = []
            if((x+length-1) >= 10) {
            
            }
            else{
                for(let i=0; i<length; i++) {
                    array.push(x+i)
                    
                }

                for(let h=0; h<array.length; h++){
                    finalArray.push(array[h]+10*row)
                }

                
            return finalArray
            }
        }

        else if(axis==2){
            let array = []
            let roww = row
            for(let i=0; i<length; i++) {
                array.push(x+10*roww)
                roww+=1
            }
            var max_of_array = Math.max.apply(Math, array);
            if(max_of_array>99) {
                return []
            }
            else{
                return array
            }
        }
        

        
        
    }
}




function faseAttack() {
    player2Ships.createShip([1,2,3,4,5]);
    player2Ships.createShip([34,44,54,64]);
    player2Ships.createShip([6,7,8]);
    player2Ships.createShip([9,19,29]);
    player2Ships.createShip([98,99]);
    const boxAttack = document.querySelectorAll('.cointeinerBox.due div div')
    console.log(boxAttack)
    for(let i=0; i<boxAttack.length; i++) {
        boxAttack[i].addEventListener('click', function eventFunction(e) {
            console.log(e.target.className)
            player1Board.attackShip(parseInt(e.target.className))
            player2Board.attackShip(player2Attack())
            boxAttack[i].removeEventListener('click', eventFunction, false)
            
        })

    
    }
}


const arrayNumber = []

function player2Attack() {
    let number =  Math.floor(Math.random() * (99 - 0 + 1) + 0)
    if(arrayNumber.includes(number)){
        player2Attack()
    }
    else {
        arrayNumber.push(number)
        return number
    }
}



function displayAttack1(x) {
    const box1 = document.querySelectorAll('.cointeinerBox.due div div')
    box1[x].style.backgroundColor = 'orange'
}

function displayAttack2(x) {
    const box2 = document.querySelectorAll('.cointeinerBox.uno div div')
    box2[x].style.backgroundColor = 'orange'
}



function displayBoard1(x) {
    const box1 = document.querySelectorAll('.cointeinerBox.uno div div') 
    var indexes1 = getAllIndexes(player1Board.board1, "x");
    for(let i=0; i<indexes1.length; i++) {
        box1[indexes1[i]].classList = 'hitten'
    }

}

function displayBoard2(x) {
    console.log("fired")
    const box2 = document.querySelectorAll('.cointeinerBox.due div div') 
    console.log(box2)
    var indexes2 = getAllIndexes(player2Board.board2, "x");
    for(let i=0; i<indexes2.length; i++) {
        box2[indexes2[i]].classList = 'hitten'
    }

}


function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}



function restartGame() {
    
    location.reload()
}



const buttonReload = document.querySelector('.reload')
buttonReload.addEventListener('click', restartGame)
// const boxes = document.querySelectorAll('.cointeinerBox');

// for(let i=0; i<boxes.length; i++) {
//     let number = 0;

//     for(let h=0; h<10; h++) {
//         const boxRow = document.createElement('div');
        
        
//         for(let l=0; l<10; l++) {
//             const box = document.createElement('div');
//             box.classList = l;
//             box.setAttribute("id", h);
//             boxRow.appendChild(box);
//         }

//         boxes[i].appendChild(boxRow);
//     }
// }

// const boxList1 = document.querySelectorAll('.cointeinerBox.uno div div')


// console.log(boxList1)

// for(let i=0; i<boxList1.length; i++) {
//     boxList1[i].addEventListener('mouseenter', (e)=>{
//         console.log(e)
//         console.log(parseInt(e.target.className))
//         const index = parseInt(e.target.className)
//         const row = parseInt(e.target.id)
//         const array = returnArray(5,1,index,row)
//         for(let i=0; i<array.length; i++) {
//             boxList1[array[i]].style.backgroundColor = 'red'
//         }
//         // console.log(returnArray(5,2,index,row))
        
//     })
// }

// for(let i=0; i<boxList1.length; i++) {
//     boxList1[i].addEventListener('mouseleave', (e)=>{
//         const index = parseInt(e.target.className)
//         const row = parseInt(e.target.id)
//         const array = returnArray(5,1,index,row)
//         for(let i=0; i<array.length; i++) {
//             boxList1[array[i]].style.backgroundColor = 'aqua'
//         }
//         // console.log(returnArray(5,2,index,row))
        
//     })
// }




// function returnArray(length,axis,x,row) {
//     if(axis==1){
//         let array = []
//         let finalArray = []
//         if((x+length-1) >= 10) {
//         return []
//         }
//         else{
//             for(let i=0; i<5; i++) {
//                 array.push(x+i)
                
//             }

//             for(let h=0; h<array.length; h++){
//                 finalArray.push(array[h]+10*row)
//             }

            
//         return finalArray
//         }
//     }

//     else if(axis==2){
//         let array = []
//         let roww = row
//         console.log(roww)
//         for(let i=0; i<length; i++) {
//             array.push(x+10*roww)
//             roww+=1
//         }
//         var max_of_array = Math.max.apply(Math, array);
//         if(max_of_array>99) {
//             return []
//         }
//         else{
//             return array
//         }
//     }
    

    
    
// }





