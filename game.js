const options = {
   slap: {
      dmg: 1,
      type: -1,
      style: 'btn-danger'
   },
   kick: {
      dmg: 10,
      type: -1,
      style: 'btn-danger'
   },
   punch: {
      dmg: 5,
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
var alive = true


function btnPress(btn) {
   console.log(btn)
   let opt = options[btn]
   if (alive) {
      health += opt.dmg * opt.type
   }



   if (health >= 100) {
      if (btn == 'feed') {
         document.getElementById('message').innerText = "I'M NOT HUNGRY!!!"
      }
      health = 100
   } else if (health < 1 && alive) {
      health = 0
      alive = false
      alert("YOU'RE A MURDERER!!!")
   }
   console.log(health)
   drawHealth()
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