const axios = require('axios');

export default async function getProjects() {
    /**
     * Gets all of he projects
     */
    try {
        const endpoint = "/projects?populate=project_tags"

        const config = {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`
            }
        }

        const resp = await axios.get(`${process.env.API_BASE_URL}${endpoint}`, config);

        return resp.data.data
    } catch (err) {
        console.error(err);
        return false
    }
}