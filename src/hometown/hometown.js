// Function to modify the titles and paragraphs
const updateContent = (imageId) => {
  // Define a map to associate image IDs with corresponding titles and paragraphs
  const contentMap = {
    Playground: {
      title: 'Public Playground',
      paragraph1:
        'Jakarta, the capital city of Indonesia, has several public playgrounds and gardens where residents and visitors can enjoy outdoor activities and green spaces',
      paragraph2:
        'The city offers a variety of outdoor spaces where people can relax, play, and connect with nature while enjoying the urban environment',
    },
    gbk: {
      title: 'Gelora Bung Karno Stadium (GBK)',
      paragraph1:
        'The Gelora Bung Karno Main Stadium, often referred to simply as GBK Stadium, is one of the most prominent sports and entertainment venues in Indonesia and Southeast Asia',
      paragraph2:
        'GBK is also known for green stadium and difable friendly, it is equipped with advanced field drainage system and solar panel capacity 420 KWP, and provide hundreds of difable seats and friendly access for difable.',
    },
    mrt: {
      title: 'Jakarta MRT',
      paragraph1:
        'The Jakarta Mass Rapid Transit, commonly referred to as Jakarta MRT, is a modern and efficient public transportation system serving the bustling Indonesian capital of Jakarta. ',
      paragraph2:
        "It has become an essential part of the city's public transportation network.",
    },
    komplek: {
      title: 'Residential Complexes',
      paragraph1:
        'Many residential complexes in Jakarta offer green spaces and recreational facilities for residents.',
      paragraph2:
        'These spaces contribute to a higher quality of life for those living in the city.',
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

const imageId = ['Playground', 'gbk', 'mrt', 'komplek']

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
