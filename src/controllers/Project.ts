import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "./Firebase";
import { Project } from "./Interfaces";

// Function to fetch all documents from the 'Proyectos' collection
export const getProjectDocuments = async () => {
    try {
        // Create a reference to the 'Proyectos' collection
        const proyectosCollection = collection(dataBase, "Proyectos");

        // Execute the query and get the documents
        const querySnapshot = await getDocs(proyectosCollection);

        // Check if there are any documents in the collection
        if (querySnapshot.empty) {
            console.log("No documents found in 'Proyectos' collection.");
            return [];
        }

        // Create an array to store the data of all documents
        const projectDocuments: Project[] = [];

        // Iterate over the documents and collect the data
        querySnapshot.forEach((doc) => {
            const projectData = doc.data() as Project;
            projectDocuments.push(projectData);
        });

        // Log the data of all documents
        //console.log("Data of all documents in 'Proyectos' collection:", projectDocuments);

        // Return the data of all documents
        return projectDocuments;
    } catch (error) {
        console.error("Error getting documents:", error);
        return [];
    }
};
