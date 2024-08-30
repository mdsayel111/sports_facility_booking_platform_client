// create config obj
const config = {
    imgbbApiKey: import.meta.env.VITE_IMGBB_API_KEY,
    baseUrl: import.meta.env.VITE_BASE_URL,
    cloudinaryCloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
    cloudinaryApiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
}

export default config