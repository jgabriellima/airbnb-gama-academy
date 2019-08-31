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
            <div style="width: 246px; padding: 0 8px; margin-bottom: 25px;">
                <div style="object-fit: cover">
                    <img style="width: 100%; height: 164px; object-fit: cover;" src="${location.photo}" alt="" srcset="">
                </div>
                <div style="width: 100%; margin: 0px !important;
                word-wrap: break-word !important;
                font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                font-size: 12px !important;
                font-weight: 800 !important;
                line-height: 1.3333333333333333em !important;
                color: #484848 !important;">
                    <span style="text-transform: uppercase; color: #767676">${location.property_type}</span>
                </div>
                <div style="width: 100%; margin: 0px !important;
                word-wrap: break-word !important;
                font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                font-size: 18px !important;
                font-weight: 600 !important;
                line-height: 1.4444444444444444em !important;
                color: #484848 !important;">
                    <div style="display: inline-block !important; line-height: 22px !important;">${location.name}</div>
                </div>
                <div>
                    <span style="margin: 0px !important;
                    word-wrap: break-word !important;
                    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                    font-size: 14px !important;
                    font-weight: 400 !important;
                    line-height: 1.2857142857142858em !important;
                    color: #484848 !important;">R$${location.price}/Noite</span>
                </div>
            </div>
        `
    }
}

customElements.define('location-card', LocationCard)