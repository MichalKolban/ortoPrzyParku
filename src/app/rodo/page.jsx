"use client";

import styles from "./rodo.module.css";

const RodoPage = () => {
  const scrollToSection = (id) => {
    console.log("id", id);
    const element = document.getElementById(id);

    console.log("element", element);

    if (element) {
      const yOffset = -100;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.rodoBox}>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("pacjent")}
          >
            Informacja dotycząca przetwarzania danych w związku z udzielanymi
            świadczeniami zdrowotnymi (INFORMACJA DLA PACJENTA)
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("dokumentacjaMedyczna")}
          >
            Informacja dotycząca przetwarzania danych osobowych osób
            upoważnionych do uzyskania informacji o stanie zdrowia i/lub
            dokumentacji medycznej
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("korespondencja")}
          >
            Informacja dotycząca przetwarzania danych w ramach prowadzenia
            korespondencji, w tym elektronicznej
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("skargi")}
          >
            Informacja dotycząca przetwarzania danych w procesie załatwiania
            skarg i wniosków
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("socialMedia")}
          >
            Informacja dotycząca danych przetwarzanych w związku z korzystaniem
            z funpage’a na portalu społecznościowym facebook
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("rekrutacja")}
          >
            Informacja dotycząca przetwarzanych danych kandydata do pracy (w
            procesie rekrutacji)
          </button>
        </div>

        <div id="pacjent" className={styles.documentWrapper}>
          <h3 className={styles.documentTitle}>
            INFORMACJA DOTYCZĄCA PRZETWARZANIA DANYCH W ZWIĄZKU Z UDZIELANYMI
            ŚWIADCZENIAMI ZDROWOTNYMI
          </h3>
          <div className={styles.documentHeading}>
            Zgodnie z art. 13 ust. 1 i 2 rozporządzenia Parlamentu Europejskiego
            i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
            osób fizycznych w związku z przetwarzaniem danych osobowych i w
            sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE (ogólne rozporządzenie o ochronie danych) – Dz.Urz. UE.L Nr
            119, str. 1 z późn. zm. [RODO] informujemy, że:
          </div>
          <ol className={styles.orderedList}>
            <li className={styles.listItem}>
              Administratorem Pani/Pana danych osobowych jest Katarzyna Zaleska
              prowadząca działalność pod firmą: Ortodoncja Przy Parku dr n. med.
              Katarzyna Zaleska, stałe miejsce wykonywania działalności: 71-620
              Szczecin, ul. Jana Kazimierza 21, lok. U1, NIP: 5991966627, Regon:
              811961364,
            </li>
            <li className={styles.listItem}>
              Administrator Danych Osobowych [dalej: Administrator] nie powołał
              Inspektora Ochrony Danych. Kontakt z Administratorem jest możliwy
              pod adresem korespondencyjnym: Ortodoncja Przy Parku dr n. med.
              Katarzyna Zaleska, stałe miejsce wykonywania działalności: 71-620
              Szczecin, ul. Jana Kazimierza 21, lok. U1, bądź za pomocą adresu
              e-mail: kasiazal@ortodoncjaprzyparku.pl Osoby zainteresowane
              przyjmowane są po wcześniejszym ustaleniu terminu.
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe przetwarzane będą w celach niezbędnych do
              zapewnienia ciągłości i kompleksowości opieki zdrowotnej zgodnie z
              obowiązującymi w Polsce przepisami prawa w zakresie: diagnostyki,
              leczenia, rehabilitacji, profilaktyki, w tym promocji zdrowia oraz
              ochrony stanu zdrowia i zarządzania udzielanymi usługami
              medycznymi.
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe przetwarzane będą na podstawie art. 9 ust.
              2 lit. h) RODO, ustawy z dnia 15 kwietnia 2011 r. o działalności
              leczniczej, ustawy z dnia 06 listopada 2008 r. o prawach pacjenta
              i Rzeczniku Praw Pacjenta tj. w szczególności:
              <ol className={styles.insideList}>
                <li className={styles.listItem}>
                  przetwarzanie danych osobowych w celu profilaktyki zdrowotnej
                  - art. 9 ust. 2 lit h) RODO, art.3 ust. 2 ustawy o
                  działalności leczniczej, art. 24 ustawy o prawach pacjenta i
                  Rzeczniku Praw Pacjenta (podanie danych jest wymogiem
                  ustawowym),
                </li>

                <li className={styles.listItem}>
                  przetwarzanie danych osobowych w celu rejestracji, diagnozy
                  medycznej i leczenia - art. 9 ust. 2 lit h) RODO, art. 3 ust.
                  1 ustawy o działalności leczniczej oraz art. 24 ustawy o
                  prawach pacjenta i Rzeczniku Praw Pacjenta (podanie danych
                  jest wymogiem ustawowym),
                </li>
                <li className={styles.listItem}>
                  przetwarzanie danych osobowych w celu zapewnienia opieki
                  zdrowotnej oraz zarządzania systemami i usługami opieki
                  zdrowotnej art. 9 ust. 2 lit h) RODO, art. 3 ust. 1 ustawy o
                  działalności leczniczej, art. 24 ustawy o prawach pacjenta i
                  Rzeczniku Praw Pacjenta (podanie danych jest wymogiem
                  ustawowym),
                </li>
                <li className={styles.listItem}>
                  przetwarzanie danych osobowych w celu realizacji obowiązków
                  wynikających z ustawy o systemie informacji w ochronie
                  zdrowia: raportowania danych do Systemu Informacji Medycznej -
                  art. 6 ust. 1 lit. c) oraz art. 9 ust. 2 lit h)  RODO, art. 11
                  ust. 3 i 4 ustawy o systemie informacji w ochronie zdrowia
                  (podanie danych jest wymogiem ustawowym),
                </li>
                <li className={styles.listItem}>
                  przetwarzanie danych osobowych w celu prowadzenia ksiąg
                  rachunkowych oraz wypełnienia obowiązków podatkowych:
                  wystawianie rachunków/faktur za wykonane administratora
                  świadczenia - art. 6 ust. 1 lit. c) RODO, art. 74 ust. 2
                  ustawy o rachunkowości (podanie danych jest wymogiem
                  ustawowym),
                </li>
                <li className={styles.listItem}>
                  przetwarzanie danych osobowych w celu wykonania zawartej z
                  Panem/Panią umowy o świadczenie usług medycznych - art. 6 ust.
                  1 lit. b) RODO (podanie danych jest dobrowolne ale ich nie
                  podanie będzie skutkować odmową rezerwacji wizyty czy
                  udzielenia świadczenia zdrowotnego).
                </li>
                <li className={styles.listItem}>
                  do celów wynikających z prawnie uzasadnionych interesów
                  Administratora, tj.: w celu zapewnienia bezpieczeństwa i
                  ochrony mienia Administratora i pacjentów korzystających z
                  usług oraz zachowania w tajemnicy informacji, których
                  ujawnienie mogłoby narazić Administratora na szkodę, 
                  przetwarzanie danych osobowych w celu dochodzenia roszczeń z
                  tytułu prowadzonej przez Administratora działalności
                  gospodarczej, przetwarzanie danych osobowych w tym celu
                  następuje na podstawie art. 6 ust. 1 lit. f) RODO, tj. w
                  związku z uzasadnionym celem Administratora (podanie danych
                  jest dobrowolne, jednak bez ich podania nie będziemy mogli
                  świadczyć na Pani/Pana rzecz usług).
                </li>
              </ol>
            </li>
            <li className={styles.listItem}>
              Brak podania danych może skutkować odmową rezerwacji czy
              udzielenia świadczenia zdrowotnego., niemożnością wystawienia
              faktury/imiennego rachunku.
            </li>
            <li className={styles.listItem}>
              Jeżeli poda Pani/Pan swój numer telefonu czy adres e-mail, odbywa
              się to na zasadzie dobrowolności - ich niepodanie nie będzie
              skutkowało odmową udzielenia świadczenia zdrowotnego, lecz nie
              otrzyma Pani/Pan od nas potwierdzenia wizyty/świadczenia
              zdrowotnego.
            </li>
            <li className={styles.listItem}>
              Przetwarzanie Pani/Pana danych osobowych w innych celach niż
              podane w pkt. 4, np. w celach marketingowych, w związku z
              realizacją badań klinicznych, czy też badań naukowych odbywa się
              na podstawie dobrowolnej, jednoznacznej i świadomej Pani/Pana
              zgody.
            </li>
            <li className={styles.listItem}>
              W odniesieniu do przedstawiciela ustawowego/opiekuna Pacjenta
              będącego osobą małoletnią, całkowicie ubezwłasnowolnioną lub
              niezdolną do świadomego wyrażania zgody przetwarzane będą dane
              osobowe przedstawiciela ustawowego/opiekuna.
            </li>
            <li className={styles.listItem}>
              Wobec Pani/Pana danych osobowych nie będą podejmowane
              zautomatyzowane decyzje (decyzje bez istotnego udziału człowieka),
              w tym Pana/Pani dane osobowe nie będą podlegały profilowaniu.
            </li>
            <li className={styles.listItem}>
              Odbiorcami Pani/Pana danych osobowych mogą być: (i) osoby
              wykonujące zawód medyczny zatrudnione lub współpracujące z
              Administratorem, (ii) inne osoby wykonujące czynności pomocnicze
              przy udzielaniu świadczeń zdrowotnych, (iii) podmioty, którym
              zostały powierzone przez Administratora dane osobowe w ramach
              umowy powierzenia przetwarzania danych, uczestniczące w obsłudze
              procesu leczenia i innych procesach wskazanych w pkt. 4, (iv)
              organy państwa i inne podmioty uprawnione na podstawie przepisów
              prawa do uzyskania tych danych, w szczególności do kontroli
              wykonania ciążących na Administratorze obowiązków (np.: urzędy
              skarbowe, prokuratura, sądy, PIP, ZUS, etc.),
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe nie będą przekazywane do państw trzecich.
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe będą przechowywane przez okres: (i)
              określony art. 29 ustawy z dnia 6 listopada 2008 r. o prawach
              pacjenta i Rzeczniku Praw Pacjenta tj., nawet do 30 lat, (ii) w
              przypadku przetwarzania danych osobowych w celu wypełnienia
              obowiązków, wynikających z przepisów prawa lub w związku z
              realizacją zadań w interesie publicznym - art. 6 ust 1 lit c) RODO
              przez okres konieczny do realizacji obowiązków i zadań
              wynikających z poszczególnych przepisów prawa, (iii) w przypadku
              przetwarzania danych w celach wynikających z prawnie uzasadnionych
              interesów Administratora (art. 6 ust 1 lit f) RODO ) nie dłużej
              niż 6 lat od daty rozwiązania umowy lub do momentu wniesienia
              uzasadnionego sprzeciwu wobec przetwarzania w takim celu,
            </li>
            <li className={styles.listItem}>
              W przypadku przetwarzania danych na podstawie udzielonej przez
              Panią/Pana zgody (art. 6 ust. 1 lit. a RODO) przysługuje Pani/Panu
              prawo do jej cofnięcia w dowolnym momencie i w każdej formie
              (pisemnie, ustnie, wyraźne działanie), jednak nie ma to wpływu na
              zgodność z prawem przetwarzania, którego dokonano na podstawie
              zgody przed jej cofnięciem.
            </li>
            <li className={styles.listItem}>
              Posiada Pani/Pan prawo dostępu do danych osobowych Pani/Pana
              dotyczących, ich sprostowania, usunięcia lub ograniczenia
              przetwarzania oraz prawo do wniesienia sprzeciwu wobec
              przetwarzania, a także prawo do przenoszenia danych. Uprawnienia
              powyższe oraz prawo sprzeciwu wobec przetwarzania danych osobowych
              mogą zostać ograniczone z uwagi na cel w jakim dane te są
              przetwarzane tj. realizacja świadczeń zdrowotnych, przetwarzanie w
              wykonaniu obowiązku prawnego. Prawo dostępu do danych może zostać
              ograniczone w uzasadnionych przypadkach, w szczególności w celu
              ochrony danych osobowych innych osób.  Ma Pani/Pan nadto prawo do
              wniesienia sprzeciwu wobec przetwarzania Pani/Pana danych opartego
              na art. 6 ust. 1 lit f) RODO z przyczyn związanych z Pani/Pana
              szczególną sytuacją, tj. gdy wobec interesów Administratora
              nadrzędny charakter mają Pani/Pana interesy lub podstawowe prawa i
              wolności, wymagające ochrony danych osobowych.
            </li>
            <li className={styles.listItem}>
              Przysługuje Pani/Panu prawo wniesienia skargi do organu
              nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych, w przypadku
              gdy przetwarzanie Pani/Pana danych osobowych narusza przepisy
              dotyczące ochrony danych osobowych.
            </li>
          </ol>
        </div>

        <div id="dokumentacjaMedyczna" className={styles.documentWrapper}>
          <h3 className={styles.documentTitle}>
            INFORMACJA DOTYCZĄCA PRZETWARZANIA DANYCH OSOBOWYCH OSÓB
            UPOWAŻNIONYCH DO UZYSKANIA INFORMACJI O STANIE ZDROWIA I/LUB
            DOKUMENTACJI MEDYCZNEJ
          </h3>
          <div className={styles.documentHeading}>
            Zgodnie z art. 13 ust. 1 i 2 rozporządzenia Parlamentu Europejskiego
            i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
            osób fizycznych w związku z przetwarzaniem danych osobowych i w
            sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE (ogólne rozporządzenie o ochronie danych) – Dz.Urz. UE.L Nr
            119 z 2016 r., str. 1 z późn. zm. [RODO] informujemy, że:
          </div>
          <ol className={styles.orderedList}>
            <li className={styles.listItem}>
              Administratorem Pani/Pana danych osobowych jest Katarzyna Zaleska
              prowadząca działalność pod firmą: Ortodoncja Przy Parku dr n. med.
              Katarzyna Zaleska, stałe miejsce wykonywania działalności: 71-620
              Szczecin, ul. Jana Kazimierza 21, lok. U1, NIP: 5991966627, Regon:
              811961364,
            </li>
            <li className={styles.listItem}>
              Administrator Danych Osobowych [dalej: Administrator] nie powołał
              Inspektora Ochrony Danych. Kontakt z Administratorem jest możliwy
              pod adresem korespondencyjnym:  Ortodoncja Przy Parku dr n. med.
              Katarzyna Zaleska, stałe miejsce wykonywania działalności: 71-620
              Szczecin, ul. Jana Kazimierza 21, lok. U1, bądź za pomocą adresu
              e-mail: kasiazal@ortodoncjaprzyparku.pl Osoby zainteresowane
              przyjmowane są po wcześniejszym ustaleniu terminu.
            </li>
            <li className={styles.listItem}>
              W związku upoważnieniem Pani/Pana przez pacjenta do uzyskania
              dokumentacji medycznej i/lub informacji o stanie zdrowia oraz w
              związku z realizacją udostępnienia, możemy przetwarzać takie
              kategorie danych jak: imię i nazwisko,  pesel, numer dokumentu
              tożsamości, adres korespondencyjny, adres e-mail, numer telefonu.
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe przetwarzane będą w celu weryfikacji
              uprawnień do uzyskania informacji o stanie zdrowia i/lub uzyskania
              dokumentacji medycznej pacjenta oraz archiwizacji dokumentacji, w
              szczególności na podstawie:
              <ol className={styles.insideList}>
                <li className={styles.listItem}>
                  udzielanie informacji o stanie zdrowia pacjenta – art. 6 ust 1
                  lit. c) RODO, art. 9 ust. 2 i 3 ustawy z dnia 6 listopada 2008
                  r. o prawach pacjenta i Rzeczniku Praw Pacjenta,
                </li>
                <li className={styles.listItem}>
                  udostępnienie dokumentacji medycznej – art. 6 ust 1 lit. c)
                  RODO, art. 26 ust. 1 ustawy z dnia 6 listopada 2008 r. o
                  prawach pacjenta i Rzeczniku Praw Pacjenta
                </li>
                <li className={styles.listItem}>
                  archiwizacja dokumentacji art. 6 ust 1 lit. c) RODO, art. 29
                  ustawy z dnia 6 listopada 2008 r. o prawach pacjenta i
                  Rzeczniku Praw Pacjenta.
                </li>
                Pana/Pani dane osobowe przetwarzane będą w minimalnym zakresie,
                niezbędnym do realizowania w/w celów.
              </ol>
            </li>

            <li className={styles.listItem}>
              Podanie danych jest dobrowolne, jednak brak ich podania może
              skutkować odmową udzielania informacji o stanie zdrowia i/lub
              udostępnienia dokumentacji medycznej.
            </li>
            <li className={styles.listItem}>
              Wobec Pani/Pana danych osobowych nie będą podejmowane
              zautomatyzowane decyzje (decyzje bez istotnego udziału człowieka),
              w tym Pani/Pana dane osobowe nie będą podlegały profilowaniu.
            </li>
            <li className={styles.listItem}>
              Odbiorcami Pani/Pana danych osobowych mogą być: (i) osoby
              wykonujące zawód medyczny zatrudnione lub współpracujące z
              Administratorem, (ii) inne osoby wykonujące czynności pomocnicze
              przy udzielaniu świadczeń zdrowotnych, (iii) podmioty, którym
              zostały powierzone przez Administratora dane osobowe w ramach
              umowy powierzenia przetwarzania danych, uczestniczące w obsłudze
              procesów wskazanych w pkt. 4, (iv) organy państwa i inne podmioty
              uprawnione na podstawie przepisów prawa do uzyskania tych danych,
              w szczególności do kontroli wykonania ciążących na Administratorze
              obowiązków (np.: urzędy skarbowe, prokuratura, sądy, PIP , ZUS).
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe nie będą przekazywane do państw trzecich.
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe będą przechowywane przez okres określony
              art. 29 ustawy z dnia 6 listopada 2008 r. o prawach pacjenta i
              Rzeczniku Praw Pacjenta tj., nawet do 30 lat.
            </li>
            <li className={styles.listItem}>
              Posiada Pani/Pan prawo dostępu do danych osobowych Pani/Pana
              dotyczących, ich sprostowania, usunięcia lub ograniczenia
              przetwarzania oraz prawo do wniesienia sprzeciwu wobec
              przetwarzania, a także prawo do przenoszenia danych. Uprawnienia
              powyższe oraz prawo sprzeciwu wobec przetwarzania danych osobowych
              mogą zostać ograniczone z uwagi na cel w jakim dane te są
              przetwarzane tj. przetwarzanie w wykonaniu obowiązku prawnego.
              Prawo dostępu do danych może zostać ograniczone w uzasadnionych
              przypadkach, w szczególności w celu ochrony danych osobowych
              innych osób.
            </li>
            <li className={styles.listItem}>
              Ma Pani/Pan prawo cofnąć zgodę na przetwarzanie danych osobowych
              przetwarzanych na podstawie udzielonej zgody (nie wpłynie to na
              legalność przetwarzania danych, którego dokonano przed cofnięciem
              zgody).
            </li>
            <li className={styles.listItem}>
              Przysługuje Pani/Panu prawo wniesienia skargi do organu
              nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych, w przypadku
              gdy przetwarzanie Pani/Pana danych osobowych narusza przepisy
              dotyczące ochrony danych osobowych
            </li>
          </ol>
        </div>

        <div id="korespondencja" className={styles.documentWrapper}>
          <h3 className={styles.documentTitle}>
            INFORMACJA DOTYCZĄCA PRZETWARZANIA DANYCH W RAMACH PROWADZENIA
            KORESPONDENCJI, W TYM ELEKTRONICZNEJ
          </h3>
          <div className={styles.documentHeading}>
            Zgodnie z art. 13 ust. 1 i 2 rozporządzenia Parlamentu Europejskiego
            i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
            osób fizycznych w związku z przetwarzaniem danych osobowych i w
            sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE (ogólne rozporządzenie o ochronie danych) – Dz.Urz. UE.L Nr
            119, str. 1 z późn. zm. [RODO] informujemy, że:
          </div>
          <ol className={styles.orderedList}>
            <li className={styles.listItem}>
              Administratorem Pani/Pana danych osobowych jest Katarzyna Zaleska
              prowadząca działalność pod firmą: Ortodoncja Przy Parku dr n. med.
              Katarzyna Zaleska, stałe miejsce wykonywania działalności: 71-620
              Szczecin, ul. Jana Kazimierza 21, lok. U1, NIP: 5991966627, Regon:
              811961364,
            </li>
            <li className={styles.listItem}>
              Administrator Danych Osobowych [dalej: Administrator] nie powołał
              Inspektora Ochrony Danych. Kontakt z Administratorem jest możliwy
              pod adresem korespondencyjnym:  Ortodoncja Przy Parku dr n. med.
              Katarzyna Zaleska, stałe miejsce wykonywania działalności: 71-620
              Szczecin, ul. Jana Kazimierza 21, lok. U1, bądź za pomocą adresu
              e-mail: kasiazal@ortodoncjaprzyparku.pl Osoby zainteresowane
              przyjmowane są po wcześniejszym ustaleniu terminu.
            </li>
            <li className={styles.listItem}>
              W ramach procesów prowadzenia korespondencji w tym elektronicznej
              możemy przetwarzać takie kategorie danych jak: imię i nazwisko,
              adres korespondencyjny, numer telefonu, nr faxu, adres e- mail,
              dane służbowe (np. nazwa firmy, stanowisko, informacje dotyczące
              wykonywanego przez Państwa zawodu lub prowadzonej działalności
              gospodarczej). Wobec członków organów możemy również przetwarzać
              numer PESEL, a w przypadku pełnomocników również inne dane
              widoczne w pełnomocnictwie. Pana/Pani dane osobowe przetwarzane
              będą w minimalnym zakresie, niezbędnym do realizowania w/w celów.
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe przetwarzane są w celu prowadzenia
              korespondencji, w tym udzielania odpowiedzi na Pani/Pana
              wiadomości, na podstawie art. 6 ust. 1 lit. f RODO, w ramach
              prawnie uzasadnionego interesu Administratora, tj.:
              <ol className={styles.insideList}>
                <li className={styles.listItem}>
                  utrzymywanie z Panią/Panem kontaktu jako z osobą
                  zainteresowaną naszą działalnością,
                </li>
                <li className={styles.listItem}>
                  prowadzenie wszelkiej komunikacji w związku z prowadzoną
                  działalnością,
                </li>
                <li className={styles.listItem}>
                  troska o należytą jakość współpracy z Panią/Panem,
                  kontrahentami oraz osobami zainteresowanymi naszą
                  działalnością,
                </li>
              </ol>
            </li>
            <li className={styles.listItem}>
              Podanie przez Panią/Pana danych osobowych jest dobrowolne ale brak
              ich podania będzie skutkować niemożnością prowadzenia z
              Panią/Panem korespondencji.
            </li>

            <li className={styles.listItem}>
              Wobec Pani/Pana danych osobowych nie będą podejmowane
              zautomatyzowane decyzje (decyzje bez istotnego udziału człowieka),
              w tym Pana/Pani dane osobowe nie będą podlegały profilowaniu.
            </li>
            <li className={styles.listItem}>
              Odbiorcami Pani/Pana danych osobowych mogą być: (i) nasi
              upoważnieni pracownicy i współpracownicy, (ii) zewnętrzne podmioty
              świadczące usługi, w tym prawne na rzecz Administratora (np. biuro
              prawne, dostawcy/serwis IT, Poczta Polska, kurierzy, instytucje
              płatnicze, partnerzy współpracujący, podmioty świadczące nam
              usługi doradcze, konsultacyjne, audytowe, faktoring, firmy
              windykacyjne, (iii) podmioty, którym zostały powierzone dane
              osobowe w ramach umowy powierzenia przez Administratora
              przetwarzania danych, uczestniczące w obsłudze procesu
              korespondencji w tym elektronicznej, (iv) organy państwa i inne
              podmioty uprawnione na podstawie przepisów prawa do uzyskania tych
              danych.
            </li>
            <li className={styles.listItem}>
              Dane osobowe nie będą przekazywane do państw trzecich (poza Unię
              Europejską lub Europejski Obszar Gospodarczy) lub do organizacji
              międzynarodowych, jednak w razie wystąpienia konieczności takiego
              przekazania zostanie ono dokonane zgodnie z przepisami rozdziału V
              RODO.
            </li>
            <li className={styles.listItem}>
              Ma Pani/Pan:
              <ol className={styles.insideList}>
                <li className={styles.listItem}>
                  prawo dostępu do swoich danych osobowych oraz otrzymania ich
                  kopii;
                </li>
                <li className={styles.listItem}>
                  prawo do sprostowania (poprawiania) swoich danych osobowych;
                </li>
                <li className={styles.listItem}>
                  prawo do usunięcia danych, ograniczenia ich przetwarzania (z
                  zastrzeżeniem sytuacji, gdy przetwarzanie danych nie wynika z
                  przepisów prawa), prawo do cofnięcia zgody w dowolnym momencie
                  (wycofanie zgody nie wpływa na zgodność z prawem
                  przetwarzania, którego dokonano na podstawie zgody przed jej
                  wycofaniem);
                </li>
                <li className={styles.listItem}>
                  prawo do przenoszenia danych osobowych (w zakresie w jakim są
                  one przetwarzane w sposób zautomatyzowany oraz w celu
                  wykonania umowy lub na podstawie wyrażonej zgody);
                </li>
              </ol>
            </li>
            <li className={styles.listItem}>
              Ma Pani/Pan nadto prawo do wniesienia sprzeciwu wobec
              przetwarzania Pani/Pana danych opartego na art. 6 ust. 1 lit f)
              RODO z przyczyn związanych z Pani/Pana szczególną sytuacją, tj.
              gdy wobec interesów Administratora nadrzędny charakter mają
              Pani/Pana interesy lub podstawowe prawa i wolności, wymagające
              ochrony danych osobowych.
            </li>
            <li className={styles.listItem}>
              Przysługuje Pani/Panu prawo wniesienia skargi do organu
              nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych, w przypadku
              gdy przetwarzanie Pani/Pana danych osobowych narusza przepisy
              dotyczące ochrony danych osobowych.
            </li>
          </ol>
        </div>

        <div id="skargi" className={styles.documentWrapper}>
          <h3 className={styles.documentTitle}>
            INFORMACJA DOTYCZĄCA PRZETWARZANIA DANYCH W PROCESIE ZAŁATWIANIA
            SKARG I WNIOSKÓW
          </h3>
          <div className={styles.documentHeading}>
            Zgodnie z art. 13 ust. 1 i 2 rozporządzenia Parlamentu Europejskiego
            i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
            osób fizycznych w związku z przetwarzaniem danych osobowych i w
            sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE (ogólne rozporządzenie o ochronie danych) – Dz.Urz. UE.L Nr
            119, str. 1 z późn. zm. [RODO] informujemy, że:
          </div>
          <ol className={styles.orderedList}>
            <li className={styles.listItem}>
              Administratorem Pani/Pana danych osobowych jest Katarzyna Zaleska
              prowadząca działalność pod firmą: Ortodoncja Przy Parku dr n. med.
              Katarzyna Zaleska, stałe miejsce wykonywania działalności: 71-620
              Szczecin, ul. Jana Kazimierza 21, lok. U1, NIP: 5991966627, Regon:
              811961364,
            </li>
            <li className={styles.listItem}>
              Administrator Danych Osobowych [dalej: Administrator] nie powołał
              Inspektora Ochrony Danych. Kontakt z Administratorem jest możliwy
              pod adresem korespondencyjnym:  Ortodoncja Przy Parku dr n. med.
              Katarzyna Zaleska, stałe miejsce wykonywania działalności: 71-620
              Szczecin, ul. Jana Kazimierza 21, lok. U1, bądź za pomocą adresu
              e-mail: kasiazal@ortodoncjaprzyparku.pl Osoby zainteresowane
              przyjmowane są po wcześniejszym ustaleniu terminu.
            </li>
            <li className={styles.listItem}>
              W procesie załatwiania skarg i wniosków możemy przetwarzać takie
              kategorie danych jak: imię i nazwisko, numer Pesel, adres
              zamieszkania, numer telefonu, informacje dotyczące procedury
              objętej skargą/wnioskiem, numer dowodu osobistego. W przypadku
              osób upoważnionych – imię, nazwisko, numer Pesel, numer dowodu
              osobistego. Pana/Pani dane osobowe przetwarzane będą w minimalnym
              zakresie, niezbędnym do realizowania w/w celów.
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe będą przetwarzane w procesie rozpatrywania
              skarg i wniosków, na podstawie art. 6 ust. 1 lit. c RODO, tj. ich
              przetwarzanie jest niezbędne do wypełnienia obowiązku prawnego
              ciążącego na administratorze, określonego ustawą z dnia 06
              listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta,
              ustawą z dnia 15 kwietnia 2011 r. o działalności leczniczej i
              aktów wykonawczych do tych ustaw.
            </li>
            <li className={styles.listItem}>
              Podanie przez Panią/Pana danych osobowych jest dobrowolne ale brak
              ich podania będzie skutkować niemożnością załatwienia
              skargi/wniosku.
            </li>
            <li className={styles.listItem}>
              Wobec Pani/Pana danych osobowych nie będą podejmowane
              zautomatyzowane decyzje (decyzje bez istotnego udziału człowieka),
              w tym Pana/Pani dane osobowe nie będą podlegały profilowaniu.
            </li>
            <li className={styles.listItem}>
              Odbiorcami Pani/Pana danych osobowych mogą być: (i) nasi
              upoważnieni pracownicy i współpracownicy, (ii) zewnętrzne podmioty
              świadczące usługi, w tym usługi prawne na rzecz Administratora
              (np. biuro prawne, dostawcy/serwis IT, Poczta Polska, kurierzy,
              instytucje płatnicze, partnerzy współpracujący, podmioty
              świadczące nam usługi doradcze, konsultacyjne, audytowe,
              faktoring, firmy windykacyjne), (iii) podmioty, którym zostały
              powierzone przez Administratora dane osobowe w ramach umowy
              powierzenia przetwarzania danych, (iv) organy państwa i inne
              podmioty uprawnione na podstawie przepisów prawa do uzyskania tych
              danych.
            </li>
            <li className={styles.listItem}>
              Dane osobowe nie będą przekazywane do państw trzecich (poza Unię
              Europejską lub Europejski Obszar Gospodarczy) lub do organizacji
              międzynarodowych, jednak w razie wystąpienia konieczności takiego
              przekazania zostanie ono dokonane zgodnie z przepisami rozdziału V
              RODO.
            </li>
            <li className={styles.listItem}>
              Ma Pani/Pan:
              <ol className={styles.insideList}>
                <li className={styles.listItem}>
                  prawo dostępu do swoich danych osobowych oraz otrzymania ich
                  kopii,
                </li>
                <li className={styles.listItem}>
                  prawo do sprostowania (poprawiania) swoich danych osobowych,
                </li>
                <li className={styles.listItem}>
                  prawo ograniczenia przetwarzania danych (z zastrzeżeniem
                  sytuacji, gdy przetwarzanie danych nie wynika z przepisów
                  prawa),
                </li>
                <li className={styles.listItem}>
                  prawo do przenoszenia danych osobowych (w zakresie w jakim są
                  one przetwarzane w sposób zautomatyzowany oraz w celu
                  wykonania umowy lub na podstawie wyrażonej zgody).
                </li>
              </ol>
            </li>
            <li className={styles.listItem}>
              Ma Pani/Pan nadto prawo do wniesienia sprzeciwu wobec
              przetwarzania Pani/Pana danych opartego na art. 6 ust. 1 lit f)
              RODO z przyczyn związanych z Pani/Pana szczególną sytuacją, tj.
              gdy wobec interesów Administratora nadrzędny charakter mają
              Pani/Pana interesy lub podstawowe prawa i wolności, wymagające
              ochrony danych osobowych.
            </li>
            <li className={styles.listItem}>
              Przysługuje Pani/Panu prawo wniesienia skargi do organu
              nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych, w przypadku
              gdy przetwarzanie Pani/Pana danych osobowych narusza przepisy
              dotyczące ochrony danych osobowych.
            </li>
          </ol>
        </div>

        <div id="socialMedia" className={styles.documentWrapper}>
          <h3 className={styles.documentTitle}>
            INFORMACJA DOTYCZĄCA DANYCH PRZETWARZANYCH W ZWIĄZKU Z KORZYSTANIEM
            Z FUNPAGE’A NA PORTALU SPOŁECZNOŚCIOWYM FACEBOOK
          </h3>
          <div className={styles.documentHeading}>
            Zgodnie z art. 13 ust. 1 i 2 rozporządzenia Parlamentu Europejskiego
            i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
            osób fizycznych w związku z przetwarzaniem danych osobowych i w
            sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE (ogólne rozporządzenie o ochronie danych) – Dz.Urz. UE.L Nr
            119, str. 1 z późn. zm. [RODO] informujemy, że:
          </div>
          <ol className={styles.orderedList}>
            <li className={styles.listItem}>
              Administratorem Danych Osobowych, osób które dokonały subskrypcji
              albo wykonały inną aktywność, w tym: polubienia, zaobserwowania,
              komentarze czy posty do komentarzy w ramach funpage’u na portalu
              społecznościowym Facebook albo wysłały wiadomość za pośrednictwem
              narzędzia do komunikacji Facebook tj. Messenger jest Katarzyna
              Zaleska prowadząca działalność pod firmą: Ortodoncja Przy Parku dr
              n. med. Katarzyna Zaleska, stałe miejsce wykonywania działalności:
              71- 620 Szczecin, ul. Jana Kazimierza 21, lok. U1, NIP:
              5991966627, Regon: 811961364.
            </li>
            <li className={styles.listItem}>
              Administrator Danych Osobowych [dalej: Administrator] nie powołał
              Inspektora Ochrony Danych. Kontakt z Administratorem jest możliwy
              pod adresem korespondencyjnym:  Ortodoncja Przy Parku dr n. med.
              Katarzyna Zaleska, stałe miejsce wykonywania działalności: 71-620
              Szczecin, ul. Jana Kazimierza 21, lok. U1, bądź za pomocą adresu
              e-mail: kasiazal@ortodoncjaprzyparku.pl Osoby zainteresowane
              przyjmowane są po wcześniejszym ustaleniu terminu.
            </li>
            <li className={styles.listItem}>
              Będziemy przetwarzać takie kategorie danych jak:
              <ol className={styles.insideList}>
                <li className={styles.listItem}>
                  dane identyfikacyjne Pani/Pana profilu na portalu
                  społecznościowym Facebook, co może obejmować: imię i nazwisko,
                  płeć, nazwę użytkownika/konta, identyfikator użytkownika
                  (numer konta),
                </li>
                <li className={styles.listItem}>
                  zdjęcia profilowe, zdjęcie w tle i inne widoczne dla innych
                  użytkowników portalu Facebook zdjęcia oraz wpisy,
                </li>
                <li className={styles.listItem}>Pani/Pana komentarze,</li>
                <li className={styles.listItem}>
                  dane statystyczne dotyczące osób odwiedzających fanpage,
                  dostępne za pomocą funkcji „Facebook Insights&quot;
                  udostępnionej przez operatora serwisu, gromadzone poprzez
                  pliki cookies,
                </li>
              </ol>
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe przetwarzane są na podstawie: art. 6 ust. 1
              lit. f RODO - w ramach prawnie uzasadnionego interesu
              Administratora, w celu:
              <ol className={styles.insideList}>
                <li className={styles.listItem}>
                  prowadzenia fanpage na portalu społecznościowym Facebook, na
                  warunkach oraz na zasadach określonych przez Facebook Inc., w
                  celu informowania o aktywności, wydarzeniach realizowanych
                  przez Administratora, budowania i utrzymania społeczności
                  związanej z Administratorem,
                </li>
                <li className={styles.listItem}>
                  aktualizacji treści dotyczących prowadzonej przez
                  Administratora działalności, zawartych w ramach funpage’a na
                  portalu społecznościowym Facebook,
                </li>
                <li className={styles.listItem}>
                  w celach analitycznych dotyczących analiz funkcjonowania,
                  popularności, sposobu korzystania z fanpaga Administratora,
                </li>
                <li className={styles.listItem}>
                  badania opinii o prowadzonej przez Administratora działalności
                  i jakości świadczonych przez niego usług,
                </li>
                <li className={styles.listItem}>
                  komunikacji pracowników Administratora z Panią/Panem, jako
                  użytkownikiem portalu społecznościowego Facebook,
                </li>
              </ol>
              art. 6 ust. 1 lit a. RODO, tj. na podstawie odrębnie udzielonej
              zgody w zakresie i celu określonym w treści zgody, przez czas do
              jej wycofania,
            </li>
            <li className={styles.listItem}>
              Pani/Pana aktywność, o której mowa w pkt. 1, w tym podanie danych
              ma charakter dobrowolny. Brak podania danych może jednak skutkować
              brakiem możliwości korzystania z określonych funkcjonalności
              portalu społecznościowego Facebook, w szczególności takich jak:
              subskrypcja, obserwowanie, dodawanie relacji, komentowanie,
              dodawanie opinii, co jest uwarunkowane podaniem danych.
              Administrator nie weryfikuje danych zawartych na Pani/Pana profilu
              w ramach portalu społecznościowego Facebook.
            </li>
            <li className={styles.listItem}>
              Wobec Pani/Pana danych osobowych nie będą podejmowane
              zautomatyzowane decyzje (decyzje bez istotnego udziału człowieka),
              w tym Pana/Pani dane osobowe nie będą podlegały profilowaniu.
            </li>
            <li className={styles.listItem}>
              Odbiorcami Pani/Pana danych osobowych może/mogą być: (i) nasi
              upoważnieni pracownicy i współpracownicy, (ii) podmioty, którym
              mogą zostać przekazane dane osobowe i które zobowiążą się do
              zachowania poufności oraz wdrożenia u siebie odpowiednich środków
              technicznych i organizacyjnych, gwarantujących ochronę
              udostępnionych lub powierzonych danych osobowych, (iii) właściciel
              portalu społecznościowego Facebook na niepodlegających zmianie
              zasadach dotyczących danych, określonych przez Facebook i
              dostępnych pod adresem: https://www.facebook.com/about/privacy,
              (iv) podmioty, którym zostały powierzone przez Administratora dane
              osobowe w ramach umowy powierzenia przetwarzania danych, zajmujące
              się obsługą i utrzymaniem systemów informatycznych oraz serwisów
              internetowych, a także podmioty wspierające działania
              Administratora o charakterze marketingowym, podmioty świadczące
              usługi z V.20241119 zakresu obsługi fanpage’a w mediach
              społecznościowych, (iv) organy państwa i inne podmioty uprawnione
              na podstawie przepisów prawa do uzyskania tych danych,
            </li>
            <li className={styles.listItem}>
              Administrator nie przekazuje danych poza teren Unii Europejskiej,
              z zastrzeżeniem ponadnarodowego charakteru przepływu danych w
              ramach serwisu Facebook, na podstawie stosowanych przez Facebook
              klauzul umownych zatwierdzonych przez Komisję Europejską i decyzji
              Komisji Europejskiej stwierdzających odpowiedni stopień ochrony
              danych w odniesieniu do określonych krajów zgodnie z zasadami
              określonymi przez Facebook pod
              adresem https://www.facebook.com/about/privacy
            </li>
            <li className={styles.listItem}>
              Dane przetwarzane na podstawie zgody będą przetwarzane do czasu
              cofnięcia zgody, Dane przetwarzane na podstawie prawnie
              uzasadnionego interesu Administratora będą przetwarzane do czasu
              skutecznego złożenia sprzeciwu lub ustania tego interesu np. dane
              przetwarzane w celu dochodzenia lub obrony przed roszczeniami będą
              przetwarzane przez czas równy okresowi przedawnienia tych
              roszczeń. Dane statystyczne dotyczące osób odwiedzających fanpaga
              dostępne za pomocą funkcji „Facebook Insights&quot; będą
              przetwarzane przez czas dostępności tych danych w serwisie
              Facebook wynoszący 2 lata.
            </li>
            <li className={styles.listItem}>
              Przysługują Pani/Panu:
              <ol className={styles.insideList}>
                <li className={styles.listItem}>
                  Prawo dostępu do swoich danych oraz otrzymania ich kopii,
                </li>
                <li className={styles.listItem}>
                  Prawo do sprostowania (poprawiania) swoich danych,
                </li>
                <li className={styles.listItem}>Prawo do usunięcia danych,</li>
                <li className={styles.listItem}>
                  Prawo do ograniczenia przetwarzania danych (z zastrzeżeniem
                  sytuacji, gdy przetwarzanie danych nie wynika z przepisów
                  prawa),
                </li>
                <li className={styles.listItem}>
                  prawo  do  cofnięcia zgody  w dowolnym  momencie (wycofanie 
                  zgody  nie  wpływa  na zgodność  z  prawem  przetwarzania,
                  którego  dokonano  na podstawie zgody przed jej wycofaniem),
                </li>
                <li className={styles.listItem}>
                  Prawo do przenoszenia danych (w zakresie w jakim są one
                  przetwarzane w sposób zautomatyzowany oraz w celu wykonania
                  umowy lub na podstawie wyrażonej zgody),
                </li>
              </ol>
            </li>
            <li className={styles.listItem}>
              Ma Pani/Pan nadto prawo do wniesienia sprzeciwu wobec
              przetwarzania danych opartego na art. 6 ust. 1 lit f) RODO z
              przyczyn związanych z Pani/Pana szczególną sytuacją, tj. gdy wobec
              interesów Administratora nadrzędny charakter mają Pani/Pana
              interesy lub podstawowe prawa i wolności, wymagające ochrony
              danych osobowych.
            </li>
            <li className={styles.listItem}>
              Przysługuje Pani/Panu prawo wniesienia skargi do organu
              nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych, w przypadku
              gdy przetwarzanie Pani/Pana danych osobowych narusza przepisy
              dotyczące ochrony danych osobowych
            </li>
          </ol>
        </div>

        <div id="rekrutacja" className={styles.documentWrapper}>
          <h3 className={styles.documentTitle}>
            INFORMACJA DOTYCZĄCA PRZETWARZANIA DANYCH KANDYDATA DO PRACY
          </h3>
          <div className={styles.documentHeading}>
            Zgodnie z art. 13 ust. 1 i 2 rozporządzenia Parlamentu Europejskiego
            i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
            osób fizycznych w związku z przetwarzaniem danych osobowych i w
            sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE (ogólne rozporządzenie o ochronie danych) – Dz.Urz. UE.L Nr
            119, str. 1 z późn. zm. [RODO] informujemy, że:
          </div>
          <ol className={styles.orderedList}>
            <li className={styles.listItem}>
              Administratorem Pani/Pana danych osobowych jest Katarzyna Zaleska
              prowadząca działalność pod firmą: Ortodoncja Przy Parku dr n. med.
              Katarzyna Zaleska, stałe miejsce wykonywania działalności: 71-620
              Szczecin, ul. Jana Kazimierza 21, lok. U1, NIP: 5991966627, Regon:
              811961364,
            </li>
            <li className={styles.listItem}>
              Administrator Danych Osobowych [dalej: Administrator] nie powołał
              Inspektora Ochrony Danych. Kontakt z Administratorem jest możliwy
              pod adresem korespondencyjnym:  Ortodoncja Przy Parku dr n. med.
              Katarzyna Zaleska, stałe miejsce wykonywania działalności: 71-620
              Szczecin, ul. Jana Kazimierza 21, lok. U1, bądź za pomocą adresu
              e-mail: kasiazal@ortodoncjaprzyparku.pl Osoby zainteresowane
              przyjmowane są po wcześniejszym ustaleniu terminu.
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe przetwarzane będą:
              <ol className={styles.insideList}>
                <li className={styles.listItem}>
                  w celu przeprowadzenia procesu rekrutacji, na podstawie
                  uprawnienia pracodawcy wynikającego z art. 22¹ Kodeksu pracy,
                  w zakresie następujących kategorii danych: imię/imiona,
                  nazwisko, imiona rodziców, data urodzenia, miejsce
                  zamieszkania, adres do korespondencji, wykształcenie,
                  przebiegu dotychczasowego zatrudnienia (podstawą przetwarzania
                  wyżej wymienionych danych osobowych jest obowiązek prawny -
                  art. 6 ust. 1 pkt c RODO),
                </li>
                <li className={styles.listItem}>
                  w celu przeprowadzenia procesu rekrutacji, na podstawie
                  Pani/Pana zgody na przetwarzanie Pani/Pana danych osobowych,
                  tj. danych osobowych innych niż wskazane w punkcie powyżej,
                  przekazanych w CV, formularzu, liście motywacyjnym i innych
                  dokumentach złożonych w związku z ubieganiem się o pracę.
                  Przetwarzanie następuje na podstawie art. 6 ust. 1 lit. a
                  RODO, tj. na podstawie udzielonej zgody),
                </li>
                <li className={styles.listItem}>
                  w celu realizacji uzasadnionego interesu Administratora, w
                  odniesieniu do danych pozyskanych od Pani/Pana w trakcie
                  procesu rekrutacji w związku weryfikacją Pani/Pana
                  kwalifikacji i zdolności potrzebnych do pracy na określonym w
                  ogłoszeniu stanowisku (podstawą przetwarzania tych danych jest
                  uzasadniony interes - art. 6 ust. 1 lit. f RODO),
                </li>
                <li className={styles.listItem}>
                  w celu realizacji uzasadnionego interesu Administratora na
                  wypadek konieczności wykazania faktów, wykazania wykonania
                  obowiązków (podstawa – art. 6 ust. 1 lit. f RODO),
                </li>
                <li className={styles.listItem}>
                  w celu przeprowadzenia przyszłych postępowań rekrutacyjnych,
                  na podstawie Pani/Pana zgody na przetwarzane danych osobowych
                  przekazanych w CV, formularzu, liście motywacyjnym i innych
                  dokumentach przekazanych w związku z ubieganiem się o pracę
                  (podstawą przetwarzania jest ta zgoda - art. 6 ust. 1 lit. a
                  RODO).
                </li>
              </ol>
            </li>
            <li className={styles.listItem}>
              Podanie następujących kategorii danych: imię/imiona i nazwisko,
              data urodzenia, miejsce zamieszkania, wykształcenie oraz przebieg
              dotychczasowego zatrudnienia jest warunkiem wzięcia udziału w
              danym procesie rekrutacyjnym. W pozostałym zakresie podanie danych
              osobowych jest dobrowolne.
            </li>
            <li className={styles.listItem}>
              Wobec Pani/Pana danych osobowych nie będą podejmowane
              zautomatyzowane decyzje (decyzje bez istotnego udziału człowieka),
              w tym Pana/Pani dane osobowe nie będą podlegały profilowaniu.
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe nie będą przekazywane do państw trzecich.
            </li>
            <li className={styles.listItem}>
              Odbiorcami Pani/Pana danych osobowych mogą być: (i) osoby
              zatrudnione lub współpracujące z Administratorem, realizujące
              proces rekrutacji, (ii) podmioty, którym zostały powierzone przez
              Administratora dane osobowe w ramach umowy powierzenia
              przetwarzania danych, uczestniczące w obsłudze procesu rekrutacji,
              (iI) organy państwa i inne podmioty uprawnione na podstawie
              przepisów prawa do uzyskania tych danych,
            </li>
            <li className={styles.listItem}>
              Ma Pani/Pan:
              <ol className={styles.insideList}>
                <li className={styles.listItem}>
                  prawo dostępu do swoich danych osobowych oraz otrzymania ich
                  kopii,
                </li>
                <li className={styles.listItem}>
                  prawo do sprostowania (poprawiania) swoich danych osobowych,
                </li>
                <li className={styles.listItem}>
                  prawo ograniczenia przetwarzania danych (z zastrzeżeniem
                  sytuacji, gdy przetwarzanie danych nie wynika z przepisów
                  prawa),
                </li>
                <li className={styles.listItem}>
                  prawo do przenoszenia danych osobowych (w zakresie w jakim są
                  one przetwarzane w sposób zautomatyzowany oraz w celu
                  wykonania umowy lub na podstawie wyrażonej zgody).
                </li>
              </ol>
            </li>
            <li className={styles.listItem}>
              W przypadku przetwarzania danych na podstawie udzielonej przez
              Panią/Pana zgody (art. 6 ust. 1 lit. a RODO) przysługuje Pani/Panu
              prawo do jej cofnięcia w dowolnym momencie i w każdej formie
              (pisemnie, ustnie, wyraźne działanie), jednak nie ma to wpływu na
              zgodność z prawem przetwarzania, którego dokonano na podstawie
              zgody przed jej cofnięciem.
            </li>
            <li className={styles.listItem}>
              Ma Pani/Pan prawo do wniesienia sprzeciwu wobec przetwarzania
              Pani/Pana danych opartego na art. 6 ust. 1 lit f) RODO z przyczyn
              związanych z Pani/Pana szczególną sytuacją, tj. gdy wobec
              V.20241119 interesów Administratora nadrzędny charakter mają
              Pani/Pana interesy lub podstawowe prawa i wolności, wymagające
              ochrony danych osobowych.
            </li>
            <li className={styles.listItem}>
              Pani/Pana dane osobowe będą przechowywane:
              <ol className={styles.insideList}>
                <li className={styles.listItem}>
                  W zakresie wskazanym w pkt 3 ppkt 1-3, dane będą przechowywane
                  przez czas niezbędny do przeprowadzenia danego postępowania
                  rekrutacyjnego,
                </li>
                <li className={styles.listItem}>
                  W zakresie wskazanym w pkt. 3 ppkt. 4 – do czasu przedawnienie
                  roszczeń,
                </li>
                <li className={styles.listItem}>
                  W zakresie wskazanym w pkt. 3 ppkt. 5 – przez okres 12
                  miesięcy od udzielenie zgody,
                </li>
              </ol>
            </li>
            <li className={styles.listItem}>
              Przysługuje Pani/Panu prawo wniesienia skargi do organu
              nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych, w przypadku
              gdy przetwarzanie Pani/Pana danych osobowych narusza przepisy
              dotyczące ochrony danych osobowych.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default RodoPage;
