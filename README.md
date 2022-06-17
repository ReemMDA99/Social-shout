# Social-shout 👋

## Description

A REST API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

##  User Story

As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

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

![Video]()

## ScreenShots

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

- express
- moment
- mongoose

## Testing
✏️ No current testing

### Questions

GitHub Submission url: ![GitHub](https://github.com/ReemMDA99/Social-shout)

✉️ If you have questions, email me at reem.mda0909@gmail.com or reach out on GitHub.