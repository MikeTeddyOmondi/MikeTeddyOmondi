/* ===================================================================
 * Mail script
 *
 * Author: MikeTeddyOmondi
 * ------------------------------------------------------------------- */
//

function saveToGoogleSheet() {
	var email = document.getElementById("mc-email").value;
	var url =
		"https://script.google.com/macros/s/AKfycbwlJd66uBen8fjpIvf7UqMpDoMElboI6_ZDTZOZQkRhYCq80JxhTcAJEXweVWQoN7Pf/exec";
	// AKfycbwlJd66uBen8fjpIvf7UqMpDoMElboI6_ZDTZOZQkRhYCq80JxhTcAJEXweVWQoN7Pf
	// https://script.google.com/macros/s/AKfycbwlJd66uBen8fjpIvf7UqMpDoMElboI6_ZDTZOZQkRhYCq80JxhTcAJEXweVWQoN7Pf/exec

	// var request = new XMLHttpRequest();
	// request.open("POST", url, true);
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	// request.send("email=" + email);

	async function postData(data) {
		try {
			const response = await fetch(url, {
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				},
			});
			console.log({ response });
		} catch (error) {
			console.log({ error });
		}
	}

	postData(email);
	document.getElementById("mc-email").value = "";
}
