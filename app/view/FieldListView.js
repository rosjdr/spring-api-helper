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
                        ${fieldList.fields.map(f =>                             
                            `
                                <tr>
                                    <td>${f.name}</td>
                                    <td>${f.type}</td>
                                </tr>
                            `
                        ).join('')}                                                      
                    </tbody>
                    <tfoot>
                        <td colspan="2">
                            <p class="text-right text-success"> Inserted Fields: ${fieldList.count()}</p>
                        </td>
                    </tfoot>
                </table>                          
            </div> `
    }

    update(fieldList) {
        this.elemento.innerHTML = this.template(fieldList);
    }
}