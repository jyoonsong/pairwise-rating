import { Mongo } from 'meteor/mongo';

Stories = new Mongo.Collection('stories');

// const loveStories = [
//     {
//         id: 0,
//         content: 'this is story 1',
//         allocated: 0
//     },
//     {
//         id: 1,
//         content: 'this is story 2',
//         allocated: 2
//     }
// ];

// loveStories.forEach(function(s) {
//     Stories.insert(s);
// });

export default Stories;