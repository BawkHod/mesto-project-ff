// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function cardCreate (cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardData.link;
    cardImage.alt = `Описание изображения ${cardData.name}`;

  const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.places__item').remove();
  });

  return cardElement;
}

// @todo: Функция удаления карточки


// @todo: Вывести карточки на страницу
initialCards.forEach (function (data){
  const cardElement = cardCreate (data);
  placesList.append(cardElement)
})