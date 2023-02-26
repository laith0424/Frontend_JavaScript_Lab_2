$(document).ready(function() {
	$("#quiz-form").submit(function(e) {
		e.preventDefault();

		// Validate name and email inputs
		var name = $("#name").val();
		var email = $("#email").val();
		var nameRegex = /^[a-zA-Z\s]*$/; // Only allow letters and spaces in name
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
		var isValid = true;

		if (!name || !nameRegex.test(name)) {
			$("#name").addClass("error");
			isValid = false;
		} else {
			$("#name").removeClass("error");
		}

		if (!email || !emailRegex.test(email)) {
			$("#email").addClass("error");
			isValid = false;
		} else {
			$("#email").removeClass("error");
		}

		// Validate quiz questions
		var q1 = $("input[name='q1']:checked").val();
		var q2a = $("#q2-a:checked").length > 0;
		var q2b = $("#q2-b:checked").length > 0;
		var q2c = $("#q2-c:checked").length > 0;
		var q2d = $("#q2-d:checked").length > 0;
		var q3 = $("#q3").val();

		if (!q1) {
			$("input[name='q1']").addClass("error");
			isValid = false;
		} else {
			$("input[name='q1']").removeClass("error");
		}

		if (!q2a && !q2b && !q2c && !q2d) {
			$("#q2-a").addClass("error");
			isValid = false;
		} else {
			$("#q2-a").removeClass("error");
		}

		if (!q3) {
			$("#q3").addClass("error");
			isValid = false;
		} else {
			$("#q3").removeClass("error");
		}

		// Display quiz results or errors
		if (isValid) {
			var score = 0;

			// Calculate score based on correct answers
			if (q1 === "a") {
				score += 1;
			}
			if (q2b && q2c && !q2a && !q2d) {
				score += 1;
			}
			if (q3.toLowerCase() === "rome") {
				score += 1;
			}

			// Display score
			$("#score").text("Your score is " + score + "/3.");
			$("#result").show();
	
		} else {
			alert("Please fill out all required fields.");
		}
	});
});
