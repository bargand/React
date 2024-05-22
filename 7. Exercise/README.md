you have to use an API and display the data in the form of  a card under a counter. All the data points returned by the API should be converted to a card

use this API: https://jsonplaceholder.typicode.com/posts

Hint:

1. create a state for the data which will be fetched using the JSON placeholder API
2. inside useEffect,  use fetch to populate that state and then use map to render the card from that state.