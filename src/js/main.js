console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

console.dir(TweenMax);

const headerAnimation = TweenMax.to('.header-scroll', 1, { // object
	x: "100px" // key 
});



/* const staggeredHeaders = TweenMax.staggerFrom( //object
	'.header-scroll',  // key
	0.5,
	{x:'-=100%'},
	0.5
);*/
