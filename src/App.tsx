const menu = [
  {
    name: "Focaccia",
    description: "Bread with italian olive oil and rosemary",
    quantity: 6,
    img: "https://foodbyjonister.com/wp-content/uploads/2020/07/Focaccia9-scaled.jpg",
  },
  {
    name: "Pizza Margherita",
    description: "Tomato and mozarella",
    quantity: 10,
    img: "https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format",
  },
  {
    name: "Pizza Spinaci",
    description: "Tomato, mozarella, spinach, and ricotta cheese",
    quantity: 12,
    img: "https://www.pizzajiznimesto.cz/img/product/500x500/pizza-spinaci_1.jpg",
  },
  {
    name: "Pizza Funghi",
    description: "Tomato, mozarella, mushrooms and onion",
    quantity: 12,
    img: "https://www.edeka.de/media/01-rezeptbilder/rezeptbilder-i-p/rez-edeka-pizza-funghi-rezept-i-p-1-1.jpg",
  },
  {
    name: "Pizza Salamino",
    description: "Tomato, mozarella, and pepperoni",
    quantity: 0,
    img: "https://live.staticflickr.com/2074/2217142211_cfcc398bf3_z.jpg",
  },
  {
    name: "Pizza Prosciutto",
    description: "Tomato, mozarella, ham, aragula and burrata cheese",
    quantity: 18,
    img: "https://www.thespruceeats.com/thmb/MD-dSsFP6k5XBSk9XcdOIfnF4K0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prosciutto-pizza-4844358-hero-04-c0a6f73057ce4fed88982b75a5c2c8e1.jpg",
  },
];

const App = () => {
  return (
    <section className="bg-[#f2f1e1] h-full ">
      <div className="max-w-4xl mx-auto h-full py-2">
        <header className="uppercase text-center text-2xl md:text-3xl tracking-[12px] font-light text-[#f0bf20]">
          Fast React Pizza Co.
        </header>

        <main className="my-10 ">
          <header className="uppercase font-semibold text-xl md:text-2xl text-center">
            Our Menu
          </header>

          <p className="w-4/5 mx-auto my-8 text-center">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 p-5 gap-y-8">
            {menu.map((item) => {
              return (
                <Card
                  imageSrc={item.img}
                  name={item.name}
                  description={item.description}
                  quantity={item.quantity}
                />
              );
            })}
          </section>

          <footer className="text-center w-4/5 mx-auto">
            <p className="text-sm">
              we're open from 12:00 to 22:00. Come visit us or order online.
            </p>

            <button className="bg-[#f0bf20] rounded px-5 py-2 hover:bg-[#f0bf20]/50 transition-all mt-5">
              Order
            </button>
          </footer>
        </main>
      </div>
    </section>
  );
};

function Card({ imageSrc, name, description, quantity }) {
  const emptyCart = quantity === 0;

  return (
    <div
      className={`flex space-x-4 cursor-pointer ${
        emptyCart && `grayscale text-stone-400`
      }`}
    >
      <img
        src={imageSrc}
        alt="focassia"
        loading="lazy"
        className={`w-24 h-28 rounded-md object-cover  
        `}
      />
      <div className="flex flex-col py-1 ">
        <h2 className="font-semibold mb-1">{name}</h2>
        <p className="w-3/5 text-xs italic">{description}</p>
        <p className="mt-auto text-sm">{quantity}</p>
      </div>
    </div>
  );
}

export default App;
