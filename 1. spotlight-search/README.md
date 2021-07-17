# Spotlight Search

[Spotligit Search](https://support.apple.com/guide/mac-help/spotlight-mchlp1008/mac) is one of the most useful tools in a Mac. It helps you quickly open any application, file, folder or a website from anywhere. This challenge uses the UI of Spotlight Search to create a simple word filter.

## Challenge Description

<img src="../.github/.images/spotlight-search.jpg" alt="Spotlight Search" width="60%" />

In this challenge, you need to load all the words in an array. You need to filter the words as you type in the search bar and display the results in a dropdown. This is to test your knowledge is basic React workflow and JavaScript utilities.

## Hint

Use `Array.prototype.filter()` with `String.prototype.includes()` method to filter out the words as you type.

```javascript
words.filter((word) => word.toLowerCase().includes(value.toLowerCase())
```
