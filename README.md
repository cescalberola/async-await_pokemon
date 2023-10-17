# Asynchronous and API Exercises with Pokémon

![Generic Pokémon Image]([URL_OF_GENERIC_IMAGE](https://imgs.search.brave.com/hikRmS6QsDsOmG0_eJKrW3hZ0qYqdb1wodaHhOqRlYE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEwL1Bv/a2Vtb24tVHJhbnNw/YXJlbnQtRnJlZS1Q/TkcucG5n))

Hello! In this repository, you will find a series of exercises designed to help me understand the concepts of asynchrony and API usage in JavaScript, specifically with Axios and Async/Await. My main goals in these exercises are:

- **Understanding how asynchrony works:** Through these exercises, I am gaining a better understanding of how asynchronous operations work in JavaScript and how to handle them.

- **Learning how to make API calls (Axios):** I am using Axios, a popular library for making HTTP requests in JavaScript, to access the Pokémon API at 'https://pokeapi.co/'. I am learning how to make GET requests to this API.

- **Learning to use Async/Await to manage promises:** In these exercises, I am using the `async` and `await` keywords to make promise management simpler and more readable. This helps me efficiently handle responses from the Pokémon API.

## Exercise 1: Async/Await with Pokémon

In this first exercise, I work with the Pokémon API 'https://pokeapi.co/' and use exclusively `async/await`. The steps I follow are as follows:

1. **Get a random Pokémon (Axios):** Using Axios, I make a GET request to the Pokémon API to obtain information about a random Pokémon.

2. **After obtaining the Pokémon:** Once I receive the API response, I extract relevant information, such as the name and the URL of the Pokémon's image.

3. **Get the Pokémon's image:** I use the image URL I obtained to make a new Axios request and retrieve the Pokémon's image.

4. **Get the Pokémon's name:** I extract the Pokémon's name from the response.

5. **Display the Pokémon's name and image in the DOM:** Finally, I update the DOM of my web page with the name and image of the Pokémon I obtained.

**Note:** It's important to note that to find the Pokémon's image, I may need to make multiple Axios requests, depending on the API's structure and the query path I use.

