class DataSource{
    constructor(succes, failed){
        this.succes = succes;
        this.failed = failed;
    }
    search(keyword){
        const filterNames = org.filter(o => {
            return o.name.toUpperCase().includes(keyword.toUpperCase())
        })
        if(filterNames.length){
            this.succes(filterNames)
        }else{
            this.failed(` "${keyword}" tidak di temukan`)
        }
    }
}

