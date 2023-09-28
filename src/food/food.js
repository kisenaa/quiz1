// Function to modify the titles and paragraphs
const updateContent = (imageId) => {
  // Define a map to associate image IDs with corresponding titles and paragraphs
  const contentMap = {
    keraktelor: {
      title: 'Kerak Telor',
      paragraph1:
        'Kerak telor is a spicy omelette dish. It’s made with glutinous rice that’s cooked with egg and seasoned with ginger, salt, sugar, and aromatic ginger. It’s typically served with dried shrimp, fried shallots, and serundeng (fried shredded coconut) on top.',
      paragraph2:
        'Back in the colonial era, kerak telor was considered a privileged food that was only served to the colonial government and upper-class Betawi. Now, it’s considered a cheap snack and can be purchased from street-food vendors',
    },
    nasiuduk: {
      title: 'Nasi Uduk Betawi',
      paragraph1:
        'Nasi uduk is a fragrant Indonesian dish known for its coconut-infused rice. It is traditionally served with a range of delectable side dishes, including fried chicken, fried shallots, fried tempeh, and fried egg',
      paragraph2:
        'This beloved dish is a staple of Indonesian breakfast and is loved for its rich flavors and satisfying textures, making it a must-try for anyone exploring Jakarta’s culinary scene.',
    },
    MieKangkung: {
      title: 'Mie Kangkung',
      paragraph1:
        'Mie kangkung is a popular Jakarta street food that combines stir-fried noodles with water spinach (kangkung) and a flavorful sauce. It is often prepared with shrimp, garlic, shallots, and a blend of sweet and savory soy-based seasonings.',
      paragraph2:
        'This delightful dish is beloved for its affordability and delicious taste. You can find mie kangkung being cooked up by street vendors throughout the city, offering a quick and satisfying meal option.',
    },
    kueape: {
      title: 'Kue Ape',
      paragraph1:
        'Kue ape is a delightful Indonesian snack, especially popular in Jakarta. These bite-sized green cakes are made from a mixture of rice flour, coconut milk, and pandan leaves, giving them their distinctive color and flavor.',
      paragraph2:
        'Kue ape is typically cooked in a special griddle pan, resulting in a crispy outer layer and a soft, slightly sweet interior. They are a favorite street food snack and are often enjoyed with a cup of hot tea or coffee.',
    },
  }

  // Update the title and paragraphs based on the image ID
  const titleElement = document.getElementById('titles')
  const paragraph1Element = document.getElementById('paragraph-1')
  const paragraph2Element = document.getElementById('paragraph-2')

  const content = contentMap[imageId] || {
    title: 'Default Titless',
    paragraph1: 'Default Paragraph 111',
    paragraph2: 'Default Paragraph 2s',
  }

  titleElement.innerHTML = `<span class="text-[#0ef] font-normal text-4xl">${content.title}</span>`
  paragraph1Element.textContent = content.paragraph1
  paragraph2Element.textContent = content.paragraph2
}

const imageId = ['keraktelor', 'nasiuduk', 'MieKangkung', 'kueape']

let splide

document.addEventListener('DOMContentLoaded', () => {
  splide = new Splide('#image-carousel', {
    width: '720px',
    height: '490px',
    lazyLoad: 'nearby',
  }).mount()
  // Add an event listener to the 'moved' event of the Splide carousel
  splide.on('move', () => {
    // Get the currently displayed slide element
    updateContent(imageId[splide.index])
  })
})
