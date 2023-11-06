fetch("http://127.0.0.1:5500/app.json")
.then((res) => res.json())
.then((datalist) => {
    var bioData = document.getElementById("cardBody");
    bioData.className="card"
    var insertdata = "";

    datalist.forEach((index)=>{
        insertdata += `<div>
        <img src="${index.project}" width="300x">
        <center>
        <h1>${index.name}</h1>
        <hr>
        <h4>${index.age}</h4>
        <hr>
        <h3>${index.designation}</h3>
        <hr>
        <a href="${index.link}">Home</a>
        <center>
        </div>`
})
bioData.innerHTML = insertdata;
})
