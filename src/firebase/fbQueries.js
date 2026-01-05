import { collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export function useServices(db) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const servicesRef = collection(db, "services");

    const unsubscribe = onSnapshot(servicesRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setServices(data);
    });

    return () => unsubscribe();
  }, [db]);

  return services;
}

export function useCopyright(db) {
    const [copyright, setCopyright] = useState([]);
  
    useEffect(() => {
      const copyrightRef = doc(db, "config", "copyright");
  
      const unsubscribe = onSnapshot(copyrightRef, (doc) => {
        if (doc.exists()) {
          setCopyright({ ...doc.data(), id: doc.id });
        } else {
          console.log("No such document!");
        }
      });
  
      return () => unsubscribe();
    }, [db]);
  
    return copyright;
  }
  