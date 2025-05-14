import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

export const getStats = async () => {
  const usersSnapshot = await getDocs(collection(db, "users"));
  const bookingsSnapshot = await getDocs(collection(db, "Rebookinguser"));

  const totalRegistered = usersSnapshot.size;

  const bookedUserIds = new Set();
  bookingsSnapshot.forEach(doc => {
    const data = doc.data();
    if (data.booking_user_id) {
      bookedUserIds.add(data.booking_user_id);
    }
  });

  let registeredAndBooked = 0;
  usersSnapshot.forEach(doc => {
    const userId = doc.id;
    if (bookedUserIds.has(userId)) {
      registeredAndBooked++;
    }
  });

  const onlyRegistered = totalRegistered - registeredAndBooked;

  return {
    onlyRegistered,
    registeredAndBooked
  };
};
