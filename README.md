# Mailchimp Newsletter Signup

This is a simple web application that lets users sign up for a Mailchimp newsletter using their first name, last name, and email address. The user information is sent to the Mailchimp API and added to the specified mailing list.

## Preview 
![App Preview](https://github.com/mridul588/newsletter-signup/blob/main/newsletter.png)

## Installation

1. Clone the repository or download the code.
2. Open the terminal and navigate to the project directory.
3. Run `npm install` to install the required packages.
4. Replace the `auth` value in the `options` object in `app.js` with your own Mailchimp API key and list ID.

## Usage

1. Run `node app.js` in the terminal to start the server.
2. Open a web browser and navigate to `http://localhost:3000`.
3. Fill out the signup form with your first name, last name, and email address.
4. Click the "Sign Up" button to submit the form.
5. You will receive a success message if the signup was successful.

## Technologies Used

- Node.js
- Express.js
- body-parser
- request
- https

## API Reference

This application uses the [Mailchimp API v3.0](https://mailchimp.com/developer/marketing/api/lists/add-member-to-list/) to add users to a mailing list. Please refer to the Mailchimp API documentation for more information.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
