export default function StatusBadge({ status }) {
  const color = {
    "On Going": "bg-green-500 text-white",
    "Upcoming": "bg-blue-500 text-white",
    "Pending": "bg-orange-400 text-white",
    "Confirmed": "bg-green-100 text-white",
  };

return (
  <p
    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm py-5 ${color[status] || "bg-gray-100 text-white"}`}> {status} </p>
);
 
    



  
 }