import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
});

export const load = (async () => {
    const form = await superValidate(schema);

    return { form };
});

async function sendForm(form) {
    return await fetch('https://projects.jonjampen.ch/mail/sendMail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            name: form.data.name,
            email: form.data.email,
            message: form.data.message,
        }),
    });
}

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, schema);

        if (!form.valid) {
            return message(form, 'Invalid form');
        }

        let response = await sendForm(form);

        if (!response.ok) {
            return message(form, 'Email could not be sent. Try again or send an email directly to hello@jonjampen.ch. Thanks.', {
                status: 403
            });
            // form.errors = { general: ["Email could not be sent. Try again or send an email directly to hello@jonjampen.ch. Thanks."] }
            // return fail(500, { form })
        }

        return message(form, "Message successfully sent! You will receive a confirmation email shortly.");
    }
};