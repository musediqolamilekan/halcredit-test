## Design Test Submission

This README document provides detailed instructions on how to setup, run, and understand the design test project I have submitted. 

### About the Project

This design test project is a React application that includes a table of transactions, each with a "View" button. Clicking on this button will open a modal displaying the history of the selected transaction. 

The project was created using React and CSS for styling.

### Project Setup

Here are the steps you need to follow to set up and run the project:

1. Clone the repository
```
git clone <repository-url>
```

2. Navigate to the project directory
```
cd <project-directory>
```

3. Install the dependencies
```
npm install
```

4. Start the project
```
npm start
```

The project should now be running at `http://localhost:3000`.

### Design Decisions

**Table:** I created a table to display the transactions because it is a straightforward way to present and organize data. It provides clear separation between each transaction and allows the user to easily scan and understand the information.

**Modal:** I used a modal to display the transaction history as it focuses the user's attention on the selected transaction's history. The modal is an effective way to provide additional information without navigating away from the current view.

**Styling:** I kept the styling simple and clean to ensure that the data and functionality were the focus of the design. I used common design patterns for button and table styles to ensure familiarity and ease of use for the user.

**Pagination** There is a Pagination for the table if the transactions increase significantly.

### Future Enhancements
1. Search and filter functionality to help the user locate specific transactions.
2. More detailed transaction history, possibly including a timeline view.

---

I hope you find the design and execution up to standards. Looking forward to your feedback.

Best Regards,
Olamilekan Musediq
