import { getLinks, saveLinks } from './feed-manager.mjs';

const feeds = await getLinks();

feeds.push('http://wwww.tutsplus.com');

await saveLinks(feeds);