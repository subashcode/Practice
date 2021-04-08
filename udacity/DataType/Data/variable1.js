/*Directions:
Here are two awesome messages:

Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
Hi, my name is James. I love baseball. In my spare time, I like to read.
Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).

Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.
*/
/*
/*
 * Programming Quiz: One Awesome Message (2-12)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 *
 * 2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above. The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby`
 *
 * 3. The `awesomeMessage` variable should have the correct format, as shown below:
 * "Hi, my name is _____. I love ______. In my spare time, I like to ______."
 *
 * 4. Print `awesomeMessage` variable to the console using log() method
 */
 
 /*
 * Example:
 * - Assuming, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the following message:
 * 
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */
 
 
// Add your code here

var firstName = "Julia";
var interest = "cats";
var hobby = "play video games"
var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);