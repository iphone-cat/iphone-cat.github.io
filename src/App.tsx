import "./App.css";
import kittyPfp from "./assets/owgx2hjml6ca1.jpg";

import twitter from "./assets/twitter.webp";
import telegram from "./assets/telegram.webp";

import memebuy from "./assets/me-2.png";
import Carousel from "./Carousel";

const LinksSection = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center space-x-8 bg-[#1d1e23] py-10">
        <a
          href="https://t.me/purrresident_tremp"
          target="_blank"
          className="icon-link flex items-center justify-center mb-3 hover:opacity-75"
        >
          <div className="mr-2 w-10 h-10">
            <img src={telegram} alt="raydium" className="object-cover" />
          </div>
          <p className="font-bold text-2xl text-gray-50">Telegram</p>
        </a>
        <a
          href="https://twitter.com/PTremp_sol"
          target="_blank"
          className="icon-link flex items-center justify-center mb-3 hover:opacity-75"
        >
          <div className="mr-2 w-10 h-10">
            <img src={twitter} alt="raydium" className="object-cover" />
          </div>
          <p className="font-bold text-2xl text-gray-50">Twitter</p>
        </a>
      </div>
    </>
  );
};

const HowBuy = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded rocket"
            alt="hero"
            src={memebuy}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <div className="text-base">
              <span className="text-3xl font-semibold" id="how-to-buy">
                How to buy
              </span>
              <br />
              <br />
              <span className="text-2xl"> CREATE A WALLET</span>
              <br />
              Download Phantom or your wallet of choice from the app store or
              Google Play for free. Desktop users. download the Google Chrome
              extension by going to Phantom
              <br />
              <br />
              <span className="text-2xl"> Get Some SOL</span>
              <br />
              Have SOL in your wallet to switch to $PTRMP. If you don't have any
              SOL, you can buy directly on Phantom, transfer from another
              wallet, or buy on another exchange and send it to your wallet.
              <br />
              <br />
              <span className="text-2xl">Go to Pumpfun</span>
              <br />
              Look for our coin and buy it!
              <br />
              <br />
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
};
function App() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const targetElement = document.getElementById(href!.slice(1));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#57463a7b]">
      <Carousel />
      <header className="text-gray-50 body-font bg-[#1d1e23]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex-col">
            <a
              href="#"
              className="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0 overflow-hidden"
            >
              <img
                src={kittyPfp}
                className="rounded-full h-12"
                alt="kitty icon"
              />
              <span className="text-xl ml-3">Purrresident Tremp</span>
            </a>
          </div>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a
              href="#how-to-buy"
              onClick={handleScroll}
              className="mr-5 hover:text-[#9e8575]"
            >
              How to buy?
            </a>
          </nav>
          <a href="https://pump.fun/" target="_blank">
            <button className="inline-flex items-center bg-[#2e2b26]  border-0 py-1 px-3 focus:outline-none hover:bg-[#2e2b26ad] rounded text-lg mt-4 md:mt-0 text-white">
              BUY $PTRMP
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </header>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shadow-xl fade-down"
            alt="hero"
            src={kittyPfp}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-950 font-bold fade-down">
              $PTRMP
            </h1>
            <p className="mt-5 leading-relaxed text-xl fade-down">
              Nab 'em by the meow-makers!
            </p>
          </div>
        </div>
      </section>
      <LinksSection />
      <HowBuy />
      <footer className="text-gray-600 body-font bg-[#1d1e23]">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between">
          <div className="flex-1">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                src={kittyPfp}
                className="w-16 h-16 text-white p-2 rounded-full"
              />
              <span className="ml-3 text-xl text-gray-50">Purrresident Tremp</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
