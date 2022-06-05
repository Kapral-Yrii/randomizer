import { whiteAndGreenItems, yellowItems, redItems, orangeItems } from './data.js'

const button = document.querySelectorAll("button")
const listY = document.querySelector(".listY")
const listB = document.querySelector(".listB")

button.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let list
        console.log(e.target.dataset.actions);
        switch (e.target.dataset.actions) {
            case "Y":
                list = listY
                break;
            case "B":
                list = listB
                break;
            default:
                console.log("Error");
        }
        randomizer(list)
    })
})

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const randomizer = (list) => {
    let randomItems = []
    for (let i = 0; i < 10; i++) {
        let item = whiteAndGreenItems[getRandomInt(whiteAndGreenItems.length - 1)]
        while (randomItems.includes(item)) {
            item = whiteAndGreenItems[getRandomInt(whiteAndGreenItems.length - 1)]
        }
        randomItems.push(item)
        if (i === 9) {
           randomItems.push(yellowItems[getRandomInt(yellowItems.length - 1)], redItems[getRandomInt(redItems.length - 1)], orangeItems[getRandomInt(orangeItems.length - 1)]) 
        }
    }
    const markup = randomItems.reduce((string, e) =>
    string + `<li class="item">
                <img class="image" src="${e}" alt="photo"/>
              </li> `, ""
    );
    list.innerHTML = markup
}