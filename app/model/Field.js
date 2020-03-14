class Field {

    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    valido(){
        return (this.name != '' && this.type != '');
    }
}