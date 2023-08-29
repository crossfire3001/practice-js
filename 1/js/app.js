let cities = [
    {
        name: 'Tokyo',
        population: 15000000,
        foundation: 1457
    },
    {
        name: 'Paris',
        population: 2000000,
        foundation: 52
    },
    {
        name: 'Berlin',
        population: 15000000,
        foundation: 1300
    }
];

// Function to find and print the most populated city
const mostPopulation = () => {
    // Initialize variables to keep track of the maximum population and the most populated city
    let maxPopulation = 0;
    let mostPopulatedCity = null;

    // Loop through each city in the provided array
    cities.forEach((city) => {
        // Compare the population of the current city with the current maximum
        if (city.population > maxPopulation) {
            // If the current city has a higher population, update the maximum population
            // and store the city as the most populated city so far
            maxPopulation = city.population;
            mostPopulatedCity = city;
       }

    });

    // After looping through all cities, check if a most populated city was found.
    if (mostPopulatedCity) {
        // If a most populated city was found, print its name and population
        let cityName = mostPopulatedCity.name;
        console.log(`Самый населенный город - это ${cityName} с населением ${maxPopulation}`);
    } else {
        // If no valid data was found, print a message indicating that
        console.log("No Data");
    }
};

// Call the mostPopulation function with the array of cities
mostPopulation(cities);
