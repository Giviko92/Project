var names=new Array();
names[0]="Giviko"
names[1]="John"
names[2]="Jason"
names[3]="jimmy"
names[4]="jonathan"
names[5]="michael"
names[6]="alex"
names[7]="rodrigo"
names[8]="gustavo"
names[9]="Guga"


for (var i = 0; i < names.length; i++){
	if (names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
       console.log("Goodbye" + names[i])
	}
	else{
		console.log("Hello" + names [i])
	}
	
} 

