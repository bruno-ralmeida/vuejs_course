export default class PicService {
  constructor(axios) {
    this.axios = axios;
    this.path = "v1/fotos"
  }

  insert(pic) {
    return this.axios.post(this.path, pic);
  }

  list() {
    return this.axios.get(this.path).then(res => res.data);
  }

  delete(pic) {
    return this.axios.delete(`${this.path}/${pic._id}`);
  }
}
