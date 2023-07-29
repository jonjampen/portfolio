<script>
	// form validation
	let nameCheck = false,
		emailCheck = false,
		messageCheck = false,
		nameDisplay = 'none',
		emailDisplay = 'none',
		messageDisplay = 'none',
		buttonState = true,
		buttonTitle = 'Please fill out all fields';

	function validateName(e) {
		nameDisplay = 'block';
		nameCheck = e.target.value ? true : false;
	}

	function validateMail(e) {
		emailDisplay = 'block';
		var atPos = e.target.value.indexOf('@');
		var dotPos = e.target.value.lastIndexOf('.');
		emailCheck =
			atPos > 0 && dotPos > atPos + 1 && dotPos < e.target.value.length - 1 ? true : false;
	}

	function validateMessage(e) {
		messageDisplay = 'block';
		messageCheck = e.target.value ? true : false;
	}

	$: if (nameCheck && emailCheck && messageCheck) {
		console.log('asdf');
		buttonTitle = 'Send message';
		buttonState = false;
	} else {
		buttonTitle = 'Please fill out all fields';
		buttonState = true;
	}
</script>

<section class="contactForm" id="contact">
	<h2>Contact</h2>
	<h6>Get in touch with me👋</h6>
	<form>
		<div class="inputLabel">
			<label for="name">Name</label>
			<div class="validation">
				<input type="text" name="name" id="nameInput" on:keyup={validateName} required />
				<img
					src="/icons/{nameCheck ? 'check' : 'close'}.svg"
					class="{nameCheck ? '' : 'red'} center"
					style="display: {nameDisplay}"
				/>
			</div>
		</div>
		<div class="inputLabel">
			<label for="email">Email</label>
			<div class="validation">
				<input type="text" name="email" id="emailInput" on:keyup={validateMail} required />
				<img
					src="/icons/{emailCheck ? 'check' : 'close'}.svg"
					class="{emailCheck ? '' : 'red'} center"
					style="display: {emailDisplay}"
				/>
			</div>
		</div>

		<div class="inputLabel">
			<label for="message">Message</label>
			<div class="validation">
				<textarea name="message" id="messageInput" on:keyup={validateMessage} required />
				<img
					src="/icons/{messageCheck ? 'check' : 'close'}.svg"
					class="{messageCheck ? '' : 'red'} bottom"
					style="display: {messageDisplay}"
				/>
			</div>
		</div>
		<button class="btn primary" type="submit" disabled={buttonState} title={buttonTitle}
			>Send</button
		>
	</form>
</section>
