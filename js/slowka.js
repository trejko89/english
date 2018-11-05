function matura() {
			"use strict";
	document.getElementById("tytul").innerHTML = "<h1>Wybierz rozdział</h1>";
	document.getElementById("centrum").innerHTML = "<input type='button' class='btn btn-primary' value='1a' onClick='wybierz(\"1a\")' /><br /><input type='button' class='btn btn-primary' value='1b' onClick='wybierz(\"1b\")' /><br /><input type='button' class='btn btn-primary' value='2a' onClick='wybierz(\"2a\")' /><br /><input type='button' class='btn btn-primary' value='2b' onClick='wybierz(\"2b\")' /><br /><input type='button' class='btn btn-primary' value='3a' onClick='wybierz(\"3a\")' /><br /><input type='button' class='btn btn-primary' value='3b' onClick='wybierz(\"3b\")' /><br /><input type='button' class='btn btn-primary' value='4a' onClick='wybierz(\"4a\")' /><br /><input type='button' class='btn btn-primary' value='4b' onClick='wybierz(\"4b\")' /><br /><input type='button' class='btn btn-primary' value='5a' onClick='wybierz(\"5a\")' /><br /><input type='button' class='btn btn-primary' value='5b' onClick='wybierz(\"5b\")' /><br /><input type='button' class='btn btn-primary' value='6a' onClick='wybierz(\"6a\")' /><br /><input type='button' class='btn btn-primary' value='6b' onClick='wybierz(\"6b\")' /><br /><input type='button' class='btn btn-primary' value='7a' onClick='wybierz(\"7a\")' /><br /><input type='button' class='btn btn-primary' value='7b' onClick='wybierz(\"7b\")' /><br /><input type='button' class='btn btn-primary' value='8a' onClick='wybierz(\"8a\")' /><br /><input type='button' class='btn btn-primary' value='9a' onClick='wybierz(\"9a\")' /><br /><input type='button' class='btn btn-primary' value='9b' onClick='wybierz(\"9b\")' /><br /><input type='button' class='btn btn-primary' value='10a' onClick='wybierz(\"10a\")' /><br /><input type='button' class='btn btn-primary' value='10b' onClick='wybierz(\"10b\")' /><br /><input type='button' class='btn btn-primary' value='11a' onClick='wybierz(\"11a\")' /><br /><input type='button' class='btn btn-primary' value='11b' onClick='wybierz(\"11b\")' /><br /><input type='button' class='btn btn-primary' value='12a' onClick='wybierz(\"12a\")' /><br /><input type='button' class='btn btn-primary' value='12b' onClick='wybierz(\"12b\")' /><br /><input type='button' class='btn btn-primary' value='13a' onClick='wybierz(\"13a\")' /><br /><input type='button' class='btn btn-primary' value='13b' onClick='wybierz(\"13b\")' /><br /><input type='button' class='btn btn-primary' value='14a' onClick='wybierz(\"14a\")' /><br /><input type='button' class='btn btn-primary' value='14b' onClick='wybierz(\"14b\")' /><br /><input type='button' class='btn btn-primary' value='xx' onClick='wybierz(\"xx\")' /><br />";
	}

	function wybierz(w) {
	"use strict";
		zbior(w);
	document.getElementById("tytul").innerHTML = "<h1>Wybierz sposób nauki</h1>";
	document.getElementById("centrum").innerHTML = " <p><input type='button' class='btn btn-primary' value='słówka' onClick='lista()' /></p>";
	document.getElementById("centrum").innerHTML += " <p><input type='button' class='btn btn-primary' value='kartkówka' onClick='kartkowkazadanie()' /></p>";
	document.getElementById("centrum").innerHTML += " <p><input type='button' class='btn btn-primary' value='napisz' onClick='napisz()' /></p>";
	document.getElementById("centrum").innerHTML += " <p><input type='button' class='btn btn-primary' value='uzupełnij 10' onClick='jeden(0,10)' /> </p>";
	document.getElementById("centrum").innerHTML += " <p><input type='button' class='btn btn-primary' value='fail=replay' onClick='odnowa()' /> </p>";
	}
	function lista() {
		var paginacja="<ul class='pagination'>";
		var ilosc= window.slowka.length;
		for(var loopnumber=0;loopnumber<Math.ceil(ilosc/10);loopnumber++){
			paginacja+='<li class="page-item" onClick="zmiana('+loopnumber+')"><a class="page-link">'+(loopnumber+1)+'</a></li>';
		}
		paginacja+='</ul>';
	var petla="<table class='table table-info table-striped'><thead><tr><th>Polskie</th><th>Angielskie</th></tr></thead><tbody>";
	for(var i=0;i<10;i++) {
	petla+="<tr><td>"+slowka[i][0]+"</td><td>"+slowka[i][1]+"</td></tr>";
}
			petla+="</tbody></table>";
		document.getElementById("tytul").innerHTML = "<h1>Słówka </h1>";
document.getElementById("centrum").innerHTML ="<div id='tabela' class='row'></div>"+paginacja+"<input type='button' class='btn btn-primary' value='cofnij' onClick='wybierz()' />";
document.getElementById("tabela").innerHTML=petla;
	}
