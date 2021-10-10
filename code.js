class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        return this.food += 2
    }
    eat() {
        if (this.food <= 0) {
            this.isHealthy = false
            return this.food
        }
        return this.food -= 1
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        let availability = this.capacity - this.passengers.length
        console.log(`There are ${availability} seats available`)
        return availability
    }

    join(Traveler) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(Traveler)
            console.log(`${Traveler.name} is boarding!`)
        } else {
            console.log("Wagon is full!")
        }

    }

    shouldQuarantine() {
        for (let i = 0; i < this.passengers.length; i++) {
            let traveler = this.passengers[i]
            if (traveler.isHealthy === false) {
                console.log(`Oh no! A traveler is sick! Travelers must quaratine!`)
                return true
            }
        }
        console.log(`All travelers are healthy. No need to quaratine.`)
        return false
    }
    totalFood() {
        let foodTotal = 0
        for (let i = 0; i < this.passengers.length; i++) {
            let travelerFood = this.passengers[i].food
            foodTotal += travelerFood
        }
        console.log(`The wagon has a total of ${foodTotal} food.`)
        return foodTotal
    }

}

class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }
    heal(Traveler) {
        Traveler.isHealthy = true
        console.log(`${Traveler.name} is healed!`)
        return Traveler.isHealthy
    }

}
class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
    }
    hunt() {
        this.food += 5
        console.log(`5 food aquired. New total is ${this.food} food.`)
        return this.food
    }
    eat() {
        if (this.food <= 0) {
            this.isHealthy = false
            console.log('No food left! Health Warning!')
            return this.food
        }
        if (this.food < 2) {
            this.isHealthy = false
            console.log(`Only 1 or 0 food can be eaten.`)
            return this.food -= 1
        } else {
            console.log(`2 food has been eaten.`)
            return this.food -= 2
        }

    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food < numOfFoodUnits) {
            console.log("Not enough food!")
        }
        if (this.food >= numOfFoodUnits) {
            console.log(`${numOfFoodUnits} food has been given.`)
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
        
    }
}