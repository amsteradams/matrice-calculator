//CREATION DES FONCTIONS
function addTab(tab1, tab2){
let tmp = 0;
    if(tab1.length === 1 && tab2.length === 1){
        return tab1[0] + tab2[0]
    }
    if (tab1.length > tab2.length) {
        for (let i = 0; i < tab1.length; i++) {
            if (tab2[i] === undefined) {
                tmp += tab1[i]
            }
            else{
                tmp += tab1[i] + tab2[i];
            }

        }
    }
    else{
        for (let i = 0; i < tab2.length; i++) {
            if (tab1[i] === undefined) {
                tmp += tab2[i]
            }
            else{
                tmp += tab2[i] + tab1[i];
            }

        }
    }
return tmp
}
function sousTab(tab1, tab2){
    let tmp = 0;
    if(tab1.length === 1 && tab2.length === 1){
        return tab1[0] - tab2[0]
    }
    if (tab1.length > tab2.length) {
        for (let i = 0; i < tab1.length; i++) {
            if (tab2[i] === undefined) {
                tmp += tab1[i]
            }
            else{
                tmp += tab1[i] - tab2[i];
            }

        }
    }
    else{
        for (let i = 0; i < tab2.length; i++) {
            if (tab1[i] === undefined) {
                tmp += tab2[i]
            }
            else{
                tmp += tab2[i] - tab1[i];
            }

        }
    }
return tmp
}
function mulTab(tab1, tab2){
    let tmp = 0;
    if(tab1.length === 1 && tab2.length === 1){
        return tab1[0] * tab2[0]
    }
    if (tab1.length > tab2.length) {
        for (let i = 0; i < tab1.length; i++) {
            if (tab2[i] === undefined) {
                tmp += tab1[i]
            }
            else{
                tmp += tab1[i] * tab2[i];
            }

        }
    }
    else{
        for (let i = 0; i < tab2.length; i++) {
            if (tab1[i] === undefined) {
                tmp += tab2[i]
            }
            else{
                tmp += tab2[i] * tab1[i];
            }

        }
    }
return tmp
}
function divTab(tab1, tab2){
    let tmp = 0;
    if(tab1.length === 1 && tab2.length === 1){
        return tab1[0] / tab2[0]
    }
    if (tab1.length > tab2.length) {
        for (let i = 0; i < tab1.length; i++) {
            if (tab2[i] === undefined) {
                tmp += tab1[i]
            }
            else{
                tmp += tab1[i] / tab2[i];
            }

        }
    }
    else{
        for (let i = 0; i < tab2.length; i++) {
            if (tab1[i] === undefined) {
                tmp += tab2[i]
            }
            else{
                tmp += tab2[i] / tab1[i];
            }

        }
    }
return tmp
}
function transformStrTab(tab){
    let tmpTab = tab.value.split(',');
    let tmp = [];
    for (let i = 0; i < tmpTab.length; i++) {
        tmp.push(parseInt(tmpTab[i], 10));        
    }
    return tmp;
}

//DECLARATION DES VARIABLES
let tmp = 0;
let mat1 = document.getElementById('mat1');
let mat2 = document.getElementById('mat2');
let divChoix = document.getElementById('choix');
let btns = document.querySelectorAll('.op');
let btnAdd = document.getElementById('btnAdd');
let btnSous = document.getElementById('btnSous');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');
let btn = document.getElementById('btn');
let load = document.getElementById('load');
let menu = document.getElementById('menu');



//SELECTION DE L'OPERATEUR
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e){
        for (let i = 0; i < btns.length; i++) {
            btns[i].style.background = "rgb(44, 39, 39)"
            btns[i].style.color ="cyan"
        }
    this.style.background ="cyan";
    this.style.color ="rgb(44, 39, 39)";
    tmp = i;
    })
}

//LANCEMENT DE L'ALGORITHME
btn.addEventListener('click', function(e){
    let tmpArr1 = transformStrTab(mat1);
    let tmpArr2 = transformStrTab(mat2);
    switch (tmp)
        {
        case 0: 
        load.style.display="flex";
        setTimeout(function () {
            load.style.display="none";
            let result = document.createElement("p");
            result.textContent = "Résultat : " + addTab(tmpArr1,tmpArr2);
            result.style.margin="auto";
            result.style.marginTop ="5vh";
            result.style.fontSize ="30px"
            menu.appendChild(result);
        },1000)
        ; break;
        case 1: 
        load.style.display="flex";
        setTimeout(function () {
            load.style.display="none";
            let result = document.createElement("p");
            result.textContent = "Résultat : " + sousTab(tmpArr1,tmpArr2);
            result.style.margin="auto";
            result.style.marginTop ="5vh";
            result.style.fontSize ="30px"
            menu.appendChild(result);
        },1000)
        ; break;
        case 2: 
        load.style.display="flex";
        setTimeout(function () {
            load.style.display="none";
            let result = document.createElement("p");
            result.textContent = "Résultat : " + mulTab(tmpArr1,tmpArr2);
            result.style.margin="auto";
            result.style.marginTop ="5vh";
            result.style.fontSize ="30px"
            menu.appendChild(result);
        },1000)
        ; break;
        case 3:
        load.style.display="flex";
        setTimeout(function () {
            load.style.display="none";
            let result = document.createElement("p");
            result.textContent = "Résultat : " + divTab(tmpArr1,tmpArr2);
            result.style.margin="auto";
            result.style.marginTop ="5vh";
            result.style.fontSize ="30px"
            menu.appendChild(result);
        },1000)
        ; break;

        default: 
            alert('Default case');
        }
})










/*
btn.addEventListener('click',function(e){
    let tmpArr1 = transformStrTab(mat1);
    let tmpArr2 = transformStrTab(mat2);

    console.log(addTab(tmpArr1, tmpArr2));
})
*/
/*
btn.addEventListener('click',function(e){
    console.log(transformStrTab(mat1));
})
*/
/*
btn.addEventListener('click',function(e){
    let tmpArr = mat1.value.split(',');
    console.log(tmpArr);
    return tmpArr;
})
*/
//parseInt(mat1.value, 10)

//5,6,7,8,9,10

//-1000,547,-12,5,45,68,99