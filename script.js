
function format(unit) {
	return (unit<10)?'0'+unit:unit;
}

function upDateTime() {
	const n=new Date();
	// console.log(now);
	const year=n.getFullYear();
	const month=format(n.getMonth()+1);
	const day=format(n.getDate());

	let hours=n.getHours();
	const minutes=format(n.getMinutes());
	const seconds=format(n.getSeconds());

	const ampm=(hours>=12)?"PM":"AM";
	hours=hours%12;
	hours=hours?hours:12;

	const time=`${month}/${day}/${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
	
	document.getElementById("timer").textContent=time;
}
setInterval(upDateTime,1000);
upDateTime();

