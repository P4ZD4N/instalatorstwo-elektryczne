function revealPhone(element) {
    const phone = atob('KzQ4IDY5MiA2NDMgNzQ0');
    element.innerHTML = `<a href="tel:${phone.replace(/\s/g, '')}" style="color: black; text-decoration: none;">${phone}</a>`;
    element.classList.add('revealed');
    element.onclick = null;
}

function revealEmail(element) {
    const email = atob('aW5zdGFsYWNqZWVsZWt0cnljemU3OUBnbWFpbC5jb20='); 
    element.innerHTML = `<a href="mailto:${email}" style="color: black; text-decoration: none;">${email}</a>`;
    element.classList.add('revealed');
    element.onclick = null;
}