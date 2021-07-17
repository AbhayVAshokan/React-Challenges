# Formik Todo

Final Result: [Formik Todo](https://AbhayVAshokan.github.io/React-Challenges/formik-todo)

If you have worked with React before, it is very likely that you have built a Todo application. This challenge is not just about building a Todo application, but also about building a form.

Almost every website you build will have a form. Even if it is a trivial one, it throws a bunch of errors and eat up a lot of time. [Formik](https://formik.org) is one of the most popular libraries for building forms. It makes your lives easy. Just a few lines of code and viola, no more errors.

## Challenge Description

<img src="../.github/.images/formik-todo.jpg" alt="Formik Todo" width="60%" />

In this challenge, you need to create a Todo application using Formik. It must be able to do all the usual stuff like adding a new Todo, marking a Todo as done, and deleting a Todo.

## Hint

For removing a todo item, `Array.prototype.filter()` will come in handy. For marking a todo as completed, `Array.prototype.map()` would be your best choice.

Make sure you have assigned a unique id to all the todo items. Assigning `index` as key would not be an ideal choice. On deleting an item, the index values of the remaining items gets reassigned, causing wierd errors. For more information about lists and keys, click [here](https://reactjs.org/docs/lists-and-keys.html).
