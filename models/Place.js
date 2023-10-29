export class Place{
    constructor(title,imageUri,address){
        this.title=title
        this.imageUri=imageUri
        this.address=address
        this.id=new Date().toString()+Math.random().toString()

    }

}