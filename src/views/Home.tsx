import { HomeMainContainer } from "../styles/HomeStyles";

import { HomeSlider } from "../components/homeComponents/HomeSlider";

export const Home: React.FC = () => {
  return (
    <div className="home-main">
      <HomeMainContainer>
        <HomeSlider />
      </HomeMainContainer>
    </div>
  );
};
