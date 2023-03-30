The first page is login page.
In the login page, the user can sign in and sign up.

(1) If the user presses the "로그인" button (sign in)and inputs appropriate form of email address and password, the screen is changed to homepage.

(2) If the user presses the "회원가입" button(sign up), the user can create the account of our app.
And the user info is transmitted to database.
So, the app manager can check the user info.
Finally, the screen is changed to homepage.

*Its authentication was developed using the firebase email authentication and the database means cloud firestore.

And we are now in homepage.

There are main contents and bottomnavagationbar.

In the main contents of homepage, there is the information that can be helpful to drug addicts.(our team will add this information later)

- The information will be read by the local data file in the app that includes the information of drug addiction treatment.

In the bottomnavigationbar, there are 5 routes to change the main content.

(1) In the first route, there is the repository of posts that the user who is signed in uploaded.

- The posts were read by the database that the user who is signed in now sent the data of posts

(2) In the second route, there is the bulletin board at which many users can upload.

- The posts were read by the database that all users sent the data of posts

(3) In the third route, there is the form that is needed to write the post.

- When the user writes the post, the data of that post is sent to the database. 

(4) In the fourth route, there is listview that shows history of chat with counselor and if the user press a certain listtile, the screen is moved to the chatting screen.

- The listview of chat is read by database that stores chatting log related in the user who is signed in now.
- the message of chatting screen is read by database that stores chat the user and the counselor sent before.

(5) In the fifth route, there is setting screen that our team will develop later.