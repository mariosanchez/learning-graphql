const beers = [
  {
    id: 1,
    name: 'Gamma Ray',
    picture: 'https://res.cloudinary.com/ratebeer/image/upload/w_120,c_limit/beer_189363.jpg',
    brewery: {
      name: 'Beavertown Brewery',
      location: {
        city: 'Tottenham',
        country: {
          id: 'en',
          name: 'England',
          icon: 'England.png'
        }
      }
    },
    style: 'American Pale Ale',
    glass: [{ name: 'Lager glass' }, { name: 'Shaker' }, { name: 'Tulip' }],
    ibu: 44,
    abv: 5.4,
    description:
      'Believe it or not, we had never brewed a pale ale when we started. But once our experimental Alpha Series was launched around 6 months in, we went about constructing the Pale of our dreams. We tweaked malts and hops continuously and eventually came to release a brew known as Gamma Ray. This name came from our Creative Director Nick Dwyer, Who at that time was working on the floor at Duke’s Brew and Que. Nick brought illustrations in every week. It was undeniable, the guy was a force and his imagery resonated deep. We all loved spacemen and lasers – again, simple. So we named the experimental brew Gamma Ray and Nick drew the design - drawing heavily from “mars attacks” and warren ellis graphic novels. Our baby was born. From its release Gamma was perfection for us and joined the Beaver core range. The concept was to create a juicy tropical beer. A brew you can sit on and drink all day, rammed with juicy malts and huge tropical aromas of mango and grapefruit. Massive additions of whole leaf American hops are added in ever increasing numbers at the end of the boil giving huge hop flavour. The beer is then dry hopped for days, driving the punchy aromas so you can smell it from miles away!'
  },
  {
    id: 2,
    name: 'Mangofeber',
    picture: 'https://res.cloudinary.com/ratebeer/image/upload/w_120,c_limit/beer_297901.jpg',
    brewery: {
      name: 'Brewski',
      location: {
        city: 'Helsingborg',
        country: {
          id: 'sw',
          name: 'Sweden',
          icon: 'Sweden.png'
        }
      }
    },
    style: 'Imperial IPA',
    glass: [{ name: 'Shaker' }, { name: 'Snifter' }],
    ibu: null,
    abv: 8,
    description:
      'Frukten har omfamnats av Amarillo och Mosaic under fermenteringsprocessen. Vi vill dedikera detta øl till Jens Lynge Larsen på Spybrew i Køpenhamn. Brewski riktar även ett stort tack till Tybell, Jannik, Wilcox, Leif & Werner, Shulga & Bjørk, Mankerpågarna, Beersweden och Fabrikøren. Vi vet vad ni gjort för oss. Tack vänner!'
  },
  {
    id: 3,
    name: 'Sandokan',
    picture: 'https://res.cloudinary.com/ratebeer/image/upload/w_120,c_limit/beer_466607.jpg',
    brewery: {
      name: 'Naparbier',
      location: {
        city: 'Noain',
        country: {
          id: 'es',
          name: 'Spain',
          icon: 'Spain.png'
        }
      }
    },
    style: 'Double IPA',
    glass: [{ name: 'Shaker' }, { name: 'Snifter' }],
    ibu: 100,
    abv: 8,
    description: 'Sandokan es fuerte, aventurero , intrépido...Sandokan es un Pirata'
  },
  {
    id: 4,
    name: 'Muscles',
    picture: 'https://res.cloudinary.com/ratebeer/image/upload/w_120,c_limit/beer_421344.jpg',
    brewery: {
      name: 'O/O',
      location: {
        city: 'Göteborg',
        country: {
          id: 'sw',
          name: 'Sweden',
          icon: 'Sweden.png'
        }
      }
    },
    style: 'Imperial IPA',
    glass: [{ name: 'Shaker' }, { name: 'Snifter' }],
    ibu: null,
    abv: 8.2,
    description:
      'Believe it or not, we had never brewed a pale ale when we started. But once our experimental Alpha Series was launched around 6 months in, we went about constructing the Pale of our dreams. We tweaked malts and hops continuously and eventually came to release a brew known as Gamma Ray. This name came from our Creative Director Nick Dwyer, Who at that time was working on the floor at Duke’s Brew and Que. Nick brought illustrations in every week. It was undeniable, the guy was a force and his imagery resonated deep. We all loved spacemen and lasers – again, simple. So we named the experimental brew Gamma Ray and Nick drew the design - drawing heavily from “mars attacks” and warren ellis graphic novels. Our baby was born. From its release Gamma was perfection for us and joined the Beaver core range. The concept was to create a juicy tropical beer. A brew you can sit on and drink all day, rammed with juicy malts and huge tropical aromas of mango and grapefruit. Massive additions of whole leaf American hops are added in ever increasing numbers at the end of the boil giving huge hop flavour. The beer is then dry hopped for days, driving the punchy aromas so you can smell it from miles away!'
  }
];

module.exports = beers;
