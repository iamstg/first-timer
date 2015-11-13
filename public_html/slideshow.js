var Image = new Array("harrypotter.jpg","secretseven.jpg","famousfive.jpg","agathachristie.jpg","chetan1.jpg","chetan2.jpg","chetan3.jpeg","chetan4.jpg","chetan5.jpg","chetan6.jpg","chetan7.jpg","secret.jpg","sherlockholmes.jpg","testofmylife.jpg","playingitmyway.jpg");

var Description = new Array("Harrypotter is the first and one of my favourite novel","secret seven is a great adventure novel","famous five too is one of the interesting adventure novels","Agatha Christie's book is a mystery and detective based book","A Chetan Bhagat book on what young India wants","Story of his marriage by Chetan Bhagat","A story of Love,corruption and Ambition"," A int'l bestseller","A thrilling and abrilliant read","One of my personal favourites","A self-introspecting book","One of the best life guides"," A thrilling breath-taking series of books","An inspiration from the life of Yuvraj Singh"," A Glimpse into the life of my Hero");

var Image_Number = 0;
var Image_Length = Image.length - 1;

function change_image(num){

	Image_Number = Image_Number + num;

	if (Image_Number > Image_Length){
		// sends from last image to first
		Image_Number = 0;
	}

	if (Image_Number <0){
		//sends from first to last image
		Image_Number = Image_Length;
	}

	document.slideshow.src= Image[Image_Number];
	document.getElementById("description").innerHTML = Description[Image_Number];
	return false;
}

function auto(){
	setInterval("change_image(1)", 5000);
}
