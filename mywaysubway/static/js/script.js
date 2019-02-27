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
        for (i=0; i<vegeCbox.length; i++) {
            vegeCbox[i].checked = true;
        }
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
        cookieRadio[6].checked = true;
        drinkRadio[5].checked = true;    
    }
}

var sandwichDic = { 
    'eggmayo':0, 'italianbmt':0, 'blt':0, 'meatball':0, 'ham':0, 'tuna':0,
    'rotisseriechicken':0, 'roastchicken':0, 'roastbeef':0, 'subwayclub':0, 'turkey':0, 'veggie':0,
    'pulledpork':0, 'steakncheese':0, 'turkeybaconavocado':0, 'chickenbaconlanch':0, 'subwaymelt':0, 'turkeybacon':0, 'spicyitalian':0, 'chickenteriyaki':0
}

var sandwichArr = [
    'eggmayo', 'italianbmt', 'blt', 'meatball', 'ham', 'tuna',
    'rotisseriechicken', 'roastchicken', 'roastbeef', 'subwayclub', 'turkey', 'veggie',
    'pulledpork', 'steakncheese', 'turkeybaconavocado', 'chickenbaconlanch', 'subwaymelt', 'turkeybacon', 'spicyitalian', 'chickenteriyaki'
]

var toppingDic = {
    'doubleup':0, 'eggmayotoppping':0, 'omlet':0, 'avocado':0, 'bacon':0, 'pepperoni':0, 'doublecheese':0
}

