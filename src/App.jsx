const App = () => {
  const names = {
    name1: "Spiderman",
    name2: "Thor",
    name3: "Captain America",
    name4: "Hulk",
  };
  return (
    <div className="flex justify-center p-4">
      <ul className="flex space-x-6 max-sm:space-x-2">
        <li className=" flex flex-col items-center justify-center space-y-1">
          <div className=" rounded-full bg-gradient-to-tr  from-yellow-400 to-fuchsia-600 p-1 max-sm:p-[3px]">
            <a
              href="#"
              className=" relative block rounded-full bg-white p-1 max-sm:p-[3px]"
            >
              <img
                className=" h-20 w-20 rounded-full object-cover hover:brightness-90 max-sm:h-12 max-sm:w-12"
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/100506-ironman2-hmed.jpg"
                alt="ironman"
              />
              <a
                href="#"
                className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full  border-2 border-white bg-blue-500 p-1 font-mono text-2xl text-white hover:bg-blue-600 max-sm:h-5 max-sm:w-5 max-sm:text-lg"
              >
                +
              </a>
            </a>
          </div>
          <a href="#" className=" text-xs font-medium">
            You
          </a>
        </li>
        <li className=" flex flex-col items-center justify-center space-y-1">
          <div className="rounded-full bg-gradient-to-tr  from-yellow-400 to-fuchsia-600  p-1 max-sm:p-[3px]">
            <a
              href="#"
              className="block rounded-full bg-white p-1 max-sm:p-[3px]"
            >
              <img
                className=" h-20 w-20  rounded-full object-cover hover:brightness-90 max-sm:h-12 max-sm:w-12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTic63nTx3MLQ3CPMPQ4H_wmk1qQgyHu10wrw&usqp=CAU"
                alt="spiderman"
              />
            </a>
          </div>
          <a href="#" className=" text-xs font-medium">
            {names.name1.length > 8
              ? names.name1.slice(0, 8) + "..."
              : names.name1}
          </a>
        </li>
        <li className=" flex flex-col items-center justify-center space-y-1">
          <div className="rounded-full bg-gradient-to-tr  from-yellow-400 to-fuchsia-600  p-1 max-sm:p-[3px]">
            <a
              href="#"
              className="block rounded-full bg-white p-1 max-sm:p-[3px]"
            >
              <img
                className=" h-20 w-20 rounded-full object-cover hover:brightness-90 max-sm:h-12 max-sm:w-12"
                src="https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg"
                alt="thor"
              />
            </a>
          </div>
          <a href="#" className=" text-xs font-medium">
            {names.name2.length > 8
              ? names.name2.slice(0, 8) + "..."
              : names.name2}
          </a>
        </li>
        <li className=" flex flex-col items-center justify-center space-y-1">
          <div className="rounded-full bg-gradient-to-tr  from-yellow-400 to-fuchsia-600  p-1 max-sm:p-[3px]">
            <a
              href="#"
              className="block rounded-full bg-white p-1 max-sm:p-[3px]"
            >
              <img
                className=" h-20 w-20 rounded-full object-cover hover:brightness-90 max-sm:h-12 max-sm:w-12"
                src="https://wallpapers.com/images/featured/captain-america-uymfdo8a063hcbxb.jpg"
                alt="captain america"
              />
            </a>
          </div>
          <a href="#" className=" text-xs font-medium">
            {names.name3.length > 8
              ? names.name3.slice(0, 8) + "..."
              : names.name3}
          </a>
        </li>
        <li className=" flex flex-col items-center justify-center space-y-1">
          <div className="rounded-full bg-gradient-to-tr  from-yellow-400 to-fuchsia-600  p-1 max-sm:p-[3px]">
            <a
              href="#"
              className="block rounded-full bg-white p-1 max-sm:p-[3px]"
            >
              <img
                className=" h-20 w-20 rounded-full object-cover hover:brightness-90 max-sm:h-12 max-sm:w-12"
                src="https://hips.hearstapps.com/hmg-prod/images/hulk-thor-ragnarok-2-1548346471.jpg?crop=0.503xw:1.00xh;0.142xw,0&resize=1200:*"
                alt="hulk"
              />
            </a>
          </div>
          <a href="#" className=" text-xs font-medium">
            {names.name4.length > 8
              ? names.name4.slice(0, 8) + "..."
              : names.name4}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
