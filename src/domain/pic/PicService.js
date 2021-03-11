export default class PicService {
  constructor(axios) {
    this.axios = axios;
    this.path = "v1/fotos";
  }

  insertOrUpdate(pic) {
    if (pic._id) {
      return this.axios.put(`${this.path}/${pic._id}`, pic);
    } else {
      return this.axios.post(this.path, pic);
    }
  }

  search(id) {
    return this.axios.get(`${this.path}/${id}`).then(res => res.data);
  }

  list() {
    return this.axios
      .get(this.path)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw new Error(
          "Não foi possível obter as imagens. Tente novamente mais tarde!"
        );
      });
  }

  delete(pic) {
    return this.axios
      .delete(`${this.path}/${pic._id}`)
      .then()
      .catch(err => {
        console.error(err);
        throw new Error(
          "Não foi possível remover a imagem. Tente novamente mais tarde!"
        );
      });
  }
}
