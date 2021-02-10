class Toy {
    static all = []

    constructor({id, name, image, likes}) {
        this.id = id
        this.name = name
        this.image = image
        this.likes = likes
        Toy.all.push(this)
        this.element = document.createElement('div')
        this.element.classList.add('card')
    }

    render() {
        this.element.innerHTML = `<h2>${this.name}</h2>
        <img src=${this.image} class="toy-avatar" />
        <p>${this.likes} Likes </p>
        <button class="like-btn">Like <3</button>`
        return this.element
    }

    addToDom() {
        toyContainer.append(this.render())
        let likeButton = this.element.querySelector('.like-btn')
        likeButton.addEventListener('click', this.addLike)
    }

    addLike = () => {
        this.likes += 1
        this.render()
        let likeButton = this.element.querySelector('.like-btn')
        likeButton.addEventListener('click', this.addLike)
    }
}