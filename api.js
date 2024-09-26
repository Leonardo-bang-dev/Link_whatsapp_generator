const URL_API = 'https://restcountries.com/v3.1/all'


/* generate the code_coutry */
function code_country_generator(root, suffixes) {
    let code_list = []
    if (Array.isArray(suffixes)) {
        for (i2=0;i2<suffixes.length;i2++) {
            root + suffixes[i2]
            code_list.push(root + suffixes[i2])
        }
    } else {
        code_list.push(root + suffixes)
    }
    return code_list  
}

/* consume API and process the data */ 
async function country_list() {
    const resp = await fetch(URL_API);
    if (resp.status == 200) {
        const obj = await resp.json()
        let code_and_flags = []
        for (let i = 0; i<obj.length; i++) {
            code_and_flags.push({
                name: obj[i].name.common,
                code: code_country_generator(obj[i].idd.root, obj[i].idd.suffixes),
                img: obj[i].flags.svg
            })
        }
        return code_and_flags
    }
}

function create_opc_contry_code(code, img) {
    const dropdown = document.querySelector('.dropdown-list')
    const dropdown_item = document.createElement('div')
    dropdown_item.classList.add('dropdown-list__item')
    dropdown_item.value = code
    dropdown_item.setAttribute('id','country_code')

    const dropdown_item_img = document.createElement('img')
    dropdown_item_img.classList.add('select-img')
    dropdown_item_img.setAttribute('src', img)

    const dropdown_text = document.createElement('span')
    dropdown_text.classList.add('select-text')
    dropdown_text.textContent = code

    dropdown_item.appendChild(dropdown_item_img)
    dropdown_item.appendChild(dropdown_text)
    dropdown.appendChild(dropdown_item)
}

window.onload = async() => {
    const contry_codes = await country_list()
    
    for (let i=0;i<contry_codes.length;i++) {
        for (i2=0;i2<contry_codes[i].code.length;i2++) {
            create_opc_contry_code(contry_codes[i].code[i2], contry_codes[i].img)
            
        }            
    }
}