import { error } from '@sveltejs/kit';
import { getLocale } from '$lib/paraglide/runtime';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;
  const locale = getLocale();

  // Dynamically query all markdown files under src/lib/projects
  const modules = import.meta.glob('/src/lib/projects/**/*.md');

  // Try loading the file for the active locale first
  let path = `/src/lib/projects/${locale}/${slug}.md`;
  if (!modules[path]) {
    // Fall back to English
    path = `/src/lib/projects/en/${slug}.md`;
  }

  if (!modules[path]) {
    throw error(404, `Project "${slug}" not found.`);
  }

  const resolver = modules[path];
  const project = await resolver() as any;

  return {
    content: project.default,
    metadata: project.metadata
  };
};
