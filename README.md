# Social-shout 👋

## Description

A REST API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

##  User Story

As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

## Acceptance Criteria:

- When you enter the command to invoke the application then the server is started and the Mongoose models are synced to the MongoDB database.

- Testing API GET routes in Insomnia Core for users and thoughts return the data for each of these routes in a formatted JSON

- Testing API POST, PUT, and DELETE routes in Insomnia Core are able to successfully create, update, and delete users and thoughts

- Testing API POST and DELETE routes in Insomnia Core are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## 💻 Usage

- Make sure you have MongoDB installed on your machine (
- Clone the repo
- Install dependencies with `npm i`
- Run `npm start` to run the server and make the API live
- Use your browser or an app like Insomnia to test the REST API.
- Models
    - User
    - Thought
    - Reaction (used as a subdocument in Thought)
    - Friends (used as a subdocument in User)

##  💾 Demo 

[User](https://drive.google.com/file/d/1wWyTXb7LCoRyfBgNw4lIEEEdn5M0X6TX/view)

[Friend](https://drive.google.com/file/d/1u9W81dwXDS0K3FvrUUhVDrSlDO-XOb7u/view)

[Thought](https://drive.google.com/file/d/1kPT63NTn7TJsDcqBfEHm1Zbj-vsWr4KY/view)

[Reaction](https://drive.google.com/file/d/1LfQdkIILLOb08FNY-IOS8f18xaYBG_0B/view)

## GIFS

![User](./assets/USERS.gif)
![Friend](./assets/FRIENDS.gif)
![Thought](./assets/THOUGHTS.gif)
![Reaction](./assets/REACTION.gif)

## Endpoints

### User

- Get all users: GET /api/users
- Create a user: POST /api/users
- Get user by ID: GET /api/users/:id
- Update a user: PUT /api/users/:id
- Delete a user: DELETE /api/users/:id
- Add a friend: PUT /api/users/:userId/friends/:friendId
- Delete a friend: DELETE /api/users/:userId/friends/:friendId

### Thought

- Get all thoughts: GET /api/thoughts
- Create a thought: POST /api/thoughts
- Get thought by ID: GET /api/thoughts/:id
- Update a thought: PUT /api/thoughts/:id
- Delete a thought: DELETE /api/thoughts/:id

### Reaction

- Add a reaction: PUT /api/thoughts/:id/reactions
- Delete a reaction: DELETE /api/thoughts/:id/reactions

### Packages

- express - npm install express
- moment - npm install moment
- mongoose - npm install mongoose

## Testing

✏️ Test using Insomnia

### Questions

GitHub Submission url: (https://github.com/ReemMDA99/Social-shout/)

✉️ If you have questions, email me at reem.mda0909@gmail.com or reach out on GitHub.