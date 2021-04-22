const baseUrl = 'https://jsonplaceholder.typicode.com/';

// using then/catch
const getPosts = () => {
  return new Promise((res, rej) => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(posts => res(posts))
    .catch(err => rej(err))
  });
}

// usin async/await
const getPosts2 = () => {
  return new Promise(async (res, rej) => { 
    try {
      const response = await fetch('http://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      return res(posts)     
    } catch (error) {
      rej(error)
    }   
  });
}

const getPosition = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        return res(success);
    }, err => rej(err))
  })
}
