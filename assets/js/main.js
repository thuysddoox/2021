/*NAVIGATION BAR*/
function showReadMe() {
    var readme = document.getElementsByClassName('text')[0];
    console.log(readme);
    if (readme.style.display != 'block') readme.style.display = 'block';
    else readme.style.display = 'none';
}

function runMusic() {
    var ps = document.getElementById('pausems'),
        pl = document.getElementById('runms'),
        ms = document.getElementById('musicPl'),
        mus = document.getElementById('music'),
        musp = document.getElementById('playerPause'),
        musr = document.getElementById('playerRun');
    if (ps.style.display != 'none') {
        ps.style.display = 'none';
        pl.style.display = 'block';
        ms.play();
        musr.style.display = 'block';
        musp.style.display = 'none';
        mus.style.opacity = '1';
    } else {
        pl.style.display = 'none';
        ps.style.display = 'block';
        ms.pause();
        musp.style.display = 'block';
        musr.style.display = 'none';
        mus.style.opacity = '0.5';
    }
}
var home = document.getElementById('home');
var wish = document.getElementById('wish');
var firework = document.getElementById('firework');
var blame = document.getElementById('blame');
var entertain = document.getElementById('entertain');
var tab = document.querySelectorAll('.tab>a');

/*HOME*/
function showHome() {
    home.style.display = 'block';
    wish.style.display = 'none';
    blame.style.display = 'none';
    firework.style.display = 'none';
    entertain.style.display = 'none';
    tab[0].style.backgroundColor = "rgb(44, 47, 73)";
    tab[0].style.color = "rgb(168, 158, 252)";
    for (var i = 1; i < 5; i++) {
        tab[i].style.backgroundColor = "#fcfcfc00";
        tab[i].style.color = "#a8abbb";
    }

}


var slide = document.getElementsByClassName("content");
var id = 0;
console.log(slide.length);

function slideHome() {
    if (id == 3) id = 0;
    slide[id].style.display = 'block';
    for (var i = 0; i < 3; i++) {
        if (i != id) slide[i].style.display = 'none';
    }
    id++;
    setTimeout(slideHome, 8000);
}
slideHome();
/*
var bkhome = document.getElementById('backgroundHome');
var nav = document.getElementById("navbar");
var ctx = bkhome.getContext("2d");
var Ox = nav.clientWidth + 1,
    Oy = 0;

function backgroundHome() {


}
*/
/*WISHES*/
function showWish() {
    wish.style.display = 'block';
    home.style.display = 'none';
    blame.style.display = 'none';
    firework.style.display = 'none';
    entertain.style.display = 'none';
    tab[1].style.backgroundColor = "rgb(44, 47, 73)";
    tab[1].style.color = "rgb(168, 158, 252)";
    for (var i = 0; i < 5; i++) {
        if (i !== 1) {
            tab[i].style.backgroundColor = "#fcfcfc00";
            tab[i].style.color = "#a8abbb";
        }
    }

}
var letter = 0;

function takeLetter() {
    var button = document.getElementById('takeit');
    var letterclose = document.getElementById('letterclose');
    var openletter = document.getElementById('openletter');
    var tt = document.querySelectorAll('#iconcard>.postbox>p')[0];
    var btn = document.getElementsByClassName('btn')[0];
    if (letter == 0) {
        letter = 1;
        letterclose.style.display = 'block';
        button.style.backgroundColor = 'rgb(8, 134, 106)';
        button.style.borderColor = 'rgb(2, 93, 73)';
        button.innerHTML = '???? l???y th??';
        button.style
        openletter.style.display = 'block';
        btn.style.marginLeft = '-30px';
        tt.innerHTML = '??? ????y v???n c??n th?? nh??ng l?? c???a ng?????i kh??c!';
    }
}

function openLetter() {
    var button = document.getElementById('openletter');
    var letteropen = document.getElementById('letteropen');
    var letterclose = document.getElementById('letterclose');
    var letterinit = document.getElementById('letter');
    var content = document.getElementsByClassName("contentcard")[0];
    if (letteropen.style.display != 'block') {
        letterclose.style.display = 'none';
        button.innerHTML = '????ng th??';
        letteropen.style.display = 'block';
        letterinit.style.display = 'none';
        button.style.backgroundColor = 'rgb(191, 142, 6)';
        button.style.borderColor = ' rgb(155, 115, 4)';
        content.style.display = "block";
    } else {
        letteropen.style.display = 'none';
        button.innerHTML = 'M??? th??';
        button.style.backgroundColor = 'rgb(190, 85, 91)';
        button.style.borderColor = 'rgb(144, 26, 32)';
        letterinit.style.display = 'block';
        content.style.display = "none";

    }


}

function showNhanText() {
    var nt = document.getElementById("nhantext");
    if (nt.style.display != 'block') nt.style.display = 'block';
    else {
        nt.style.display = 'none';
        nt.style.top = '5%';
    }
    document.getElementById("nghiemtuctext").style.display = "none";
    document.getElementById("end").style.display = 'block';
}

