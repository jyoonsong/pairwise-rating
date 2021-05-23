import { Mongo } from 'meteor/mongo';
import loveStories from './stories.json'

Stories = new Mongo.Collection('stories');

// delete all documents
// Stories.remove({});

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