function zmiana(number) {
		var petla="<table class='table table-info table-striped'><thead><tr><th>Polskie</th><th>Angielskie</th></tr></thead><tbody>";
	for(var i=(number*10);i<(number*10+10);i++) {
		if(slowka[i] != null){
	petla+="<tr><td>"+slowka[i][0]+"</td><td> "+slowka[i][1]+"</td></tr>";
		}else{
			petla+="<tr><td> </td><td> </td></tr>";
		}
}
			petla+="</tbody></table>";
	document.getElementById("tabela").innerHTML=petla;
}
function kartkowkazadanie() {
	document.getElementById("tytul").innerHTML = "<h1>Kartków</h1>";
	var ilosc=slowka.length;
	document.getElementById("centrum").innerHTML= "<div class='col' id='kolumnapierwsza'></div>";
	 window.kartkowka=[]; 
	window.odpowiedzi=[];
	
	for(var i=0;i<=19;i++){
		var powtorka=0;
	var slowo=Math.floor(Math.random() * ilosc);
var swag = slowka[slowo][0];
var yolo= slowka[slowo][1];
		odpowiedzi.push('');
	for(var x in kartkowka)
		{
			if(kartkowka[x][0]===swag){
				powtorka=1;
				break;
			}
		}
if(powtorka===1) {
	i--;
	continue;
}	if(i===10) {
	document.getElementById("centrum").innerHTML+= "<div class='col' id='kolumnadruga'></div>";
}
		kartkowka.push([swag,yolo]);
		if(i<10) {
	document.getElementById("kolumnapierwsza").innerHTML+= "<p class='text-center'>"+kartkowka[i][0]+"</p><input class='form-control' onchange='wsadz(value,\""+i+"\")' type='text'><br />";
		}else{
			document.getElementById("kolumnadruga").innerHTML+= "<p class='text-center'>"+kartkowka[i][0]+"</p><input class='form-control' type='text' onchange='wsadz(value,\""+i+"\")' ><br />";
		}
		}

	document.getElementById("centrum").innerHTML+="<p class='text-right'><input type='button' class='btn btn-primary' value='sprawdz' onClick='sprawdz()'></p><p class='text-left'><input type='button' class='btn btn-danger' value='cofnij' onClick='wybierz()'></p>";
}

function wsadz(name,number){
odpowiedzi.splice(number, 1, name);

}
function sprawdz(){
	var poprawna;
	var punkty=0;
	for(var x in kartkowka){
		if(odpowiedzi[x]===''){
			alert('uzupełnij odpowiedzi');
			break;
		}
		else{
			if(odpowiedzi[x]===kartkowka[x][1]){
				punkty++;
			}else{
				poprawna+='<div class="alert alert-danger">odpowiedziałeś <strong>'+odpowiedzi[x]+'</strong>, a poprawną odpowiedzią jest <strong>'+kartkowka[x][1]+'</strong></div>';
			}
			
		}
	if(x>18){
		punkty=(punkty/20)*100;
	document.getElementById("centrum").innerHTML= "Zdybyłeś "+punkty+"% z kartkówki<br /><input type='button' class='btn btn-primary' value='jeszcze raz' onClick='kartkowkazadanie()'><input type='button' class='btn btn-primary' value='wróć' onClick='wybierz()'>";}
}}

