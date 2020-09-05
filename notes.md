function getFormations(){
    fetch(endPointFormations)
    .then(response => response.json())
    .then( formations =>{
        formations.data.forEach(formation => {
            const formationMarkup = `
            <div data-id=${formation.id}>
            <h1>formation:</h1> <h2> ${formation.attributes.name}</h2>
            <img src=${formation.attributes.formation.image_url} height="250" width="200">
            <p>${formation.attributes.formation.description}</p>
            </div>
            <br><br>`;