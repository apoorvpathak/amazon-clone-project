import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          id="mscps4"
          title="Minecraft Starter Collection - PlayStation 4"
          price={29.49}
          image="https://m.media-amazon.com/images/I/71AKO+U6F6L._AC_UY218_.jpg"
          rating={5}
        />
        <Product
          id="lzns"
          title="The Legend of Zelda: Breath of the Wild - Nintendo Switch"
          price={54.95}
          image="https://m.media-amazon.com/images/I/81KGsbq8ekL._AC_UY218_.jpg"
          rating={3}
        />
      </div>

      <div className="home__row">
        <Product
          id="acns"
          title="Animal Crossing: New Horizons - Nintendo Switch"
          price={59.99}
          image="https://m.media-amazon.com/images/I/710JXdscVsL._AC_UY218_.jpg"
          rating={4}
        />
        <Product
          id="msmmps4"
          title="Marvel's Spider-Man: Miles Morales Launch Edition - PlayStation 4"
          price={49.88}
          image="https://m.media-amazon.com/images/I/71dtn2ZMs7L._AC_UY218_.jpg"
          rating={4}
        />
        <Product
          id="codawxb"
          title="Call Of Duty: Advanced Warfare (Xbox One)"
          price={19.99}
          image="https://m.media-amazon.com/images/I/81dWbLERrNL._AC_UY218_.jpg"
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="xbss"
          title="Xbox Series S"
          price={532.0}
          image="https://m.media-amazon.com/images/I/61Q2hRo4BCL._AC_UY218_.jpg"
          rating={5}
        />
        <Product
          id="gotps4"
          title="Ghost of Tsushima - PlayStation 4"
          price={59.99}
          image="https://m.media-amazon.com/images/I/81Bzm37TIaL._AC_UY218_.jpg"
          rating={3}
        />
        <Product
          id="gtavps4"
          title="Grand Theft Auto V - Premium Online Edition (PS4)"
          price={24.75}
          image="https://m.media-amazon.com/images/I/81g+uAwsTEL._AC_UY218_.jpg"
          rating={5}
        />
        <Product
          id="h5xb1"
          title="Halo 5 (Xbox One)"
          price={36.85}
          image="https://m.media-amazon.com/images/I/81vdyNIQG0L._AC_UY218_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
