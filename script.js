function link_builder() {
    const number = document.getElementById('number').value
    const open_link = document.getElementById('open_link').checked
    const code_country = document.querySelector('.select').value
    const link_content = document.getElementById('link_content')
    const link_container = document.getElementById('link_container')

    if (Number(number) != NaN) {
        const link = "https://wa.me/"+code_country+number
        link_content.textContent = link
        link_container.style.display = 'flex'
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


