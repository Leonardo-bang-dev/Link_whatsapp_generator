function link_builder() {
    const number = document.getElementById('number').value
    const code_country = document.getElementById('code_country').value
    if (Number(number) != NaN) {
        window.open("https://wa.me/"+code_country+number)
        return "https://wa.me/"+code_country+number
    } else {
        return "error"
    }
}