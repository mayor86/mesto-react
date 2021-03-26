class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        method: 'GET',
        headers: {
          authorization: this._token
        }
      })
      .then(this._checkResponse)
      .catch((err) => {
        console.log('Ошибка. Запрос Api.getInitialCards() не выполнен. Текст ошибки: ' + err);
      });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          authorization: this._token
        }
      })
      .then(this._checkResponse)
      .catch((err) => {
        console.log('Ошибка. Запрос Api.getUserInfo() не выполнен. Текст ошибки: ' + err);
      });
  }

  sendUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
      .then(this._checkResponse)
      .catch((err) => {
        console.log('Ошибка. Запрос Api.saveUserInfo() не выполнен. Текст ошибки: ' + err);
      });
  }

  changeAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: avatar
        })
      })
      .then(this._checkResponse)
      .catch((err) => {
        console.log('Ошибка. Запрос Api.changeAvatar() не выполнен. Текст ошибки: ' + err);
      });
  }

  sendNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          link: link,
        })
      })
      .then(this._checkResponse)
      .catch((err) => {
        console.log('Ошибка. Запрос Api.sendNewCard() не выполнен. Текст ошибки: ' + err);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
      .catch((err) => {
        console.log('Ошибка. Запрос Api.deleteCard() не выполнен. Текст ошибки: ' + err);
      });
  }

  setCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
      .catch((err) => {
        console.log('Ошибка. Запрос Api.setCardLike() не выполнен. Текст ошибки: ' + err);
      });
  }

  setCardDislike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
      .catch((err) => {
        console.log('Ошибка. Запрос Api.setCardDislike() не выполнен. Текст ошибки: ' + err);
      });
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
}

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-20', '08a75713-14c9-471a-8b87-7718fd93bdd5');

export default api;