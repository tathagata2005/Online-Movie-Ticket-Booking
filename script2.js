// Navigate to seating page
function goToSeatingPage() {
    window.location.href = "seating.html";
  }
  
  // Get elements
  const movieImages = document.querySelectorAll('.container .card img');
  const mainImage = document.getElementById('mainImage');
  const bannerImage = document.getElementById('bannerImage');
  
  // Add click event listeners for navigation
  movieImages.forEach(image => {
    image.addEventListener('click', goToSeatingPage);
  });
  
  mainImage.addEventListener('click', goToSeatingPage);
  bannerImage.addEventListener('click', goToSeatingPage);
  
  // Search functionality
  const searchButton = document.getElementById('searchButton');
  const movieSearch = document.getElementById('movieSearch');
  
  // Movie map to link movie names to elements
  const movieMap = {
    'DRISHYAM 2': document.querySelector('.container .card img:nth-child(1)'),
  'STREE2': document.querySelector('.container .card img:nth-child(2)'),
  'WAKANDA FOREVER': document.querySelector('.container .card img:nth-child(3)'),
  'DEADPOOL & WOLVRINE': document.querySelector('.container .card img:nth-child(4)'),
  'BHOOL BHULAIYAA 3': document.querySelector('.container .card img:nth-child(5)'),
  'AVENGERS ENDGAME': document.querySelectorAll('.container .card img')[5],
  'SPIDERMAN: No Way Home': document.querySelectorAll('.container .card img')[6],
  'KALKI 2898AD': document.querySelectorAll('.container .card img')[7],
  'JAWAN': document.querySelectorAll('.container .card img')[8],
  'BAHUBALI 2': document.querySelectorAll('.container .card img')[9],
  'VENOM : The Last Dance': document.querySelectorAll('.card img')[10],
  'SINGHAM AGAIN': document.querySelectorAll('.card img')[11],
  'GLADIATOR II': document.querySelectorAll('.card img')[12],
  'PATHAAN': document.querySelectorAll('.card img')[13],
  'TIGER 3': document.querySelectorAll('.card img')[14],
  'RRR': mainImage,
  'X-MEN:FIRST CLASS': bannerImage
  };
  
  // Scroll to and highlight the selected movie
  searchButton.addEventListener('click', () => {
    const selectedMovie = movieSearch.value.trim().toUpperCase(); // Normalize input for case-insensitive matching
    const movieElement = movieMap[selectedMovie];
  
    if (movieElement) {
      // Remove previous highlights
      document.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));
  
      // Add the highlighted class
      movieElement.classList.add('highlighted');
  
      // Scroll into view
      movieElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      alert('Movie not found');
    }
  });
  