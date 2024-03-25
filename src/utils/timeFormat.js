export function calcSeconds(timeString) {
	const [min, sec] = timeString.split(":").map((item) => parseInt(item));
	return min * 60 + sec;
}

export function calcTimeFormated(seconds) {
	seconds = parseInt(seconds);
	let min = parseInt(seconds / 60);
	const sec = seconds % 60;
	const hrs = parseInt(min / 60);
	min = min % 60;

	let timeString = "";
	if (hrs) timeString += hrs.toString() + (hrs > 1 ? " hrs " : " hr  ");
	timeString += (hrs ? min.toString().padStart(2, '0') : min.toString()) + (min > 1 ? " mins  " : " min  ");
	if (sec) timeString += sec.toString().padStart(2, '0') + (sec > 1 ? " secs  " : " sec  ");
	return timeString;
}