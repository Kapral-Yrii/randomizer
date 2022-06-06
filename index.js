import { whiteAndGreenItems, yellowItems, redItems, orangeItems, characters, difficulty, artifacts } from './data.js'

const button = document.querySelectorAll("button")
const listY = document.querySelector(".listY")
const listB = document.querySelector(".listB")
const characterNameY = document.querySelector(".characterNameY")
const characterNameB = document.querySelector(".characterNameB")
const levelOfDifficulty = document.querySelector(".levelOfDifficulty")
const artifactItem = document.querySelector(".artifactItem")


button.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        switch (e.target.dataset.actions) {
            case "itemsY":
                randomizerItems(listY)
                break;
            case "itemsB":
                randomizerItems(listB)
                break;
            case "characterY":
                randomizerCharAndDiff(characterNameY, characters)
                break;
            case "characterB":
                randomizerCharAndDiff(characterNameB, characters)
                break;
            case "levelOfDifficulty":
                randomizerCharAndDiff(levelOfDifficulty, difficulty)
                break;
            case "artifact":
                randomizerArtifact(artifactItem, artifacts)
                break;
            default:
                console.log("Error");
        }
    })
})

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const randomizerItems = (list) => {
    let randomItems = []
    for (let i = 0; i < 10; i++) {
        let item = whiteAndGreenItems[getRandomInt(whiteAndGreenItems.length)]
        while (randomItems.includes(item)) {
            item = whiteAndGreenItems[getRandomInt(whiteAndGreenItems.length)]
        }
        randomItems.push(item)
        if (i === 9) {
           randomItems.push(yellowItems[getRandomInt(yellowItems.length - 1)], redItems[getRandomInt(redItems.length)], orangeItems[getRandomInt(orangeItems.length)]) 
        }
    }
    const markup = randomItems.reduce((string, e) =>
    string + `<li class="item">
                <img class="image" src="${e}" alt="photo"/>
              </li> `, ""
    );
    list.innerHTML = markup
}

const randomizerArtifact = (list, data) => {
    const markup =
        `<img class="image" src="${data[getRandomInt(data.length)]}" alt="photo"/>`
    list.innerHTML = markup
}

const randomizerCharAndDiff = (list, data) => {
    list.innerHTML = `- ${data[getRandomInt(data.length)]}`
}