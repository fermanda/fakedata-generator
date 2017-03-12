function getFirstName(){
	var name = ["Abu", "Andi", "Annisa", "Budi", "Bagus", "Claudia", "Clara", "Dias", "Dika", "Dwi",
				"Estiana", "Endah", "Faris", "Faizal", "Firza", "Furqon", "Ganang", "Gala", "Haru", "Hasan",
				"Ihsan", "Intan", "Irma", "Joko", "Jaka", "Kemal", "Kartika", "Kurnia", "Lucky", "Lestari",
				"Mirza", "Muhammad", "Maria", "Novita", "Nugroho", "Nanda", "Nurul", "Oman", "Putra", "Putri", "Putu",
				"Qashmal", "Restu", "Restiana", "Ramadhani", "Rizky", "Rizal", "Rama", "Sultan", "Simon", "Sandy",
				"Teuku", "Tania", "Ubaidillah", "Vera", "Vanice", "Wahyu", "Widya", "Xaverius", "Yeyen", "Yeni", "Zainal",
				];
	var x = Math.round( Math.random() * (name.length -1));
	return name[x];
}

function getSecondName(){
	var name = ["Abu", "Andi", "Annisa", "Budi", "Bagus", "Claudia", "Clara", "Dias", "Dika", "Dwi",
				"Estiana", "Endah", "Faris", "Faizal", "Firza", "Furqon", "Ganang", "Gala", "Haru", "Hasan",
				"Ihsan", "Intan", "Irma", "Joko", "Jaka", "Kemal", "Kartika", "Kurnia", "Lucky", "Lestari",
				"Mirza", "Muhammad", "Maria", "Novita", "Nugroho", "Nanda", "Nurul", "Oman", "Putra", "Putri", "Putu",
				"Qashmal", "Restu", "Restiana", "Ramadhani", "Rizky", "Rizal", "Rama", "Sultan", "Simon", "Sandy",
				"Teuku", "Tania", "Ubaidillah", "Vera", "Vanice", "Wahyu", "Widya", "Xaverius", "Yeyen", "Yeni", "Zainal",
				];
	var x = Math.round( Math.random() * (name.length -1));
	return name[x];
}

function getFullName(){
	var name = getFirstName() + " " + getSecondName();
	return name;
}

function getCity(){
	var city = ["Pekalongan", "Lamongan", "Cilegon", "Surabaya", "Bandung", "Jakarta", "Malang",
				"Jombang", "Madiun", "Bogor", "Tangerang", "Samarinda", "Palu", "Denpasar",
				"Jogjakarta", "Semarang", "Kediri", "Banten", "Depok", "Makassar", "Medan",
				];
	var x = Math.round( Math.random() * (city.length -1));
	return city[x];
}

function getUserMail(){
	var user = ["deragon", "abubububu", "jack", "budi", "user", "admin", "bswtzd", "semprul", "bukanemailsaya", "salahkirim",
				"awasemailpalsu", "spam", "mlmpenipuan", "halopolisi", "admin", "lolihunter", "mamamuda", "dibutuhkanpacar",
				"cintaindonesia", "1n1em41lquh", "l0phy0u", "user", "admin", "kotakamal", "rezekianaksoleh", "susilobukanyudhoyono",
				"istighfar", "semuaakanindahpadawaktunya", "user", "admin", "kebanyakanmicin",
				];
	var x = Math.round( Math.random() * (user.length -1));
	return user[x];
}

function getDomainMail(){
	var domName = ["hotmail", "hotpants", "rocketmail", "rocketscience", "mycampus", "mycompany", "gemail",
				"hospitalizer", "yahaaaa", "bang", "redtude", "hentaixxx", "facebull", "tuiters", "insto",
				"iklangratis", "korespondensi", "telekomunikasi",
				];
	var x = Math.round( Math.random() * (domName.length -1));
	return domName[x];
}

function getDomain(){
	var domID = ["go.id", "id", "com", "org", "org.id", "ck", "net", "au", "io", "info", 
				]
	var x = Math.round( Math.random() * (domID.length -1));
	return domID[x];
}

function getMailAddress(){
	var mailAddress = getUserMail() + "@" + getDomainMail() + "." + getDomain();
	return mailAddress;
}

function generateData(){
	var request = document.getElementById("req").value;
	var requestData = "<a>[";
	for(i=0; i < request; i++){
		requestData += '("id":' + (i+1) + ',';
		requestData += '"name":"' + getFullName() + '",';
		requestData += '"city":"' + getCity() + '",';
		requestData += '"email":"' + getMailAddress() + '")'
		if (i < (request-1)) requestData += ',';
	}
	var requestData = "]</a>";

	document.getElementById("result").innerHTML = requestData;
}