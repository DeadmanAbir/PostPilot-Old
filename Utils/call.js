import axios from "axios"

export async function checkForUserAndUpdate({ userId }) {
    const data = { userId }
    console.log(process.env.FRONTEND_URL)
    if (userId) {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/general/checkForUser`,{}, {
            headers: {
                Authorization: `Bearer ${userId}`,
              },
        });

    }
}