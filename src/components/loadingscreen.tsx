import { Icons } from "./icons";

const LoadingScreen = () => {
     return (
       <div className="w-full h-screen flex">
         <Icons.logo className="w-56 h-28 animate-pulse m-auto align-middle" />
       </div>
     );
   };
   
   export default LoadingScreen;