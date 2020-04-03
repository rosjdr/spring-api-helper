class Mensagem {
    constructor(msg=''){
        this._mensagem = msg;
    }

    set mensagem(msg){
        this._mensagem = msg;
    }
    
    get mensagem(){
        return this._mensagem;
    }
}