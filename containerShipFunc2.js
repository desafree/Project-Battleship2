const cointeinerShipFunc2 = ()=>{
    const ships = [];

    
    const createShip = (arrayCord)=>{
        
        const isHit = (x,cordX)=>{
            pubsub.publish('isHit2',x);
            isSunk(cordX);
        }

        const isSunk = (cordX)=>{
            const isEqualX = (currentValue) => currentValue === 'x';
            if(cordX.every(isEqualX)) {
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

module.export = cointeinerShipFunc2;