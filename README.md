## Interactive Developer Test (February 2016)

### Task 1 - Number Validity Checker

**Description**

The purpose of this task is to find the value of x and to check whether a number is valid once x is known.

**Instructions**

1. Given a string in the format, **22233344455x**, start at the rightmost character (x) and moving left, double the value of every second digit.
2. If this product of this operation is greater than 9, then sum the individual digits.
3. Once done, sum all the digits.
4. Now calculate the value of x by taking the result of step 3 and multiplying it by 9. The last digit of the product is the value of x.
5. Add this value to the previously calculated sum in step 3.
6. To confirm the validity of the number, check whether the sum of step 5 modulo 10 is zero.
7. Please log your results to the console in the following format:
	- The number 22233344455x is valid. The value of x is 8.
	- The number 33322255544x is invalid. The value of x is 9.
8. Please add your final code to the **check-validity.js** file.

**Sample data**

'79927398718x'

'79927398719x'

'79927398712x'

'79927398713x'

'79927398714x'

'79927398715x'

'79927398716x'

'79927398717x'

'79927398710x'

'79927398711x'

### Task 2 - AngularJS game lobby

**Description**

Build a simple AngularJS app that consumes two feeds and outputs a grid list of games showing the game image, title, description and CTA button.

**Instructions**

1. Before starting, please look at **test-mockup.jpg**, **category-feed.json** and **game-feed.json**
2. The **game-feed.json** file contains a list of the individual game objects, each associated with a numeric key. This numeric key corresponds to the gameId field in the **category-feed.json** file.
3. For the **'Home view'**, please initially display 5 items for each of the new, scratchcards and jackpot categories with an option to show another 5 items on click of the **'Show More'** button.
4. When all the items for a particular section has been shown, please hide the button.
5. For the **'New'**, **'Scratch Cards'** & **'Jackpot'** views, please show a grid list of all the games for the selected section.
6. For the CTA button, please create a simple hash link using the **playURL**
7. Please add all your JS code to the **app.js** file
8. Any CSS can be embedded directly into the **index.html** file
9. If you're using view templates, feel free to create individual .html files for each one used.

### Nice to haves
- Code written in ECMAScript 6 (ES2015)
- Use of Promises for feed requests

### Submitting code
Please create a pull request on this project once you're ready to submit your code.