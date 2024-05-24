const axios = require('axios');
const { faker } = require('@faker-js/faker');
const CustomControllers = require ('../../unit/controllers/controller')
const controllers = new CustomControllers()
const postData = require ('../../models/postData')

describe('Get response from url', () => {

test ('Successfull response with correct url', async () => {
  const response = await controllers.getAllUsers('https://jsonplaceholder.typicode.com/posts')
})

test ('Error response with ivalid url', async () => {
  const response = await controllers.getAllUsers('https://onplaceholder.typicode.com/posts')
})

})

describe('(Create) Creating a user', () => {

test ('Correct data for user creation', async () => {
  const response = await controllers.createUser(postData) //faker rnd data
})

test ('invalid data for user creation', async () => {
  const response = await controllers.createUser(null,null,null)
})

})

describe('(Read) Checking created user', () => {
  
test('User was created', async () => {
  const response = await controllers.checkCreatedUser('magnam facilis autem','dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas', 1)
})
{

}
test('User not found', async () => {
  const response = await controllers.checkCreatedUser(postData) //faker rnd data
})

})

describe('(Update) Updating created user', () => {

test('Updating user with correct data', async ()=>{
  const response = await controllers.updateUser(postData) //faker rnd data
})

test('Updating user with invalid data', async ()=>{
  const response = await controllers.updateUser('','', null)
})

})

describe('(Delete) Deleting created user', () => {

test('User was deleted', async ()=>{
  const response = await controllers.deleteUser('https://jsonplaceholder.typicode.com/posts/1')
})

test('Error when deleting a user', async ()=>{
  const response = await controllers.deleteUser('https://jsonplaceholder.typicode.com/posts/')
})
})