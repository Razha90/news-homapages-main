import Data from "./myData.json";
import Menu from "./menu";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="min-[1160px]:w-[70em] min-[1160px]:mx-auto max-[1160px]:mx-[3em] 2xl:max-w-[90em] 2xl:mx-auto min-[1900px]:scale-125 min-[1900px]:mt-44 min-[2300px]:scale-150 min-[2300px]:mt-72">
        <section>
          <header className="my-12">
            <nav className="flex flex-row justify-between items-center">
              <a href="/">
                <img src={Data[0].nav.image} alt={Data[0].nav.alt} />
              </a>
              <div className="flex flex-row gap-10 max-[660px]:hidden">
                <div className="hover:opacity-50 cursor-pointer">Home</div>
                <div className="hover:opacity-50 cursor-pointer">New</div>
                <div className="hover:opacity-50 cursor-pointer">Popular</div>
                <div className="hover:opacity-50 cursor-pointer">Trending</div>
                <div className="hover:opacity-50 cursor-pointer">
                  Categories
                </div>
              </div>
              <div className="hidden max-[660px]:block cursor-pointer" onClick={Menu}><img src={Data[4].support.menu} alt="menu"/></div>
            </nav>
          </header>
        </section>
        <div className="w-0 overflow-hidden h-[100vh] right-0 top-0 absolute flex flex-col gap-7 bg-[#ffffff] z-10 drop-shadow-[0_0px_550px_rgba(0,0,0)] b-width">
          <div className="mb-7 cursor-pointer" onClick={Menu}><img src={Data[4].support.close} alt="close menu" className="ml-auto"/></div>
        <div className="hover:opacity-50 cursor-pointer">Home</div>
                <div className="hover:opacity-50 cursor-pointer">New</div>
                <div className="hover:opacity-50 cursor-pointer">Popular</div>
                <div className="hover:opacity-50 cursor-pointer">Trending</div>
                <div className="hover:opacity-50 cursor-pointer">
                  Categories
                </div>
        </div>
        <section>
          <main className="flex w-full flex-row justify-between gap-5 max-[751px]:flex-col max-[751px]:items-center">
            <div>
              <img src={Data[1].main.image} alt={Data[1].main.alt} />
              <div className="flex flex-row mt-7 max-[641px]:flex-col">
                <h1 className="text-black font-extrabold text-5xl cursor-default max-[1215px]:text-4xl">
                  {Data[1].main.title}
                </h1>
                <div className="flex flex-col justify-between">
                  <p className="opacity-50 cursor-default">
                    {Data[1].main.txt}
                  </p>
                  <button
                    type="button"
                    className="bg-[#f15e50] tracking-[.25em] font-bold text-[#ffffff] w-[12em] mt-2 py-3 px-7 hover:opacity-50 transition duration-500 ease-in-out"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#00001a] max-[751px]:w-full">
            <div className=" p-6 max-[751px]:w-[14em] max-[751px]:mx-auto max-[1005px]:w-[12em] max-[1005px]:mx-auto">
              <h2 className="text-[#e9ab53] font-extrabold text-4xl pb-6">
                New
              </h2>
              {Data[2].news.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="text-[#ffffff] hover:opacity-50 cursor-pointer"
                  >
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="opacity-50 text-xs pt-1">{item.txt}</p>
                    {item.id === 3 ? true : <hr className="my-5" />}
                  </div>
                );
              })}
            </div>
            </div>
          </main>
        </section>

        <section className="mt-10">
          <footer className="flex flex-row justify-between text-base max-[1251px]:text-sm max-[985px]:flex-wrap max-[985px]:justify-center max-[985px]:gap-10">
            {Data[3].footer.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-row gap-4 cursor-pointer hover:opacity-50 transition duration-300 ease-in-out pr-1 max-[985px]:w-[319px]"
                >
                  <div className="max-w-[80px]">
                    <img src={item.image} alt={item.alt} className="w-full" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="opacity-50 text-3xl font-bold max-[1205px]:text-2xl">{item.num}</p>
                    <p className="font-bold">{item.title}</p>
                    <p className="opacity-50 text-sm">{item.txt}</p>
                  </div>
                </div>
              );
            })}
          </footer>
        </section>
      </div>
    </div>
  );
}

export default App;
