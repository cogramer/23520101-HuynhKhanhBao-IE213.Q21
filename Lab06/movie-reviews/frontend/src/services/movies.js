import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/movies";

class MovieDataService {
  // Lấy danh sách phim
  getAll(page = 0) {
    return axios.get(`${API_URL}?page=${page}`);
  }

  // Lấy phim theo id
  get(id) {
    return axios.get(`${API_URL}/id/${id}`);
  }

  // Tìm kiếm phim
  find(query, by = "title", page = 0) {
    return axios.get(`${API_URL}?${by}=${query}&page=${page}`);
  }

  // Tạo review
  createReview(data) {
    return axios.post(`${API_URL}/review`, data);
  }

  // Cập nhật review
  updateReview(data) {
    return axios.put(`${API_URL}/review`, data);
  }

  // Xóa review
  deleteReview(id, userId) {
    return axios.delete(`${API_URL}/review`, {
      data: { review_id: id, user_id: userId },
    });
  }

  // Lấy danh sách rating
  getRatings() {
    return axios.get(`${API_URL}/ratings`);
  }
}

export default new MovieDataService();