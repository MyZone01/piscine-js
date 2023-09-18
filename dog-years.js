const dogYears = (planet, age) => parseFloat(
    planet === 'earth' ? ((age / 31557600) * 7).toFixed(2) :
        planet === 'mercury' ? (((age / 31557600) * 7) / 0.2408467).toFixed(2) :
            planet === 'venus' ? (((age / 31557600) * 7) / 0.61519726).toFixed(2) :
                planet === 'mars' ? (((age / 31557600) * 7) / 1.8808158).toFixed(2) :
                    planet === 'jupiter' ? (((age / 31557600) * 7) / 11.862615).toFixed(2) :
                        planet === 'saturn' ? (((age / 31557600) * 7) / 29.447498).toFixed(2) :
                            planet === 'uranus' ? (((age / 31557600) * 7) / 84.016846).toFixed(2) :
                                planet === 'neptune' ? (((age / 31557600) * 7) / 164.79132).toFixed(2) : undefined
);
