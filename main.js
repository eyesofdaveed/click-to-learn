/* List of names with the info */
const people = [
    {
        name: "David",
        street: "Sanches",
        city: "LA",
        state: "California",
        country: "USA",
        phone: "+1(425)3010213",
        birthday: "11/21/1993"
    },
    {
        name: "Julien",
        street: "Lee",
        city: "Paris",
        state: "Saint Paris",
        country: "France",
        phone: "+1(132)1239423",
        birthday: "11/21/2000"
    },
    {
        name: "Rose",
        street: "Alvarez",
        city: "Mexico",
        state: "Mexico",
        country: "Mexico",
        phone: "87770270575",
        birthday: "11/21/1993"
    },
    {
        name: "Home",
        street: "103 John Street",
        city: "Seattle",
        state: "Washington",
        country: "USA",
        phone: "+1(206)12332644",
        birthday: "29/01/2001"
    }
]

main_panel = document.querySelector(".names ul");

/* Appends the information of clicked person to the HTML page */
function showInfo(e) {
    info_panel = document.querySelector(".info-panel");
    clicked_name = e.target.innerText;
    const target_obj = people.find(obj => {
        return obj.name == clicked_name;
    });
    let txt = ""
    for (var item in target_obj){
        txt = txt + "<p>" + item+ ":  " + target_obj[item] + "</p>";
    }
    info_panel.innerHTML = txt;
}

/* Adds names to the HTML page list */
people.forEach(element => {
    main_panel.insertAdjacentHTML("afterbegin", "<li>" + element.name + "</li>");
});  


/* Sets attribute for each name on the list */
names = document.querySelectorAll(".panel .names ul li");
names.forEach(element => {
    element.setAttribute("onClick", "showInfo(event)");
});

