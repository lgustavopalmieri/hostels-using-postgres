import { HostelAdress } from 'src/modules/hostels/entities/hostel-adress.entity';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeGeocoder = require('node-geocoder');

export default class Location {
  static async getLocation(address) {
    try {
      const options = {
        provider: process.env.GEOCODER_PROVIDER,
        httpAdapter: 'https',
        apiKey: process.env.GEOCODER_API_KEY,
        formatter: null,
      };
      const geoCoder = nodeGeocoder(options);

      const loc = await geoCoder.geocode(address);

      const location: Partial<HostelAdress> = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress,
        city: loc[0].city,
        state: loc[0].stateCode,
        zipcode: loc[0].zipcode,
        country: loc[0].countryCode,
      };

      return location;
    } catch (error) {
      console.log(error.message);
    }
  }
}
