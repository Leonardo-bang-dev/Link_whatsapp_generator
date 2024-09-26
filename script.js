function link_builder() {
    const number = document.getElementById('number').value
    const open_link = document.getElementById('open_link').checked
    const code_country = document.getElementById('country_code').value
    const link_content = document.getElementById('link_content')

    if (Number(number) != NaN) {
        const link = "https://wa.me/"+code_country+number
        link_content.textContent = link
        if (open_link) {
            window.open(link)
        }
        return link
    } else {
        return "error"
    }
}

document.getElementById('btn_copy').addEventListener('click', copy_link);
async function copy_link() {
  let text = document.querySelector("#link_content").textContent;
  const alert = document.getElementById('alert_container').style
  if (text != '') {
    await navigator.clipboard.writeText(text);
    alert.opacity = 1
    setTimeout(() => {
        alert.opacity = 0
    }, 2000)
  }
}

/* Active the dropdown function */

function active_dropdown() {
    const dropdown_item = document.querySelectorAll('.dropdown-list__item')
    const dropdown_list = document.querySelector('.dropdown-list')
    const dropdown = document.querySelector('.dropdown-select')

    for (let i=0;i<dropdown_item.length;i++) {
        dropdown_item[i].addEventListener('click',function visibility(){
            if (dropdown_list.style.opacity == 0) {
                dropdown_list.style.opacity = 1
                dropdown_list.style.visibility = 'visible'
            } else {
                dropdown_list.style.opacity = 0
                dropdown_list.style.visibility = 'hidden'
            }
        })
    }
    dropdown.addEventListener('click',function visibility(){
        if (dropdown_list.style.opacity == 0) {
            dropdown_list.style.opacity = 1
            dropdown_list.style.visibility = 'visible'
        } else {

            dropdown_list.style.opacity = 0
            dropdown_list.style.visibility = 'hidden'
        }
    })
}

function select_dropdown() {
    const dropdown_item = document.querySelectorAll('.dropdown-list__item')
    const select = document.querySelector('.select')
    const select_img = document.querySelector('.select-img')
    for (let i=0;i<dropdown_item.length;i++) {
        dropdown_item[i].addEventListener('click', function select_dorpdow_(e) {
            select_img.setAttribute('src',e.target.src)
            select.textContent = e.target.value
            select.value = e.target.value
        })
    }
}

setTimeout(()=>{select_dropdown()},1000)
setTimeout(()=>{active_dropdown()},1000)