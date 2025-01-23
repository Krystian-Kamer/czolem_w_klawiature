import { PostSubtitle, PostText, PostTextBold } from "../components/blog/index";
import moneyImg from "/post-assets/post-4-money.jpg";
import catImg from "/post-assets/post-4-cat.jpg";

const Post4 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Jeden Rzym, wiele dróg" />
      <PostText text="Na wstępie zaznaczę, że mam dość liberalne podejście i osobiście uważam, że nie liczy się sposób a cel." />
      <PostText text="No może nie jak u Machiavellego, nie że do celu po trupach." />
      <PostText text="No dobra, sposób też się liczy. Byłbym ignorantem, gdybym uważał, że najważniejsze jest tylko osiągnięcie celu." />
      <PostText text="Bo co przyjdzie Ci z tego, że dostałeś awans jeśli u szefa obsmarowałeś na grubo swojego kolegę z pracy. Pod koniec dnia trzeba umieć patrzeć w lustro, także tak nie robimy." />
      <PostText text="Dobry tip - nie palimy mostów, choć czasem kusi." />
      <PostText text="Skoro Rzymem jest dostanie pierwszej pracy w charakterze juniora (ewentualnie staż) to jakie mamy do niego drogi?" />
      <PostTextBold text="Dostępne rozwiązania" />
      <PostText text="1. Bootcamp." />
      <PostText text="2. Nauka samodzielna." />
      <PostText text="3. Mentoring." />
      <PostText text="4. Studia." />
      <PostSubtitle subtitle="#1 Szkoła cechu kodu, czyli Bootcamp" />
      <PostText text="Każdy słyszał chyba o złodziejskich bootcampach, które wyzyskują pieniądze od nic nie świadomych ludzi. Obiecują, że po 3 miesiącach zostaniesz programistą i będziesz zarabiał magiczne 15k na start." />
      <PostText text="Załóżmy, że olałeś studia, ale masz siano (albo starzy mają, nie oceniam). Jest to dobra opcja." />
      <PostText text="Celem bootcampu jest szybkie nauczenie Cię programowania." />
      <PostText text="I teraz tak. Ciężko wrzucić wszystkie bootcampy do jednego wora z napisem ściema. Proponowałbym przy wyborze bootcampu zrobić gruby research." />
      <PostText text="Na przykład poszukaj na LinkedIn osoby, która przeszła taki bootcamp i ma już pracę programisty. Zapytaj jej czy warto, czy poleca inne, co ona by zrobiła." />
      <PostTextBold text="Plusy" />
      <PostText text="Masz zapewnione materiały do nauki." />
      <PostText text="Uczysz się najczęściej kiedy chcesz, ale możesz też mieć spotkania o określonych godzinach - jak na studiach zaocznych." />
      <PostText text="Wydajesz hajsy, które zmotywują Cię do skończenia kursu." />
      <PostText text="Przez to, że nad kursem siedziały mądre głowy, masz materiały podane w sposób ustrukturyzowany." />
      <PostText text="Niektóre bootcampy zapewniają spotkania z mentorem, także ktoś może nadzorować to co robisz, nakierowywać Cię." />
      <PostText text="Zależy od bootcampu, ale możesz mieć sprawdzany swój kod, robiony code review." />
      <PostText text="Czasem też masz pracę w grupie, a to uczy pracy zespołowej nad projektem - uczysz się gita i githuba." />
      <PostText text="Masz oferowaną pracę po ukończeniu, ale to zależy." />
      <PostText text="Dostajesz skondensowaną dawkę wiedzy na jednej platformie - najczęściej." />
      <PostText text="Masz możliwość nawiązania kontaktów z innymi kursantami, a jak kiedyś dostaną pracę i będą o Tobie pamiętać, to może Cię polecą." />
      <PostTextBold text="Minusy" />
      <PostText text="Jak trafisz na gówniany bootcamp to tak jakbyś ze łzami w oczach palił w śmietniku własne pieniądze (lub pieniądze starych)." />
      <PostText text="No właśnie, dobry bootcamp czasem potrafi i 10-15 kafla kosztować." />
      <PostText text="Bootcamp od firmy, która rymuje się ze słowem Kodzilla (wink wink) oferuje kurs na Full stacka warty od 12599 zł do 15699 zł (ten droższy z gwarancją pracy)." />
      <PostText text='Co prawda na czas "promocji" ceny te są przekreślone i masz podane od 6299,50 zł do 7849,50 zł, ale oryginalna cena wynosi jak wyżej, także nią się posłużyłem.' />
      <PostText text="Jak jesteś leniwą kluską i nie masz motywacji do ukończenia kursu mimo wydania pieniędzy to kiepsko to widzę." />
      <PostText text="Słyszałem o bootcampach, które były bardzo trudne i Ci co dobrze im szło byli zadowoleni, a Ci którym słabo... no cóż, o nich się już nie mówi." />
      <PostText text="Istnieją bootcampy zbudowane z patyków sklejanych na ślinę - innymi słowy mam na myśli, że są kiepskie." />
      <PostText text="Niektórzy rekruterzy i programiści widząc, że wpisujesz bootcamp w CV robią podśmiechujki." />
      <PostText text="Nie masz wiedzy informatycznej, bo nauka dotyczyła samego mięsa, a nie warzywek." />
      <PostTextBold text="Szybka konkluzja" />
      <PostText text="Jeśli masz kasę i czas, to możesz. Zanim jednak się zdecydujesz, zrób bardzo dobry research, żeby się nie wpierniczyć w maliny." />
      <PostText text="Pogadaj z poprzednimi uczestnikami - serio." />
      <PostText text="Pamiętaj też, że kurs nie nauczy Cię wszystkiego. Da Ci podstawy, ale od Ciebie potem zależy co zrobisz dalej." />
      <PostSubtitle subtitle="#2 Mistrzu Yoda, ucz mnie - Mentoring" />
      <PostText text="Są to drogie zabawki. Drogie, ale też skuteczne." />
      <PostTextBold text="Plusy" />
      <PostText text="Mentor zapewnia wsparcie, uczy Cię dobrych praktyk, dostajesz feedback, masz code review." />
      <PostText text="Uważam jednak, że początkowo jest lepiej samemu się pouczyć podstaw. Gdy trafisz potem do mentora będzie wiedział co masz poprawić." />
      <PostText text="Myślę, że posiadanie własnego mentora to jedna z najcenniejszych rzeczy w trakcie trwania nauki." />
      <img
        src={moneyImg}
        className="my-8 w-full max-w-[500px] justify-self-center shadow-md"
      />
      <PostText text="No bo pomyśl, uczysz się od kogoś kto już jest w zawodzie, kto może uczył przed Tobą kilkadziesiąt osób, zna się na tym. Płacisz mu a więc jemu też zależy, żeby wszystkiego Cię nauczyć." />
      <PostTextBold text="Minusy" />
      <PostText text="Mentor jest zazwyczaj drogi. Czasem tak bardzo, że zastanawiasz się czy można żyć z jedną nerką. Można, ale nie zarzynaj się aż tak (dosłownie i w przenośni)." />
      <PostText text="I tak jak z bootcampem, musisz uważać kogo wybierasz." />
      <PostTextBold text="Szybka konkluzja" />
      <PostText text="Dużo kasy na koncie = mentoring, nie bootcamp. Czemu?" />
      <PostText text="Jak myślisz, lepsze są korepetycje z nauczycielem sam na sam czy nauka w klasie? Ja wybrałbym korepetycje." />
      <PostText text="Mój kolega ożenił się z dziewczyną, która jest testerką. Zgadnij jaki on ma teraz zawód. Bingo." />
      <PostText text="Czasem zdarzają się sytuacje, że masz darmowego mentora pod ręką, czy to partner, członek rodziny czy przyjaciel, szukaj." />
      <PostSubtitle subtitle="#3 Siermiężna nauka samodzielna" />
      <PostText text="Dobra, jeśli nie jesteś Rekinem Biznesu, starzy nie są bogaci a Ty masz przeciętną pracę i nie stać Cię na kilkutysięczny bootcamp lub mentoring to zostaje Ci samodzielna nauka. " />
      <PostText text="Znam paru programistów, którzy właśnie w ten sposób stali się programistami, także da się, wystarczy spróbować. " />
      <PostText text="Jest jeszcze opcja, że konsekwentnie pracujesz i chomikujesz pieniądze do skarpety a gdy nadejdzie czas, że uzbierałeś już kilka/kilkanaście tysięcy, to płacisz mentorowi lub idziesz na bootcamp. " />
      <PostText text="Nie polecam władowywać się w kredyty. Potem możesz się z tego nie wykaraskać. Problemem w IT jest to, że nie wiesz kiedy dostaniesz pierwszą pracę." />
      <PostTextBold text="Mindset" />
      <PostText text='W nauce samodzielnej jest tak jak napisał nasz polski wieszcz Adam Mickiewicz "Sam sobie sterem, żeglarzem, okrętem".' />
      <PostText text="Znaczy to tyle, że sam narzucasz sobie tempo, sam wybierasz materiały, możesz uczyć się za darmo, np. z Youtube lub za przysłowiowe grosze (na Udemy często są przeceny i kurs złapiesz za około 35/40 zł). " />
      <PostText text="Jeśli jesteś leniwy, niezdyscyplinowany, wolisz wyjść na miasto ze znajomymi zamiast patrzeć w kod, albo po robocie nie masz na nic siły i oglądasz Netflixa, to muszę Cię rozczarować, nic z tego nie wyjdzie." />
      <PostText text="Samodyscyplina u samouka to podstawa." />
      <PostText text="Dodatkowo, nauka samodzielna jest bardzo elastyczna." />
      <PostText text="Jeśli chodzi o materiały to zawsze patrz na datę wydania kursu/filmu, bo może okazać się, że uczysz się czegoś przestarzałego.  " />
      <PostText text="Nie oglądaj tylko kursów, postaraj się do każdego projektu dodać coś od siebie, po ukończeniu danego zagadnienia zrób sobie mini projekt, żeby sprawdzić nabytą wiedzę." />
      <PostText text="Bycie samoukiem ma też jedną fajną zaletę. Jest bardzo prawdopodobne, że po zdobyciu pracy samouk nadal będzie uczył się po godzinach, bo działa już rutynowo." />
      <PostTextBold text="Minusy" />
      <PostText text="Z kolei jeśli uczysz się sam to ciężko odwzorować Ci działanie z kimś. Np. nauka pracy na repozytorium samemu nie odwzoruje prawdziwego zawodu, gdzie wiele osób działa razem, są konflikty do rozwiązania." />
      <PostText text="Wadą jest również to, że jesteś sam. Mogą dopadać Cię wątpliwości czy to ma sens. Nie masz też kolegów informatyków, programistów, z którymi mógłbyś obgadać jakiś problem, Twoim drugim przyjacielem staje się ChatGPT, rodzina zaczyna pytać kiedy ostatnio wychodziłeś na światło słoneczne, bliscy pytają po swoich bliskich czy jeszcze żyjesz, płaczesz pod prysznicem myśląc - ile jeszcze - bo tylko tak nie widać łez." />
      <PostText text="Skoro też uczysz się sam to możesz też mieć braki w podstawowej wiedzy informatycznej." />
      <PostText text="Ogólnie, nie jest kolorowo, ale nikt nie mówił, że będzie." />
      <PostTextBold text="Szybka konkluzja" />
      <PostText text="Nie jest to dla każdego, musisz znać trochę siebie, żeby odpowiedzieć sobie na pytanie czy dasz sobie radę." />
      <PostText text="Przygotuj się na maraton a nie sprint. Miej plan, swoje rutyny i działaj." />
      <PostSubtitle subtitle="Co wybrałem ja i dlaczego?" />
      <PostText text="Wybrałem samodzielną naukę programowania. Głównym powodem był brak pieniędzy." />
      <PostText text="Nie żałuję. Bardzo wiele się nauczyłem przez ten czas. Szczególnie właśnie dyscypliny. Codziennie od 19:00 do 21:00 zasiadam do komputera i uczę się czegoś ciekawego." />
      <PostText text="Codziennie mam poczucie, że zrobiłem coś ważnego, tego nikt mi nie odbierze." />
      <PostText text="Nie mówię, że jest łatwo, ale mam swój cel." />
      <PostText text="Podobno według Einsteina definicja szaleństwa to robić to samo oczekując innych rezultatów. W tym sensie jestem już nieco szalony, bo od ponad 2 lat uczę się programowania, a pracy w zawodzie programisty jak do tej pory brak." />
      <PostText text="Czekam na pracodawcę, która ukróci moje szaleństwo." />
      <PostText text="Sukcesywnie uczę się nowych umiejętności i technologii, by stać się wartościowym na rynku pracy. Wiem, że kiedyś się to opłaci, potrzeba tylko czasu." />
      <PostSubtitle subtitle="Co zrobiłbym inaczej?" />
      <PostText text="Cofnął się w czasie i nie szedł na studia z filologii romańskiej, tylko poszedł prosto na studia informatyczne." />
      <PostText text="Nie szedł do pracy w budżetówce." />
      <PostText text="Ogólnie moja droga zawodowa i edukacyjna to wielkie pasmo nieszczęść, spowodowane tym, że nie wiedziałem co chcę robić w życiu." />
      <PostText text="Teraz już wiem, dlatego widzisz ten blog. Chcę pracować jako junior i wspinać się po szczeblach kariery, jednocześnie mając pozytywne nastawienie do życia, ludzi, świata." />
      <PostText text="Już trochę mija czasu odkąd podjąłem decyzję o przebranżowieniu i nie żałuję. Nie żałuję ani dnia spędzonego na kodowaniu." />
      <PostText text='Benjamin Franklin powiedział kiedyś - "Inwestowanie w wiedzę zawsze przynosi największe zyski" i miał rację.' />
      <p className="mb-4 text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
        Pisałem, że praca z mentorem jest droga, chociaż ostatnio znalazłem
        stronę{" "}
        <a
          className="cursor-custom-pointer mb-4 text-lg leading-relaxed text-info md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl"
          href="https://www.superprof.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          superprof
        </a>
        .
      </p>
      <PostText text="Nie jest to post sponsorowany. Dobrze jednak wiedzieć, że są tańsze alternatywy." />
      <PostText text="Niektórzy programiści podają tam 50-70 zł za godzinę, uczciwa cena, nawet jak zarabiasz mało. Osobiście rozważam tego typu rozwiązanie." />
      <PostText text="Tobie też bym polecał. Jeśli korzystałbyś z takiego nauczyciela raz w tygodniu to w skali miesiąca to wyjdzie 200-280 zł. Przez resztę dni ucz się sam, zapisuj to czego nie wiesz a o co chcesz zapytać. Ja tak właśnie bym zrobił." />
      <PostText text="Dodatkowo rozmowa sam na sam z programistą sprawi, że bardziej zrozumiesz ten slang. To coś jak z wronami, jeśli potem wejdziesz między nie, będziesz wiedział jak krakać." />
      <PostText text="Czasu jednak nie da się cofnąć, więc co najlepszego można zrobić? Uczyć sie na błędach i wyciągać wnioski, kontynuować pracę po pracy, systematyczne." />
      <PostSubtitle subtitle="#4 Czy studia dają te +10 do wisdom na start?" />
      <PostText text="Wiem, że przewrotne pytanie. Na wstępie tylko powiem, że to moje zdanie. Mogę się mylić i jeśli tak będzie to zdissuj mnie w komentarzu na LinkedIn." />
      <PostText text="Odpowiedź moja na to pytanie brzmi - oj tak i oj nie." />
      <PostTextBold text="Czemu te oj tak?" />
      <PostText text="Na logikę, po ukończeniu studiów masz wiedzę ogólną w obszarze informatycznym. Przez to, że uczą Cię informatycy wsiąkasz w ten świat." />
      <PostText text="W trakcie trwania studiów masz też praktyki i staże, czasem dobrze płatne. Potem to pięknie wygląda w CV. A skoro jesteś studentem to pracodawca mniej za Ciebie płaci, także chętniej Cię zatrudni, farciarzu." />
      <PostText text='Dodatkowo, po ukończeniu dostajesz jak to u mnie w budżetówce klienci mówią "papierek", a potem możesz wpisać śmiało w CV, że wyższe odhaczone.' />
      <PostText text="Smutna to prawda (dla mnie, nie dla Ciebie jeżeli masz dyplom), ale są firmy, w których rekruterzy nadal zerkają na wykształcenie w CV, szczególnie to informatyczne. Wtedy Twoje +10 wisdom na start staje się atutem, którego ja nie mam." />
      <PostText text='Z rzeczy strategicznych to szkoła zapewnia też strukturę, także nie musisz się zastanawiać "hmm czego mam się teraz nauczyć?".' />
      <PostText text="Przeglądając CV-kę rekruter chętniej zaprosi dalej osobę z wyższym wykształceniem informatycznym niż osobę bez dyplomu." />
      <PostText text="Przyznać muszę niechętnie, że ja też bym tak zrobił, gdybym widział, że stopień skomplikowania projektów jest podobny." />
      <PostText text="Tym bardziej trzeba się czymś wyróżnić, czy to oszałamiającymi projektami, znajomością rzadkiej technologii, umiejętnością wchodzenia w zad bez wazeliny, charakterem, charyzmą lub humorystycznym blogiem o programowaniu? You name it." />
      <img
        src={catImg}
        className="my-8 w-full max-w-[500px] justify-self-center shadow-md"
      />
      <PostText text="Zostało chyba najcenniejsze. Studia dają znajomości. Ziomeczek, z którym siedziałeś w ławce, za 5 lat może okazać się team leadem i zgadnij do kogo będziesz mógł się odezwać?" />
      <PostText text="Znajomości nie tylko w świecie IT, ale też ogólnie to drogocenny zasób. Dlatego też trzeba rozwijać swoje soft skille, być miłym i pomocnym." />
      <PostTextBold text="Empirycznie" />
      <PostText text="Wysyłając już CV, pare razy dostałem odpowiedź (2), że nie przechodzę dalej z uwagi na to, że nie mam wykształcenia wyższego informatycznego." />
      <PostText text="Ostatnio też oglądałem filmik na YouTube, gdzie rozmawiał programista z rekruterką. Co powiedziała? Że patrząc na CV kandydata sprawdza czy ma on wykształcenie informatyczne, wtedy takie osoby częściej są brane pod uwagę." />
      <PostText text="Jak coś to napisz na priv, wyślę Ci link." />
      <PostText text="Niedawno też byłem na planszówkach i kolega kolegi, który jest właśnie programistą powiedział, że bez studiów to on by się już do IT nie pchał, bo szkoda czasu, że jest mało pracy, szczególnie dla juniorów." />
      <PostText text="Pewnie jest wielu programistów, którzy uważają tak samo. Okej, szanuję. Z tyłu głowy jednak mam tyle przykładów osób, którym się udało wejść do IT bez dyplomu, że to obala mi ten światopogląd." />
      <PostText text="Mój światopogląd jest taki, że jak będę ciężko pracował, uczył się, rozwijał, to w końcu znajdą się osoby, które to docenią i dadzą mi szansę." />
      <PostText text='W końcu uczę się już frontendu ponad 2 lata. Co mam zrobić? Posłuchać tego typa i stwierdzić - "A to przepraszam, masz rację, po co w ogóle próbowałem, już mnie tu nie ma" - no nie.' />
      <PostText text="Kiedyś moja polonistka powiedziała do uczennicy - Magdo, jeśli ktoś raz powie, że jesteś koniem to to zignoruj, jeśli ktoś inny tak powie, to się zastanów, ale jeśli ktoś trzeci powie, że jesteś koniem to zacznij rozglądać się za siodłem." />
      <PostText text="Nie zgadzam się z tym kompletnie. W kontekście omawianego tematu mam na myśli to, że nawet jak wiele osób będzie mówić, że do IT nie da się wejść bez dyplomu, to chcę pokazać, że się mylą." />
      <PostText text="Zrobię kiedyś post o tym jakie osoby mam na myśli, ale daleko nie trzeba szukać. Chociażby Hello Roman - Adam Romański nie ma wykształcenia wyższego informatycznego, a programistą jest." />
      <PostText text='Wiesz, "Czołem w klawiaturę" zrobił właśnie koleś bez wykształcenia wyższego informatycznego (ja), także da się.' />
      <PostTextBold text="Czemu oj nie?" />
      <PostText text="Studia mogą nie dawać +10 do wisdom na start, gdy masz już doświadczenie jako programista (zakładamy tu, że startem będzie praca w innej firmie, nie pierwszej)." />
      <PostText text="Jeśli już masz piękną historię zatrudnienia, to pierwsze co wywalasz w CV to sekcja wykształcenie. Twoje doświadczenie mówi samo za siebie." />
      <PostText text="Ale to się tyczy doświadczonych programistów." />
      <PostText text="W utopijnej rzeczywistości początkujących programistów chciałbym być oceniany za moje umiejętności i zaangażowanie." />
      <PostText text="Wydaje mi się też, że studia nie rozwijają wgłąb tylko wszerz. Jeśli nie - change my mind. Raczej jest to wiedza z ogromnego obszaru, ale lekko muśnięta koniuszkiem neuronów." />
      <PostText text="Zdarzyć się też może, że wiedza, którą nauczają na studiach jest po prostu przestarzała." />
      <PostText text="No i te... 5 lat. Gdybym uczył się samodzielnie przez ten okres frontendu, to na pewno miałbym większe umiejętności w tworzeniu stron od osoby studiującej przez 5 lat (zakładając, że osoba ta nie robi sobie dodatkowych projektów w trakcie trwania studiów)." />
      <PostTextBold text="Szybka konkluzja" />
      <PostText text="Kimże jestem, żeby Ci mówić co masz robić. Jak jesteś młody to studia informatyczne mają większy sens." />
      <PostText text="Im ten wiek wyższy to studia robią się bardziej odległe i musisz zacząć kombinować w inny sposób." />
      <PostText text="Jeśli jesteś po szkole, chcesz wydłużyć sobie młodość, to śmiało idź w to. Potem będziesz mógł sobie wspominać  jak na studiach było fajnie." />
      <PostText text="Z drugiej strony studia zaoczne też kuszą, acz liczy się to z wydatkiem. Jest to dobra opcja, bo w międzyczasie możesz nabierać doświadczenia w jakiejś pracy i jednocześnie zdobywasz wykształcenie." />
      <PostText text="Potem to dobrze wygląda w CV, że i dyplom jest i doświadczenie też." />
      <PostSubtitle subtitle="Słowo końcowe" />
      <PostText text="Zazwyczaj jeśli czemuś mówisz tak, czemuś innemu mówisz nie." />
      <PostText text="Wybierz mądrze. Ja już wybrałem, a czy mądrze to się okaże." />
      <PostText text="Rób swoje i nie przejmuj się opinią innych, nie kupuj siodła." />
      <PostText text="Zapamiętaj też jedno, zanim się w cokolwiek zaangażujesz, zrób gruby research." />
      <PostText text="Czołem, do następnego." />
    </div>
  );
};
export default Post4;
