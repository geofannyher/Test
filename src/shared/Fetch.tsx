import axios from "axios"

export const GetNews = async () => {
    try {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-10-12&sortBy=publishedAt&apiKey=ae9d63e642a2462f9304889476937b12`)
        return { res }
    } catch (error) {
        return { error: error }
    }
}
