class Club{
    constructor(club, clubAttributes){
        this.id = club.id;
        this.name = clubAttributes.name;
        this.coach = clubAttributes.coach;
        this.formation= clubAttributes.formation
        Club.all.push(this)
    }
    renderClub() {
       console.log(this);
       
        return`
                <div data-id=${this.id}>
                <h1>Club:</h1> <h2> ${this.name}</h2>
                <h2>Manager:</h2> <h3> ${this.coach}</h3>
                <h2> Usual Formation:</h2>
                <h3>${this.formation.name}</h3>
                <img src=${this.formation.image_url} height="250" width="200">
                <p>${this.formation.description}</p>
                <button data-id=${this.id}> edit</button>
                </div>
                <br><br>`;
                
                document.querySelector('#club-container').innerHTML += clubMarkup
    
    }
}

Club.all = []