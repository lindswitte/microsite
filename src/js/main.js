console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

console.dir(TweenMax);

// declaring a new TweenMax function
// Header Animation

const headerToAnimation = TweenMax.to(
	//target
	'.header-scroll',
	// duration 
	1, 
	//vars
	{
		x: "100px"
	}
);

const headerFromAnimation = TweenMax.from(
	//target
	'.header-scroll',
	// duration 
	1, 
	//vars
	{
		x: "100px",
		delay: .5,
	}
);


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
)

shoeAnimation.to(
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




















/* const staggeredHeaders = TweenMax.staggerFrom(
	'.header-scroll',  
	0.5,
	{x:'-=100%'},
	0.5
);*/
