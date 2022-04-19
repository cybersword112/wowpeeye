
const url = 'https://owen-wilson-wow-api.herokuapp.com/wows/random'
const proxy = 'https://cors-anywhere.herokuapp.com/'
document.querySelector("button").addEventListener('click',getDrink)

function getDrink(){
    fetch(proxy + url,{
    })
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          console.log(data[0].audio)
          document.querySelector('h1').innerText = data[0].character
          document.querySelector("audio").src = data[0].audio
          document.querySelector("video").src = data[0].video["480p"]
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
