# Web Technologies: MERN Stack Lab Test

## Instructions

You are provided with a starter MERN (MongoDB, Express, React, Node.js) **Book Manager** project. Your task is to complete the application, add new features, deploy it, and submit the final artifacts.

**Time Limit:** 2 Hours
**Total Marks:** 100

### Part 1: Backend Completion (30 Marks)
The provided backend code is incomplete. You need to fix it and extend the data model.

**Database Connection (5 Marks)**
1. Create a MongoDB Atlas cluster (if you haven't already).
2. Set up an environment variable file (`.env`) in the `backend` directory.
3. Connect the backend to your MongoDB Atlas database.

**Model Extension (10 Marks)**
1. Open `backend/models/Book.js`.
2. The current model only has `title` (String, required) and `author` (String, required).
3. Task: Add two new fields to the schema:
   - `description` (String, required)
   - `genre` (String, required, enum: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Other'])

**API Routes Completion (15 Marks)**
1. Open `backend/routes/bookRoutes.js` and `backend/controllers/bookController.js`.
2. The GET and POST routes are provided.
3. Task: Implement the missing `DELETE /:id` route to allow deleting a book by its ID.
4. Task: Ensure the POST and PUT routes handle the new `description` and `genre` fields you added to the model.

### Part 2: Frontend Completion (30 Marks)
The frontend is a Vite + React application. It currently can fetch and create books, but it is missing the new fields and the delete functionality.

**UI Modification (15 Marks)**
1. Open `frontend/src/components/BookForm.jsx`.
2. Task: Update the form to include input fields for `description` (textarea or text input) and `genre` (dropdown/select).
3. Task: Ensure these new fields are properly managed in the component's state and sent to the backend when the form is submitted.

**Displaying New Data (10 Marks)**
1. Update the book list display in `frontend/src/components/BookCard.jsx` to show the `description` and `genre` of each book along with the `title` and `author`.

**Delete Functionality (5 Marks)**
1. Task: Add a "Delete" button next to each book in the list inside `BookCard.jsx`.
2. Task: Implement the frontend logic in `HomePage.jsx` to call your DELETE backend API when the button is clicked, and remove the book from the UI state.

### Part 3: Deployment (25 Marks)
You must deploy your completed application.

**Backend Deployment (10 Marks)**
1. Deploy your backend to a free service like Render or Railway.
2. Ensure you configure the environment variables (`MONGO_URI`) on the deployment platform.
3. Note down your deployed backend URL.

**Frontend Deployment (10 Marks)**
1. Update your frontend `.env` (or config file) to point API requests to your deployed backend URL instead of `http://localhost:5000`.
2. Deploy your frontend to a free service like Vercel or Netlify.

**Cross-Origin Verification (5 Marks)**
1. Ensure your backend CORS configuration allows requests from your deployed frontend URL.
2. Verify that you can add and delete books from the deployed frontend.

### Part 4: Submission (15 Marks)
**GitHub Repository (5 Marks)**
1. Initialize a Git repository for your project.
2. Commit your completed frontend and backend code.
3. Push the code to a Public GitHub Repository.

**Documentation & Screenshots (10 Marks)**
1. Create a `SUBMISSION.md` file in the root of your GitHub repository.
2. Include the following in your `SUBMISSION.md`:
   - Link to your deployed Frontend.
   - Link to your deployed Backend.
   - Screenshot 1: The working UI showing books with the new `description` and `genre` fields.
   - Screenshot 2: The MongoDB Atlas collection view showing data has been successfully saved to the cloud database.
   - Screenshot 3: Proof of successful deployment (e.g., Render/Vercel dashboard showing "Live" or "Success").

Good Luck!
