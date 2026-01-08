// Shared content for Daniel Martin's personal site.

window.SITE_DATA = {
  name: 'Daniel Martin',
  intro: [
    "Hi, I'm Daniel. I'm interested in physics, software, game design, and fundamental questions.",
    "After switching from making games and software to physics at 15, I left it a decade later after a sports injury. Nowadays, I work on startups and anything else that interests me.",
  ],
  contact: [
    { label: 'Email',    href: 'mailto:hello@danielgmartin.com' },
    { label: 'Twitter',  href: 'https://twitter.com/' },
    { label: 'GitHub',   href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
  sections: [
    {
      id: 'startups',
      title: 'Startups',
      items: [
        {
          title: 'DearMP',
          href: '#',
          thumb: 'dearmp',
          caption: 'Helping UK constituents write better letters to their MP.',
        },
      ],
    },
    {
      id: 'physics',
      title: 'Physics',
      items: [
        {
          title: 'Grabby Aliens',
          href: 'https://grabbyaliens.com/',
          thumb: 'grabby',
          caption: 'A model of expansionist alien civilisations, with Robin Hanson and others. Predicts where and when we should expect to meet them.',
        },
        {
          title: 'Black hole physics',
          href: 'https://arxiv.org/',
          thumb: 'blackhole',
          caption: 'Two papers on accretion physics, both on arXiv: <a href="https://arxiv.org/">paper I</a> and <a href="https://arxiv.org/">paper II</a>.',
        },
      ],
    },
    {
      id: 'games',
      title: 'Game Design',
      items: [
        {
          title: 'Cerys, Moon of Fulgora',
          href: 'https://mods.factorio.com/mod/Cerys-Moon-of-Fulgora',
          thumb: 'cerys',
          caption: 'A <a href="https://mods.factorio.com/mod/Cerys-Moon-of-Fulgora">Factorio mod</a> that adds a new moon with nuclear reactors, ice cracking, and cryogenic logistics.',
        },
        {
          title: 'The Foundry',
          href: 'https://foundrygg.com/',
          thumb: 'foundry',
          caption: 'A community for game developers at <a href="https://foundrygg.com/">foundrygg.com</a>, where I occasionally write — most recently on <a href="https://foundrygg.com/">2D terrain generation</a>.',
        },
        {
          title: 'Kamigawa Cube',
          href: '#',
          thumb: 'kamigawa',
          caption: 'A 540-card Magic: The Gathering cube drafted around the Kamigawa block.',
        },
      ],
    },
    {
      id: 'philosophy',
      title: 'Philosophy',
      items: [
        {
          title: 'ConjectureCon',
          href: '#',
          thumb: 'conjecturecon',
          caption: 'A small invite-only conference on speculative ideas, run yearly.',
        },
        {
          title: 'Podcast appearances',
          href: '#',
          thumb: 'podcasts',
          caption: 'Conversations on physics, games, and adjacent topics.',
        },
      ],
    },
    {
      id: 'small',
      title: 'Small things',
      items: [
        {
          title: 'gpt-4o-mini commentary macro',
          href: '#',
          thumb: 'macro',
          caption: 'A Keyboard Maestro macro that pops up a short LLM commentary on whatever text you have selected.',
        },
        {
          title: 'Mathematica packages',
          href: '#',
          thumb: 'mathematica',
          caption: 'Assorted notebooks and packages, mostly numerical relativity helpers.',
        },
      ],
    },
  ],
};
