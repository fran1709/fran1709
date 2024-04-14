import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "./Firebase";
import { Persona } from "./Interfaces";

// Function to fetch the first document from the 'Persona' collection
export const getFirstPersonaDocument = async () => {
    try {
        // Create a reference to the 'Persona' collection
        const personasCollection = collection(dataBase, "Persona");

        // Execute the query and get the documents
        const querySnapshot = await getDocs(personasCollection);

        // Check if there are any documents in the collection
        if (querySnapshot.empty) {
            console.log("No documents found in 'Persona' collection.");
            return null;
        }

        // Get the first document from the collection
        const firstDocument = querySnapshot.docs[0].data() as Persona;

        // Log the data of the first document
        //console.log("Data of the first document in 'Persona' collection:", firstDocument);

        // Return the data of the first document
        return firstDocument;
    } catch (error) {
        console.error("Error getting documents:", error);
        return null;
    }
};

