class EntityController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this.inputProjectName  = $('#inputProjectName');
        this.inputPackagetName = $('#inputPackageName');
        this.inputEntityName   = $('#inputEntityName');
        this.entityTextArea = $('#entityTextArea');
        this.fieldName = $('#inputField');
        this.fieldType = $('#inputFieldType');

        this.fieldList = new FieldList();
        this.fieldListView = new FieldListView($('#fieldListView'));
        this.fieldListView.update(this.fieldList);
    }

    criar(event){
        event.preventDefault();
        let project = this.createProject();
        let e1 = this.createEntity(project);        
        this.setEntityTextArea(e1);
    }
    
    insertField(event){    
        
        
        let field = new Field(this.fieldName.value, this.fieldType.value);
        if (field.valido()){
            this.fieldList.add(field);
            this.fieldListView.update(this.fieldList);
            this.clearField();
        } else {
            alert('Field Inválido');   
        }

        console.log(this.fieldList.fields);
    }

    clearField(){
        this.fieldName.value = '';
        this.fieldType.value = '';
        this.fieldName.focus();
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