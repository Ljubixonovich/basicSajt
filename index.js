const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const log = (...logs) => console.log(...logs)

btn1.onclick = function () {
  getPosts()
    .then((p) => {
      const posts = p
      log('posts: ', posts)
      return
    })
    .then(() => log('na kraju'))
    .then(() => log('na kraju 2'))
    .catch((error) => log('error: ', error))
}

// btn1.onclick = async function() {
// 	try {
// 		const posts = await getPosts()
// 		console.log('posts: ', posts)
// 	} catch (error) {
// 		console.log('error: ', error)
// 	}
// }

// btn2.onclick = () =>  {
// 	getPosition()
// 	.then(p => {
// 		log('Position: ', p.coords)
// 	})
// 	.catch(error => log('error: ', error))
// }

btn2.onclick = async (e) => {
  console.log('e: ', e)
  try {
    const p = await getPosition()
    log('Position: ', p.coords)
  } catch (error) {
    log(error)
  }
}

const btn3Handler = () => {}
btn3.onclick = btn3Handler
