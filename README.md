# React Challenges

[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://AbhayVAshokan.github.io/React-Challenges)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/AbhayVAshokan/React-Challenges/blob/master/LICENSE)

All the different challenges test different levels of your knowledge in JavaScript and React. It is best if you would do it on your own instead of just reading my code. I promise you you will learn a lot. I did learn a lot just by preparing these.

I have used [React (TypeScript)](https://create-react-app.dev/docs/adding-typescript/) and [Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app) for all the challeges. You are free to use any library you prefer. You can modify the UI as you like. Just make sure you get the functionalities right, because that's what the challenges are all about.

**_Open each folder to get a detailed description of each challenge._**

### Final Results: [React Challenges](https://AbhayVAshokan.github.io/React-Challenges)

## Challenges

### 1. Spotlight Search (Very Easy)

Final Result: [Spotlight Search](https://AbhayVAshokan.github.io/React-Challenges/spotlight-search)

[Spotligit Search](https://support.apple.com/guide/mac-help/spotlight-mchlp1008/mac) is one of the most useful tools in a Mac. It helps you quickly open any application, file, folder or a website from anywhere. This challenge uses the UI of Spotlight Search to create a simple word filter.

In this challenge, load all the words in an array. You need to filter the words as you type in the search bar and display the results in a dropdown. This is to test your knowledge is basic React workflow and JavaScript utilities.

<img src=".github/.images/spotlight-search.jpg" alt="Spotlight Search" width="60%" />

---

### 2. Formik Todo (Easy)

Final Result: [Formik Todo](https://AbhayVAshokan.github.io/React-Challenges/formik-todo)

If you have worked with React before, it is very likely that you have built a Todo application. This challenge is not just about building a Todo application, but also about building a form.

Almost every website you build will have a form. Even if it is a trivial one, it throws a bunch of errors and eat up a lot of time. [Formik](https://formik.org) is one of the most popular libraries for building forms. It makes your lives easy. Just a few lines of code and viola, no more errors.

In this challenge, you need to create a Todo application using Formik. It must be able to do all the usual stuff like adding a new Todo, marking a Todo as done, and deleting a Todo.

<img src=".github/.images/formik-todo.jpg" alt="Formik Todo" width="60%" />

---

### 3. Dark Theme Toggle (Intermediate)

Final Result: [Dark theme Toggle](https://AbhayVAshokan.github.io/React-Challenges/darktheme-toggle)

Things will start getting spicy here. I have chosen a complex UI for this one. The aim is to build it with code readability in mind. There are scopes to use higher order components (HOC) to wrap the stateless functional components.

The main challenge is the dark theme toggle. It is easy to implement it using [Tailwind CSS](https://tailwindcss.com) or [Styled Components](https://styled-components.com). Feel free to experiment it with any other library.

<img src=".github/.images/light-theme.jpg" alt="Light Theme" width="60%" />
<img src=".github/.images/dark-theme.jpg" alt="Dark Theme" width="60%" />

---

### 4. randomuserapi Table (Advanced)

Final Result: [Random User API Table](https://AbhayVAshokan.github.io/React-Challenges/randomuserapi-table)

This challenge steps up a little. All the real world applications that you build will involve API calls. For this challenge, you have to build a table that displays random users from [randomuser.me api](https://randomuser.me/api/) API.

Well, that's the easy part. The table must have a search feature to filter out the users based on the search input (name, gender, email). The user can click on the table headers to sort according to the selected column (ascending and descending).

The users must have the provision to select multiple rows, and export it as csv.

<img src=".github/.images/randomuserapi-table.jpg" alt="randomuser-api table" width="60%" />

---

### 5. React Router and Redux (Expert)

I am looking for a fun idea that is not too long to be boring, but complex enough to be an expert category. If you have any good ideas, please share them here: [Issue#1](https://github.com/AbhayVAshokan/React-Challenges/issues/1).

## Setup

If you want to have the exact setup as mine, then follow the steps below. But if you want to use your own setup, then you can skip this section.

1. Create a React (TypeScript) project

```bash
npx create-react-app <challenge-name> --template=typescript
```

2. Add Tailwind CSS to your project: [Official Documentation](https://tailwindcss.com/docs/guides/create-react-app)

Try to keep third party libraries to a minimum.

## Contribution

I started working these projects just to kill some time. Soon I realized that it could do much more than that. Feel free to pull request new challenges or improve existing ones. The aim is to make it a good learning resource for everyone, and trust me, if you can build these on your own, then you are ready to call yourselves a react expert :)
