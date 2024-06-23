import { getDocs, collection, query, limit, startAfter } from "firebase/firestore"; 
import { getDb } from "../firebase";

const collection_name = "products";
const pageSize = 12; // Number of documents per page

export const findAll = async (page = 1) => {
    const db = getDb();
    const collectionRef = collection(db, collection_name);

    // Calculate the starting document index for the requested page
    const startIndex = (page - 1) * pageSize;

    // Initialize the query
    let docQuery = query(collectionRef, limit(pageSize));

    if (startIndex > 0) {
        // Fetch the documents before the current page to get the startAfter document
        const previousDocsQuery = query(collectionRef, limit(startIndex));
        const previousDocsSnapshot = await getDocs(previousDocsQuery);

        // Get the last document from the previous batch
        const lastVisible = previousDocsSnapshot.docs[previousDocsSnapshot.docs.length - 1];

        // Update the query to start after the last document of the previous batch
        docQuery = query(collectionRef, startAfter(lastVisible), limit(pageSize));
    }

    const docSnapshot = await getDocs(docQuery);

    const res = [];
    docSnapshot.forEach(doc => {
        res.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return res;
};
