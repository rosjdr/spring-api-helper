class FieldListView {

    constructor(elemento){
        this.elemento = elemento;
    }

    template(fieldList){
        return `
            <div class="card">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Field</th>
                        <th scope="col">Type</th>
                    </tr>
                    </thead>
                    <tbody>                    
                        ${fieldList.fields.map(f => {                            
                            return `
                                <tr>
                                    <td>${f.name}</td>
                                    <td>${f.type}</td>
                                </tr>
                            `
                        }).join('')}                                                      
                    </tbody>
                </table>                          
            </div> `
    }

    update(fieldList) {
        this.elemento.innerHTML = this.template(fieldList);
    }
}