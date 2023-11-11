import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
});

export const load = (async () => {
    const form = await superValidate(schema);
    return {
        form: form,
        meta: {
            title: 'About Jon Jampen',
            description: "I'm Jon Jampen, an 18-year-old programming enthusiast. Since the age of 12 I’ve been fascinated by the world of computer science. Now, I enjoy building websites and learning new technologies.",
            keywords: "Jon Jampen, programming, coding, computer science, web development, portfolio, website, personal website, contact, about, about me, education, JavaScript, Svelte, React, NextJs, SvelteKit, frontend frameworks, matura project, Chronic Fatigue Syndrome app, portfolio, university, coding projects",
            canonical: "/about",
            image: "/avatar/happy.png"
        }
    };
});

async function sendForm(form) {
    return await fetch('https://projects.jonjampen.ch/mail/sendMail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            name: form.name,
            email: form.email,
            message: form.message,
        }),
    });
}

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, schema);

        if (!form.valid) {
            return message(form, { text: 'Invalid form data, please try again.', status: "error" });
        }

        let response = await sendForm(form.data);
        if (!response.ok) {
            return message(form, { text: 'Email could not be sent. Try again or send an email directly to hello@jonjampen.ch. Thanks!', status: "error" }, {
                status: 403
            });
        }

        return message(form, { text: "Message successfully sent! You will receive a confirmation email shortly.", status: "success" });
    }
};