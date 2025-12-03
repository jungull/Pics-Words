/* John Gallagher
   Pictures & Words - Script.js
   11/24/2025 */

// Hamburger menu
function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
        navLinks.className = 'nav-links';
    } else {
        navLinks.style.display = 'block';
        navLinks.className = 'nav-links active';
    }
}

// Shuffle Image Function
function shuffleImage() {
    var images = [
        // Textures
        'assets/images/textures/sunset-on-glass.jpg',
        'assets/images/textures/IMG_9892.jpg',
        'assets/images/textures/slowshutterwater.jpg',
        'assets/images/textures/fastshutterwater.jpg',
        'assets/images/textures/IMG_3968.jpg',
        'assets/images/textures/treebark3.jpg',
        'assets/images/textures/Curtains.jpg',
        'assets/images/textures/DOOR.jpg',
        'assets/images/textures/grass.jpg',
        'assets/images/textures/Ice.jpg',
        'assets/images/textures/sidewalk.jpg',
        'assets/images/textures/treebark4.jpg',
        'assets/images/textures/water.JPG',
        'assets/images/textures/moss and pine.jpg',
        'assets/images/textures/lillypad.jpg',
        'assets/images/textures/roof.jpg',
        'assets/images/textures/IMG_3408.jpg',
        'assets/images/textures/IMG_3424.jpg',
        'assets/images/textures/Mountainside.jpg',
        'assets/images/textures/oar-ripple.jpg',
        'assets/images/textures/tree.jpg',

        // Negative Space
        'assets/images/Negative Space/IMG_1722.jpg',
        'assets/images/Negative Space/IMG_9083.jpg',
        'assets/images/Negative Space/frog.jpg',
        'assets/images/Negative Space/grass-feet.jpg',
        'assets/images/Negative Space/grass_shoes.jpg',
        'assets/images/Negative Space/lysh peakin.jpg',
        'assets/images/Negative Space/lysh-sky.jpg',
        'assets/images/Negative Space/richie-grass.jpg',
        'assets/images/Negative Space/IMG_1902.jpg',
        'assets/images/Negative Space/Lamp.jpg',

        // Motion
        'assets/images/Motion/000061630025.jpg',
        'assets/images/Motion/Bike.jpg',
        'assets/images/Motion/IMG_2335.jpg',
        'assets/images/Motion/marco!.jpg',
        'assets/images/Motion/IMG_0204.jpg',

        // Composition
        'assets/images/Composition/IMG_3371.jpg',
        'assets/images/Composition/IMG_9128.jpg',
        'assets/images/Composition/IMG_9791.jpg',
        'assets/images/Composition/Placid.jpg',
        'assets/images/Composition/blanc.jpg',
        'assets/images/Composition/church.jpg',
        'assets/images/Composition/maxhike.jpg'
    ];

    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];

    var imageDisplay = document.getElementById('shuffleImageDisplay');
    imageDisplay.src = randomImage;
    imageDisplay.alt = 'Random image from gallery';
    imageDisplay.style.display = 'block';
}

