const options = {
   slap: {
      dmg: 10,
      type: -1,
      style: 'btn-danger'
   },
   poke: {
      dmg: 1,
      type: -1,
      style: 'btn-danger'
   },
   punch: {
      dmg: 25,
      type: -1,
      style: 'btn-danger'
   },
   hug: {
      dmg: 5,
      type: 1,
      style: 'btn-success'
   },
   kiss: {
      dmg: 10,
      type: 1,
      style: 'btn-success'
   },
   feed: {
      dmg: 15,
      type: 1,
      style: 'btn-success'
   }
}


var health = 100;



function btnPress(btn) {
   console.log(btn)
   let opt = options[btn]
   health += opt.dmg * opt.type
   drawHealth()
   if (health >= 100) {
      if (btn == 'feed') {
         alert("I'M NOT HUNGRY!!!")
      }
      health = 100
   } else if (health < 1) {
      alert("YOU'RE A MURDERER!!!")
   }
   console.log(health)
}

function drawHealth() {

   document.getElementById('health').setAttribute('style', 'width:' + Number(health) + '%')
   document.getElementById('health').innerText = `Health: ${health}`

}

function drawButtons() {

   let goodTemplate = ''
   let badTemplate = ''

   for (let key in options) {
      let optUP = key.toUpperCase()
      if (options[key].type > 0) {
         goodTemplate += `<button class="col-6 btn ${options[key].style}" onclick="btnPress('${key}')">${optUP}</button>`
      } else {
         badTemplate += `<button class="col-6 btn ${options[key].style}" onclick="btnPress('${key}')">${optUP}</button>`
      }
   }
   document.getElementById('good-options').innerHTML = goodTemplate
   document.getElementById('bad-options').innerHTML = badTemplate




}

drawButtons()