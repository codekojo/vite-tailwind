const menu = [
  {
    name: "Focaccia",
    description: "Bread with italian olive oil and rosemary",
    quantity: 6,
  },
  {
    name: "Pizza Margherita",
    description: "Bread with italian olive oil and rosemary",
    quantity: 6,
  },
  {
    name: "Pizza Spinaci",
    description: "Bread with italian olive oil and rosemary",
    quantity: 6,
  },
  {
    name: "Pizza Funghi",
    description: "Bread with italian olive oil and rosemary",
    quantity: 6,
  },
  {
    name: "Pizza Salamino",
    description: "Bread with italian olive oil and rosemary",
    quantity: 6,
  },
  {
    name: "Pizza Prosciuto",
    description: "Bread with italian olive oil and rosemary",
    quantity: 6,
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
                  imageSrc=""
                  name={item.name}
                  description={item.description}
                  quantity={item.quantity}
                />
              );
            })}

            {/* <Card imageSrc="" name="" description="" quantity="" />
            <Card imageSrc="" name="" description="" quantity="" />
            <Card imageSrc="" name="" description="" quantity="" />
            <Card imageSrc="" name="" description="" quantity="" />
            <Card imageSrc="" name="" description="" quantity="" />
            <Card imageSrc="" name="" description="" quantity="" /> */}
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
  return (
    <div className="flex space-x-4 justify-center">
      <img
        src="https://foodbyjonister.com/wp-content/uploads/2020/07/Focaccia9-scaled.jpg"
        alt="focassia"
        loading="lazy"
        className="w-24 h-28 rounded-md object-cover"
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
