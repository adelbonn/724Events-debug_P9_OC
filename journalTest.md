# Journal de Tests

## Etat Initial des tests 

  - Liste de tous les tests qui échouent
  - Messages d'erreur
  - Composant concernés

  ## Suivi des corrections

  - Tests corrigés
  - Comment ils ont été corrigés
  - Date de correction

  ## JournalDebug.md

  - Description du bug
  - Localisation du bug
  - Solution appliquée
  - Tests associés

## Etat Initial Résultats des tests unitaires (yarn test) 17/02/2025

- Total des tests  : 49
- Tests réussi (passed) : 41
- Tests échoué (failed)  : 5
- Tests ignorés  (skipped) : 3

## Tests échoués

### 1. Events/index.js
- Tests : "When Events is created > and we select a category › an filtered list is displayed
- Erreur : Element `Forum #productionCON`trouvé alors qu'il ne devrait pas être présent 
- Composant : Events
- Type : Erreur de filtrage

- Message d'erreur dans le terminal:
    expect(element).not.toBeInTheDocument()

    expected document not to contain element, found <div class="EventCard__title">Forum #productCON</div> instead

      84 |
      85 |       await screen.findByText("Conférence #productCON");
    > 86 |       expect(screen.queryByText("Forum #productCON")).not.toBeInTheDocument();
         |                                                           ^
      87 |     });
      88 |   });
      89 |

      at Object.<anonymous> (src/containers/Events/index.test.js:86:59)

## 2. EventCard/index.js
 - Test : "When a event card is created › a title, a label and a month are displayed"
 - Erreur Impossible de trouver le texte "avril"
 - Composant : EventCard
 - Type : Erreur d'affichage de date

- Message d'erreur dans le terminal:
    TestingLibraryElementError: Unable to find an element with the text: /avril/. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, <script />, <style />
    <body>
      <div>
        <div
          class="EventCard"
          data-testid="card-testid"
        >
          <div
            class="EventCard__imageContainer"
          >
            <img
              alt="image-alt-text"
              data-testid="card-image-testid"
              src="http://src-image"
            />
            <div
              class="EventCard__label"
            >
              test label
            </div>
          </div>
          <div
            class="EventCard__descriptionContainer"
          >
            <div
              class="EventCard__title"
            >
              test event
            </div>
            <div
              class="EventCard__month"
            >
              mars
            </div>
          </div>
        </div>
      </div>
    </body>

      24 |     );
      25 |     const titleElement = screen.getByText(/test event/);
    > 26 |     const monthElement = screen.getByText(/avril/);
         |                                 ^
      27 |     const labelElement = screen.getByText(/test label/);
      28 |     expect(titleElement).toBeInTheDocument();
      29 |     expect(labelElement).toBeInTheDocument();

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:38:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:90:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:62:17
      at getByText (node_modules/@testing-library/dom/dist/query-helpers.js:111:19)
      at Object.<anonymous> (src/components/EventCard/index.test.js:26:33)

 ## 3. Slider/index.js

  - Test : "When slider is created › a list card is displayed"
  - Erreur : Impossible de trouver le texte "janvier"
  - Composant : Slider
  - Type : Erreur d'affichage de date

 - Message d'erreur dans le terminal : 

    Unable to find an element with the text: janvier. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, <script />, <style />
    <body>
      <div>
        <div
          class="SlideCardList"
        >
          <div
            class="SlideCard SlideCard--display"
          >
            <img
              alt="forum"
              src="/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png"
            />
            <div
              class="SlideCard__descriptionContainer"
            >
              <div
                class="SlideCard__description"
              >
                <h3>
                  World Farming Day
                </h3>
                <p>
                  Evenement mondial autour de la ferme
                </p>
                <div />
              </div>
            </div>
          </div>
          <div
            class="SlideCard__paginationContainer"
          >
            <div
              class="SlideCard__pagination"
            >
              <input
                checked=""
                name="radio-button"
                type="radio"
              />
              <input
                name="radio-button"
                type="radio"
              />
              <input
                name="radio-button"
                type="radio"
              />
            </div>
          </div>
          <div
            class="SlideCard SlideCard--hide"
          >
            <img
              alt="forum"
              src="/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png"
            />
            <div
              class="SlideCard__descriptionContainer"
            >
              <div
                class="SlideCard__description"
              >
                <h3>
                  World economic forum
                </h3>
                <p>
                  Oeuvre à la coopération entre le secteur public et le privé.
                </p>
                <div>
                  février
                </div>
              </div>
            </div>
          </div>
          <div
            class="SlideCard__paginationContainer"
          >
            <div
              class="SlideCard__pagination"
            >
              <input
                name="radio-button"
                type="radio"
              />
              <input
                checked=""
                name="radio-button"
                type="radio"
              />
              <input
                name="radio-button"
                type="radio"
              />
            </div>
          </div>
          <div
            class="SlideCard SlideCard--hide"
          >
            <img
              alt="forum"
              src="/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png"
            />
            <div
              class="SlideCard__descriptionContainer"
            >
              <div
                class="SlideCard__description"
              >
                <h3>
                  World Gaming Day
                </h3>
                <p>
                  Evenement mondial autour du gaming
                </p>
                <div>
                  février
                </div>
              </div>
            </div>
          </div>
          <div
            class="SlideCard__paginationContainer"
          >
            <div
              class="SlideCard__pagination"
            >
              <input
                name="radio-button"
                type="radio"
              />
              <input
                name="radio-button"
                type="radio"
              />
              <input
                checked=""
                name="radio-button"
                type="radio"
              />
            </div>
          </div>
        </div>
      </div>
    </body>

      37 |     );
      38 |     await screen.findByText("World economic forum");
    > 39 |     await screen.findByText("janvier");
         |                  ^
      40 |     await screen.findByText(
      41 |       "Oeuvre à la coopération entre le secteur public et le privé."
      42 |     );

      at waitForWrapper (node_modules/@testing-library/dom/dist/wait-for.js:187:27)
      at findByText (node_modules/@testing-library/dom/dist/query-helpers.js:101:33)
      at Object.<anonymous> (src/containers/Slider/index.test.js:39:18)

