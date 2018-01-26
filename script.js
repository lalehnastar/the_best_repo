console.log("Linked!")

var mother = {

    hairColor: "pink",
    
    bestQuality: "nice",
    petPeeve: "dirty dishes in the sink",
    favorite: "bananas" 
}

console.log(mother)




var father = {

    hairColor: null,
    hairColor: "brown",
    bestQuality: "patient",
    petPeeve: undefined,
    favorite: "cookies" 



}

// when you type mother.hairColor or father.hairCOlor you automatically get he color of their hair
console.log(father)
var me = {
    hairColor: mother.hairColor,
}

console.log(me)