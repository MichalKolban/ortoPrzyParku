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
      </div>
    </>
  );
};

export default RodoPage;
