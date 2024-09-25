const URL_API = 'https://restcountries.com/v3.1/all'


/* consume API and process the data */ 
async function country_list() {
    const resp = await fetch(URL_API);
    if (resp.status == 200) {
        const obj = await resp.json()
        let code_and_flags = []
        for (let i = 0; i<obj.length; i++) {
            code_and_flags.push({
                name: obj[i].name.common,
                code: obj[i].idd.root,
                img: obj[i].flags.svg
            })
        }
        console.log(code_and_flags[0].img)
        return code_and_flags
    }
}

function create_contry_code_opc() {
    const contry_codes = country_list()
    const select_box = document.getElementById('code_country')

    for (let i=0;i<contry_codes.length;i++) {
        const opc = document.createElement('option')
        opc.value = contry_codes[i].code
    }
}

country_list()