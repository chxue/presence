# Presence

This doc talks about the high level behaviors. If you need a detailed technical walkthrough, please see the README file under presence/.

## Quick start

1. Clone this repository.
2. `cd presence/` to go into the Next project folder.
3. Run `npm i` to install all dependencies.
4. `npm run dev` to start the server.
5. Navigate to [http://localhost:3000/channels](http://localhost:3000/channels)

## Behaviors

This project accomplishes the following:

1. Creates a presence component that renders a list of users.
2. If the user count is 0, it will display "No active users". If the user count is greater than 5, it will display an expand button to show all users in a scrollable window. A collapse button will then be displayed to be able to revert back to the original state.
3. When hovering over each user, you will be able to see the username in a tooltip.
4. Two channels are provided in the demo. The "Static" channel has a fixed set of 20 users. The "Dynamic" channel has at most 50 users and changes based on the current time to show 0-50 users. The ordering is deterministic for better comparison.
5. The "Exit" button will unmount any presence component.
6. The user list is fetched from a serverless backend. A small delay of 5 seconds is added to each call to that API. This means that the first load will take longer to display and a ring loader should be displayed when it is loading.
7. Fetched data is cached and revalidated every second. In the "Dynamic" channel, the list is updated every 3 seconds. However, API calls take at least 5 seconds to complete so the browser will show stale data until new data has been fetched.
8. If you switch to another channel or exit, the data is still cached for some time so re-entering the same channel should not result in the 5-second loading.
9. User list includes "Chenxiao Xue", which represents the user initiating the request. However, it is filtered out from the display. If you want to confirm that it's there, simply change the cookie value of "myUserName" to anything other than "chenxiaoxue0".

## Modifications

I've modified certain requirements and here are the reasons.

1. "+ N more" does not show the list when you hover over it. Instead, I changed it to be a button that renders the list on click. One reason is that hovering is not mobile-friendly but the bigger reason is that a long list of user is not very readable.
2. Auth.currentUser is not exposed in a service/API call. If auth is done every time we load a channel, there will be some impact on resource and latency. It is much easier to store the credential in a session cookie, which is closer to my current implementation. Another way to do it is to use React Context and filter the list in front end.

## Future improvements

1. Testing could be added, including unit tests, screenshot tests, and web driver tests.
2. Better error handling could be added so that the frontend doesn't crash even if backend does.
3. Monitoring could be added.
4. Certain parts could be improved to make it closer to production, e.g. auth & backend.
