const URL_API = 'https://restcountries.com/v3.1/all'

/* Active the dropdown function */
function active_dropdown() {
    const dropdown_item = document.querySelectorAll('.dropdown-list__item')
    const dropdown_list = document.querySelector('.dropdown-list')
    const dropdown = document.querySelector('.dropdown-select')
    const search_fild = document.querySelector('.search_fild')

    for (let i=0;i<dropdown_item.length;i++) {
        dropdown_item[i].addEventListener('click', ()=> {
            if (dropdown_list.style.opacity == 0) {
                search_fild.style.opacity = 1
                search_fild.style.visibility = 'visible'
                dropdown_list.style.opacity = 1
                dropdown_list.style.visibility = 'visible'
            } else {
                search_fild.style.opacity = 0
                search_fild.style.visibility = 'hidden'
                dropdown_list.style.opacity = 0
                dropdown_list.style.visibility = 'hidden'
            }
        })
    }
    dropdown.addEventListener('click',function visibility(){
        if (dropdown_list.style.opacity == 0) {
            search_fild.style.opacity = 1
            search_fild.style.visibility = 'visible'
            dropdown_list.style.opacity = 1
            dropdown_list.style.visibility = 'visible'
        } else {
            search_fild.style.opacity = 0
            search_fild.style.visibility = 'hidden'
            dropdown_list.style.opacity = 0
            dropdown_list.style.visibility = 'hidden'
        }
    })
}

function desactive_dropdown() {
    const all_elements = document.querySelectorAll('#number')
    const dropdown_list = document.querySelector('.dropdown-list')
    const search_fild = document.querySelector('.search_fild')
    for (let i=0;i<all_elements.length;i++) {
        all_elements[i].addEventListener('click', function desactive_dropdown() {
            if (dropdown_list.style.opacity == 1) {
                search_fild.style.opacity = 0
                search_fild.style.visibility = 'hidden'
                dropdown_list.style.opacity = 0
                dropdown_list.style.visibility = 'hidden'
            } 
        })
    }
}

function select_dropdown() {
    const dropdown_item = document.querySelectorAll('.dropdown-list__item')
    const select = document.querySelector('.select')
    const select_img = document.querySelector('.select-img')
    for (let i=0;i<dropdown_item.length;i++) {
        dropdown_item[i].addEventListener('click', function select_dorpdow_(e) {
            select_img.setAttribute('src',e.target.value[1])
            select.textContent = e.target.value[0]
            select.value = e.target.value[0]
        })
    }
}

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
            if (typeof(obj[i].idd.root) === 'string' && typeof(obj[i].idd.suffixes) === 'object') {
                code_and_flags.push({
                    country: obj[i].name.common,
                    code: code_country_generator(obj[i].idd.root, obj[i].idd.suffixes),
                    img: obj[i].flags.svg
                })
            }
        }
        return code_and_flags
    }
}

function create_opc_contry_code(code, img, country) {
    const dropdown = document.querySelector('.dropdown-list')
    const dropdown_item = document.createElement('div')
    dropdown_item.classList.add('dropdown-list__item')
    dropdown_item.setAttribute('id','country_code')

    const dropdown_item_img = document.createElement('img')
    dropdown_item_img.classList.add('select-img')
    dropdown_item_img.setAttribute('src', img)

    const dropdown_text = document.createElement('span')
    dropdown_text.classList.add('select-text')
    dropdown_text.textContent = code

    const info_box_item = document.createElement('div')
    info_box_item.classList.add('info_box_item')
    info_box_item.setAttribute('id', 'info_box_item')
    info_box_item.value = [code, img, country]

    dropdown_item.appendChild(dropdown_item_img)
    dropdown_item.appendChild(dropdown_text)
    dropdown.appendChild(dropdown_item)
    dropdown_item.appendChild(info_box_item)
}

window.onload = async() => {
    const contry_codes = await country_list()
    
    for (let i=0;i<contry_codes.length;i++) {
        for (i2=0;i2<contry_codes[i].code.length;i2++) {
            create_opc_contry_code(contry_codes[i].code[i2], contry_codes[i].img, contry_codes[i].country)       
        }            
    }
    
    active_dropdown()
    desactive_dropdown()
    select_dropdown()
}