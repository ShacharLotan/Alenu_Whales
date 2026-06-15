import yaml from 'js-yaml';

// Load every markdown file in src/content/rir as raw text at build time.
// Adding a file via Decap (folder collection) automatically shows up here on rebuild.
const modules = import.meta.glob('../content/rir/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function parse(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw.trim() };
  return { data: yaml.load(m[1]) || {}, body: m[2].trim() };
}

function readingMinutes(body) {
  const words = String(body).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export const articles = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '');
    const { data, body } = parse(raw);
    return { slug, body, readingTime: readingMinutes(body), ...data };
  })
  // Newest first
  .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

const MONTHS = [
  'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
  'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר',
];

export function formatDate(date) {
  if (!date) return '';
  const m = String(date).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return String(date);
  const month = MONTHS[parseInt(m[2], 10) - 1] || '';
  return `${month} ${m[1]}`;
}
