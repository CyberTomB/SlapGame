const items = {
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

const enemy = {
   health: 100,
   alive: true,
}


function btnPress(btn) {
   console.log(btn)
   let opt = items[btn]
   let hp = enemy.health
   if (enemy.alive) {
      let message = ''
      if (btn == 'feed' && hp == 100) {
         message = "I'M NOT HUNGRY!!!"
      }
      hp += opt.dmg * opt.type
      console.log(hp)
      if (hp >= 100) {
         hp = 100
      } else if (hp <= 0 && enemy.alive) {
         hp = 0
         enemy.alive = false
         message = "YOU'RE A MURDERER!!!"
      }
      drawMessage(message)
   }
   enemy.health = hp
   console.log(hp)
   drawHealth()
}

function drawMessage(str) {
   document.getElementById('message').innerText = str
}


function drawHealth() {
   console.log('[draw health]', enemy.health)
   document.getElementById('health').setAttribute('style', 'width:' + Number(enemy.health) + '%')
   document.getElementById('health').innerText = `Health: ${enemy.health}`

}

function drawButtons() {

   let goodTemplate = ''
   let badTemplate = ''

   for (let key in items) {
      let optUP = key.toUpperCase()
      if (items[key].type > 0) {
         goodTemplate += `<button class="col-6 btn ${items[key].style}" onclick="btnPress('${key}')">${optUP}</button>`
      } else {
         badTemplate += `<button class="col-6 btn ${items[key].style}" onclick="btnPress('${key}')">${optUP}</button>`
      }
   }
   document.getElementById('good-options').innerHTML = goodTemplate
   document.getElementById('bad-options').innerHTML = badTemplate
}

drawButtons()