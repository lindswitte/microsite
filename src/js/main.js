console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

console.dir(TweenMax);

// declaring a new TweenMax function

// const headerToAnimation = TweenMax.to(
// 	//target
// 	'.header-scroll',
// 	// duration 
// 	1, 
// 	//vars
// 	{
// 		x: "100px"
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
// 		delay: 2
// 	}
// );



// declaring a new TimelineMax function

const headerAnimation = new TimelineMax();

headerAnimation
	.to(
	// target
	".header-scroll",
	//duration
	1,
	//vars
	{
		x:"100px"
	}
).to(
	// target
	".header-scroll",
	//duration
	1,
	//vars
	{
		x:"0"
	}
)

const shoeAnimation = new TimelineMax();

shoeAnimation
	.to(
			// target
		".shoe-container",
		//duration
		1,
		//vars
		{
			x:"100px"
		}
	).from(
		// target
		".shoe-container",
		//duration
		1,
		//vars
		{
			x:"0",
			delay: 2
		}
	)

const footerAnimation = footerAnimation.yoyo();

footerAnimation
	.yoyo(true);




















/* const staggeredHeaders = TweenMax.staggerFrom(
	'.header-scroll',  
	0.5,
	{x:'-=100%'},
	0.5
);*/
