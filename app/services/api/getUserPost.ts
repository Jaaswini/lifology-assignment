import { FAILURE, SUCCESS } from "@/assets/constants"
import axios from "axios"

export async function getUserPosts(id: any) {
  const url: string = `https://dummyjson.com/users/${id}/posts`
  try {
    const response = await axios.get(url)
    return { status: SUCCESS, data: response.data }
  } catch (error) {
    return { status: FAILURE, data: error }
  }
}
