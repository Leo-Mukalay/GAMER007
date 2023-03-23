var gamers = [{
    j:"Mac Léo",
    i:0,
    p:0,
    v:0,
},
{
    j:"Djo Maloba",
    i:1,
    p:0,
    v:0,
},
{
j:"Ephraîm FF",
i:2,
p:0,
v:0
},
{
j:"Magloire MK",
i:3,
p:0,
v:0
},
{
j:"Denti P",
i:4,
p:0,
v:0
},
{
j:"Béni M",
i:5,
p:0,
v:0
},
{
j:"George M",
i:6,
p:0,
v:0
},
{
j:"David Al",
i:7,
p:0,
v:0,
},
{
j:"Dieu-merci",
i:8,
p:0,
v:0
},
{
j:"Luc",
i:9,
p:0,
v:0
},
{
j:"Wills Hardy",
i:10,
p:0,
v:0
},
{
j:"William",
i:11,
p:0,
v:0
}]
var buttons = document.querySelectorAll("button");
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",()=>{
        if(document.getElementById(gamers[i].j).style.display!="block"){
            document.getElementById(gamers[i].j).style.display="block";
            document.getElementById(gamers[i].j).innerText = "Victoires : "+gamers[i].v+", Points : "+gamers[i].p;
        }
        else{
            document.getElementById(gamers[i].j).style.display="none";
        }
    })
}