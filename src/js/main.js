console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

console.dir(TweenMax);

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
).from(
	// target
	".header-scroll",
	//duration
	1,
	//vars
	{
		x:"100px"
	}
)























/* const staggeredHeaders = TweenMax.staggerFrom(
	'.header-scroll',  
	0.5,
	{x:'-=100%'},
	0.5
);*/
