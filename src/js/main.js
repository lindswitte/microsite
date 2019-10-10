console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

console.dir(TweenMax);

/* let header = document.querySelectorAll('.header-scroll') */

/* console.log(header); */

/* let headerAnimation = TweenMax.fromTo(
	".header-scroll",
	0.5,
	{x: '-=100%'},
	{x: '+=100%'}
); */

/* let headerAnimation = TweenMax.from(
	".header-scroll",
	0.5,
	{x: '-=100%'}

); */


const staggeredHeaders = TweenMax.staggerFrom(
	'.header-scroll',
	0.5,
	{x:'-=100%'},
	0.5
);

let yoyo = shoes.yoyo();

TweenMax.to(mc, 1, {x:100, repeat:1, yoyo:true});

console.log('potato')