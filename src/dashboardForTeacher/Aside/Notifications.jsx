import React, { useEffect, useState } from 'react'
import { notifications } from '../../contants'
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from '../../../firebaseConfig'

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([])


//   const userEmail = auth.currentUser.email;
//   const getAllDBData = async () => {
//     const querySnapshot = await getDocs(collection(db, "notificationsCollection"));

//     querySnapshot.forEach((document) => {
//       if (userEmail == document.data().email) {
//         const notificationLists = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         const filteredNotificationsList = notificationLists.filter((doc) => {
//           return (
//             doc.email == userEmail
//           )
//         })
//         setNotifications(filteredNotificationsList)
//       }
//     })
//   }



//   useEffect(() => {
//     getAllDBData();


//   }, [])
//   return (
//     <div>
//       <h1 className='font-bold text-center text-xl text-primary py-4'> Notifications </h1>

//       <div>
//         {notifications.map((notification) => {
//           const milliseconds = (notification.date.seconds * 1000) + (notification.date.nanoseconds / 1000000);
//           const date = new Date(milliseconds);
//           const formattedDate = date.toLocaleString();
//           return (
//             <div key={notification.id} className={`grid grid-cols-4 gap-1 max-md:ml-2 md:ml-10 opacity-80 ${notification.color == true ? 'bg-secondary  text-white' : 'bg-gray-300 text-primary'} p-2 md:w-[90%] max-md:w-[95%]  rounded-md gap-10 my-3 relative`}>
//               <p className='absolute left-0 top-0 bg-primary py-1 px-2 rounded-ss-md text-white'>
//                 {/* {notification.id} */}
//               </p>
//               <p className='col-span-4 ml-8'>
//                 {notification.message}
//                 <p className='mt-3 text-sm'>
//                   {formattedDate}
//                 </p>
//               </p>


//             </div>

//           )
//         })}
//       </div>
//     </div>



//   )
// }

// export default Notifications

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const userEmail = auth.currentUser?.email; // Optional chaining for safety

  useEffect(() => {
    const getAllDBData = async () => {
      try {
        if (!userEmail) {
          console.error("User email is not available.");
          return;
        }

        const querySnapshot = await getDocs(collection(db, "notificationsCollection"));

        // Map and filter documents based on userEmail
        const filteredNotificationsList = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(doc => doc.email === userEmail)
          .sort((a, b) => {
            // Assuming `date` is a Firestore Timestamp
            const dateA = new Date((a.date.seconds * 1000) + (a.date.nanoseconds / 1000000));
            const dateB = new Date((b.date.seconds * 1000) + (b.date.nanoseconds / 1000000));
            return dateB - dateA; // Sort descending by date
          });

        setNotifications(filteredNotificationsList);
      } catch (error) {
        console.error("Error fetching notifications: ", error);
      }
    };

    getAllDBData();
  }, [userEmail]);

  return (
    <div>
      <h1 className='font-bold text-center text-xl text-primary py-4'>Notifications</h1>

      <div>
        {notifications.length > 0 ? (
          notifications.map((notification) => {
            const milliseconds = (notification.date.seconds * 1000) + (notification.date.nanoseconds / 1000000);
            const date = new Date(milliseconds);
            const formattedDate = date.toLocaleString();

            return (
              <div key={notification.id} className={`grid grid-cols-4 gap-1 max-md:ml-2 md:ml-10 opacity-80 ${notification.color ? 'bg-secondary text-white' : 'bg-gray-300 text-primary'} p-2 md:w-[90%] max-md:w-[95%] rounded-md gap-10 my-3 relative`}>
                <p className='absolute left-0 top-0 bg-primary py-1 px-2 rounded-ss-md text-white'>
                  {/* {notification.id} */}
                </p>
                <p className='col-span-4 ml-8'>
                  {notification.message}
                  <p className='mt-3 text-sm'>
                    {formattedDate}
                  </p>
                </p>
              </div>
            );
          })
        ) : (
          <p>No notifications</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
