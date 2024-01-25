async function login() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	// Make a POST request to the login endpoint
	try {
		const response = await fetch("https://dummyjson.com/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});

		if (response.ok) {
			const data = await response.json();
			// Assuming the server responds with a token in the 'token' field
			const token = data.token;

			// You can handle the token as needed, for example, store it in local storage
			// and redirect the user to the home page
			localStorage.setItem("token", token);

			// Redirect to the home page
			// window.location = "home.html";
			window.location.replace("/login/home.html");
			// window.location.replace("/home.html");
		} else {
			// Handle login failure, show an error message, etc.
			alert("Login failed. Please check your credentials.");
		}
	} catch (error) {
		console.error("Error during login:", error);
		alert("An error occurred. Please try again.");
	}
}
