/* ===================================================================
 * Mail script
 *
 * Author: MikeTeddyOmondi
 * ------------------------------------------------------------------- */
//

// https://script.google.com/macros/s/AKfycbyRlxMHkJGFn0-d6VpKWJFNdZxrydsZ7f2j9kaKngR4flPK3DpwZO9v-78hHMQ-inz3/exec

function saveToGoogleSheet() {
  var email = document.getElementById("mc-email").value;
  var url =
    "https://script.google.com/macros/s/AKfycbyRlxMHkJGFn0-d6VpKWJFNdZxrydsZ7f2j9kaKngR4flPK3DpwZO9v-78hHMQ-inz3/exec";

  async function postData(data) {
    try {
      const response = await fetch(url, {
        body: data,
        method: "POST",
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
