/* eslint-disable import/no-anonymous-default-export */
const axios = require('axios');

export async function getPosts() {
    /**
     * Gets all posts
     * FIXME: need to implement paging for all posts. probaby want to accept an optional cursorID
     */
    try {
        const endpoint = "/posts?populate=post_tags";

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

export async function getPost(id) {
    /**
     * Gets a specific post
     */
     try {
        const endpoint = `/posts/${id}`;

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

export async function getPostBySlug(slug) {
    /**
     * Gets a specific post by slug.
     */
    try {
        let posts = await getPosts();

        for (let post of posts) {
            if (post.attributes.slug == slug) {
                return post;
            }
        }

        return false
    } catch (err) { 
        console.error(err);
        return false;
    }
}