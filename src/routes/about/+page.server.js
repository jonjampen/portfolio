import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { VITE_BASE_URL } from '$env/static/private';

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
    console.log(form.data.name, form.data.email, form.data.message);
    return await fetch(VITE_BASE_URL + '/sendMail.php', {
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
        console.log('POST', form);

        if (!form.valid) {
            console.log("invalid form")
            return message(form, 'Invalid form');
        }

        let response = await sendForm(form);
        console.log(response)
        console.log(response.ok)
        if (!response.ok) {
            console.log("mail error")
            return message(form, 'Email could not be sent. Try again or send an email directly to hello@jonjampen.ch. Thanks.', {
                status: 403
            });
            // form.errors = { general: ["Email could not be sent. Try again or send an email directly to hello@jonjampen.ch. Thanks."] }
            // return fail(500, { form })
        }

        console.log("all good")
        return message(form, "Message successfully sent! You will receive a confirmation email shortly.");
    }
};