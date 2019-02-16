// 메뉴 랜덤으로 결정하는 메소드
function random() {
    return alert('정상적으로 작동함');
}

// 샌드위치 선택 메소드
function sandwichCategory() {
    var select = document.getElementById('swcategory');
    var cateval = select.options[select.selectedIndex].value;

    var classicdiv = document.getElementById('classic');
    var freshdiv = document.getElementById('fresh');
    var premiumdiv = document.getElementById('premium');

    var classicRadio = document.getElementsByName('classic');
    var freshRadio = document.getElementsByName('fresh');
    var premiumRadio = document.getElementsByName('premium');

    if (cateval == "random") {
        classicdiv.style.display = "none";
        freshdiv.style.display = "none";
        premiumdiv.style.display = "none";

        for (i=0; i<classicRadio.length; i++) {
            classicRadio[i].checked = false;
        }
        for (i=0; i<freshRadio.length; i++) {
            freshRadio[i].checked = false;
        }
        for (i=0; i<premiumRadio.length; i++) {
            premiumRadio[i].checked = false;
        }
    } else if (cateval == "category") {
        classicdiv.style.display = "none";
        freshdiv.style.display = "none";
        premiumdiv.style.display = "none";

        for (i=0; i<classicRadio.length; i++) {
            classicRadio[i].checked = false;
        }
        for (i=0; i<freshRadio.length; i++) {
            freshRadio[i].checked = false;
        }
        for (i=0; i<premiumRadio.length; i++) {
            premiumRadio[i].checked = false;
        }
    } else if (cateval == "classic") {
        classicdiv.style.display = "inline-block";
        freshdiv.style.display = "none";
        premiumdiv.style.display = "none";

        for (i=0; i<freshRadio.length; i++) {
            freshRadio[i].checked = false;
        }
        for (i=0; i<premiumRadio.length; i++) {
            premiumRadio[i].checked = false;
        }
    } else if (cateval == "fresh") {
        classicdiv.style.display = "none";
        freshdiv.style.display = "inline-block";
        premiumdiv.style.display = "none";

        for (i=0; i<classicRadio.length; i++) {
            classicRadio[i].checked = false;
        }
        for (i=0; i<premiumRadio.length; i++) {
            premiumRadio[i].checked = false;
        }
    } else if (cateval == "premium") {
        classicdiv.style.display = "none";
        freshdiv.style.display = "none";
        premiumdiv.style.display = "inline-block";

        for (i=0; i<classicRadio.length; i++) {
            classicRadio[i].checked = false;
        }
        for (i=0; i<freshRadio.length; i++) {
            freshRadio[i].checked = false;
        }
    }
}

// 채소 직접 결정할지 랜덤으로 할지 선택
function vegetableRandom() {
    var selectVege = document.getElementsByName('selectvege');
    var selectVegeValue;
    for (i=0; i<selectVege.length; i++) {
        if (selectVege[i].checked) {
            selectVegeValue = selectVege[i].value;
        }
    }

    var vegeDiv = document.getElementById('vegetable');
    var vegeCbox = document.getElementsByName('vagetable');
    if (selectVegeValue == "select") {
        vegeDiv.style.display = "inline-block";
    } else if (selectVegeValue == "random") {
        vegeDiv.style.display = "none";
        for (i=0; i<vegeCbox.length; i++) {
            vegeCbox[i].checked = false;
        }
    }
}

// 토핑 넣을지 말지 선택
function toppingYesOrNo() {
    var addtopping = document.getElementsByName('addtopping');
    var addtoppinglength = addtopping.length;
    var toppingDiv = document.getElementById('toppingmenu');
    var toppingCbox = document.getElementsByName('topping');
    var addtoppingValue;
    for (i=0; i<addtoppinglength; i++) {
        if (addtopping[i].checked) {
            addtoppingValue = addtopping[i].value;
        }
    }
    if (addtoppingValue == "yes") {
        toppingDiv.style.display = 'block';
    } else {
        toppingDiv.style.display = 'none';
        for (i=0; i<toppingCbox.length; i++) {
            if (toppingCbox[i].checked) {
                toppingCbox[i].checked = false;
            }
        }
    }
}

// 소스 직접 결정할지 랜덤으로 할지 선택
function sauceRandom() {
    var selectSauce = document.getElementsByName('selectsauce');
    var selectSauceValue;
    for (i=0; i<selectSauce.length; i++) {
        if (selectSauce[i].checked) {
            selectSauceValue = selectSauce[i].value;
        }
    }

    var sauceDiv = document.getElementById('sauceselect');
    var sauceCbox = document.getElementsByName('sauce');
    if (selectSauceValue == "select") {
        sauceDiv.style.display = "inline-block";
    } else if (selectSauceValue == "random") {
        sauceDiv.style.display = "none";
        for (i=0; i<sauceCbox.length; i++) {
            sauceCbox[i].checked = false;
        }
    }
}

// 소스 3개 초과하지 않게 조절 
function sauceAmount() {
    var selectedSauce = [];
    var sauce = document.getElementsByName('sauce')
    for (i=0; i<sauce.length; i++) {
        if (sauce[i].checked) {
            selectedSauce.push(sauce[i].value);
            if (selectedSauce.length >= 4) {
                alert('소스는 최대 3가지만 선택할 수 있습니다.');
                selectedSauce.pop();
                sauce[i].checked = false;
            }
        }
    }
    
}

// 세트메뉴 선택할 시 나타남
function setmenuSelect() {
    var setRadio = document.getElementsByName('setyn');
    var setRadioValue;
    for (i=0; i<setRadio.length; i++) {
        if (setRadio[i].checked) {
            setRadioValue = setRadio[i].value;
        }
    }

    var setmenuDiv = document.getElementById('setmenu');
    var cookieRadio = document.getElementsByName('cookie');
    var drinkRadio = document.getElementsByName('drink');
    if (setRadioValue == "single") {
        setmenuDiv.style.display = "none";
        for (i=0; i<cookieRadio.length; i++) {
            cookieRadio[i].checked = false;
        }
        for (i=0; i<drinkRadio.length; i++) {
            drinkRadio[i].checked = false;
        }
    } else if (setRadioValue == "set") {
        setmenuDiv.style.display = "block";     
    }
}