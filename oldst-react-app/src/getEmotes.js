

export default function getEmotes(){
    return fetch('http://localhost:8000/products').then(data =>data.json())
}
