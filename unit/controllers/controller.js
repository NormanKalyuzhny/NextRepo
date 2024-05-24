const axios = require('axios');
module.exports = class CustomControllers {
    async getAllUsers(url){
        try {
            const response = await axios.get(url)
            expect(response.status).toBe(200)
            console.log("status code is -",response.status)
        } catch (error) {
            expect(error.code).toEqual('ENOTFOUND')
            console.log(error.code)
        }        
    }

    async createUser(title, body, userId){
        try{
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: title,
            body: body,
            userId: userId,
            })
            expect(response.status).toBe(201)
            console.log(response.status)
            console.log(response.data)
        } catch (error) {
            expect(error.response.status).not.toBe(201) //bug
        }
    }

    async checkCreatedUser(title,body,userId){
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const data = response.data
            const createdUser = {
              title: title,
              body: body,
              userId: userId,
              }
            const isUserCreated = data.some(user => {
              return  user.title === createdUser.title &&
                      user.body === createdUser.body &&
                      user.userId === createdUser.userId});
            expect(response.status).toBe(200)
            expect(isUserCreated).toBe(true);
            if (isUserCreated !== true){
                throw new Error('There is no user');
            }
          } catch (error) {
            console.log(error)
          }

    }

    async updateUser(title, body, userId){
        try{
            const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            title: title,
            body: body,
            userId: userId,
            })
            expect(response.status).toBe(200)
            
        } catch (error) {
            expect(error.response.status).not.toBe(200) //bug
        }
    }

    async deleteUser(url){
        try {
            const response = await axios.delete(url)
            expect(response.status).toBe(200)
        } catch (error) {
            expect(error.code).not.toBe(200)
            console.log(error.code)
        }       
    }
}