### 4. Form/index.test.js
- Test : "When Events is created > and a click is triggered on the submit button"
- Erreur : `onSuccess` n'a pas été appelé comme attendu
- Composant : Form
- Type : Erreur de comportement

- Message dans le terminal : 

 FAIL  src/containers/Form/index.test.js
  ● When Events is created › and a click is triggered on the submit button › the success action is called

    expect(jest.fn()).toHaveBeenCalled()

    Expected number of calls: >= 1
    Received number of calls:    0

      24 |       await screen.findByText("En cours");
      25 |       await screen.findByText("Envoyer");
    > 26 |       expect(onSuccess).toHaveBeenCalled();
         |                         ^
      27 |     });
      28 |   });
      29 | });

      at Object.<anonymous> (src/containers/Form/index.test.js:26:25)

### 5. Home/index.test.js
- Test : "When Form is created > and a click is triggered on the submit button"
- Erreur : Message "Message envoyé !" non trouvé
- Composant : Form dans Home
- Type : Erreur de feedback utilisateur

- Message dans le terminal :
 FAIL  src/pages/Home/index.test.js
  ● Console

    console.error
      Warning: Failed prop type: The prop `imageSrc` is marked as required in `EventCard`, but its value is `undefined`.
          at EventCard (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\components\EventCard\index.js:7:3)
          at Page (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\pages\Home\index.js:16:18)

      117 |       <div className="col presta">
      118 |         <h3>Notre derniére prestation</h3>
    > 119 |         <EventCard
          |         ^
      120 |           imageSrc={last?.cover}
      121 |           title={last?.title}
      122 |           date={new Date(last?.date)}

      at printWarning (node_modules/react/cjs/react-jsx-dev-runtime.development.js:87:30)
      at error (node_modules/react/cjs/react-jsx-dev-runtime.development.js:61:7)
      at checkPropTypes (node_modules/react/cjs/react-jsx-dev-runtime.development.js:626:11)
      at validatePropTypes (node_modules/react/cjs/react-jsx-dev-runtime.development.js:1159:7)
      at jsxWithValidation (node_modules/react/cjs/react-jsx-dev-runtime.development.js:1279:7)
      at Page (src/pages/Home/index.js:119:9)
      at renderWithHooks (node_modules/react-dom/cjs/react-dom.development.js:16141:18)
      at mountIndeterminateComponent (node_modules/react-dom/cjs/react-dom.development.js:20838:13)

    console.error
      Warning: Failed prop type: The prop `title` is marked as required in `EventCard`, but its value is `undefined`.
          at EventCard (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\components\EventCard\index.js:7:3)
          at Page (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\pages\Home\index.js:16:18)

      117 |       <div className="col presta">
      118 |         <h3>Notre derniére prestation</h3>
    > 119 |         <EventCard
          |         ^
      120 |           imageSrc={last?.cover}
      121 |           title={last?.title}
      122 |           date={new Date(last?.date)}

      at printWarning (node_modules/react/cjs/react-jsx-dev-runtime.development.js:87:30)
      at error (node_modules/react/cjs/react-jsx-dev-runtime.development.js:61:7)
      at checkPropTypes (node_modules/react/cjs/react-jsx-dev-runtime.development.js:626:11)
      at validatePropTypes (node_modules/react/cjs/react-jsx-dev-runtime.development.js:1159:7)
      at jsxWithValidation (node_modules/react/cjs/react-jsx-dev-runtime.development.js:1279:7)
      at Page (src/pages/Home/index.js:119:9)
      at renderWithHooks (node_modules/react-dom/cjs/react-dom.development.js:16141:18)
      at mountIndeterminateComponent (node_modules/react-dom/cjs/react-dom.development.js:20838:13)

    console.error
      Warning: Unsupported style property font-family. Did you mean fontFamily?
          at text
          at svg
          at div
          at Logo (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\components\Logo\index.js:5:17)
          at nav
          at Menu
          at header
          at Page (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\pages\Home\index.js:16:18)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnHyphenatedStyleName (node_modules/react-dom/cjs/react-dom.development.js:2688:5)
      at warnValidStyle (node_modules/react-dom/cjs/react-dom.development.js:2736:7)
      at setValueForStyles (node_modules/react-dom/cjs/react-dom.development.js:2809:9)
      at setInitialDOMProperties (node_modules/react-dom/cjs/react-dom.development.js:9659:7)
      at setInitialProperties (node_modules/react-dom/cjs/react-dom.development.js:9892:3)
      at finalizeInitialChildren (node_modules/react-dom/cjs/react-dom.development.js:10921:3)

    console.error
      Warning: Unsupported style property font-size. Did you mean fontSize?
          at text
          at svg
          at div
          at Logo (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\components\Logo\index.js:5:17)
          at nav
          at Menu
          at header
          at Page (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\pages\Home\index.js:16:18)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnHyphenatedStyleName (node_modules/react-dom/cjs/react-dom.development.js:2688:5)
      at warnValidStyle (node_modules/react-dom/cjs/react-dom.development.js:2736:7)
      at setValueForStyles (node_modules/react-dom/cjs/react-dom.development.js:2809:9)
      at setInitialDOMProperties (node_modules/react-dom/cjs/react-dom.development.js:9659:7)
      at setInitialProperties (node_modules/react-dom/cjs/react-dom.development.js:9892:3)
      at finalizeInitialChildren (node_modules/react-dom/cjs/react-dom.development.js:10921:3)

    console.error
      Warning: Unsupported style property font-weight. Did you mean fontWeight?
          at text
          at svg
          at div
          at Logo (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\components\Logo\index.js:5:17)
          at nav
          at Menu
          at header
          at Page (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\pages\Home\index.js:16:18)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnHyphenatedStyleName (node_modules/react-dom/cjs/react-dom.development.js:2688:5)
      at warnValidStyle (node_modules/react-dom/cjs/react-dom.development.js:2736:7)
      at setValueForStyles (node_modules/react-dom/cjs/react-dom.development.js:2809:9)
      at setInitialDOMProperties (node_modules/react-dom/cjs/react-dom.development.js:9659:7)
      at setInitialProperties (node_modules/react-dom/cjs/react-dom.development.js:9892:3)
      at finalizeInitialChildren (node_modules/react-dom/cjs/react-dom.development.js:10921:3)

    console.error
      Warning: Unsupported style property white-space. Did you mean whiteSpace?
          at text
          at svg
          at div
          at Logo (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\components\Logo\index.js:5:17)
          at nav
          at Menu
          at header
          at Page (C:\Users\adbon\Documents\P9_oc_724events\Debuggez-une-application-React.JS\src\pages\Home\index.js:16:18)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnHyphenatedStyleName (node_modules/react-dom/cjs/react-dom.development.js:2688:5)
      at warnValidStyle (node_modules/react-dom/cjs/react-dom.development.js:2736:7)
      at setValueForStyles (node_modules/react-dom/cjs/react-dom.development.js:2809:9)
      at setInitialDOMProperties (node_modules/react-dom/cjs/react-dom.development.js:9659:7)
      at setInitialProperties (node_modules/react-dom/cjs/react-dom.development.js:9892:3)
      at finalizeInitialChildren (node_modules/react-dom/cjs/react-dom.development.js:10921:3)

  ● When Form is created › and a click is triggered on the submit button › the success message is displayed

    Unable to find an element with the text: Message envoyé !. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, <script />, <style />
    <body>
      <div>
        <header>
          <nav>
            <div
              class="Logo"
            >
              <svg
                fill="none"
                height="60"
                viewBox="0 0 130 50"
                width="130"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 73.406 42.577 C 72.35 42.577 71.437 42.342 70.667 41.872 C 69.898 41.395 69.302 40.724 68.879 39.859 C 68.457 38.987 68.246 37.958 68.246 36.773 C 68.246 35.567 68.454 34.529 68.869 33.657 C 69.292 32.778 69.884 32.104 70.647 31.634 C 71.417 31.164 72.329 30.929 73.385 30.929 C 74.455 30.929 75.367 31.174 76.124 31.664 C 76.886 32.148 77.465 32.85 77.86 33.769 C 78.262 34.689 78.453 35.796 78.433 37.09 L 77.207 37.09 L 77.207 36.681 C 77.173 35.169 76.832 34.018 76.185 33.228 C 75.538 32.438 74.611 32.042 73.406 32.042 C 72.159 32.042 71.195 32.455 70.514 33.279 C 69.84 34.096 69.503 35.254 69.503 36.753 C 69.503 38.238 69.84 39.389 70.514 40.206 C 71.195 41.024 72.152 41.432 73.385 41.432 C 74.237 41.432 74.979 41.235 75.613 40.84 C 76.253 40.438 76.76 39.866 77.135 39.123 L 78.198 39.593 C 77.755 40.547 77.115 41.282 76.277 41.8 C 75.439 42.318 74.482 42.577 73.406 42.577 Z M 69.053 37.09 L 69.053 36.027 L 77.769 36.027 L 77.769 37.09 L 69.053 37.09 Z"
                  fill="url(#paint0_linear_56_57)"
                />
                <path
                  d="M 82.46 42.27 L 78.455 31.235 L 79.67 31.235 L 83.083 40.666 L 86.485 31.235 L 87.711 31.235 L 83.706 42.27 L 82.46 42.27 Z"
                  fill="url(#paint1_linear_56_57)"
                />
                <path
                  d="M 92.884 42.577 C 91.828 42.577 90.916 42.342 90.146 41.872 C 89.376 41.395 88.78 40.724 88.358 39.859 C 87.936 38.987 87.724 37.958 87.724 36.773 C 87.724 35.567 87.932 34.529 88.348 33.657 C 88.77 32.778 89.363 32.104 90.125 31.634 C 90.895 31.164 91.808 30.929 92.864 30.929 C 93.933 30.929 94.846 31.174 95.602 31.664 C 96.365 32.148 96.944 32.85 97.339 33.769 C 97.741 34.689 97.932 35.796 97.911 37.09 L 96.685 37.09 L 96.685 36.681 C 96.651 35.169 96.31 34.018 95.663 33.228 C 95.016 32.438 94.09 32.042 92.884 32.042 C 91.638 32.042 90.674 32.455 89.993 33.279 C 89.318 34.096 88.981 35.254 88.981 36.753 C 88.981 38.238 89.318 39.389 89.993 40.206 C 90.674 41.024 91.631 41.432 92.864 41.432 C 93.715 41.432 94.458 41.235 95.091 40.84 C 95.731 40.438 96.239 39.866 96.614 39.123 L 97.676 39.593 C 97.233 40.547 96.593 41.282 95.755 41.8 C 94.917 42.318 93.96 42.577 92.884 42.577 Z M 88.532 37.09 L 88.532 36.027 L 97.247 36.027 L 97.247 37.09 L 88.532 37.09 Z"
                  fill="url(#paint2_linear_56_57)"
                />
                <path
                  d="M 108.136 42.27 L 108.136 36.528 C 108.136 35.833 108.065 35.213 107.922 34.668 C 107.786 34.123 107.575 33.66 107.288 33.279 C 107.009 32.897 106.655 32.608 106.226 32.41 C 105.803 32.213 105.303 32.114 104.724 32.114 C 104.124 32.114 103.603 32.22 103.161 32.431 C 102.725 32.635 102.364 32.925 102.078 33.299 C 101.798 33.674 101.587 34.12 101.444 34.638 C 101.308 35.149 101.24 35.707 101.24 36.313 L 100.31 36.201 C 100.31 35.009 100.511 34.028 100.913 33.258 C 101.321 32.482 101.87 31.91 102.558 31.542 C 103.246 31.167 104.019 30.98 104.877 30.98 C 105.483 30.98 106.025 31.068 106.502 31.246 C 106.985 31.423 107.404 31.675 107.758 32.002 C 108.113 32.322 108.406 32.703 108.637 33.146 C 108.869 33.582 109.039 34.062 109.148 34.587 C 109.264 35.111 109.117.005 41.207 L 117.005 42.27 Z M 109.925 32.308 L 109.925 31.235 L 117.005 31.235 L 117.005 32.308 L 109.925 32.308 Z"
                  fill="url(#paint4_linear_56_57)"
                />
                <path
                  d="M 122.372 42.556 C 121.099 42.556 120.046 42.287 119.215 41.749 C 118.391 41.211 117.88 40.462 117.683 39.501 L 118.888 39.297 C 119.059 39.951 119.46 40.472 120.094 40.86 C 120.727 41.248 121.504 41.442 122.424 41.442 C 123.336 41.442 124.062 41.248 124.6 40.86 C 125.138 40.472 125.407 39.941 125.407 39.266 C 125.407 38.898 125.322 38.599 125.152 38.367 C 124.988 38.129 124.661 37.911 124.171 37.713 C 123.68 37.516 122.951 37.284 121.984 37.018 C 120.962 36.746 120.162 36.473 119.583 36.201 C 119.011 35.928 118.606 35.619 118.367 35.271 C 118.136 34.924 118.02 34.498 118.02 33.994 C 118.02 33.388 118.194 32.856 118.541 32.4 C 118.888 31.937 119.372 31.576 119.992 31.317 C 120.618 31.058 121.341 30.929 122.158 30.929 C 122.975 30.929 123.711 31.065 124.365 31.337 C 125.019 31.603 125.547 31.978 125.949 32.461 C 126.35 32.938 126.582 33.493 126.643 34.127 L 125.438 34.352 C 125.322 33.643 124.964 33.085 124.365 32.676 C 123.765 32.26 123.016 32.049 122.117 32.042 C 121.266 32.029 120.571 32.199 120.033 32.553 C 119.495 32.901 119.225 33.361 119.225 33.933 C 119.225 34.26 119.317 34.539 119.501 34.771 C 119.692 34.995 120.026 35.203 120.503 35.394 C 120.979 35.585 121.654 35.789 122.526 36.007 C 123.588 36.279 124.416 36.559 125.009 36.845 C 125.608 37.131 126.03 37.468 126.275 37.856 C 126.521 38.238 126.643 38.711 126.643 39.276 C 126.643 40.298 126.262 41.102 125.499 41.688 C 124.743 42.267 123.701 42.556 122.372 42.556 Z"
                  fill="url(#paint5_linear_56_57)"
                />
                <text
                  fill="url(#paint5_linear_56_57)"
                  style="font-family: Kalimati; font-size: 39px; font-weight: 700px; white-space: pre;"
                  x="-1.125"
                  y="44.995"
                >
                  724
                </text>
                <defs>
                  <lineargradient
                    gradientUnits="userSpaceOnUse"
                    id

      22 |       );
      23 |       await screen.findByText("En cours");
    > 24 |       await screen.findByText("Message envoyé !");
         |                    ^
      25 |     });
      26 |   });
      27 |

      at waitForWrapper (node_modules/@testing-library/dom/dist/wait-for.js:187:27)
      at findByText (node_modules/@testing-library/dom/dist/query-helpers.js:101:33)
      at Object.<anonymous> (src/pages/Home/index.test.js:24:20)

## Analyse des échecs de tests

Les échecs semblent se regrouper en plusieurs catégories :

1. Problèmes de filtrage (Events)
2. Problèmes d'affichage de dates (EventCard, Slider)
3. Problèmes de gestion de formulaire (Form)
4. Problèmes de feedback utilisateur (Home)


Ce qui confirme les erreurs vues dans ReactDevTools et la console du navigateur (cf: journalDebug.md)

## Suivi des corrections des tests

