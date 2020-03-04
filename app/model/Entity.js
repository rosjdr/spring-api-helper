class Entity{

    constructor(name){
        this.name = name;      
        this.project;  
    }

    setProject(project){
        this.project = project;
    }

    getFileContent(){
        let arquivo = 
`package ${this.project.packageName.toLowerCase()}.${this.project.projectName.toLowerCase()}.${this.name.toLowerCase()};

import javax.persistence.Entity;

@Entity
public class ${this.name}{

    public ${this.name}() {}

}`;  
        return arquivo;      
    }
}