class EntityController {

    constructor(){
        this.entity;
    }

    criar(event){
        event.preventDefault();

        let $ = document.querySelector.bind(document);

        let inputProjectName  = $('#inputProjectName');
        let inputPackagetName = $('#inputPackageName');
        let inputEntityName   = $('#inputEntityName');

        let project = new Project(inputProjectName.value, inputPackagetName.value);

        let e1 = new Entity(inputEntityName.value);
        e1.setProject(project);

        this.entity = e1.getFileContent();

        let entityTextArea = $('#entityTextArea');
        entityTextArea.value = this.entity;
    }
}