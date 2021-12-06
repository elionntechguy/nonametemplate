import { TestimonialsMainContainer } from "../styles/TestimonialsStyles";

import { TestimonialSlider } from "../components/testimonialsComponents/TestimonialSlider";

export const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-main">
      <TestimonialsMainContainer>
        <TestimonialSlider />
      </TestimonialsMainContainer>
    </div>
  );
};
