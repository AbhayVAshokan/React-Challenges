# Random User API Table

This challenge steps up a little. All the real world applications that you build will involve API calls. For this challenge, you have to build a table that displays random users from [randomuser.me api](https://randomuser.me/api/) API.

## Challenge Description

<img src="../.github/.images/randomuserapi-table.jpg" alt="randomuser-api table" width="60%" />

Well, that's the easy part. The table must have a search feature to filter out the users based on the search input (name, gender, email). The user can click on the table headers to sort according to the selected column (ascending and descending).

The users must have the provision to select multiple rows, and export it as csv.

## Hint

[axios](https://www.npmjs.com/package/axios) is a popular library for making API calls. The documentation is self explanatory.

There is an easy hack for filtering the rows based on the search input. All the users are represented in the form on javascript objects. `JSON.stringify` converts them into a string. A simple `String.prototype.substr()` can be used to check if the filter is applicable.

```javascript
users.filter((user) =>
  JSON.stringify(Object.values(user))
    .toLowerCase()
    .includes(search.toLowerCase())
),
```

Date formatting can be easily done using `Date.prototype.toLocaleDateString()` instead of depending on heavy third party packages like [moment](https://www.npmjs.com/package/moment).

[react-csv](https://www.npmjs.com/package/react-csv) will come in handy to help with the csv export.
