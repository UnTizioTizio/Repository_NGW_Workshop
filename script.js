let card_container = document.getElementById("card-container");

card_template = `
    <div class="card" style="width: 18rem;">
        <img src="${data.img}" class="card-img-top">
        <div class="card-body">
            <h3>${data.name}</h3>
            <p class="card-text">${data.description}</p>
        </div>
    </div>
`;

cards_data = [
    {name: "Taormina", description: "Teatro antico di Taormina", img: "https://www.strettoweb.com/wp-content/uploads/2021/03/teatro-greco-taormina.jpeg"},
    {name: "Ortigia - Siracusa", description: "Fontana di Aretusa", img: "https://101-zone.com/wp-content/uploads/2022/05/0A1A2317.jpg"},
    {name: "Lipari - Isole Eolie", description: "Centro storico di Lipari", img: "https://101-zone.com/wp-content/uploads/2021/09/lipari.jpg"}
];

function GenerateCards(container, template, data)
{
    data.forEach(value => {
        console.log(value);
        container.innerHTML += template;
    });
}