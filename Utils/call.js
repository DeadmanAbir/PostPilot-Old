import axios from "axios"

export async function checkForUserAndUpdate({ userId }) {
    const data = { userId }
    if (userId) {
        const response = await axios.post("http://localhost:5000/general/checkForUser",{}, {
            headers: {
                Authorization: `Bearer ${userId}`,
              },
        });

    }
}