// Book Quotes Data
const bookQuotes = {
    'brothers-k': [
        '"Above all, don\'t lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others." - Fyodor Dostoevsky',
        '"What is hell? I maintain that it is the suffering of being unable to love." - Fyodor Dostoevsky',
        '"The more stupid one is, the closer one is to reality. The more stupid one is, the clearer one is. Stupidity is brief and artless, while intelligence squirms and hides itself." - Fyodor Dostoevsky',
        '"I think the devil doesn\'t exist, but man has created him, he has created him in his own image and likeness." - Fyodor Dostoevsky'
    ],
    'east-of-eden': [
        '"And now that you don\'t have to be perfect, you can be good." - John Steinbeck',
        '"Sometimes a man wants to be stupid if it lets him do a thing his cleverness forbids." - John Steinbeck',
        '"All great and precious things are lonely." - John Steinbeck',
        '"I believe that there is one story in the world, and only one. . . . Humans are caught—in their lives, in their thoughts, in their hungers and ambitions, in their avarice and cruelty, and in their kindness and generosity too—in a net of good and evil." - John Steinbeck'
    ],
    'frankenstein': [
        '"Beware; for I am fearless, and therefore powerful." - Mary Shelley',
        '"Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it." - Mary Shelley',
        '"There is something at work in my soul, which I do not understand." - Mary Shelley',
        '"Nothing is so painful to the human mind as a great and sudden change." - Mary Shelley'
    ],
    'mere-christianity': [
        '"If I find in myself desires which nothing in this world can satisfy, the only logical explanation is that I was made for another world." - C.S. Lewis',
        '"True humility is not thinking less of yourself; it is thinking of yourself less." - C.S. Lewis',
        '"God cannot give us a happiness and peace apart from Himself, because it is not there. There is no such thing." - C.S. Lewis',
        '"Aim at Heaven and you will get earth \'thrown in\': aim at earth and you will get neither." - C.S. Lewis'
    ],
    'monte-cristo': [
        '"All human wisdom is contained in these two words - Wait and Hope." - Alexandre Dumas',
        '"Life is a storm, my young friend. You will bask in the sunlight one moment, be shattered on the rocks the next. What makes you a man is what you do when that storm comes." - Alexandre Dumas',
        '"The difference between treason and patriotism is only a matter of dates." - Alexandre Dumas',
        '"I am not proud, but I am happy; and happiness blinds, I think, more than pride." - Alexandre Dumas'
    ],
    'narnia': [
        '"Courage, dear heart." - C.S. Lewis',
        '"One day, you will be old enough to start reading fairytales again." - C.S. Lewis',
        '"Things never happen the same way twice." - C.S. Lewis',
        '"To the glistening eastern sea, I give you Queen Lucy the Valiant." - C.S. Lewis'
    ],
    'waves': [
        '"I am rooted, but I flow." - Virginia Woolf',
        '"Let us again pretend that life is a solid substance, shaped like a globe, which we turn about in our fingers." - Virginia Woolf',
        '"How much better is silence; the coffee cup, the table. How much better to sit by myself like the solitary sea-bird that opens its wings on the stake." - Virginia Woolf',
        '"I was always going to the bookcase for another sip of the divine specific." - Virginia Woolf'
    ],
    'ivan-ilych': [
        '"Maybe I did not live as I ought to have done?" is what suddenly came into his head. "But how could that be, when I did everything properly?" - Leo Tolstoy',
        '"The example of a syllogism that he had studied in Kiesewetter\'s logic: Caius is a man, men are mortal, therefore Caius is mortal, had throughout his whole life seemed to him right only in relation to Caius, but not to him at all." - Leo Tolstoy',
        '"It is as if I had been going downhill while I imagined I was going up. And that is really what it was. I was going up in public opinion, but to the same extent life was ebbing away from me." - Leo Tolstoy'
    ],
    'zorba': [
        '"A man needs a little madness, or else... he never dares cut the rope and be free." - Nikos Kazantzakis',
        '"I felt once more how simple and frugal a thing is happiness: a glass of wine, a roast chestnut, a wretched little brazier, the sound of the sea. Nothing else." - Nikos Kazantzakis',
        '"You have everything but one thing: madness." - Nikos Kazantzakis',
        '"Life is trouble. Only death is not. To be alive is to undo your belt and look for trouble." - Nikos Kazantzakis'
    ]
};

// Shuffle Book Quote Function
function shuffleBookQuote(bookId) {
    var quotes = bookQuotes[bookId];
    if (quotes) {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        var quoteDisplay = document.getElementById('quote-' + bookId);
        if (quoteDisplay) {
            quoteDisplay.innerHTML = quotes[randomIndex];
        }
    }
}

// Homepage Shuffle Quote Function
function shuffleQuote() {
    var allQuotes = [];
    // Aggregate all quotes from the bookQuotes object
    for (var key in bookQuotes) {
        if (bookQuotes.hasOwnProperty(key)) {
            allQuotes = allQuotes.concat(bookQuotes[key]);
        }
    }

    if (allQuotes.length > 0) {
        var randomIndex = Math.floor(Math.random() * allQuotes.length);
        var quoteDisplay = document.getElementById('shuffleQuoteDisplay');
        if (quoteDisplay) {
            quoteDisplay.innerHTML = allQuotes[randomIndex];
        }
    }
}

// Form 
function handleFormSubmit() {
    var formResponse = document.getElementById('formResponse');
    var selectedValue = '';

    // Check for radio buttons
    var radios = document.getElementsByName('contactReason');
    if (radios.length > 0) {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue = radios[i].value;
                break;
            }
        }
    }

    // Check for dropdown
    var dropdown = document.getElementById('contactMethod');
    if (dropdown) {
        selectedValue = dropdown.value;
    }

    // Display response based on selection
    if (selectedValue === 'recommendation') {
        formResponse.innerHTML = 'Thanks for reccomonding a book!';
    } else if (selectedValue === 'quote') {
        formResponse.innerHTML = 'Thanks for submitting a quote!';
    } else if (selectedValue === 'photoshoot') {
        formResponse.innerHTML = 'I will reach out within 48 hours to discuss the details';
    } else if (selectedValue === 'other') {
        formResponse.innerHTML = 'Thanks for visiting my site, looking forward to reading your message!.';

        formResponse.style.display = 'block';

        return false;
    }
}

// --- Active Nav Link Highlighting ---
function highlightActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', function () {
    highlightActiveNav();
});
