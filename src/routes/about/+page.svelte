<script>
	import Button from './../../components/ui/Button.svelte';
	import PageTitle from '../../components/ui/PageTitle.svelte';
	import PageSubTitle from '../../components/ui/PageSubTitle.svelte';
	import Paragraph from '../../components/ui/Paragraph.svelte';
	import EducationItem from '../../components/EducationItem.svelte';
	import Label from '../../components/ui/Label.svelte';
</script>

<PageTitle>About Me</PageTitle>
<PageSubTitle class="mb-6">I write code and create websites</PageSubTitle>
<Paragraph>
	Hey, I'm Jon Jampen, an 18-year-old programming enthusiast. Since the age of 12 I’ve been
	fascinated by the world of computer science. Ever since, I’ve taught myself different parts of
	computer science, starting with basic web dev, moving on the JavaScript, and then to frameworks
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
	<br /> <br />
	If you're interested in collaboration, discussions, or simply connecting with a fellow enthusiast,
	feel free to get in touch or explore my projects.
	<br /> <br />
	Jon
</Paragraph>

<PageSubTitle class="mb-6 mt-16">EDUCATION</PageSubTitle>
<EducationItem title="Matura" date="2019 - 2023">
	Major: Physics and applied Mathematics
	<br />
	Supplementary Subject: Computer Science
</EducationItem>

<PageSubTitle class="mb-6 mt-16" id="contact">CONTACT</PageSubTitle>
<form action="" method="POST" class="flex flex-col items-start justify-start gap-8 w-[500px] max-w-full">
	<Label>Name
		<small class="text-error">String must contain at least 1 character</small>
		<input type="text" class="px-3 rounded-lg bg-card focus:border-primary h-10 w-full placeholder:text-gray" placeholder="John Doe">
	</Label>
	<Label>Email
		<small class="text-error">String must contain at least 1 character</small>
		<input type="email" name="" id="" class="px-3 rounded-lg bg-card h-10 w-full placeholder:text-gray" placeholder="john@doe.ch">
	</Label>
	<Label>Message
		<small class="text-error">String must contain at least 1 character</small>
		<textarea name="" id="" rows="10" class="px-3 py-3 rounded-lg bg-card w-full placeholder:text-gray" placeholder="My message here..."></textarea>
	</Label>
	<Button styleType="primary" type="submit">Send Message</Button>
</form>