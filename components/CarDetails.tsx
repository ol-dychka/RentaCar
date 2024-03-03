import { CarProps } from "@/types";

export interface CarDetailsProps {
  isOpen: boolean;
  close: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, close, car }: CarDetailsProps) => {
  return <div>CarDetails</div>;
};
export default CarDetails;
