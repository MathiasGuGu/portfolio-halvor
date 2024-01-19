import { error } from "@sveltejs/kit";
import { subjects } from "$lib/data.js";

export function load({ params }) {
  const subject = subjects.find((subject) => subject.slug === params.slug);

  if (!subject) throw error(404);
  return {
    subject
  }
}