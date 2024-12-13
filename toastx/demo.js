let demo_toastX_progress_bars = [
"default", "toastx-stripes-bar", "toastx-flashing-bar", "toastx-shine-bar", "toastx-blocks-bar", "toastx-rainbow-bar"
]; 

let demo_toastX_icons = [
"success", "error", "info", "warning"
];

let demo_toastX_flat_types = [
	// flat colors
    "default", "success", "error", "info", "warning"
];

let demo_toastX_gradient_types = [

    // Reds and Pinks
    "red", "rosy", "pink", "coral", "peach",

    // Oranges and Browns
    "orange", "amber", "brown", "chocolate", "khaki", 

    // Yellows and Golds
    "gold", "yellow", "lime", 

    // Greens
    "spearmint", "emerald", "green", "grass", "olive", "teal",

    // Blues and Cyans
    "blue", "skyblue", "cyan", "navy",

    // Purples
    "indigo", "violet", "plum",

    // Grays, Blacks, and Whites
    "gray", "silver", "white", "black"
	
];

let demo_toastX_diagonal_gradient_types = [
    // Blues and Aquas
    "ocean", "aqua", "sea", "lane",

    // Greens and Nature-Inspired
    "salad", "sawanna", "gooey", "cucumber",

    // Yellows and Golds
    "mellow", "cactus", "mango", "wagon",

    // Reds and Warm Tones
    "disco", "mimosa", "fresco",

    // Purples and Lilacs
    "lilly", "xmas", "moon", "night"

    // Mixed and Unique Blends
    
];


let demo_toastX_animations = [
    // common
    "fade", "slide", "reveal", "wiggle", "blur", "zoom",

    // using 3d
    "flipx", "flipy", "flipz",

    // using 3d
    "flipxz", "flipyz", "circle"
    
];

		// Array of positions
		let demo_toastX_positions = [
			'top-left', 'top-center', 'top-right',
			'center-left', 'center-center', 'center-right',
			'bottom-left', 'bottom-center', 'bottom-right',
		];

// Function to sequentially display toasts, with the toast type array as a parameter
function showNextToast(toastTypes, xtraClass='', index = 0) {
    if (index < toastTypes.length) {
        let position = "bottom-left"; // Default position

        if (index >= 10 && index < 20) {
            position = "bottom-center";
        } else if (index >= 20) {
            position = "bottom-right";
        }

        $.toastX('I am toast of <i>type</i> <b>' + toastTypes[index] + '</b>!', {
            duration: 120*1000, // 1 hour for demo purpose
            type: toastTypes[index],
            additionalClass: xtraClass,
            position: position // Dynamically set position
        });

        setTimeout(() => showNextToast(toastTypes, xtraClass, index + 1), 100); // Delay before the next toast
    }
}


function demo_create_animation_buttons(){
var xhtml = '';
for(var i=0; i<demo_toastX_animations.length; i++){
const anim = demo_toastX_animations[i];
xhtml = xhtml+'<button onclick="demo_run_animation(\''+anim+'\')" id="example6-'+anim+'-button">'+anim+'</button> ';
}
$('#demo-animations').html(xhtml);
}

function demo_run_animation(anim){ 
$.toastX.removeAll();
for(var i=0; i<demo_toastX_positions.length; i++){
// Randomly select a gradient type
const randomType = demo_toastX_gradient_types[Math.floor(Math.random() * demo_toastX_gradient_types.length)];
const pos = demo_toastX_positions[i];
$.toastX('This toast should appear with <b>'+anim+'</b> effect and <b>'+anim+'-close</b> class when closing.', {animation:anim, type:randomType, duration:5000, position:pos});
}
}

function demo_create_progress_bar_buttons(){
var xhtml = '';
for(var i=0; i<demo_toastX_progress_bars.length; i++){
const anim = demo_toastX_progress_bars[i];
xhtml = xhtml+'<button onclick="demo_run_progress_bar(\''+anim+'\')" id="example4-'+i+'-button">'+anim+'</button> ';
}
$('#demo-progress-bars').html(xhtml);
}


function demo_run_progress_bar(anim){ 
$.toastX.removeAll();
for(var i=0; i<demo_toastX_flat_types.length; i++){
const xtype = demo_toastX_flat_types[i];
$.toastX('This toast should appear with <b>'+anim+'</b> progress bar class.', {type:xtype, duration:5000, progressBarClass:anim});
}
}



