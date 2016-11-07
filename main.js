movies = []

movies.push({
title: "Enter The Dragon",
director: "Robert Clouse",
genre: "Martial Arts",
year: "1973",
actors: ["Bruce Lee","John Saxon","Jim Kelly","Ahna Capri", "Shih Kien"]
})

movies.push({
title: "The Empire Strikes Back",
director: "Irvin Kershner",
genre: "Sci Fi",
year: "1980",
actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Billy Dee Williams","Anthony Daniels", "Daivd Prowse", "Kenny Baker", "Peter Mayhew", "Frank Oz"]
})

movies.push({
title: "The Karate Kid pt.1",
director: "John G. Avildsen",
genre: "Martial Arts",
year: "1984",
actors: ["Ralph Macchio", "Noriyuki Pat Morita", "Elisabeth Shue"]
})

movies.push({
title: "Scarface",
director: "Brian De Palma",
genre: "Crime Drama",
year: "1983",
actors: ["Al Pacino","Steven Bauer", "Michelle Pfeiffer", "Mary Mastrantonio", "Paul Shenar", "Robert Loggia", "F.Murry Abraham", "Harris Yulin"]
})

movies.push({
title: "The Big Lebowski",
director: "Joel Coen",
genre: "Comedy",
year: "1998",
actors: ["Jeff Bridges", "John Goodman","Julianne Moore", "Steve Buscemi","David Huddleston","John Turturro"]
})

title = movies.sort(function(movies, other){
  return movies.title > other.title
});

movies.forEach(function(mov) {
  document.getElementById('movie_list').innerHTML += "<td>" + mov.title + "</td>" + "<td>" + mov.director +"</td>" + "<td>"+ mov.genre + "</td>" +  "<td>" + mov.year + "</td>" + "<td>" + mov.actors + "</td>"
})





console.log(JSON.stringify(title))
