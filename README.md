# Theta Tau Rush App

## Usage

```bash
$ git clone git@github.com:theta-tau/rush.git
$ cd rush
$ npm install
$ ionic serve -l
```

## First-time Setup

1. [Download](https://nodejs.org/en/download/) Node.js 
2. [Download](https://git-scm.com/downloads) Git
3. Open up your terminal and type:
```bash
npm install -g cordova ionic
```
This will install the necessary packages for the app to run in your local environment.

If you have not configured Git for your computer before, PLEASE DO SO NOW!
Here are some resources to help you Git started:
- [How to connect with ssh](https://help.github.com/articles/connecting-to-github-with-ssh/)
- [Good Git tutorial](https://www.atlassian.com/git/tutorials)

Then type:
```bash
$ git clone git@github.com:theta-tau/rush.git
$ cd rush
$ npm install
$ ionic serve -l
```
And you should be able to see the application in your browser! You can switch the platform on the top right.

## Open-source contribution 

1. You must now be very eager to play around with the app and mess it all right up now, but please have some courtesy!
   Before you make any changes:
    ```bash
    $ git checkout -b myfeature
    $ git push origin myfeature
    ```
  This creates a branch both locally and on Github! Now you can go ahead and write your CSI hacking code in Visual Basic or whatever.

2. When you wanna check in your changes, _PLEASE DO NOT CHECK DIRECTLY INTO MASTER_

3. Instead, let's follow good etiquette and submit a pull request:
  ```bash
  $ git add .
  $ git commit -m "I added <feature> to <app> by adding <files> and changing <files>"
  $ git push origin myfeature
  ```

4. Then go to the repository on Github and press the shiny new green button that says "submit pull request"!
5. Type out a few meaningful comments about your changes and make the submission.
6. Please assign at least 3 others to review your code
7. Once the code review finishes, you will be greenlit to merge into master.

_Essentially, master branch should only contain merge commits! Please only work on your own branch_

_Credits to CS130 Google engineers: [Standard convention](https://docs.google.com/document/d/1LHh7r_Xsqe1OxMn5KrWoBd9gbq_50H_pOcUQw26fzlM/pub)_
   

