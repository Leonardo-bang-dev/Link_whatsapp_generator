function link_builder() {
    const number = document.getElementById('number').value
    const open_link = document.getElementById('open_link').checked
    const code_country = document.getElementById('code_country').value
    const link_content = document.getElementById('link_content')
    
    console.log(open_link)

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
    console.log(text)
    alert.opacity = 1
    setTimeout(() => {
        alert.opacity = 0
    }, 2000)
  }
  
  
}