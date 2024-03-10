export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  email: string;
  phone: string;
}
