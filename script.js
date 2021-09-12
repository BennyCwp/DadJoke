const button = document.querySelector(".get-jokes")
const jokesOutput = document.querySelector(".output")

const getJokes = async () => {
  try {
    const config = { headers: { Accept: "application/json" } }
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    return res.data.joke
  } catch (error) {
    console.log("FAILED TO GET JOKES", error)
  }
}

const addJokes = async () => {
  try {
    const joke = await getJokes()
    const div = document.createElement("div")
    div.classList.add("jokes")
    div.append(joke)
    jokesOutput.appendChild(div)
  } catch (error) {
    console.log("FAILED TO ADD JOKES", error)
  }
}

button.addEventListener("click", addJokes)
button.addEventListener("click", () => {
  const child = jokesOutput.lastChild
  jokesOutput.removeChild(child)
})
