// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content

// @todo: DOM узлы
const placeList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard (cardData, deletion) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardData.link;
    cardImage.alt = `Описание изображения ${cardData.name}`;

  const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function () {
      deletion(cardElement);
    });

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard (card) {
  card.closest('.places__item').remove()
}

// @todo: Вывести карточки на страницу
initialCards.forEach (function (data){
  const cardElement = createCard (data, deleteCard);
  placeList.append(cardElement)
})