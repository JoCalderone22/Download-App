const inpt = document.querySelector("input");
const btn = document.querySelector("button");


btn.addEventListener('click', (event)=>{
    event.preventDefault();
    teleChargement(inpt.value);
})

function teleChargement(url) {
    if (!url) return;

    fetch(url, {method: 'GET'}).then(Response =>Response.blob())
    .then(data =>{
        const urlFiles = URL.createObjectURL(data)
        console.log(urlFiles);
        const a = document.createElement("a");
        a.href = urlFiles;
        a.setAttribute("download",urlFiles.replace(/^.*[\\\/]/, ""));

        document.querySelector("body").appendChild(a);
        a.click();

        document.querySelector("body").remove(a);

        URL.revokeObjectURL(urlFiles);
        location.reload()  
    }).catch(error =>{
        console.log(error);
    })

    
}