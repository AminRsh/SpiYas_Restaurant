
import AboutItem from './AboutUsItem';
import Adult from "../../assets/Image/adult-blur-blurred-background-687824.png";
import Group from "../../assets/ICON/Group 204.png";
import Chef from "../../assets/Image/chef-cook-food-33614.png";
import Group1 from "../../assets/ICON/Group 204.png";
import Architecture from "../../assets/Image/architecture-building-city-2047397.png";
import Group2 from "../../assets/ICON/Group 245.png";


interface AboutItemProps {
  id: number;
  image: string;
  icon: string;
  title: string;
  description: string;
}

const AboutUs = () => {
  const aboutData: AboutItemProps[] = [
    {
      "id": 1,
      "image": Adult,
      "icon": Group,
      "title": "Fast Delivery",
      "description": "Fast Delivery combines exceptional taste with lightning-fast service. We pride ourselves on delivering a diverse range of delectable dishes swiftly to your doorstep. Crafted with fresh ingredients and culinary passion, our menu caters to every palate, ensuring quality and flavor in every order. Experience convenience and culinary excellence with Fast Delivery – where speed meets satisfaction."
    },
    {
      "id": 2,
      "image": Chef,
      "icon": Group1,
      "title": "A Good Auto Responder",
      "description": "RapidReply enhances customer engagement with swift, smart auto-responses. Our advanced system ensures immediate, accurate replies 24/7, using cutting-edge technology for seamless communication. Elevate your service with RapidReply: quick, effective, and reliable."
    },
    {
      "id": 3,
      "image": Architecture,
      "icon": Group2,
      "title": "Home Delivery",
      "description": "Home Delivery ensures fast, reliable delivery of essentials to your doorstep. Our efficient service covers everything from groceries to meals, offering a seamless, stress-free experience. Choose us for speedy, dependable home delivery tailored to your needs."
    }
  ];

  // console.log("aboutData:", aboutData);

  return (
    <div className="max-w-screen-xl mx-auto my-20 px-6">
      <h1 className="text-4xl poppins pb-4">
        Discover the Unique Advantages of Choosing Us
      </h1>
      <p className="text-gray-500 text-sm poppins w-2/2">
        "Embark on a Culinary Journey Like No Other, Where Every Dish Tells a
        Story of Flavor, Quality, and Unmatched Service."
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {Array.isArray(aboutData) && aboutData.length > 0 ? (
          aboutData.map((item) => <AboutItem key={item.id} {...item} />)
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
