// const growth = +prompt("Укажите Ваш рост в метрах","");
// const weight = +prompt("Укажите Ваш вес в килограммах", "");

// alert(`У Вас лишний вес: ${weight / (growth*growth) > 28}`);


let pushButtonclick = document.addEventListener("click", function(e){
	if(e.target.className == "getResult"){
		start();
	}
}); 


function start(){

	const user = {
		age: null,
		weight: null,
		height: null,
		index: null,
		characteriseOfIndex: null,
		colorWrapper:null,
		"ageUp26":[17.5,19.5,23,27.5,30,35,40],
		"ageAfter26":[18,20,26,28,31,36,41],
		showResult: function() {
			if (this.characteriseOfIndex !=""){
				resultWrapper.textContent = `У Вас ${this.characteriseOfIndex}`;
			}
		},
		checkInput: function(userClassName,parametr) {
			this.removeClassInvalid(userClassName);
			if (+userClassName['value'] > 0) {
				 user[parametr] = +userClassName['value'];
			}else {
				userClassName.classList.add('invalid');
			}
		},
		removeClassInvalid: function (userClassName) {
			if (userClassName.classList.contains("invalid")) {
				userClassName.classList.remove("invalid");
			}
		},
		getIndex: function(){
			this.index = +this.weight / (this.height**2);
		},
		checkIndex: function(){
			let i;
			if (this.age < 26){
				i = this["ageUp26"];
			}else {
				i = this["ageAfter26"];
			}

			if (this.index < i[0]){
				this.characteriseOfIndex = "недостаточный вес, опасно для здоровья";
				this.color = "red";
			}else if(this.index < i[1]){
				this.characteriseOfIndex = "вес слегка снижен, неопасно для здоровья";
				this.color = "orange";
			}else if(this.index < i[2]){
				this.characteriseOfIndex = "вес нормальный";
				this.color = "green";
			}else if(this.index < i[3]){
				this.characteriseOfIndex = "вес излишний";
				this.color = "orange";
			}else if(this.index < i[4]){
				this.characteriseOfIndex = "ожирение 1 степени";
				this.color = "red";
			}else if(this.index < i[5]){
				this.characteriseOfIndex = "ожирение 2 степени";
				this.color = "red";
			}else if(this.index < i[6]){
				this.characteriseOfIndex = "ожирение 3 степени";
				this.color = "red";
			}else{
				this.characteriseOfIndex = "ожирение 4 степени";
				this.color = "red";
			}
		},
		AddColor: function(){
			if (resultWrapper.classList.contains("red")) {
				resultWrapper.classList.remove("red");
			}else if(resultWrapper.classList.contains("orange")){
				resultWrapper.classList.remove("orange");
			}else if(resultWrapper.classList.contains("green")){
				resultWrapper.classList.remove("green");
			}


			if(this.color == "red"){
				resultWrapper.classList.add('red');
			}else if(this.color == "orange"){
				resultWrapper.classList.add('orange');
			}else{
				resultWrapper.classList.add('green');
			}
		},
	};

	const resultWrapper = document.querySelector(".resultWrapper");
	const classHeight = document.querySelector(".userHeight");
	const classWeight = document.querySelector(".userWeigth");
	const classAge = document.querySelector(".userAge");

	user.checkInput(classHeight,"height");
	user.checkInput(classWeight,"weight");
	user.checkInput(classAge,"age");
	user.getIndex();
	user.checkIndex();
	user.AddColor();
	user.showResult();
}





