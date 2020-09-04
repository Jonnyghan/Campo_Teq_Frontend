const endPoint = "http://localhost:3000/api/v1/formations"

document.addEventListener('DOMContentLoaded',() => {
    getFormations()
})

function getFormations(){
    fetch(endPoint)
    .then(response => response.json())
    .then( formations =>{
        formations.data.forEach(formation => {
            const formationMarkup = `
            <div data-id=${formation.id}>
            <h1>${formation.attributes.name} formation</h1>
            <img src=${formation.attributes.image_url} height="250" width="200">
            <p>${formation.attributes.description}</p>
            <h2> Notable Clubs using this formation</h2>
            <h3>${formation.attributes.clubs.length}</h3>
            <button data-id=${formation.id}> edit</button>
            </div>
            <br><br>`;
            
            document.querySelector('#formation-container').innerHTML += formationMarkup
        }) 
    })
    
}