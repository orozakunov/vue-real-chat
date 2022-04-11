import { ref } from "vue";
import { firestore } from "@/firebase/config";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    try {
      const collectionRef = query(
        collection(firestore, "messages"),
        orderBy("createdAd", "asc")
      );

      onSnapshot(collectionRef, (response) => {
        response.forEach((doc) => {
          cities.push(doc.data().name);
        });
        error.value = null;
        documents.value = messages
      }, (error) => {
        console.log(error)
      });
    } catch (err) {
      console.log(err.message);
      err.value = "Произошла ошибка во время отправки сообщения";
    }
  };

  return { addDoc, error };
};

export default useCollection;
