// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// const Modal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <Button onClick={() => setIsOpen(true)}>Открыть модалку</Button>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="bg-white p-6 rounded-2xl shadow-xl"
//           >
//             <Card>
//               <CardContent>
//                 <p className="text-lg">Это модальное окно</p>
//                 <Button onClick={() => setIsOpen(false)} className="mt-4">
//                   Закрыть
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Modal;
