#FRONT_END_EXERCISE

As part of this Project, I have created 400 random assets, 200 currencies and 200 stocks (It's just dummy data) from id 1-400

Create a stream from those 400 assets which fires 1 update per secound for each asset:

price must be changed each update by -1 to 1 and with the current timestamp, the rest will stay the same

The Single page application is created in the following way:

<img src="https://i.ibb.co/ZWL9Ds9/Screen-Shot-2020-10-23-at-2-19-40-PM.png" alt="Screen-Shot-2020-10-23-at-2-19-40-PM" border="0">

Upon clicking on the table header we can sort the data to ascending and descending order

<img src="https://i.ibb.co/JdJ0fzF/Screen-Shot-2020-10-23-at-2-52-52-PM.png" alt="Screen-Shot-2020-10-23-at-2-52-52-PM" border="0">
<img src="https://i.ibb.co/sgGGnVy/Screen-Shot-2020-10-23-at-2-20-10-PM.png" alt="Screen-Shot-2020-10-23-at-2-20-10-PM" border="0">

Created filters on each individual value of an asset:

<img src="https://i.ibb.co/yfbv755/Screen-Shot-2020-10-23-at-2-19-58-PM.png" alt="Screen-Shot-2020-10-23-at-2-19-58-PM" border="0" height=90px">

We can also favorite or unfavorite a particular asset using the follwing icons:

<div>
<img src="https://i.ibb.co/fYJjHRz/Screen-Shot-2020-10-23-at-2-20-25-PM.png" alt="Screen-Shot-2020-10-23-at-2-20-25-PM" border="0" height="80px">
<img src="https://i.ibb.co/s6LFdsN/Screen-Shot-2020-10-23-at-2-58-55-PM.png" alt="Screen-Shot-2020-10-23-at-2-58-55-PM" border="0" height="80px">
</div>

We are adding the favorite assets to local storage

<img src="https://i.ibb.co/W3FB12b/Screen-Shot-2020-10-23-at-2-21-46-PM.png" alt="Screen-Shot-2020-10-23-at-2-21-46-PM" border="0">

<b>Tech Stack:</b> React.js, JavaScript, HTML5,CSS, react-testing-library

<b>Commands to run the application:</b>

 yarn install
 
 yarn start 
