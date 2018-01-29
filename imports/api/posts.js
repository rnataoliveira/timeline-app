import { Mongo } from 'meteor/mongo'

export const Posts = new Mongo.Collection('posts')

if(Meteor.isServer) {
    Meteor.publish('posts', function messagePublication() {
        return Posts.find()
    })
}