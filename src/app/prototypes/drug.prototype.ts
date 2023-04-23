export class Drug {
    public id: string;
    public name: string;
    public price: number;
    public description: string;
    public stock: number;
    public markedForDeletion: boolean;

    constructor(id: string = 'not assigned',
                name: string = '',  
                price: number = 0,
                description: string = '',
                stock: number = 0,
                markedForDeletion: boolean = false) {
        this.id  = id;
        this.name  = name;
        this.price  = price;
        this.description  = description;
        this.stock  = stock;
        this.markedForDeletion = markedForDeletion;
    }
}