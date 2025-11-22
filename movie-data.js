// This file contains the array of movie objects used by the Pixel Flicks game.
// ACTION TAKEN: All image links now point to local files in the './images/' folder.
// Ensure you have uploaded files named 1.jpg, 2.jpg, 3.jpg, etc., up to 25.jpg.

const movieData = [
    // --------------------------------------------------------------------------------
    // ROUNDS 1-25 (Now using local paths: ./images/{id}.jpg)
    // --------------------------------------------------------------------------------
    // Round 1: 1970s Classic (Jaws - 1975)
    { 
        id: 1, 
        title: "Jaws", 
        year: 1975, 
        correct: "A", 
        image: "./images/1.jpg", 
        options: ["Jaws", "The Poseidon Adventure", "Deep Blue Sea", "Close Encounters"] 
    },
    
    // Round 2: Early 1980s Fantasy (E.T. - 1982)
    { 
        id: 2, 
        title: "E.T. the Extra-Terrestrial", 
        year: 1982, 
        correct: "B", 
        image: "./images/2.jpg", 
        options: ["Gremlins", "E.T. the Extra-Terrestrial", "Flight of the Navigator", "Alien"] 
    },
    
    // Round 3: Mid-1980s Sci-Fi (Back to the Future - 1985)
    { 
        id: 3, 
        title: "Back to the Future", 
        year: 1985, 
        correct: "C", 
        image: "./images/3.jpg", 
        options: ["Ferris Bueller's Day Off", "The Goonies", "Back to the Future", "Short Circuit"] 
    },
    
    // Round 4: 1990s Crime (Pulp Fiction - 1994)
    { 
        id: 4, 
        title: "Pulp Fiction", 
        year: 1994, 
        correct: "A", 
        image: "./images/4.jpg", 
        options: ["Pulp Fiction", "Reservoir Dogs", "Snatch", "The Big Lebowski"] 
    },
    
    // Round 5: Late 1990s Action (The Matrix - 1999)
    { 
        id: 5, 
        title: "The Matrix", 
        year: 1999, 
        correct: "D", 
        image: "./images/5.jpg", 
        options: ["Terminator 2", "Inception", "Dark City", "The Matrix"] 
    },
    
    // Round 6: Early 2000s Fantasy (Lord of the Rings - 2001)
    { 
        id: 6, 
        title: "The Fellowship of the Ring", 
        year: 2001, 
        correct: "B", 
        image: "./images/6.jpg", 
        options: ["Harry Potter", "The Fellowship of the Ring", "Narnia", "Eragon"] 
    },
    
    // Round 7: Mid-2000s Superhero (The Dark Knight - 2008)
    { 
        id: 7, 
        title: "The Dark Knight", 
        year: 2008, 
        correct: "C", 
        image: "./images/7.jpg", 
        options: ["Batman Begins", "Man of Steel", "The Dark Knight", "Watchmen"] 
    },
    
    // Round 8: Early 2010s Blockbuster (Inception - 2010)
    { 
        id: 8, 
        title: "Inception", 
        year: 2010, 
        correct: "A", 
        image: "./images/8.jpg", 
        options: ["Inception", "Tenet", "Interstellar", "Shutter Island"] 
    },
    
    // Round 9: Mid-2010s Animated (Inside Out - 2015)
    { 
        id: 9, 
        title: "Inside Out", 
        year: 2015, 
        correct: "D", 
        image: "./images/9.jpg", 
        options: ["Coco", "Up", "Soul", "Inside Out"] 
    },
    
    // Round 10: Recent Blockbuster (Dune - 2021)
    { 
        id: 10, 
        title: "Dune", 
        year: 2021, 
        correct: "B", 
        image: "./images/10.jpg", 
        options: ["Blade Runner 2049", "Dune", "Arrival", "Interstellar"] 
    },

    // Round 11: 1980s Horror (The Shining - 1980)
    { 
        id: 11, 
        title: "The Shining", 
        year: 1980, 
        correct: "C", 
        image: "./images/11.jpg", 
        options: ["Psycho", "Carrie", "The Shining", "Exorcist"] 
    },

    // Round 12: 1990s Drama (The Shawshank Redemption - 1994)
    { 
        id: 12, 
        title: "The Shawshank Redemption", 
        year: 1994, 
        correct: "A", 
        image: "./images/12.jpg", 
        options: ["The Shawshank Redemption", "Forrest Gump", "Pulp Fiction", "Green Mile"] 
    },

    // Round 13: 2000s Animated (Finding Nemo - 2003)
    { 
        id: 13, 
        title: "Finding Nemo", 
        year: 2003, 
        correct: "B", 
        image: "./images/13.jpg", 
        options: ["Toy Story 3", "Finding Nemo", "Shrek", "Monsters Inc"] 
    },

    // Round 14: 1970s Crime (The Godfather Part II - 1974)
    { 
        id: 14, 
        title: "The Godfather Part II", 
        year: 1974, 
        correct: "D", 
        image: "./images/14.jpg", 
        options: ["Goodfellas", "The Untouchables", "Scarface", "The Godfather Part II"] 
    },

    // Round 15: 2010s Sci-Fi (Interstellar - 2014)
    { 
        id: 15, 
        title: "Interstellar", 
        year: 2014, 
        correct: "B", 
        image: "./images/15.jpg", 
        options: ["Gravity", "Interstellar", "Arrival", "The Martian"] 
    },

    // Round 16: 1980s Action (Die Hard - 1988)
    { 
        id: 16, 
        title: "Die Hard", 
        year: 1988, 
        correct: "A", 
        image: "./images/16.jpg", 
        options: ["Die Hard", "Lethal Weapon", "Terminator", "Total Recall"] 
    },

    // Round 17: 2020s Action (Top Gun: Maverick - 2022)
    { 
        id: 17, 
        title: "Top Gun: Maverick", 
        year: 2022, 
        correct: "D", 
        image: "./images/17.jpg", 
        options: ["Dune Part Two", "No Time to Die", "Oppenheimer", "Top Gun: Maverick"] 
    },

    // Round 18: 1990s Thriller (Silence of the Lambs - 1991)
    { 
        id: 18, 
        title: "The Silence of the Lambs", 
        year: 1991, 
        correct: "C", 
        image: "./images/18.jpg", 
        options: ["Se7en", "Fargo", "The Silence of the Lambs", "Usual Suspects"] 
    },

    // Round 19: 2000s Sci-Fi (Avatar - 2009)
    { 
        id: 19, 
        title: "Avatar", 
        year: 2009, 
        correct: "A", 
        image: "./images/19.jpg", 
        options: ["Avatar", "District 9", "Star Trek", "Prometheus"] 
    },

    // Round 20: 1970s Sci-Fi (Alien - 1979)
    { 
        id: 20, 
        title: "Alien", 
        year: 1979, 
        correct: "B", 
        image: "./images/20.jpg", 
        options: ["The Thing", "Alien", "Close Encounters", "Star Wars"] 
    },

    // Round 21: 1980s Adventure (Raiders of the Lost Ark - 1981)
    { 
        id: 21, 
        title: "Raiders of the Lost Ark", 
        year: 1981, 
        correct: "D", 
        image: "./images/21.jpg", 
        options: ["The Mummy", "Romancing the Stone", "Indiana Jones", "Raiders of the Lost Ark"] 
    },

    // Round 22: 2010s War (1917 - 2019)
    { 
        id: 22, 
        title: "1917", 
        year: 2019, 
        correct: "C", 
        image: "./images/22.jpg", 
        options: ["Dunkirk", "Saving Private Ryan", "1917", "Hacksaw Ridge"] 
    },

    // Round 23: 1990s Sci-Fi (Jurassic Park - 1993)
    { 
        id: 23, 
        title: "Jurassic Park", 
        year: 1993, 
        correct: "A", 
        image: "./images/23.jpg", 
        options: ["Jurassic Park", "Twister", "Godzilla", "Armageddon"] 
    },

    // Round 24: 2020s Drama (Oppenheimer - 2023)
    { 
        id: 24, 
        title: "Oppenheimer", 
        year: 2023, 
        correct: "B", 
        image: "./images/24.jpg", 
        options: ["Tenet", "Oppenheimer", "The Martian", "Dunkirk"] 
    },

    // Round 25: 1980s Comedy (Ghostbusters - 1984)
    { 
        id: 25, 
        title: "Ghostbusters", 
        year: 1984, 
        correct: "D", 
        image: "./images/25.jpg", 
        options: ["Beetlejuice", "Gremlins", "E.T.", "Ghostbusters"] 
    }
];
