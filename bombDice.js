"use strict"
  

  let bombArray = [];

  let tickArray = [];

  let bustArray = [];



window.alert("Bomb Dice: Roll two dice with the same number of sides. The more you roll, the higher your score, at risk of explosion.")

window.alert("If the sum of your roll is less then the sum of your previous roll, you are issued a 'Tick!'. Reach five 'Tick!'s, and you bust. If both of your dice match, you bust immidiatly with a 'Boom!'")

window.alert("You may chose to stop rolling and subit your score when you think you will have the highest score of the round")


function bombDiceGame() {
	if(tickArray[4] >= "Tick!" )
		window.alert("Tick bust!")
	

}

function fourSidedDie() {
	let d1 = (Math.floor(Math.random() * 4) + 1);
	let d2 = (Math.floor(Math.random() * 4) + 1);
	let dcombo = d1 + d2;
		if(d1 === d2){
			console.log("Boom!")
		}
			bombArray.push(dcombo)
			console.log(bombArray)

}

fourSidedDie()

function sixSidedDie() {
	let d1 = (Math.floor(Math.random() * 6) + 1);
	let d2 = (Math.floor(Math.random() * 6) + 1);
	let dcombo = d1 + d2;
		bombArray.push(dcombo)
			if(d1 === d2){
				console.log("Boom!")
			}
			else if (dcombo <=bombArray[0]) {
				console.log("Tick!")
			}

console.log(bombArray)

}

sixSidedDie()

function eightSidedDie() {
	let d1 = (Math.floor(Math.random() * 8) + 1);
	let d2 = (Math.floor(Math.random() * 8) + 1);
	let dcombo = d1 + d2;
		bombArray.push(dcombo)
			if(d1 === d2){
				console.log("Boom!")

			}
			else if (dcombo <=bombArray[1]) {
				console.log("Tick!")
			}

console.log(bombArray)

}

eightSidedDie()

function tenSidedDie() {
	let d1 = (Math.floor(Math.random() * 10) + 1);
	let d2 = (Math.floor(Math.random() * 10) + 1);
	let dcombo = d1 + d2;
		bombArray.push(dcombo)
			if(d1 === d2){
				console.log("Boom!")
			}
			else if (dcombo <=bombArray[2]) {
				console.log("Tick!")
			}

console.log(bombArray)

}
tenSidedDie()

function twelveSidedDie() {
	let d1 = (Math.floor(Math.random() * 12) + 1);
	let d2 = (Math.floor(Math.random() * 12) + 1);
	let dcombo = d1 + d2;
		bombArray.push(dcombo)
			if(d1 === d2){
				console.log("Boom!")
			}
			else if (dcombo <=bombArray[3]) {
				console.log("Tick")
			}

console.log(bombArray)	

}

twelveSidedDie()

function twentySidedDie() {
	let d1 = (Math.floor(Math.random() * 20) + 1);
	let d2 = (Math.floor(Math.random() * 20) + 1);
let dcombo = d1 + d2;
		bombArray.push(dcombo)
			if(d1 === d2){
				console.log("Boom!")
			}
			else if (d1+d2 <=bombArray[4]) {
				console.log("Tick")
			}

console.log(bombArray)

}

twentySidedDie()


// function eightSidedDie() {
// 	let d8 = (Math.floor(Math.random() * 8) + 1);
// }
// function tenSidedDie() {
// 	let d10 = (Math.floor(Math.random() * 10) + 1);
// }
// function twelveSidedDie() {
// 	let d12 = (Math.floor(Math.random() * 12) + 1);
// }
// function twentySdedDie() {
// 	let d20 = (Math.floor(Math.random() * 20) + 1);
// }
