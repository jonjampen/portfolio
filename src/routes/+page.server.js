import { WAKATIME_API } from '$env/static/private'

export async function load() {
    const apiKey = WAKATIME_API;
    const base64ApiKey = Buffer.from(apiKey).toString('base64');

    let url = `https://wakatime.com/api/v1/users/current/heartbeats?date=2023-11-20`;
    let wakatime = {
        language: "",
        type: "",
        time: "",
        totaltime: "",
    };

    // fetch last codings session
    await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${base64ApiKey}`,
        },
    })
        .then(response => response.json())
        .then(data => {
            let sorted = data.data.sort((a, b) => b.time - a.time);
            wakatime.language = sorted[0].language;
            wakatime.type = sorted[0].category;
            wakatime.time = Math.floor(sorted[0].time * 1000);
        })
        .catch(error => console.error('Error:', error));

    // fetch total coding time
    url = `https://wakatime.com/api/v1/users/current/all_time_since_today`;
    await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${base64ApiKey}`,
        },
    })
        .then(response => response.json())
        .then(data => {
            wakatime.totaltime = data.data.text;
        })
        .catch(error => console.error('Error:', error));


    return {
        wakatime: wakatime.language ? wakatime : false,
        meta: {
            title: 'Jon Jampen | Coding enthusiast',
            description: "I'm Jon Jampen, an 18-year-old programming enthusiast. Since the age of 12 I’ve been fascinated by the world of computer science. Now, I enjoy building websites and learning new technologies.",
            keywords: "Jon Jampen, programming, coding, computer science, web development, portfolio, website, personal website, JavaScript, Svelte, React, NextJs, SvelteKit, frontend frameworks, matura project, Chronic Fatigue Syndrome app, portfolio, university, coding projects",
            canonical: "",
            image: "/avatar/happy.png"
        }
    };
}