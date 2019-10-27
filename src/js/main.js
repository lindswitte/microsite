console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

console.dir(TweenMax);

// Header Animation

const headerAnimation = new TimelineMax();
let headerObject = document.querySelector('.header-scroll');

console.dir(headerObject);

let originalPOS = {}
	originalPOS.x = headerObject.style.x;
	originalPOS.y = headerObject.style.y;

headerAnimation.to(
	headerObject,
	// duration 
	1, 
	//vars
	{
		x: "-200px",
		y: "-10px"
	}
).to(
	headerObject,
	// duration 
	1, 
	//vars
	{
		x: "200px",
		y: "10px"
	}
).to(
	headerObject,
	// duration 
	1, 
	//vars
	{
		x: "-200px",
		y: "10px"
	}
).to(
	headerObject,
	// duration 
	1, 
	//vars
	{
		x: originalPOS.x,
		y: originalPOS.y
	}
)

// .to(
// 	headerObject,
// 	// duration 
// 	1, 
// 	//vars
// 	{
// 		x: "200px",
// 		y: "-10px"
// 	}
// );
// TRANSFORM ORIGIN -100, 360 ROTATION





// const headerAnimation = new TimelineMax();

// const headerToAnimation = TweenMax.to(
// 	//target
// 	'.header-scroll',
// 	// duration 
// 	1, 
// 	//vars
// 	{
// 		x: "100px",
// 		y: "50px"
// 	}
// );

// const headerFromAnimation = TweenMax.from(
// 	//target
// 	'.header-scroll',
// 	// duration 
// 	1, 
// 	//vars
// 	{
// 		x: "100px",
// 		y: "-50px",
// 		delay: 1
// 	}
// );


// Shoe Animation
const shoeAnimation = new TimelineMax();

shoeAnimation.staggerTo(
	'.shoe-container',
	//target
	// duration 
	1, 
	//vars
	{
		x: "+=300px",
	},
	0.2
).to(
	'.shoe-container',
	// duration 
	1, 
	//vars
	{
		x: "-=300px",
	}
	
);

// Footer Animation
const footerFromAnimation = TweenMax.from(
	//target
	'.footer',
	// duration 
	1, 
	//vars
	{
		y: "100px",
		delay: .5
	}
);

const footerToAnimation = TweenMax.to(
	//target
	'.footer',
	// duration 
	1, 
	//vars
	{
		y: "100px"
	}
);













// declaring a new TimelineMax function

// const headerAnimation = new TimelineMax();

// headerAnimation
// 	.to(
// 	// target
// 	".header-scroll",
// 	//duration
// 	1,
// 	//vars
// 	{
// 		x:"-=100px"
// 	}
// ).to(
// 	// target
// 	".header-scroll",
// 	//duration
// 	1,
// 	//vars
// 	{
// 		x:"+=100px"
// 	}
// )

// const shoeAnimation = TweenMax();

// shoeAnimation
// 	.reverse(
// 	".shoe-container",
// 	4,
// 	{
// 		x:"10px",
// 	}

// );

// // const footerAnimation = new TimelineMax();

// // footerAnimation.yoyo(true).repeat(3).timeScale(2).play(0.5);













