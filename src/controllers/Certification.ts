import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "./Firebase";
import { Certification } from "./Interfaces";

// Function to fetch all documents from the 'Certification' collection
export const getCertificationDocuments = async () => {
    try {
        // Create a reference to the 'Certification' collection
        const certificationCollection = collection(dataBase, "Certificados");

        // Execute the query and get the documents
        const querySnapshot = await getDocs(certificationCollection);

        // Check if there are any documents in the collection
        if (querySnapshot.empty) {
            console.log("No documents found in 'Certification' collection.");
            return [];
        }

        // Create an array to store the data of all documents
        const projectDocuments: Certification[] = [];

        // Iterate over the documents and collect the data
        querySnapshot.forEach((doc) => {
            const projectData = doc.data() as Certification;
            projectDocuments.push(projectData);
        });

        // Log the data of all documents
        //console.log("Data of all documents in 'Certification' collection:", projectDocuments);

        // Return the data of all documents
        return projectDocuments;
    } catch (error) {
        console.error("Error getting documents:", error);
        return [];
    }
};
