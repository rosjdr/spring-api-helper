class FieldList{

    constructor(){
        this.fields = [];
    }

    add(field){
        this.fields.push(field);
    }

    count(){
        return this.fields.length;
    }
}