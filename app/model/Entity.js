class Entity{

    constructor(name){
        this.name = name;      
        this.project;  
    }

    setProject(project){
        this.project = project;
    }

    getFileContent(){
        return `
            package ${this.project.packageName.toLowerCase()}.${this.project.projectName.toLowerCase()}.${this.name}

            import javax.persistence.Entity;

            @Entity
            public class ${this.name}{

                public ${this.name}() {}
            }
        `;        
    }
}