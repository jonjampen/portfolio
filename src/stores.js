import { writable } from "svelte/store";

// export const theme = writable("dark");
export const theme = (typeof window !== 'undefined') ? writable(localStorage.getItem("theme") || "dark") : writable("dark");

if (typeof window !== 'undefined') {
    theme.subscribe(val => localStorage.setItem("theme", val));
}