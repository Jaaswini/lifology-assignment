import axios from "axios"
import { get } from "mobx"

export async function getUsers() {
  const url: string = "https://dummyjson.com/users"
  try {
    const response = await axios.get(url)

    console.log("dataaaaaaa res", response)
    return { status: "SUCCESS", data: response.data }
  } catch (error) {
    console.log("rror while fetching user details", error)
    return { status: "FAILURE", data: error }
  }
}
