import axios from "axios"

export async function getUserPosts(id: any) {
  console.log("iddd", id)
  const url: string = `https://dummyjson.com/users/${id}/posts`
  try {
    const response = await axios.get(url)

    console.log("dataaaaaaa res posts", response)
    return { status: "SUCCESS", data: response.data }
  } catch (error) {
    console.log("rror while fetching user details posts", error)
    return { status: "FAILURE", data: error }
  }
}
