export class Product {
    constructor(
        public id:number,
        public title : string,
        public description:string,
        public price:number,
        public company:string,
        public image:string,
        public likes:number,
        public quantite:number
    ){
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.company = company
        this.image = image
        this.likes = likes
        this.quantite = quantite
    }
}
