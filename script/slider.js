let nomerImg = 1;
let nomerLi = nomerImg - 1;
let oll = [document.getElementById("li1"),
	document.getElementById("li2"),
	document.getElementById("li3"),
	document.getElementById("li4"),
	document.getElementById("li5"),
	document.getElementById("li6"),
	document.getElementById("li7"),
	document.getElementById("li8")];
let i = 0;

function listanie(){

	let imag = document.getElementById("slid");
	if (nomerImg < 8){
		nomerImg = nomerImg+1;
	}
	else{
		nomerImg = 1;
	};
	oll[nomerLi].style.color = "black";
	nomerLi = nomerImg - 1;
	imag.src = "img/Narnia" + nomerImg + ".jpg";
	oll[nomerLi].style.color = "red";
}

function prevClick(){
	let imag = document.getElementById("slid");
	if (nomerImg > 1){
		nomerImg = nomerImg-1;
		oll[nomerLi].style.color = "black";
		nomerLi = nomerImg - 1;
		imag.src = "img/Narnia" + nomerImg + ".jpg";
		oll[nomerLi].style.color = "red";
	}
	else{
		nomerImg = 8;
		imag.src = "img/Narnia" + nomerImg + ".jpg";
		oll[nomerLi].style.color = "black";
		nomerLi = nomerImg - 1;
		oll[nomerLi].style.color = "red";
	}
	resetTiming();
}

function nextClick(){
	let imag = document.getElementById("slid");
	if (nomerImg < 8){
		nomerImg = nomerImg+1;
		oll[nomerLi].style.color = "black";
		nomerLi = nomerImg - 1;
		imag.src = "img/Narnia" + nomerImg + ".jpg";
		oll[nomerLi].style.color = "red";
	}
	else{
		nomerImg = 1;
		imag.src = "img/Narnia" + nomerImg + ".jpg";
		oll[nomerLi].style.color = "black";
		nomerLi = nomerImg - 1;
		oll[nomerLi].style.color = "red";
	}
	resetTiming();
}

function liClick(il){
	let imag = document.getElementById("slid");
	nomerImg = Number(il.textContent);
	oll[nomerLi].style.color = "black";
	nomerLi = nomerImg - 1;
	imag.src = "img/Narnia" + nomerImg + ".jpg";
	oll[nomerLi].style.color = "red";
	resetTiming();
}

var timingRun = setInterval(function() {
    listanie();
}, 3000);

function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() {
      listanie();
    }, 3000);
}

