// Import necessary modules and types
import { Social } from "@/models/socials";
import sanityClient from "./sanity";

// Define an asynchronous function to fetch socials data
export const getSocials = async (): Promise< Social[]> => {
    // Define the query to fetch social data
    const query = `*[_type == "social"]`;

    // Use sanityClient to fetch social data using the defined query
    const socials: Social[] = await sanityClient.fetch({query});

    // Return the fetched social data
    return socials;
};
