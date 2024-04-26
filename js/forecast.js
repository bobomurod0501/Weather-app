const KEY = 'b9168d6709b7fda26a76daee261a0e9b'



const getDate = async(city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    loader(true)
    const request = await fetch(base+query)
    const data = await request.json()
    loader(false)
    return data
}
// getDate('London')
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })