export interface ProjectItem {
  title: string
  href: string
  /** Short id used as a placeholder label until a real image is supplied. */
  thumb: string
  /** Caption text. May contain inline <a> HTML — rendered with set:html. */
  caption: string
  /** Optional real image path. When set, replaces the striped placeholder. */
  src?: string
  /** How the thumbnail image fits its box. Defaults to 'cover'. */
  fit?: 'cover' | 'contain'
}

export interface SiteSection {
  id: string
  title: string
  items: ProjectItem[]
}

export interface ContactLink {
  label: string
  href: string
}

export interface Site {
  name: string
  intro: string[]
  contact: ContactLink[]
  sections: SiteSection[]
}

const site: Site = {
  name: 'Daniel Martin',
  intro: [
    "Hi, I'm Daniel. I'm interested in physics, software, game design, and much besides. My online projects are below.",
  ],
  contact: [
    { label: 'Email', href: 'mailto:contact@danielgmartin.com' },
    { label: 'X', href: 'https://x.com/DanGMartin1' },
    { label: 'GitHub', href: 'https://github.com/danielmartin0' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-g-martin/' },
  ],
  sections: [
    {
      id: 'startups',
      title: 'Startups',
      items: [
        {
          title: 'DearMP',
          href: 'https://dearmp.uk/',
          thumb: 'dearmp',
          src: '/thumbnails/dearmp_logo.jpeg',
          caption: 'Better Case Management Software for UK MP offices to organize incoming mail from their constituents.',
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
          src: '/thumbnails/grabby.png',
          caption:
            'How to calculate the spacetime distribution of alien civilisations in the universe. Coauthored with Robin Hanson et al.',
        },
        {
          title: 'Black hole physics',
          href: 'https://arxiv.org/abs/1905.00398',
          thumb: 'blackhole',
          src: '/thumbnails/arxiv.png',
          caption:
            'Papers on the holographic relation between black holes and condensed matter physics: <a href="https://arxiv.org/abs/1905.00398">Paper I</a>, <a href="https://arxiv.org/abs/1906.03132">Paper II</a>.',
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
          src: 'https://raw.githubusercontent.com/danielmartin0/Cerys-Moon-of-Fulgora/main/thumbnail.png',
          caption:
            'The player awakens a long-dead civilization\'s machinery in this popular planet mod for Factorio.',
        },
        {
          title: 'The Foundry',
          href: 'https://foundrygg.com/',
          thumb: 'foundry',
          src: '/thumbnails/foundry.png',
          fit: 'contain',
          caption:
            'I write, edit & mentor at a community dedicated to Factorio modding. For example, see this article on <a href="https://www.foundrygg.com/blog/terrain">2D terrain generation</a>.',
        },
        {
          title: 'Sharpied Kamigawa',
          href: 'https://cubecobra.com/cube/about/kamigawa_block_revisited?view=primer',
          thumb: 'kamigawa',
          src: '/thumbnails/kamigawa.jpg',
          caption:
            'A revamped version of Magic the Gathering\'s Japanese-mythology draft environment.',
        },
      ],
    },
    {
      id: 'philosophy',
      title: 'Rationality',
      items: [
        {
          title: 'Conjecture Conference Europe',
          href: 'https://www.conconeurope.com/',
          thumb: 'conjecturecon',
          src: '/thumbnails/cceurope.png',
          caption:
            'I organize a public conference for critical rationalism. You can watch my <a href="https://youtube.com/watch?v=YGeNzpZ5Va4">interview with David Deutsch</a>.',
        },
        {
          title: 'Podcast interviews',
          href: 'https://www.youtube.com/watch?v=IBc1oVXen-o',
          thumb: 'podcasts',
          src: '/thumbnails/robin.png',
          caption: 'Robin Hanson, David Deutsch and I discuss <a href="https://www.youtube.com/watch?v=IBc1oVXen-o">Predicting the future</a> and the <a href="https://www.youtube.com/watch?v=7zUQBs-ju6w">Evolution of culture</a>.',
        },
      ],
    },
    {
      id: 'small',
      title: 'Minor',
      items: [
        {
          title: 'Diff, Weyl and Conf (.pdf)',
          href: '/slides/Diff,%20Weyl%20and%20Conf.pdf',
          thumb: 'diff-weyl-conf',
          src: '/thumbnails/PDF_file_icon.svg',
          fit: 'contain',
          caption:
            'A long review talk on diffeomorphisms, Weyl transformations, conformal transformations.',
        },
        {
          title: 'Advanced Mathematica for Theoretical Physics (.nb)',
          href: '/slides/Advanced%20Mathematica%20for%20Theoretical%20Physics.nb',
          thumb: 'mathematica',
          src: '/thumbnails/Mathematica_Logo.svg',
          fit: 'contain',
          caption:
            'Notebook slides for a talk on Mathematica.',
        },
        {
          title: 'SpeakLaTeX',
          href: 'https://github.com/danielmartin0/SpeakLaTeX',
          thumb: 'speaklatex',
          src: '/thumbnails/speaklatex.png',
          caption:
            'Once upon a time, unable to write due to a sports injury, I made a state of the art program for dictating math equations into a computer.',
        },
      ],
    },
  ],
}

export default site
