$(document).ready(function(){
	var ctx = $("#mycanvas").get(0).getContext("2d");

	var data = [
		{
			value: 50,
			color: "cornflowerblue",
			highlight: "lightskyblue",
			label: "TV"
		},
		{
			value: 60,
			color: "lightgreen",
			highlight: "yellowgreen",
			label: "Washer"
		},
		{
			value: 80,
			color: "orange",
			highlight: "darkorange",
			label: "Refrigerator"
		},
		{
			value: 100,
			color: "orange",
			highlight: "darkorange",
			label: "Selling Fan"
		}
	];

	var chart = new Chart(ctx).Doughnut(data);
});