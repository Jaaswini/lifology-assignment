**Basic User Detail and User Post App**

**Introduction**

This React Native application demonstrates fetching and displaying user data from the DummyJson API (https://dummyjson.com/docs/users) and implementing user list and post detail screens.

**Features**

**User List Screen**
Fetches user data from https://dummyjson.com/users.
Displays each user's name and brief details (e.g., email, designation) in a card or list item, optimized for efficient rendering and minimal re-renders using FlatList.
Did not Implement infinite scrolling as api details are not clear.
Displays a loading indicator while fetching more users.

**User Posts Screen**
Navigates to a new screen showcasing a list of posts for a selected user.
Fetches posts from https://dummyjson.com/users/{userId}/posts.
Displays each post's title and body in a scrollable view.
Did not Implement infinite scrolling as api details are not clear.
Displays a loading indicator while fetching more posts.

**Installation**

**Prerequisites**
Node.js and yarn: Ensure you have Node.js (version 14 or higher) and npm (version 5.6 or higher) installed on your machine. You can download them from https://nodejs.org/.

**Clone the Repository**
Use Git to clone this repository:
Bash
git clone https://github.com/your-username/your-repository-name.git
Use code with caution.

Replace your-username with your GitHub username and your-repository-name with the actual name of your repository.

**Install Dependencies**
Navigate to the cloned repository directory and run the following command to install dependencies:
Bash
yarn install
Use code with caution.

Running the App

Start the React Native Development Server:
Open a terminal window in the project directory and run:
Bash
yarn start
Use code with caution.

This will start the development server and launch the app on your emulator or connected device.
Usage

**_User List Screen_**
The app will launch on the User List Screen, displaying a list of users fetched from the API.

**_User Posts Screen_**
Clicking on a user from the list will navigate you to the User Posts Screen, showcasing the selected user's posts.

**_Technologies Used_**
React Native: A framework for building cross-platform mobile apps using JavaScript and React.
FlatList: A high-performance component for rendering large lists efficiently.
Axios: Third party react-native plugin.

**_Further Enhancements_**
Error Handling: Implement error handling mechanisms to gracefully handle situations where API requests fail or data is unavailable.
Caching: Implement caching strategies to store frequently accessed data locally and reduce API calls.
User Interface Enhancements: Customize the user interface (UI) with styling and potentially include visual elements like avatars for users.
Testing: Write unit and integration tests to ensure the app's functionality and stability.

Feel free to fork this repository, make changes, and create pull requests to contribute your improvements.
