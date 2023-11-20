import fetchWrapper from "./fetch-wrapper.js"

const username_form = document.querySelector("#username_form")
const userName_input = document.querySelector("#userName_input")

const API = new fetchWrapper("https://api.github.com")

username_form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const response = await API.get(`/users/${userName_input.value}/repos`)
      response.forEach(el => {
            console.log(el)
      })
})