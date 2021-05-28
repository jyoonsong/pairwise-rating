import { Mongo } from 'meteor/mongo';
import SimpleSchema from "simpl-schema";
import loveStories from './stories.json'

const Stories = new Mongo.Collection('stories');

// delete all documents
// Stories.remove({});

const storiesSchema = new SimpleSchema({
    author: {
      type: String,
      label: 'author',
    },
    condition: {
      type: String,
      label: 'condition',
    },
    story: {
        type: String,
        label: 'story',
    },
    index: {
        type: Number,
        label: 'index',
    },
    draft: {
        type: Number,
        label: 'draft',
    },
    words: {
        type: Number,
        label: 'words',
    },
    allocated: {
        type: Number,
        label: 'allocated',
    },
    similarity: {
        type: Number,
        label: 'similarity',
    },
    sentiment: {
        type: Number,
        label: 'sentiment',
    },
    compared: {
      type: Array,
      minCount: 1,
      optional: true,
    },
    'compared.$': String,
});

Stories.attachSchema(storiesSchema);


// loveStories.forEach(function(s) {
//     Stories.insert(s);
// });

// const sorted = Stories.find({}, {sort: {allocated: 1}}).fetch();
// sorted.forEach(s => {
//     Stories.update(s._id, { $push: { compared: s._id } });
// })

// console.log(sorted.length)
// console.log("loveStories added")

export default Stories;