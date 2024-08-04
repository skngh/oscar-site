import Header from "../components/Header";
import Button from "../components/Button";
import MovingLine from "../components/MovingLine";
import "../styles/main.css";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="button-grid">
          <Button imageUrl="../../public/buttonImageTest.jpg">SAMPLES</Button>
          <Button imageUrl="../../public/test2.png">CREDITS</Button>
          <Button imageUrl="../../public/test3.png">PICS</Button>
          <Button imageUrl="../../public/test4.png">CONTACT</Button>
          <div className="circle"></div>
          <MovingLine />
        </div>
      </div>
    </div>
  );
};

export default Main;