//오늘의 샌드위치 결정
function sandwichRandomSelect() {
    // 결정된 사항들이 담길 배열
    var selectedArr = []

    // 샌드위치 종류 결정
    var select = document.getElementById('swcategory');
    var cateval = select.options[select.selectedIndex].value;

    if (cateval == 'random') {
        var randSandwichInt = Math.floor(Math.random()*(sandwichArr.length-1+1)) + 1;
        var sandwichName = sandwichArr[randSandwichInt];
        var sandwichPrice = sandwichDic[sandwichName];
        selectedArr.push([sandwichName, sandwichPrice]);
    } else if (cateval == 'category') {
        alert('샌드위치 종류를 선택해주세요!')
        return false;
    } else if (cateval == 'classic') {
        var classicRadio = document.getElementsByName('classic');
        var checkedSandwichName;
        for (i=0; i<classicRadio.length; i++) {
            if (classicRadio[i].checked == true) {
                checkedSandwichName = classicRadio[i].value;
                selectedArr.push([checkedSandwichName, sandwichDic[checkedSandwichName]]);
            }
        }
    } else if (cateval == 'fresh') {
        var freshRadio = document.getElementsByName('fresh');
        var checkedSandwichName;
        for (i=0; i<freshRadio.length; i++) {
            if (freshRadio[i].checked == true) {
                checkedSandwichName = freshRadio[i].value;
                selectedArr.push([checkedSandwichName, sandwichDic[checkedSandwichName]]);
            }
        }
    } else if (cateval == 'premium') {
        var premiumRadio = document.getElementsByName('premium');
        var checkedSandwichName;
        for (i=0; i<premiumRadio.length; i++) {
            if (premiumRadio[i].checked == true) {
                checkedSandwichName = premiumRadio[i].value;
                selectedArr.push([checkedSandwichName, sandwichDic[checkedSandwichName]]);
            }
        }
    }

    // 빵 결정
    var breadRadio = document.getElementsByName('bread');
    var checkedBreadName;
    for (i=0; i<breadRadio.length; i++) {
        if (breadRadio[i].checked == true) {
            if (breadRadio[i].value == 'random') {
                var randBreadInt = Math.floor(Math.random()*(6-1+1));
                checkedBreadName = breadRadio[randBreadInt].value;
                selectedArr.push([checkedBreadName]);
            } else {
                checkedBreadName = breadRadio[i].value;
                selectedArr.push([checkedBreadName]);
            }
        }
    }

    // 치즈 결정
    var cheeseRadio = document.getElementsByName('cheese');
    var checkedCheeseName;
    for (i=0; i<cheeseRadio.length; i++) {
        if (cheeseRadio[i].checked == true) {
            if (cheeseRadio[i].value == 'random') {
                var randCheeseInt = Math.floor(Math.random()*(2-1+1));
                checkedCheeseName = cheeseRadio[randCheeseInt].value;
                selectedArr.push([checkedCheeseName]);
            } else {
                checkedCheeseName = cheeseRadio[i].value;
                selectedArr.push([checkedCheeseName]);
            }
        }
    }    

    // 야채 결정
    var selectVegeRadio = document.getElementsByName('selectvege');
    var selectedVegeArr = [];
    
    var selectVegeCheckbox = document.getElementsByName('vagetable');
    if (selectVegeRadio[0].checked == true) {
        for (i=0; i<selectVegeCheckbox.length; i++) {
            if (selectVegeCheckbox[i].checked == true) {
                selectedVegeArr.push(selectVegeCheckbox[i].value);
            }
        }
        selectedArr.push(selectedVegeArr)
    } else if (selectVegeRadio[1].checked == true) {
        var randVegeIntAmount = Math.floor(Math.random()*(8-1+1)+1); //야채 갯수
        var randVegeArr = []; //야채 인덱스 번호가 들어가는 리스트
        for (i=0; i<randVegeIntAmount; i++) {
            randVegeArr[i] = Math.floor(Math.random()*(8-1+1));
            for (j = 0; j<i; j++) {
                if (randVegeArr[i] == randVegeArr[j]) {
                    i--;
                    break;
                }
            }
        }
        for (i=0; i<randVegeArr.length; i++) {
            selectedVegeArr.push(selectVegeCheckbox[randVegeArr[i]].value);
        }
        selectedArr.push(selectedVegeArr);
    }

    // 토핑 추가
    selectedArr.push([])
    var selectedArr4 = selectedArr[4]
    var addtopping = document.getElementsByName('addtopping');
    if (addtopping[1].checked == true) {
        var toppingCheckbox = document.getElementsByName('topping');
        var checkedToppingName;
        for (i=0; i<toppingCheckbox.length; i++) {
            if (toppingCheckbox[i].checked == true) {
                checkedToppingName = toppingCheckbox[i].value;
                var newDic = {}
                newDic[checkedToppingName] = toppingDic[checkedToppingName];
                selectedArr4.push(newDic);
            }
        }
    }

    // 소스 고르기
    var sauceRadio = document.getElementsByName('selectsauce');
    var sauceCheckbox = document.getElementsByName('sauce');
    var selectedSauceArr = [];
    if (sauceRadio[0].checked == true) {
        for (i=0; i<sauceCheckbox.length; i++) {
            if (sauceCheckbox[i].checked) {
                selectedSauceArr.push(sauceCheckbox[i].value);
            }
        }
        selectedArr.push(selectedSauceArr);
    } else {
        var randSauceIntAmount = Math.floor(Math.random()*(3-1+1)+1);
        var randSauceArr = [];
        for (i=0; i<randSauceIntAmount; i++) {
            randSauceArr[i] = Math.floor(Math.random()*(16-1+1));
            for (j = 0; j<i; j++) {
                if (randSauceArr[i] == randSauceArr[j]) {
                    i--;
                    break;
                }
            }
        }
        for (i=0; i<randSauceArr.length; i++) {
            selectedSauceArr.push(sauceCheckbox[randSauceArr[i]].value);
        }
        selectedArr.push(selectedSauceArr);
    }

    var setRadio = document.getElementsByName('setyn');
    if (setRadio[1].checked == true) {
        //쿠키 결정
        var cookieRadio = document.getElementsByName('cookie');
        for (i=0; i<cookieRadio.length; i++) {
            if (cookieRadio[i].checked == true) {
                if (cookieRadio[i].value == 'random') {
                    var randCookieInt = Math.floor(Math.random()*(6-1+1));
                    selectedArr.push([cookieRadio[randCookieInt].value])
                } else {
                    selectedArr.push([cookieRadio[i].value])
                }
            }
        }

        //음료 결정
        var drinkRadio = document.getElementsByName('drink');
        for (i=0; i<drinkRadio.length; i++) {
            if (drinkRadio[i].checked == true) {
                if (drinkRadio[i].value == 'random') {
                    var randDrinkInt = Math.floor(Math.random()*(5-1+1));
                    selectedArr.push([drinkRadio[randDrinkInt].value])
                } else {
                    selectedArr.push([drinkRadio[i].value])
                }
            }
        }
    }
    // 최종 결과 알림
    alert(selectedArr);
}