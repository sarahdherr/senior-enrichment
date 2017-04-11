const kitties = [
	"http://weknowyourdreams.com/images/kitten/kitten-07.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/b5/f6/fa/b5f6faebcc4a5fadd7888033e2a68639.jpg",
	"http://dreamatico.com/data_images/kitten/kitten-2.jpg",
	"http://dreamatico.com/data_images/kitten/kitten-8.jpg",
	"http://www.ldoceonline.com/media/english/illustration/kitten.jpg",
	"https://www.royalcanin.com/~/media/Royal-Canin/Content/sacred-birman-kitten.ashx",
	"https://s-media-cache-ak0.pinimg.com/736x/e5/0a/a7/e50aa75ca28265b5cc69f92c055e6ee4.jpg",
	"http://www.warrenphotographic.co.uk/photography/bigs/10753-British-shorthair-red-tabby-kitten-miaowing-white-background.jpg",
	"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQarF2Rb16ZvM-iBgS3p9pGYDyhvTyhmw5GXwkepbDzS6J_TFxJ",
	"https://www.valleyvet.com/images/worming-your-kitten.png",
	"http://media.istockphoto.com/photos/kitten-on-a-white-background-picture-id511458158?k=6&m=511458158&s=170667a&w=0&h=YS27-I0nj5x89iDRUZ2YxE77hEghPb0HNCWwPCrMmn8=",
	"https://s-media-cache-ak0.pinimg.com/736x/62/26/9c/62269c9bb6312f35247579865d895a33.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/72/3f/cc/723fcc66750c81cab46137fe22fc956e.jpg",
	"http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-9-57b30aa5797eb__605.jpg",
	"https://s-media-cache-ak0.pinimg.com/564x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg",
	"http://www.recreoviral.com/wp-content/uploads/2016/02/Corby-el-gato-con-el-delineado-perfecto-10.jpg",
	"http://www.tehcute.com/pics/201109/bow-tie-kitten.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/08/f1/58/08f1589a0227edde0adf71b8caf424cf.jpg",
	"https://usercontent2.hubstatic.com/923031_f520.jpg",
	"https://ichef-1.bbci.co.uk/news/624/cpsprodpb/6011/production/_85539542_paella1-plscreditcplibrary.jpg",
	"https://previews.123rf.com/images/cherrymerry/cherrymerry1305/cherrymerry130500082/19938929-beautiful-cute-20-days-old-small-kitten-standing-Stock-Photo-cat-kitten-kittens.jpg",
	"https://ichef-1.bbci.co.uk/news/624/cpsprodpb/579D/production/_89292422_bellini2.png"
];

export function generateRandomKitty() {
	return kitties[Math.floor(Math.random() * kitties.length)]
}

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function generateNumSequence(num) {
	var result = "";
	for (var i = 0; i < num; i++) {
		result += nums[ Math.floor(Math.random() * nums.length) ]
	}
	return result;
}
// TODO
export function generateRandomPortal() {
	var final = [];
	final.push(generateNumSequence(4))
	final.push(generateNumSequence(4))
	final.push(generateNumSequence(2))

	return final.join('-')
}

const planets = [
	"http://vignette1.wikia.nocookie.net/clubpenguin/images/a/a9/Beta_Team_Solar_System_Game_Over_Planet.png/revision/latest?cb=20130108130216",
	"http://images.clipartpanda.com/planet-clip-art-venus.png",
	"https://pbs.twimg.com/profile_images/2263292962/Mars_One_fingerprint_400x400.png",
	"http://www.clipartkid.com/images/4/clipartlord-com-exclusive-this-planet-mars-clip-art-is-great-for-use-ZgU6RE-clipart.png",
	"http://static.tumblr.com/b6115dd4f2cb50ab160c6d11624fba48/igo8fp8/i1Mo5v891/tumblr_static_8hx6kg053yg4wo0sswoc84c8s.png",
	"https://cdn.pixabay.com/photo/2014/03/24/17/21/earth-295479_960_720.png",
	"http://theadventuresofmadisonmars.com/theme/Mars/images/space-obj/planet-neptun.png",
	"http://img01.deviantart.net/38e3/i/2010/266/c/4/planet_neptune_png_by_ravenmaddartwork-d2zaxdm.png",
	"http://www.clker.com/cliparts/a/a/b/4/11949897221119624095jupiter_dan_gerhards_01.svg",
	"http://images.clipshrine.com/download/wheel/large-Remix-of-cartoon-red-planet-66.6-47506.png",
	"https://www.hscripts.com/freeimages/icons/download.php?fname=earth-planet-clipart4.gif&&fpath=symbols/planets/earth-planet/128/",
	"https://1001freedownloads.s3.amazonaws.com/vector/thumb/129905/rg1024_Moon_in_comic_style.png",
	"https://cdn.pixabay.com/photo/2012/04/01/17/14/earth-23593_640.png",
	"http://theadventuresofmadisonmars.com/theme/Mars/images/space-obj/planet-neptun.png",
	"http://pre15.deviantart.net/4655/th/pre/i/2010/266/c/4/planet_neptune_png_by_ravenmaddartwork-d2zaxdm.png"
];

export function generateRandomPlanet() {
	return planets[Math.floor(Math.random() * planets.length)]
}