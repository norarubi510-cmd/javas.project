let carsData = [
  {
    id: 1,
    title: "Tesla Model 3",
    year: 2023,
    type: "Electric",
    price: 28990,
    rating: 5,
    image: "https://th.bing.com/th/id/OIP.zFjy16pImfvgt-m9gEY7UgHaE7?w=368&h=201&c=7&r=0&o=5&cb=ucfimg2&dpr=1.3&pid=1.7&ucfimg=1"
  },
  {
    id: 2,
    title: "BMW M4",
    year: 2024,
    type: "Performance",
    price: 76900,
    rating: 4.5,
    image: "https://th.bing.com/th/id/OIP.9zG2sXGdahcukvS_iKbGOQHaEK?w=304&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.3&pid=1.7&ucfimg=1"
  },
  {
    id: 3,
    title: "Ford Mustang GT",
    year: 2024,
    type: "Muscle",
    price: 49900,
    rating: 4,
    image: "https://th.bing.com/th/id/OIP.UCV9D7SrhOPcWUNekAU28gHaEK?w=286&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.3&pid=1.7&ucfimg=1"
  },
  {
    id: 4,
    title: "Mercedes-Benz C-Class",
    year: 2024,
    type: "Luxury",
    price: 46950,
    rating: 5,
    image: "https://www.autotrader.com/wp-content/uploads/2023/10/2024-mercedes-c-class-left-3qtr.jpg?quality=75&strip=allttp"
  },
  {
    id: 5,
    title: "Porsche 911 Carrera",
    year: 2024,
    type: "Sports",
    price: 184999,
    rating: 5,
    image: "https://th.bing.com/th/id/OIP.SLd0BuGnMrLE3Llmmk7LfwHaEK?w=320&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.3&pid=1.7&ucfimg=1"
  },
  {
    id: 6,
    title: "Audi A4",
    year: 2024,
    type: "Sedan",
    price: 29998,
    rating: 4.5,
    image: "https://en.arabgt.com/wp-content/uploads/2023/10/2024-Audi-A4-2.jpg"
  },
  {
    id: 7,
    title: "Chevrolet Corvette",
    year: 2024,
    type: "Sports",
    price: 68900,
    rating: 5,
    image: "https://th.bing.com/th/id/OIP.bBaOlYHJr8h5vvqO4l_7WgHaEK?w=285&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
  },
  {
    id: 8,
    title: "Toyota Camry",
    year: 2024,
    type: "Sedan",
    price: 26420,
    rating: 4.5,
    image: "https://th.bing.com/th/id/OIP.7IREuvyRJPY_i1ZqmQh_ywHaEK?w=310&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
  },
  {
    id: 9,
    title: "Honda Civic",
    year: 2024,
    type: "Compact",
    price: 24650,
    rating: 4,
    image: "https://th.bing.com/th/id/OIP.ksH6h4rEx7LJ9jM7vcaVJAHaEK?w=296&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
  },
  {
    id: 10,
    title: "Lexus ES",
    year: 2024,
    type: "Luxury",
    price: 42490,
    rating: 5,
    image: "https://th.bing.com/th/id/OIP.GWO1ivn8LgUZv4L2N7HHCAHaDt?w=327&h=174&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
  },
  {
    id: 11,
    title: "Mazda MX-5 Miata",
    year: 2024,
    type: "Roadster",
    price: 28665,
    rating: 4.5,
    image: "https://www.edmunds.com/assets/m/cs/bltfd059b95af15fb1e/674f4d8e56ed5477ec12dcae/2024-mazda-mx-5-miata-f34.jpg"
  },
  {
    id: 12,
    title: "Volkswagen Golf GTI",
    year: 2024,
    type: "Hot Hatch",
    price: 31370,
    rating: 4.5,
    image: "https://th.bing.com/th/id/OIP.biyIZ15VbCzLoU6JAEzWfwHaEK?w=327&h=184&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
  }
];

// Function to render stars
function renderStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  
  return stars;
}

// Function to render cars
function renderCars(cars) {
  const carsContainer = document.querySelector('.cars');
  
  if (!carsContainer) return;
  
  // Remove spinner if exists
  const spinner = carsContainer.querySelector('.fa-spinner');
  if (spinner) {
    spinner.remove();
  }
  
  carsContainer.innerHTML = cars.map(car => `
    <div class="car">
      <div class="car_img--wrapper">
        <img class="car_img" src="${car.image}" alt="${car.title}" onerror="this.src='https://via.placeholder.com/400x250?text=${encodeURIComponent(car.title)}'">
      </div>
      <div class="car_details">
        <h3 class="car_title">${car.title}</h3>
        <p class="car_year">${car.year} • ${car.type}</p>
        <p class="car_price">$${car.price.toLocaleString()}</p>
        <div class="car_rating">
          ${renderStars(car.rating)}
        </div>
      </div>
    </div>
  `).join('');
}

// Function to filter cars
function filterCars(event) {
  const filterValue = event.target.value;
  let sortedCars = [...carsData];
  
  switch(filterValue) {
    case 'LOW_TO_HIGH':
      sortedCars.sort((a, b) => a.price - b.price);
      break;
    case 'HIGH_TO_LOW':
      sortedCars.sort((a, b) => b.price - a.price);
      break;
    case 'RATING':
      sortedCars.sort((a, b) => b.rating - a.rating);
      break;
    default:
      sortedCars = [...carsData];
  }
  
  renderCars(sortedCars);
}

// Menu functions
function openMenu() {
  document.body.classList.add('menu--open');
  const menuBackdrop = document.querySelector('.menu_backdrop');
  if (menuBackdrop) {
    menuBackdrop.style.visibility = 'visible';
    menuBackdrop.style.opacity = '1';
    menuBackdrop.style.transform = 'translateX(0)';
  }
}

function closeMenu() {
  document.body.classList.remove('menu--open');
  const menuBackdrop = document.querySelector('.menu_backdrop');
  if (menuBackdrop) {
    menuBackdrop.style.visibility = 'hidden';
    menuBackdrop.style.opacity = '0';
    menuBackdrop.style.transform = 'translateX(100%)';
  }
}

// Initialize cars on page load
document.addEventListener('DOMContentLoaded', function() {
  renderCars(carsData);
});