function showNgiemtucText() {
    var ntt = document.getElementById("nghiemtuctext");
    var nt = document.getElementById("nhantext");
    if (ntt.style.display != 'block') {
        ntt.style.display = 'block';
        nt.style.top = '-5%';
    } else {
        ntt.style.display = 'none';
        nt.style.top = '5%';
    }
}
/*FIREWORK*/
function showFirework() {
    firework.style.display = 'block';
    wish.style.display = 'none';
    blame.style.display = 'none';
    home.style.display = 'none';
    entertain.style.display = 'none';
    tab[2].style.backgroundColor = "rgb(44, 47, 73)";
    tab[2].style.color = "rgb(168, 158, 252)";
    for (var i = 0; i < 5; i++) {
        if (i !== 2) {
            tab[i].style.backgroundColor = "#fcfcfc00";
            tab[i].style.color = "#a8abbb";
        }
    }
}
/*ENTERTAIN*/
function showEntertain() {
    entertain.style.display = 'block';
    wish.style.display = 'none';
    home.style.display = 'none';
    firework.style.display = 'none';
    blame.style.display = 'none';
    tab[3].style.backgroundColor = "rgb(44, 47, 73)";
    tab[3].style.color = "rgb(168, 158, 252)";
    for (var i = 0; i < 5; i++) {
        if (i !== 3) {
            tab[i].style.backgroundColor = "#fcfcfc00";
            tab[i].style.color = "#a8abbb";
        }
    }

}
/*BLAME*/
var intro1 = "Xin ch??o, T??? ng???i ????y t??? chi???u v?? lu??n mong ch??? s??? c?? m???t c???a c???u. T??? ch??? ?????i v?? hi v???ng c?? th??? nh???n ???????c nh???ng g??p ?? c???a c???u v?? t??? bi???t n???u c???u ???? m?? v??o t???n ????y th?? c?? l??? c???u c??ng bi???t ch??t ??t v??? t??? ho???c kh??ng =)). Nh??ng n???u c???u r???nh th?? r???t r???t hi v???ng c???u c?? th??? ????? l???i nh???ng nh???n x??t, ?? ki???n c???a c???u v??? t??? nh?? ki???u t??? c??n thi???u s??t ??i???u g??, ??i???m n??o ch??a t???t...hay ????n gi???n ch??? l?? nh???ng suy ngh?? c???a c???u v??? t??? th???m ch?? ch???i t??? c??ng ???????c (y??n t??m v?? t??? s??? kh??ng bi???t c???u l?? ai n???u c???u kh??ng mu???n). N???u c???u qu?? r???nh th?? c???u c?? th??? cho t??? bi???t nh???ng g?? c???u nh??n th???y ??? tr?? con b?? c???a t??? c??n ??i???m n??o ch??a t???t, c?? ??i???u g?? ch??a h??i l??ng, c?? l???i g?? kh??ng, ch??? n??o x???u c???n s???a...(mong c???u h??y th??ng c???m cho t??? v?? tr??nh ????? c???a t??? c??n k??m!). M???i ph???n h???i c???a c???u t??? ?????u tr??n tr???ng v?? h???t s???c bi???t ??n!";
var idintr = 0;
var intro = document.querySelectorAll('#blame .intro>.introcontent')[0];
var space = "<span style = 'font-size:20px;'>&#10074;</span>";
idintr = intro.innerText.length;
intro.innerText = "";

function showIntro() {
    if (idintr <= intro1.length) {
        intro.innerText = intro1.substring(0, idintr);
        intro.insertAdjacentHTML("beforeend", space);
        idintr++;
        setTimeout(showIntro, 100);
    } else if (idintr == -1) { document.getElementById('btncmt').style.display = 'none'; } else if (idintr > intro1.length) {
        intro.innerText = intro1;
        if (document.querySelectorAll('#blame .intro')[0].style.display != 'none') document.getElementById('btncmt').style.display = 'inline-block';
        return 0;
    }

}
var cmd = document.querySelector('#blame .intro');
var icon = document.getElementById('iconcmd');
var btn = document.querySelector('#introbar>.btnclose');

function showCmd() {

    if (cmd.style.display != 'none') {
        cmd.style.display = 'none';
        idintr = -1;
        intro.innerText = "";
        document.getElementById('btncmt').style.display = 'none';
        icon.style.display = 'inline-block';
        document.getElementById('formcmt').style.display = 'none';
        document.getElementById('slapedform').style.display = 'none';
    } else {
        idintr = 0;
        cmd.style.display = 'block';
        showIntro();
        icon.style.display = 'none';
    }
}

function showSlapedFform() {
    var form = document.getElementById('slapedform');
    if (form.style.display != 'none') {
        document.querySelectorAll('#blame .intro>.introcontent')[0].innerText = intro1;
        form.style.display = 'none';
        document.getElementById('btncmt').style.display = 'block';
    } else form.style.display = 'block';
}

function showFormCmt() {
    var form = document.getElementById('formcmt');
    var btn = document.getElementById('btncmt');
    btn.style.display = 'none';
    if (form.style.display != 'block') form.style.display = 'block';
    else form.style.display = 'none';
}




function deleteFormcmt() {
    document.getElementById('formcmt').style.display = 'none';
    document.getElementById('btncmt').style.display = 'inline-block';
}


function showBlame() {
    blame.style.display = 'block';
    wish.style.display = 'none';
    entertain.style.display = 'none';
    firework.style.display = 'none';
    home.style.display = 'none';
    tab[4].style.backgroundColor = "rgb(44, 47, 73)";
    tab[4].style.color = "rgb(168, 158, 252)";
    for (var i = 0; i < 4; i++) {
        tab[i].style.backgroundColor = "#fcfcfc00";
        tab[i].style.color = "#a8abbb";
    }

    document.querySelector('#blame .intro').style.display = 'block';
    showIntro();
}