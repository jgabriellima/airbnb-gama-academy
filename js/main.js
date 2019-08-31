window.loadAirbnb = () => {
    const app = document.getElementById('root');

    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    app.appendChild(container);

    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');

    request.onload = function () {
        const data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            data.forEach(place => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const name = document.createElement('div');
                name.setAttribute('class', 'name');
                name.textContent = place.name;

                const img = document.createElement('img');
                img.src = place.photo;

                const type = document.createElement('div');
                type.setAttribute('class', 'type');
                type.textContent = place.property_type;

                const price = document.createElement('div');
                price.setAttribute('class', 'price');
                price.textContent = `R$ ${place.price}`;

                container.appendChild(card)
                card.appendChild(img);
                card.appendChild(type);
                card.appendChild(name);
                card.appendChild(price);
            });

        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = 'Erro na requisição...';
            app.appendChild(errorMessage);
        }
    };

    request.send()
};

