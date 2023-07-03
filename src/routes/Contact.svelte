<script>
	let name,
		email,
		message,
		nameClass = 'valid',
		emailClass = 'valid',
		messageClass = 'valid',
		disabled = true,
		title = 'Please fill out all fields',
		preclick = true;

	$: name || preclick ? (nameClass = 'valid') : (nameClass = '');
	$: (email && email.includes('@') && email.includes('.')) || preclick
		? (emailClass = 'valid')
		: (emailClass = '');
	$: message || preclick ? (messageClass = 'valid') : (messageClass = '');

	$: nameClass == 'valid' && emailClass == 'valid' && messageClass == 'valid' && !preclick
		? ((disabled = false), (title = 'send message'))
		: ((disabled = true), (title = 'Please fill out all fields'));

	function changeInput(e) {
		preclick = false;
	}
</script>

<section class="contactForm" id="contact">
	<h2>Contact</h2>
	<h6>asdf</h6>
	<form action="">
		<input
			type="text"
			name="name"
			id="nameField"
			bind:value={name}
			class={nameClass}
			on:keyup={changeInput}
		/>
		<input
			type="email"
			name="email"
			id="emailField"
			bind:value={email}
			class={emailClass}
			on:keyup={changeInput}
		/>
		<textarea
			name="message"
			id="messageField"
			bind:value={message}
			class={messageClass}
			on:keyup={changeInput}
		/>
		<button class="primary" {disabled} {title}>Send</button>
	</form>
</section>
