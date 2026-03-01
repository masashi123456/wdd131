const character = {
    name: "snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 80,
    image: "snortleblat.webp",

    attack: function(){
        this.health -= 20;
        Display();
    },

    levelUp: function(){
        this.level += 1;
        Display();
    },

    
    
};
function Display(){
    document.querySelector("#name").textContent = character.name;
    document.querySelector("#class").textContent = character.class;
    document.querySelector("#level").textContent = character.level;
    document.querySelector("#health").textContent = character.health;
    document.querySelector("#image").textContent = character.image;
}

Display();