function napisz(){

	var ilosc=window.slowka.length;
	var slowo=Math.floor(Math.random() * ilosc);
	document.getElementById("tytul").innerHTML = "<div class='row, text-center'><h1>Przetłumacz podane słowo</h1>";
	document.getElementById("centrum").innerHTML = "<h1>"+slowka[slowo][0]+"</h1><input type='text'  class='form-control' id='odp' onchange='elo(value,\""+slowka[slowo][1]+"\")'  autofocus> <div id='odpowiedz' class='row, text-center'></div><input type='button' class='btn btn-primary' value='wróć' onClick='wybierz()'></div>";
}
function elo(element,odpowiedz){
	var ilosc=window.slowka.length;
	var slowo=Math.floor(Math.random() * ilosc);
	if(!window.lacznie){
	window.dobrze=0;
	window.lacznie=0;
	}
			if (element===odpowiedz){
		dobrze++;
		lacznie++;
	}else{
		lacznie++;
	}
	document.getElementById("centrum").innerHTML = "<h1>"+slowka[slowo][0]+"</h1><input type='text'  class='form-control' id='odp' onchange='elo(value,\""+slowka[slowo][1]+"\")'  autofocus> <div id='odpowiedz' class='row, text-center, alert alert-info'></div><input type='button' class='btn btn-primary' value='wróć' onClick='wybierz()'><div class='progress'><div class='progress-bar bg-success' role='progressbar' style='width: "+(dobrze/lacznie)*100+"%' aria-valuenow='"+(dobrze/lacznie)*100+"' aria-valuemin='0' aria-valuemax='100'>"+Math.round((dobrze/lacznie)*100)+"%</div></div><div class='row, text-center'>masz "+dobrze+" z "+lacznie+" punktów</div>";
				if (element===odpowiedz){
		document.getElementById("odpowiedz").innerHTML="Brawo! Dobra robota!";
	}else{
		document.getElementById("odpowiedz").innerHTML="słabo! Poprawna odpowiedz to <br />"+odpowiedz;
	}
document.getElementById("odp").focus();
}
function jeden(i,y){
	var petla="<div id='naalert' class='alert alert-danger'></div><table id='tabeleczka' class='table table-info table-striped'><thead><tr><th>Polskie</th><th>Angielskie</th></tr></thead><tbody>";

	for(i=i;i<y;i++) {
	petla+="<tr id='test-me"+i+"'><td>"+slowka[i][0]+"</td><td><input id=wpisywaczka"+i+" type='text' value='' class='alert float-right' onchange='sprawdzslowo("+i+")' /></td></tr>";
}
			petla+="</tbody></table>";
		document.getElementById("tytul").innerHTML = "<h1>Słówka </h1>";
document.getElementById("centrum").innerHTML ="<div id='tabela' class='row'></div><input type='button' class='btn btn-primary' value='cofnij' onClick='wybierz()' />";
document.getElementById("tabela").innerHTML=petla;
if(!window.racja){

    window.racja=0;
   }
	
}
function sprawdzslowo(i){
var el=document.getElementById("test-me"+i);
var wpis=document.getElementById("wpisywaczka"+i);
var slowo=slowka[i][1];

	if(wpis.value === slowo){
	el.className = 'table-success';
    racja++;
	}else{
	niewiem(i);
    racja=0;
	}
if(racja===10){
	jeden(i+1,i+11);
window.racja=0;
	}
}
function niewiem(i){
	var slowo=slowka[i][1];
	var czyszczenie=Math.round(i/10);
for(x=i;x<=i+9;x++){
	document.getElementById('aplikacja').scrollIntoView({block: 'start', behavior: 'smooth'});
	 document.getElementById('naalert').style.visibility = 'visible';
	document.getElementById("naalert").innerHTML="poprawna odpowiedź to <strong>"+slowo+"</strong>";
}
	
	for(z=czyszczenie;z<=czyszczenie+9;z++){
	document.getElementById("wpisywaczka"+z).value="";
}
}
function odnowa(){
	
	if(!window.slowo){
	window.slowo=0;
	}
	document.getElementById("tytul").innerHTML = "<div class='row, text-center'><h1>Przetłumacz podane słowo</h1>";
	document.getElementById("centrum").innerHTML = "<h1>"+slowka[slowo][0]+"</h1><input type='text'  class='form-control' id='odp' onchange='lecimy(value,\""+slowka[slowo][1]+"\")'  autofocus> <div id='odpowiedz' class='row, text-center'></div><input type='button' class='btn btn-primary' value='wróć' onClick='wybierz()'></div>";
}
function lecimy(element,odpowiedz){
	if(!window.slowo){
	window.slowo=0;
	}
	if (element===odpowiedz){
		slowo++;
	}else{
		slowo=0;
	}
	document.getElementById("tytul").innerHTML = "<div class='row, text-center'><h1>Przetłumacz podane słowo</h1>";
	document.getElementById("centrum").innerHTML = "<h1>"+slowka[slowo][0]+"</h1><input type='text'  class='form-control' id='odp' onchange='lecimy(value,\""+slowka[slowo][1]+"\")'  autofocus> <div id='odpowiedz' class='row, text-center alert alert-info'></div><input type='button' class='btn btn-primary' value='wróć' onClick='wybierz()'></div>";
			if (element===odpowiedz){
		document.getElementById("odpowiedz").innerHTML="Brawo! Dobra robota!";
	}else{
		document.getElementById("odpowiedz").innerHTML="słabo! Poprawna odpowiedz to <br />"+odpowiedz;
	}
	document.getElementById("odp").focus();
}
