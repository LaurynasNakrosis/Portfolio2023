// Import the SanityClient module from "next-sanity-client"
import  SanityClient  from "next-sanity-client"

// Create a new instance of SanityClient with configuration options
const sanityClient = new SanityClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!, // Set the project ID from environment variables
    dataset: process.env.SANITY_STUDIO_DATASET as string, // Set the dataset from environment variables
    useCdn: process.env.NODE_ENV === 'production', // Use the Content Delivery Network (CDN) in production environment
})

// Export the configured sanityClient instance
export default sanityClient;