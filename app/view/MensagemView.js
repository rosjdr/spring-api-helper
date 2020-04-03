class MensagemView extends View{

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
      return model.mensagem ? `<p class="alert alert-info">${model.mensagem}</p>` : '<p></p>';
    }    

}