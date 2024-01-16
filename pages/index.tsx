import ChipInput from "./ChipInput";
interface items {
  logo: string;
  item: string;
}

// const items: string[] = [
//   "Apple",
//   "Banana",
//   "Cherry",
//   "Grapes",
//   "Orange",
//   "Pineapple",
// ];
const items: Array<items> = [
  {
    logo: "https://imgd.aeplcdn.com/370x208/n/cw/ec/103183/raider-125-right-front-three-quarter-4.png?isig=0&q=80",
    item: "TVS Raider 125",
  },
  {
    logo: "https://imgd.aeplcdn.com/370x208/n/cw/ec/145655/x440-right-front-three-quarter-6.jpeg?isig=0&q=80",
    item: "Harley-Davidson X440",
  },
  {
    logo: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/124013/hunter-350-right-front-three-quarter.jpeg?isig=0&q=80&wm=2",
    item: " Royal Enfield Hunter 350",
  },
  {
    logo: "https://imgd.aeplcdn.com/370x208/n/cw/ec/43482/sp-125-right-front-three-quarter-2.jpeg?isig=0&q=80",
    item: "Honda SP 125",
  },
  {
    logo: "https://imgd.aeplcdn.com/370x208/n/cw/ec/43482/sp-125-right-front-three-quarter-2.jpeg?isig=0&q=80",
    item: "Hero Splendor Plus",
  },
  {
    logo: "https://imgd.aeplcdn.com/370x208/n/cw/ec/130211/apache-160-right-front-three-quarter-2.jpeg?isig=0&q=80",
    item: "TVS Apache RTR 160",
  },
  {
    logo: "https://imgd.aeplcdn.com/370x208/n/cw/ec/129743/duke-200-left-front-three-quarter-4.png?isig=0&q=80",
    item: "KTM 200 Duke",
  },
];
const Home: React.FC = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignContent:'center',flexDirection:'column'}}>
      <h1 style={{textAlign:'center'}}>Bike Component</h1>
      <div className="main-component">
        <ChipInput items={items} />
      </div>
    </div>
  );
};

export default Home;
