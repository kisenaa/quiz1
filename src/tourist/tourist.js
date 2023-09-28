// Function to modify the titles and paragraphs
const updateContent = (imageId) => {
  // Define a map to associate image IDs with corresponding titles and paragraphs
  const contentMap = {
    ragunan: {
      title: 'Ragunan',
      paragraph1:
        'Wildlife and nature lovers must head to the Ragunan Zoo which is spread over a whopping 185 hectares of land and boasts of over 3,600 species unlike other zoos around the world. Some of the fauna that you can spot here include orangutans and Komodo Dragons',
      paragraph2:
        'This zoo is also home to animals from other parts of the world, as well as some indigenous flowers and plants that are sure to bewitch you with their beauty !',
    },
    tamanmini: {
      title: 'Taman Mini Indonesia Park',
      paragraph1:
        'Want to explore the history and culture of Indonesian people? Then Taman Mini Indonesia Park is a must visit place for you. The park has a spread of 250 acres and is full of heritage and traditions that make Indonesia stand out from the crowd.',
      paragraph2:
        'This huge park is considered one of the best places to visit in Jakarta in one day not only for the tourists but also for the locals. There is a detailed miniature of the archipelago of Indonesia and much more.',
    },
    museum: {
      title: 'National Museum of Indonesia',
      paragraph1:
        'It is located close to Merdeka Square and is amongst the top places to visit in Jakarta Indonesia. The museum has an amazing collection of artifacts which gives a detailed perspective on the history and cultural heritage of Indonesia. ',
      paragraph2:
        'You will find the Hindu-Buddhist artwork of the building and the treasure room with amazing gold artifacts will leave you in a state of awe. The collection of ancient ceramics and prehistoric finds will leave you mesmerized.',
    },
    thousandisland: {
      title: ' Thousand Islands',
      paragraph1:
        'Looking for a break from Jakartas fast life? Then a thousand Islands are best suited for you. Located on the north coast of the city these islands will give you an opportunity to feel closer to nature. ',
      paragraph2:
        'Though one of the underrated places in Jakarta, here you will come across a number of amazing resorts, restaurants and secluded golden beaches with a breathtaking view.',
    },
  }

  // Update the title and paragraphs based on the image ID
  const titleElement = document.getElementById('titles')
  const paragraph1Element = document.getElementById('paragraph-1')
  const paragraph2Element = document.getElementById('paragraph-2')

  const content = contentMap[imageId] || {
    title: 'Default Title',
    paragraph1: 'Default Paragraph 1',
    paragraph2: 'Default Paragraph 2',
  }

  titleElement.innerHTML = `<span class="text-[#0ef] font-normal text-4xl">${content.title}</span>`
  paragraph1Element.textContent = content.paragraph1
  paragraph2Element.textContent = content.paragraph2
}

const imageId = ['ragunan', 'tamanmini', 'museum', 'thousandisland']

let splide

document.addEventListener('DOMContentLoaded', () => {
  splide = new Splide('#image-carousel', {
    width: '720px',
    height: '490px',
  }).mount()

  // Add an event listener to the 'moved' event of the Splide carousel
  splide.on('move', () => {
    // Get the currently displayed slide element
    updateContent(imageId[splide.index])
  })
})
