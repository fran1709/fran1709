import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "./Firebase";
import { University} from "./Interfaces";

// Function to fetch the first document from the 'Educacion' collection
export const getFirstEducacionDocument = async () => {
    try {
        // Create a reference to the 'Educacion' collection
        const educacionCollection = collection(dataBase, "Educacion");

        // Execute the query and get the documents
        const querySnapshot = await getDocs(educacionCollection);

        // Check if there are any documents in the collection
        if (querySnapshot.empty) {
            console.log("No documents found in 'Educacion' collection.");
            return null;
        }

        // Get the first document from the collection
        const firstDocument = querySnapshot.docs[0].data() as University;

        // Log the data of the first document
        //console.log("Data of the first document in 'Educacion' collection:", firstDocument);

        // Return the data of the first document
        return firstDocument;
    } catch (error) {
        console.error("Error getting documents:", error);
        return null;
    }
};

