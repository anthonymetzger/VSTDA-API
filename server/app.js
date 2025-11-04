const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();

app.use(express.json());

let data = [
        {
            todoItemId: 0,
            name: 'an item',
            priority: 3,
            completed: false
        },
        {
            todoItemId: 1,
            name: 'another item',
            priority: 2,
            completed: false
        },
        {
            todoItemId: 2,
            name: 'a done item',
            priority: 1,
            completed: true
        }
    ];

//1:54pm: I am extremely unfamiliar with app.post. I want to be able to dive into it and this portion is taking me
//the longest. So far, the rest of the code I was able to figure out. I've probably been working on this
//project for about an hour to an hour and a half and I am not making any significant progress. When I find
//a solution, I am going to comment line by line, in great detail what everything is doing so I can better
//get a grasp on how app.post works as a whole, and how it is related to the other methods.

app.post('/api/TodoItems', (req, res) => {
    //OLD CODE!!vv
    // let newData = req.body;                                         
    // console.log(req.query.todoItemId);                              
    // data.push(newData);
    // console.log("length = " + data.length);
    // res.status(201).send(data); 
    //explaination:
    //from the looks of what the contract wanted, looked like it wanted me to add something and have it pushed
    //to the new array, perhaps through a form or through a query. For a long while, I couldn't find out
    //how to obtain the data that they were trying to post. This is what took me the longest. For a long
    //while, I thought it was the method I was using to send the status and the data, but it wasn't the
    //method, but what I was sending in the method. Regardless, I kept trying to send the updated version
    //of the array but that is not what it called for, it was in fact much simpler than that, which I am
    //thankful for. I was overthinking it again and I managed to get through this blockage at about 4pm.
    //I unfortunately didn't get it in the time that I wanted to, but I did manage to get it faster than
    //the previous project. I started this one earlier today and everything else was pretty self explainatory,
    //even prior to running the tests. Below is going to be the code that I've discovered to work:
    let newData = req.body;
    res.status(201).send(newData);
    //simple and not nearly as complex as I was attempting to make it. I am making newData = the request's body
    //which I am assuming that it's being submitted from somewhere I couldn't neccessarily lay my own eyes on,
    //which in this case would have made it slightly easier in this certain case. And afterwards I am 
    //responding with the status code of (201) which indicates that something has been updated successfully.
    //which was also confusing because I didn't *really* update anything. I just made it into a variable.
});

app.get('/', (req, res) => {
    res.json(200);
    
});

app.get('/api/TodoItems', (req, res) => {
    res.send(data);
});

app.get(`/api/TodoItems/:number`, (req, res) => {
    let itemID = req.params.number;
    res.send(data[itemID]);
})

app.delete(`/api/TodoItems/:number`, (req, res) => {
    let itemID = req.params.number;
    res.send(data[itemID]);
});


module.exports = app, data;
