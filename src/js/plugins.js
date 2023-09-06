/* ===================================================================
 * Mail script
 *
 * Author: MikeTeddyOmondi
 * ------------------------------------------------------------------- */
//

// https://script.google.com/macros/s/AKfycbwx6rxe5Q6Xeuw7uV0TZwMFZqgNBqi6rJAxLqz6TZKzEM1zJepjAkZZ6LubzH4ijq4/exec

function saveToGoogleSheet() {
  var email = document.getElementById("mc-email").value;
  var url =
    "https://script.google.com/macros/s/AKfycbwx6rxe5Q6Xeuw7uV0TZwMFZqgNBqi6rJAxLqz6TZKzEM1zJepjAkZZ6LubzH4ijq4/exec";

  async function postData(data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
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
