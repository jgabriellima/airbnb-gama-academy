// this is a web component
// first step is create a class Who extends from HtmlElement
class LocationCard extends HTMLElement {
    // shadow DOM (encapsulates - hide - inner details of the web component)
    constructor() {
        super()
        this.root = this.attachShadow({ mode: 'open' })
    }

    set location(location) {
        // settled this.root because I'm using shadow DOM
        this.root.innerHTML = `
            <style>
                .card-container {
                    width: 246px;
                    padding: 0 8px;
                    margin-bottom: 25px;
                }

                .card-image-container {
                    object-fit: cover;
                }

                .card-image-container > img {
                    width: 100%;
                    height: 164px;
                    object-fit: cover;
                }

                .location-property-type {
                    width: 100%; margin: 0px !important;
                    word-wrap: break-word !important;
                    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                    font-size: 12px !important;
                    font-weight: 800 !important;
                    line-height: 1.3333333333333333em !important;
                    color: #484848 !important;
                }

                .location-property-type > span {
                    text-transform: uppercase;
                    color: #767676;
                }

                .location-name {
                    width: 100%; margin: 0px !important;
                    word-wrap: break-word !important;
                    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                    font-size: 18px !important;
                    font-weight: 600 !important;
                    line-height: 1.4444444444444444em !important;
                    color: #484848 !important;
                }

                .location-name > div {
                    display: inline-block !important;
                    line-height: 22px !important;
                }

                .location-price {
                    margin: 0px !important;
                    word-wrap: break-word !important;
                    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                    font-size: 14px !important;
                    font-weight: 400 !important;
                    line-height: 1.2857142857142858em !important;
                    color: #484848 !important;
                }
            </style>
            <div class="card-container">
                <div class="card-image-container">
                    <img src="${location.photo}" alt="" srcset="">
                </div>
                <div class="location-property-type">
                    <span>${location.property_type}</span>
                </div>
                <div class="location-name">
                    <div>${location.name}</div>
                </div>
                <div>
                    <span class="location-price">R$${location.price}/Noite</span>
                </div>
            </div>
        `
    }
}

customElements.define('location-card', LocationCard)