jQuery(document).ready(function ($) {
	
    hljs.highlightAll();
	
	demo_create_animation_buttons();
	demo_create_progress_bar_buttons();

    // Example 1a
    $('#example1a-button').click(function () {
        $.toastX('<b>Damn!</b> I am toast. I mean literally!!');
    });
	
	// Example 1b
    $('#example1b-button').click(function () {
        $.toastX('I am a custom duration toast set to timeout in 8 seconds.', {
			duration: 8000
		});
    });
	
	// Example 1c
    $('#example1c-button').click(function () {
		$.toastX.removeAll();
		$.toastX('This is a toast with <b>info</b> icon!', {duration:5000, icon:'info'});
		$.toastX('This is a toast with <b>error</b> icon! It also contains another line of text.', {duration:7000, icon:'error'});
		$.toastX('This is a toast with <b>warning</b> icon! It contains another 2 lines of text. This is last line.', {duration:9000, icon:'warning'});
		$.toastX('This is a toast with <b>success</b> icon! It contains another 3 lines of text. This is done to make sure you can get the idea how text more than icon height will behave. This is last line.', {duration:15000, icon:'success'});
    });
	
	// Example 2a
    $('#example2a-button').click(function () {
		$.toastX.removeAll();
        showNextToast(demo_toastX_flat_types);
    });
	
	// Example 2b
    $('#example2b-button').click(function () {
		$.toastX.removeAll();
        showNextToast(demo_toastX_gradient_types);
    });
	
	// Example 2c
    $('#example2c-button').click(function () {
		$.toastX.removeAll();
        showNextToast(demo_toastX_diagonal_gradient_types);
    });
	
	// Example 3a
    $('#example3a-button').click(function () {
		$.toastX.removeAll();
        $.toastX('<b>Great!</b> my borders are 1x thick!', {additionalClass:'border-1x', type:'orange'});
		$.toastX('<b>Great!</b> my borders are 2x thick!', {additionalClass:'border-2x', type:'rosy'});
		$.toastX('<b>Great!</b> my borders are 3x thick!', {additionalClass:'border-3x', type:'sea'});
		$.toastX('<b>Great!</b> my borders are 4x thick!', {additionalClass:'border-4x', type:'peach'});
    });
	
	// Example 3b
    $('#example3b-button').click(function () {
		$.toastX.removeAll();
        showNextToast(demo_toastX_gradient_types, 'round');
    });
	
	// Example 3c
    $('#example3c-button').click(function () {
		$.toastX.removeAll();
        $.toastX('<b>Yay!</b> I am paused until i die!!', {additionalClass:'pausedx', duration:9000, type:'red'});
    });
	
	// Example 3d
    $('#example3d-button').click(function () {
		$.toastX.removeAll();
        $.toastX('<b>Yup!</b> I am in depth!', {additionalClass:'depth', type:'orange'});
    });
	
	// Example 3e
    $('#example3e-button').click(function () {
		$.toastX.removeAll();
        showNextToast(demo_toastX_diagonal_gradient_types, 'movebg');
    });
	
	// Example 3f
    $('#example3f-button').click(function () {
		$.toastX.removeAll();
        $.toastX('Class movebg moves backgrounds!', {additionalClass:'movebg depth round', type:'disco'});
    });
	
	// Example 3g
    $('#example3g-button').click(function () {
		$.toastX.removeAll();
        $.toastX('<b>Great!</b> my corners are 1x curved!', {additionalClass:'curved-1x', type:'red'});
		$.toastX('<b>Great!</b> my corners are 2x curved!', {additionalClass:'curved-2x', type:'grass'});
		$.toastX('<b>Great!</b> my corners are 4x curved!', {additionalClass:'curved-4x', type:'gold'});
		$.toastX('<b>Great!</b> my corners are 6x curved!', {additionalClass:'curved-6x', type:'teal'});
    });
	
	// Example 3h
    $('#example3h-button').click(function () {
		$.toastX.removeAll();
        $.toastX('My borders are 1x thick and 4x curved!', {progressBarClass:'toastx-animated-bar', additionalClass:'border-1x curved-4x', type:'orange'});
		$.toastX('My borders are 4x thick and 4x curved!', {additionalClass:'border-4x curved-2x', type:'indigo'});
    });

    // Example 4c Handle button click
    $('#applyColorButton').click(function () {
		$.toastX.removeAll();
		const chosenColor = $('#colorPicker').val(); // Get selected color
		for(var i=0; i<demo_toastX_progress_bars.length; i++){
			const randomType = demo_toastX_gradient_types[Math.floor(Math.random() * demo_toastX_gradient_types.length)];
			const xtype = demo_toastX_progress_bars[i];
			$.toastX('This is a toast with a custom progress bar color <b>'+chosenColor+'</b> and random type!', {type:randomType, duration:5000, progressBarClass:xtype, progressBarColor: chosenColor, position:'bottom-right'});
		}
    });
	
	// Example 5
    $('#example5-button').click(function () {
		$.toastX.removeAll();
		

		// Iterate through positions and display toast at each one
		demo_toastX_positions.forEach(position => {
			
			// Randomly select a gradient type
			const randomType = demo_toastX_gradient_types[Math.floor(Math.random() * demo_toastX_gradient_types.length)];
		
			$.toastX('This toast is displayed at position <b>'+position+'</b>', {
				position: position,
				type: randomType, 
				duration: 30000
			});
		});
    });
	
	
	// Example 7
    $('#example7-button').click(function () {
		$.toastX('Toast with all callbacks!', {
			onBeforeCreate: function() {
				alert('onBeforeCreate: Getting ready to create toast.');
			},
			onCreate: function() {
				alert('onCreate: Toast is created and will be visible after this.');
			},
			onBeforeClose: function() {
				alert('onBeforeClose: Toast is about to close.');
			},
			onClose: function() {
				alert('onClose: Toast will be removed after this.');
			}
		, type:'warning'});
    });
	
	
});
