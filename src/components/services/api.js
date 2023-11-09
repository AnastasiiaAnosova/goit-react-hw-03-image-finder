import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38851235-fece57cae64207e00960770f9';

const params = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

const fetchImagesWithQuery = async (searchQuery, page) => {
    searchQuery = searchQuery.split('/')[1];
    const response = await axios.get(
        `${BASE_URL}?q=${searchQuery}&page=${page}`, { params }
    );
    return response.data;
}

export default fetchImagesWithQuery;