// JavaScript Document
window.onload=function(){
	var button=document.getElementById('push');
	if(button.addEventListener){
		button.addEventListener('click',myAlert,false);
	}else if(button.attachEvent){
		button.attachEvent('onClick',myAlert);
	}
	
	function myAlert(){
		alert('click!');
	}
}