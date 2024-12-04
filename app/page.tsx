
export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-2 text-white text-center p-2">
     <div className="bg-blue-500 p-4 col-span-3 font-bold content-center text-2xl">Header</div>
     <div className="bg-yellow-600 p-4 hidden md:block md:col-span-1  md:row-span-2 font-bold content-center text-2xl">Sidebar</div>
     <div className="bg-green-500 p-4 col-span-3 md:col-span-2 font-bold content-center text-2xl">Content-1</div>
     <div className="bg-purple-500 p-4 col-span-3 md:col-auto font-bold content-center text-2xl">Content-2</div>
     <div className="bg-orange-500 p-4 font-bold col-span-3 md:col-auto content-center text-2xl">Content-3</div>
     <div className="bg-red-500 p-4 col-span-3 font-bold content-center text-2xl">Footer</div>
     </div>
    </div>
  );
}
