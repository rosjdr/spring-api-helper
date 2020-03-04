class EntityController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this.inputProjectName  = $('#inputProjectName');
        this.inputPackagetName = $('#inputPackageName');
        this.inputEntityName   = $('#inputEntityName');
        this.entityTextArea = $('#entityTextArea');
    }

    criar(event){
        event.preventDefault();
        let project = this.createProject();
        let e1 = this.createEntity(project);        
        this.setEntityTextArea(e1);
    }

    setEntityTextArea(e1) {
        this.entityTextArea.value = e1.getFileContent();
    }

    createEntity(project) {
        let entity = new Entity(this.inputEntityName.value);
        entity.setProject(project);
        return entity;
    }

    createProject() {
        return new Project(this.inputProjectName.value, this.inputPackagetName.value);
    }
}