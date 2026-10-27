This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

## CHANGE LOG

## ver 0.5.1 - mobile menu animation & gallery updates

    ulepszenia menu mobilnego (`Navigation/MainNavigation`):
    - animacja otwierania/zamykania zmieniona z `right: -100vw` na `transform: translateX(100%)` (GPU-accelerated, brak layout reflow)
    - czas animacji skrócony z 1.2s do 0.35s z easingiem cubic-bezier(0.25, 0.46, 0.45, 0.94)
    - naprawiony bug: literówka w nazwie klasy zamknięcia (`menuOverlayClose` vs `manuOverlayClose`) powodowała brak animacji zamknięcia
    - dodane staggerowane wejście linków (fade + slide od dołu, opóźnienie 50ms między linkami)
    - font linków w menu mobilnym zwiększony z 13px do 16px

    zmiany w galerii aparatów (`data/gallery.json`):
    - usunięte zdjęcia `dwuczesciowaSzynaDeprogramacyjna01` i `dwuczesciowaSzynaDeprogramacyjna02`
    - dodane nowe zdjęcia: `dwuczesciowaSzynaDeprogramacyjna` i `aparatDrukowanyDolny`
    - kolejność galerii posortowana alfabetycznie
    - tytuł galerii na stronie /test zmieniony na "Galeria Aparatów"

## ver 0.5.0 - services tiles hover effect

    efekt hover dla kafelkow w sekcji "Zakres usług" na stronie glownej (`OrtoServiceSingle.module.css`):
    - kafelek unosi sie, dostaje niebieski cien, ramke i tlo, ikona sie powieksza, podpis zmienia kolor
    - hover tylko na urzadzeniach z myszka (`@media (hover: hover)`), focus-visible dla klawiatury, wylaczone animacje przy `prefers-reduced-motion`

## ver 0.4.9 - closure notice popup disabled

    popup z informacja o nieczynnym gabinecie wylaczony (zakomentowany `<Popup />` oraz jego import w `app/layout.jsx`), komponent `components/Popup` zostaje w kodzie - aby wlaczyc ponownie wystarczy odkomentowac obie linie

## ver 0.4.8 - closure notice popup

    nowy komponent `components/Popup` renderowany w `app/layout.jsx` - komunikat o nieczynnym gabinecie (09.10.2026, Szczecin i Mysliborz):
    - pokazuje sie raz na 6h, wspolnie dla wszystkich podstron (znacznik czasu w localStorage pod kluczem `closureNoticeLastShown`)
    - zamykanie przyciskiem X, przyciskiem "Zamknij", klawiszem Esc lub klikniecim poza oknem
    - po zakonczeniu akcji wystarczy usunac `<Popup />` z `app/layout.jsx` lub zmienic tresc w `Popup.jsx`

## ver 0.4.7 - minor changes

    kilka drobnych zmian, dodanie drugiego adresu email oraz zmiana cennika 

## ver 0.4.6 - staff removed

    usuniete osoby z zespolu - Monika M. oraz Ruslan V.

## ver 0.4.4 & 0.4.5 - elea fix

    naprawa odpowiedniego oznaczenia w elea w przypadku braku danych do wyświetlenia

## ver 0.4.3 - minor fixes

    dodane odpowiednie style dla nawigacji dla szerokich ekranow, dodanie plakietki o braku kursow w przypadku kiedy nie sa prowadzone zadne szkolenia na stronie szkolen

## ver 0.4.2 - new schooling page github actions

    zmieniony skrypt, teraz pobiera dane tylko z jednej sekcji "wszystkie kursy" oraz dodatkowo wyświetla datę

## ver 0.4.1 - new schooling page github actions

    dodana nowa sekcja, ktora pobiera dane z github actions

## ver 0.4.0 - fix schooling page layout

    zmieniony design strony - szczególnie dot sekcji kursów

## ver 0.3.9 - fix cache problem with revalidate new data

    problem z cachowaniem danych, next domyślnie cachuje dane, dlatego nie zostały one rewalidowane

## ver 0.3.8 - fix course btn styles

    poprawa styli dla przycisku dla poszczególnego kursu

## ver 0.3.7 - added hover on registration button in navigation

    dodany hover na przycisk rejestracji w nawigacji

## ver 0.3.6 - fix title for courses

    pokazuje sie przedrostek "Course" w nazwie tekstu - trzeba go usunac - dalsza faza testow

## ver 0.3.5 - szkolenia page added external server from github actions

    uzyte github actions do pobierania danych i przetrzymywania ich w projekcie elea w pliku json - jest on aktualizowany codziennie o 6 rano

## ver 0.3.4 - szkolenia page modification vercel.json for chromium fix

    info w logach strona vercel/logs Na produkcji (Vercel) serverless funkcje nie mają całego node_modules w normalnej formie, więc chromium nie może znaleźć swojego folderu bin.

## ver 0.3.3 - szkolenia page pupeteer and chromium version to lunch on vercel

    próba odpalenia scrapera na produkcji, pupeteer działał tylko lokalnie

## ver 0.3.2 - szkolenia page pupeteer test version

    podstona szkolenia za pomoca pupeteera pobiera dane dotyczące kursów

## ver 0.3.1 - szkolenia page ver 1

    na potrzeby klienta zmieniamy jedna z sekcji podstrony "szkolenia" która od teraz linkuje do zewnętrznej platformy

## ver 0.3.0 - next updated

    next js zauktualizowany do najnowszej wersji, dodanie brakujacych altow do ikonek

## ver 0.2.57 - minor changes, swipe pdf of current courses

    podmiana plików pdf dla kursu listopad i grudzień, drobne literówki, podmiana zdjęcia zespołu na stronie głównej

## ver 0.2.56 - october course ended

    kurs w pańdzierniku zakończony

## ver 0.2.55 - added stamp "szkolenie wpisane do BUR"

    każdy nowy kurs zawiera stempel apropo szkolenia wpisanego do BUR

## ver 0.2.54 - new october course sold out

    kurs w paździeniku został wyprzedany

## ver 0.2.53 - new courses added to page (minor visual changes)

    dodane zostały 3 nowe kursy, kilka zmian css, glowna zmiana w pozycjonowaniu 3 elementow w rzedzie z kursami

## ver 0.2.51 - changes in text on laboritory page

    zmiana tekstu na stronie pracowni laboratorium

## ver 0.2.50 - changes some images, remove one laboratory worker

    usuniety pracownik laboratorium / inne mniejsze poprawki

## ver 0.2.43 - minor css changes

    od cookieYes do teraz głównie zmiany CSS / poprawki

## ver 0.2.34 - cookieYes added

    dodany consent box od CookieYes

### ver 0.2.19 - Fix zespol page, changes for course tile

    Przywrócenie widoku dla zespołu, poprawki dla kafelek z kursami, tekst dla calej strony wyrownany do lewej

### ver 0.2.18 - Massive cleanup vol 2

    Kolejny raz czyszczenie projektu:
    - `app/layout` - wyczyszczony została tylko analityka
    - `components/Layouts` - tutaj zawarte 2 nowe Layout'y
            - `CustomLayout` - layout główny, zawiera w sobie Navigacje / Footer / MySign - dziedzoczony po większości widoków
            - `SchoolingLayout` - layout przeznaczony tylko dla strony Szkolenia
    - od teraz każda ze stron zawiera 3 pliki :
            - `HelloPage.jsp` - podstawowa strona z komponentami/treścią
            - `page.jsx` - element/wrapper dla `HelloPage.jsx` który zawiera metatagi dla danej strony
            - `HelloPage.module.css` - style dla danego widoku.
