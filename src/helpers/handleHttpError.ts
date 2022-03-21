import axios from 'axios';

export const handleHttpError = (error: unknown) => {
	if (axios.isAxiosError(error)) {
		return error.message;
	}
	return 'unknow erorr';
};
