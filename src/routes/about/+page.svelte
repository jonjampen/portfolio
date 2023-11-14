<script>
	import Button from './../../components/ui/Button.svelte';
	import PageTitle from '../../components/ui/PageTitle.svelte';
	import PageSubTitle from '../../components/ui/PageSubTitle.svelte';
	import Paragraph from '../../components/ui/Paragraph.svelte';
	import EducationItem from '../../components/EducationItem.svelte';
	import Label from '../../components/ui/Label.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import SEO from '../../components/SEO.svelte';
	import TechStack from '../../components/TechStack.svelte';

	export let data;

	// Client API:
	const { form, message, errors, constraints } = superForm(data.form);
</script>

<SEO meta={data.meta} type="homepage"/>

<PageTitle>About Me</PageTitle>
<PageSubTitle class="mb-6">I write code and create websites</PageSubTitle>
<Paragraph>
	Hey, I'm Jon Jampen, an 18-year-old programming enthusiast. Since the age of 12 I’ve been
	fascinated by the world of computer science. Ever since, I’ve taught myself different parts of
	computer science, starting with basic web dev, moving on to JavaScript, and then to frameworks
	like Svelte, React, and NextJs. Over the years I constantly pursued this hobby in my free time,
	working on projects and enhancing my knowledge.
	<br /> <br />
	In the last year of my matura, I had the opportunity to choose computer science as a supplementary
	subject. This opened the door to frontend frameworks, where I've been exploring technologies like SvelteKit
	and working on real projects.
	<br /> <br />
	One of my most meaningful projects was my matura project, where I developed an app for people dealing
	with Chronic Fatigue Syndrome. This project is still a work in progress, and I'm dedicated to improving
	and enhancing it.
	<br /> <br />
	With my matura completed this year, I'm eagerly looking ahead to studying computer science at university.
	I can't wait to discover more aspects of this field.

</Paragraph>

<TechStack/>


<PageSubTitle class="mb-6 mt-16">EDUCATION</PageSubTitle>
<EducationItem title="Matura" date="2019 - 2023">
	Major: Physics and applied Mathematics
	<br />
	Supplementary Subject: Computer Science
</EducationItem>

<PageSubTitle class="mb-6 mt-16" id="contact">CONTACT</PageSubTitle>

<form action="/about#contact" method="POST" class="flex flex-col items-start justify-start gap-8 w-[500px] max-w-full">
	{#if $message}
		<span class="text-error {$message.status}">{$message.text}</span>
	{/if}
	<Label>Name
		{#if $errors.name}<small class="text-error">{$errors.name}</small>{/if}
		<input
		type="text"
		name="name"
		aria-invalid={$errors.name ? 'true' : undefined}
		bind:value={$form.name}
		{...$constraints.name}
		class="px-3 rounded-lg bg-card focus:border-primary h-10 w-full placeholder:text-gray"
		placeholder="John Doe"
		>
	</Label>
	<Label>Email
		{#if $errors.email}<small class="text-error">{$errors.email}</small>{/if}
		<input
			type="email"
			name="email"
			aria-invalid={$errors.email ? 'true' : undefined}
			bind:value={$form.email}
			{...$constraints.email}
			class="px-3 rounded-lg bg-card h-10 w-full placeholder:text-gray"
			placeholder="john@doe.ch"
		>
		</Label>
		<Label>Message
		{#if $errors.message}<small class="text-error">{$errors.message}</small>{/if}
		<textarea
		name="message"
		aria-invalid={$errors.message ? 'true' : undefined}
		bind:value={$form.message}
		{...$constraints.message}
		class="px-3 py-3 rounded-lg bg-card w-full min-h-[150px] placeholder:text-gray"
		placeholder="My message here..."
		></textarea>
	</Label>
	<Button styleType="primary" type="submit">Send Message</Button>
</form>

<style>
	.success {
		color: var(--primary);
	}
	.error {
		color: var(--error);
	}
</style>