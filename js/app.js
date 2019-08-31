import './location-card.js'

const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'

window.addEventListener('load', () => fetchLocations().then(appendElements))

const fetchLocations = async () => {
    const res = await fetch(url)
    return res.json()
}

const appendElements = (locations) => {
    const main = document.querySelector('main')
    locations.forEach(location => {
        const el = document.createElement('location-card')
        el.location = location
        main.appendChild(el)
    })
}
