const restaurant = {
    name: 'Shanti Sagar',
    guestCapacity: 150,
    guestCount: 0,
    checkAvailability: function (partySize){
        const avaiableSeats = this.guestCapacity - this.guestCount
        return avaiableSeats >= partySize
    },
    seatParty: function  (partySize) {
        if (this.checkAvailability(partySize)){
            this.guestCount += partySize
        }
    },
    removeParty: function (partySize){
        if (this.guestCount >= partySize){
            this.guestCount -= partySize
        }
    }
}

restaurant.seatParty(147)
console.log(restaurant.checkAvailability(5))
restaurant.removeParty(4)
console.log(restaurant.checkAvailability(5))
