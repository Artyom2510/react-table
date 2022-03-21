import axios from 'axios';
import { DataTransfersObject } from './models/DataTransfersObject';

const queryUrl = 'https://run.mocky.io/v3/89fc52ab-d270-4226-878a-b81315b6849d';

const fetchData = async () => {
	const res = await axios.get<DataTransfersObject[]>(queryUrl);
	return res;
};

export default fetchData;
