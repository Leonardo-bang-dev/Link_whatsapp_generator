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

document.getElementById('btn_copy').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("#link_content").value;
  await navigator.clipboard.writeText(text);
}