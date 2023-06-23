<script>
	import { onMount } from 'svelte';
	let name,
		email,
		message,
		nameClass = 'valid',
		emailClass = 'valid',
		messageClass = 'valid',
		disabled = true,
		title = 'Please fill out all fields';

	$: name ? (nameClass = 'valid') : (nameClass = '');
	$: email && email.includes('@') ? (emailClass = 'valid') : (emailClass = '');
	$: message ? (messageClass = 'valid') : (messageClass = '');

	$: nameClass == 'valid' && emailClass == 'valid' && messageClass == 'valid'
		? ((disabled = false), (title = 'send message'))
		: ((disabled = true), (title = 'Please fill out all fields'));
</script>

<section class="contactForm">
	<h2>Contact</h2>
	<h6>asdf</h6>
	<form action="">
		<input type="text" name="name" id="nameField" bind:value={name} class={nameClass} />
		<input type="email" name="email" id="emailField" bind:value={email} class={emailClass} />
		<textarea name="message" id="messageField" bind:value={message} class={messageClass} />
		<button class="primary" {disabled} {title}>Send</button>
	</form>
</section>
