class AddElement {
    constructor(type) {
        this.type = type
    }

    to(dest) {
        this.to = to
        return this
    }

    content(content) {
        this.content = content
        return this
    }

    done() {
        const parent = document.querySelector(this.to)
        const element = new HTMLElement(this.type)
        element.innerHTML = this.content
    }
}

const add = new AddElement("h1").to("h1").content("LOL").done()

console.log(add)