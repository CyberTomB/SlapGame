const badOptions = {
   slap: {
      dmg: 1,
      type: -1,
      style: 'btn-danger'
   },
   poke: {
      dmg: 10,
      type: -1,
      style: 'btn-danger'
   },
   punch: {
      dmg: 25,
      type: -1,
      style: 'btn-danger'
   },
}

const goodOptions = {
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



function btnPress() {
   health -= 1;
   console.log(health)
}

function update() {

}

function drawButtons() {
   let goodTemplate = ''
   let badTemplate = ''
   for (let key in goodOptions) {
      let optUP = key.toUpperCase()
      console.log(optUP)
      goodTemplate += `<button class="col-6 btn ${goodOptions[key].style}" onclick="btnPress('${key}')">${optUP}</button>`
   }
   for (let key in badOptions) {
      let optUP = key.toUpperCase()
      console.log(optUP)
      badTemplate += `<button class="col-6 btn ${badOptions[key].style}" onclick="btnPress('${key}')">${optUP}</button>`
   }




   document.getElementById('good-options').innerHTML = goodTemplate
   document.getElementById('bad-options').innerHTML = badTemplate




}

drawButtons()