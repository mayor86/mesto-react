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
      .then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          authorization: this._token
        }
      })
      .then(this._checkResponse);
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
      .then(this._checkResponse);
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
      .then(this._checkResponse);
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
      .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse);
  }

  setCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse);
  }

  setCardDislike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse);
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