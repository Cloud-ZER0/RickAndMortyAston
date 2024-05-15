приложение по персонажам Rick and Morty

**API** - используется [](https://rickandmortyapi.com/)

## **functionality**

- **Регистрация и авторизация** пользователи могут создать учетную запись и авторизоваться в приложении
- **Поиск** приложение предоставляет возможность поиска карточек
- **Избранное** пользователи могут добавлять и удалять избранное
- **История поиска:** приложение дает пользователям доступ к истории поиска

## Реализованные требования:

### **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности**

**React**

- [x] **Функциональные компоненты c хуками** в приоритете над классовыми
- [x] Есть разделение на **[глупые](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/components/NothingYet/NothingYet.tsx)** и **[умные](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/pages/main/MainPage.tsx)** компоненты

- [x] Есть [**рендеринг списков**](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/components/HistoryList/HistoryList.tsx)

- [x] Реализована хотя бы одна [**форма**](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/components/Form/SignInForm/SignInForm.tsx)

- [x] Есть применение [**Контекст API**](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/api/context/contextProvider.tsx)

- [x] Есть применение **предохранителя** [тут](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/pages/main/MainPage.tsx) и [тут](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/components/ErrorBoundary/ErrorBoundary.tsx)

- [x] Есть хотя бы один [**кастомный хук**](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/hooks/useFavorite.ts)

- [x] Хотя бы несколько компонентов используют **PropTypes** [тут](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/components/FavoriteList/FavoriteList.tsx) и [тут](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/components/Form/SignInForm/SignInForm.tsx)

- [x] Поиск не должен триггерить много запросов к серверу

- [x] Есть применение [Lazy + Suspense](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/components/Router/Router.tsx)

**Redux**

- [x] Используем [**Modern Redux with Redux Toolkit**](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/api/redux/store.ts)
- [x] Используем [**слайсы**](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/api/redux/slices/user.ts)

- [x] Есть хотя бы одна **кастомная мидлвара** или [**createListenerMiddleware**](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/api/redux/middleware/user-middleware.ts)

- [x] Используется [**RTK Query**](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/api/redux/api/card-api.ts)

- [x] Используется [**Transforming Responses**](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/utils/parseLoadedCharecters.ts)

### **2 уровень (необязательный)**

- [x] Использование [**TypeScript**](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/tsconfig.json)
- [x] Подключен **storybook** и созданы два, три сториса, которые показывают разные состояния компонента [тут](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/components/UI/Button/Button.stories.tsx)
- [x] Использование Firesbase для учетных записей и их Избранного и Истории поиска [тут](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/shared/firebase/firebase.ts)
- [x] Используются [**мемоизированные селекторы** (createSelector)](https://github.com/Cloud-ZER0/RickAndMortyAston/blob/main/src/api/redux/selectors/index.ts)
- [x] Связь UI и бизнес-логики построена не через команды, а через события
