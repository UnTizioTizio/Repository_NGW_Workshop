let card_container = document.getElementById("cards-container");

let card_template = (value) => `
    <div class="card m-3" style="width: 18rem;">
        <img src="${value.img}" class="card-img-top overflow-hidden">
        <div class="card-body">
            <h3>${value.name}</h3>
            <p class="card-text">${value.description}</p>
        </div>
    </div>
`;

let cards_data = [
    {name: "Taormina", description: "Teatro antico di Taormina", img: "https://www.strettoweb.com/wp-content/uploads/2021/03/teatro-greco-taormina.jpeg"},
    {name: "Ortigia - Siracusa", description: "Fontana di Aretusa", img: "https://101-zone.com/wp-content/uploads/2022/05/0A1A2317.jpg"},
    {name: "Lipari - Isole Eolie", description: "Centro storico di Lipari", img: "https://101-zone.com/wp-content/uploads/2021/09/lipari.jpg"}
];

GenerateCards(card_container, card_template, cards_data);

function GenerateCards(container, template, data)
{
    data.forEach(value => {
        container.innerHTML += template(value);
    });
}