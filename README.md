This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

## CHANGE LOG

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
