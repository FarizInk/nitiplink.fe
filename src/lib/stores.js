import { writable } from 'svelte/store';

export const theme = writable('light');
export const token = writable(null);
export const modals = writable([]);