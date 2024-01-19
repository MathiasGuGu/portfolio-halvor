import { subjects } from "$lib/data.js";

export function load() {
  return {
    summaries: subjects.map((subject) => ({
      title: subject.title,
      projectNr: subject.projectNr,
      slug: subject.slug,
      intro: subject.intro,
      cover: subject.cover,
      info: subject.info,
      content: subject.content,
      otherContent: subject.otherContent,
      second: subject.second
    }))
  }
}