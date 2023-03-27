function openUrl(url) {
    window.open(url, '_blank');
}

function increaseShadow(button) {
    button.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
}

function decreaseShadow(button) {
    button.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.4)';
}

const articles = [{
    'imagePath': 'https://www.attractionsinsrilanka.com/wp-content/uploads/2019/09/sigiriya-rock-1.jpg',
    'imageAlt': 'Image of Sigiriya',
    'header': 'The Magnificence of Sigiriya: A Journey Through Sri Lanka\'s Iconic Fortress',
    'articleLink': 'https://medium.com/illumination/the-rock-fortress-sigiriya-the-eighth-world-wonder-1c17c931ebaf',
    'paragraph': 'Sigiriya is an ancient rock fortress located in the central Matale District of Sri Lanka. It was built in the 5th century AD by King Kasyapa and is recognized as one of the finest examples of ancient urban planning. Sigiriya features unique architectural and engineering feats, such as the famous Lion\'s Gate, the Mirror Wall, and the impressive frescoes. The fortress is also surrounded by beautiful gardens and water features, making it a popular tourist destination and a UNESCO World Heritage Site.',
},
{
    'imagePath': 'https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/cover46.jpg&w=1366&h=500',
    'imageAlt': 'Image of Temple of the Tooth Relic',
    'header': 'Unveiling the Sacred: The Fascinating History of Sri Lanka\'s Temple of the Tooth Relic',
    'articleLink': 'https://woodworks800.medium.com/kandy-buddhas-tooth-relic-in-sri-lanka-345e7eae92e',
    'paragraph': 'The Temple of the Tooth Relic is a sacred Buddhist site located in Kandy, Sri Lanka. It houses the relic of the tooth of the Buddha, which is believed to have been smuggled into Sri Lanka in the 4th century AD. The temple is a UNESCO World Heritage Site and is considered one of the holiest places of worship in the Buddhist world. The complex features stunning architecture and is surrounded by tranquil gardens, making it a must-visit destination for tourists and spiritual seekers alike.',
},
{
    'imagePath': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=900&h=600&s=1',
    'imageAlt': 'Image of Galle Fort',
    'header': 'Stepping Back in Time: Discovering the Hidden Gems of Sri Lanka\'s Galle Fort',
    'articleLink': 'https://www.saltinourhair.com/sri-lanka/galle-fort/',
    'paragraph': 'Galle Fort is a historic fortified city located in Galle, Sri Lanka. Built by the Portuguese in the 16th century and later fortified by the Dutch, it is now a UNESCO World Heritage Site. The fort features well-preserved Dutch colonial architecture, winding streets, and charming cafes and boutique hotels. Visitors can explore the ramparts, lighthouse, and historic buildings, and experience the old-world charm of this picturesque coastal city.',
},
{
    'imagePath': 'https://www.thingstodo.lk/wp-content/uploads/2019/08/horton-1.gif',
    'imageAlt': 'Image of Horton Plains National Park',
    'header': 'Nature\'s Masterpiece: Witnessing the Wonders of Horton Plains National Park in Sri Lanka',
    'articleLink': 'https://medium.com/@sunilravish/hiking-at-horton-plains-sri-lanka-with-an-infant-1d40d607f34c',
    'paragraph': 'Horton Plains National Park is a protected area located in the central highlands of Sri Lanka. The park is home to a diverse range of flora and fauna and features stunning landscapes, including waterfalls, valleys, and cliffs. The iconic World\'s End cliff offers breathtaking views of the surrounding plains. Visitors can hike the trails, observe wildlife such as sambar deer and purple-faced langur monkeys, and enjoy the natural beauty of this unique park.',
},
{
    'imagePath': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/64/74/78/mirissa-beach.jpg?w=600&h=500&s=1',
    'imageAlt': 'Image of Mirissa Beach',
    'header': 'The Perfect Beach Getaway: Why Mirissa Should Be Your Next Vacation Destination',
    'articleLink': 'https://medium.com/@opssidra1/blue-whale-watching-in-mirissa-sri-lanka-d360e24ee210',
    'paragraph': 'Mirissa is a coastal town located in the southern region of Sri Lanka. It is renowned for its picturesque beaches, clear blue waters, and excellent surfing and snorkeling opportunities. Visitors can enjoy water sports, whale watching, and take a boat tour to the nearby Secret Beach. The town also features a bustling street market and a variety of restaurants and bars. It\'s the perfect place to relax and soak up the sun in a tropical paradise.',
},]

function createArticleBox(imagePath, imageAlt, header, paragraph) {
    const articleRow = document.createElement('div');
    articleRow.classList.add('container');

    const photoContainer = document.createElement('div');
    photoContainer.classList.add('photo-container');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const articleImage = document.createElement('img');
    articleImage.setAttribute('src', imagePath);
    articleImage.setAttribute('alt', imageAlt);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const textHeader = document.createElement('h2');
    textHeader.innerText = header;

    const paragraphText = document.createElement('p');
    paragraphText.innerText = paragraph;

    const seeMoreButton = document.createElement('button');
    seeMoreButton.innerText = 'See More'
    seeMoreButton.classList.add('see-more-button');

    articleRow.appendChild(photoContainer);
    photoContainer.appendChild(imageContainer);
    imageContainer.appendChild(articleImage);
    articleRow.appendChild(textContainer);
    textContainer.appendChild(textHeader);
    textContainer.appendChild(paragraphText);
    textContainer.appendChild(seeMoreButton);

    return articleRow;
}

for (let article of articles) {
    const articleElement = createArticleBox(article['imagePath'], article['imageAlt'], article['header'], article['paragraph'],);
    document.body.appendChild(articleElement);
}

var buttons = document.getElementsByClassName('see-more-button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        openUrl(articles[i]['articleLink'])
    });
    buttons[i].addEventListener('mouseover', function () {
        increaseShadow(buttons[i])
    });
    buttons[i].addEventListener('mouseout', function () {
        decreaseShadow(buttons[i])
    });
}