import { PostSubtitle, PostText } from "../components/blog/index";

const Post1 = () => {
  return (
    <div>
      <PostSubtitle subtitle="No idź tam do kolegów i koleżanek, przywitaj się..." />
      <PostText text="Jeśli jesteś jedną z tych osób co to nie zjedli warzywek ani ziemniaków (czyli olali totalnie stronę główną) a zajęli się mięskiem to dobrze trafiłeś. Nazywam się Krystian Kamer. Obecnie pracuję jako Sekretarz Sądowy zwany wśród mugoli Protokolantem. Wcześniej pracowałem w Urzędzie Pracy. Wiodę od 8 lat życie skromnego pracownika biurowego. Nadszedł jednak czas na zmiany." />
      <PostSubtitle subtitle="Dokąd zmierzam?" />
      <PostText text="Niestety nie pracuję jeszcze komercyjnie w IT, ale z programowaniem mam do czynienia od ponad 2 lat. Staram się codziennie coś zakodować. Konsekwentnie dążę do zdobycia pierwszej pracy w charakterze Junior Frontend Developera. " />
      <PostSubtitle subtitle="Czemu rozpocząłem prowadzenie bloga?" />
      <PostText text="To bardzo ciekawe pytanie. W internecie jest bardzo dużo blogów programistycznych, gdzie tęgie głowy codziennie dzielą się wiedzą z różnych dziedzin IT. Ja też tak chcę. Uznałem, że chcę tłumaczyć przeróżne zagadnienia po swojemu (z przymrużeniem oka)." />
      <PostText text=" Moje motywy działania:" />
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>1</th>
              <td>Nauczanie innych to dobry sposób na utrwalenie wiedzy.</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>2</th>
              <td>Pomagam innym w nauce a pomaganie jest dobre.</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>3</th>
              <td>Zwiększam swoją rozpoznawalność w sieci.</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>4</th>
              <td>Zwiększam (oby) swoje szanse na zatrudnienie.</td>
            </tr>
            <tr className="my-1 text-lg leading-relaxed md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
              <th>5</th>
              <td>Świetnie się przy tym bawię.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <PostSubtitle subtitle="Co znajdziesz na tym blogu?" />
      <PostText text="Będzie to głównie tematyka z zakresu Frontendu oraz moje przemyślenia odnośnie różnych zagadnień okołoprogramistycznych." />
      <PostSubtitle subtitle="Co wyróżnia ten blog pośród setek innych?" />
      <PostText text='Każdy post będzie zawierać humorystyczne wstawki, które umilą choć trochę dzień. Wyznaję zasadę I. Krasickiego - "bawiąc uczyć, uczyć bawiąc".' />
      <PostSubtitle subtitle="Jak często będą pojawiać się nowe treści?" />
      <PostText text="Strona główna nie gryzie, ale jak już to czytasz to odpowiem. Posta możesz sie spodziewać w każdy poniedziałek z rana." />
      <PostSubtitle subtitle="Dla kogo te przyjemności?" />
      <PostText text="Jako, że sam jestem na początku kariery, blog skierowany jest dla osób początkujących, mających podstawową wiedzę z zakresu programowania a ściślej mówiąc frontendu, programistów bardziej zaawansowanych co by to poprzypominać sobie basic-owe tematy oraz do wszystkich innych, którzy są nim zainteresowani.  " />
      <PostText text="Od razu uprzedzam, że nie jestem alfą, betą ani gammą, więc jeśli  zauważysz jakiś błąd to koniecznie do mnie napisz!" />
      <PostSubtitle subtitle='Dlaczego nazwa "Czołem w klawiaturę"? ' />
      <PostText text="Chyba każdy programista tak ma, że dużo rozmyśla nad problemem. A jeśli problem jest duży to i rozmyślanie większe. Może pojawić się frustracja. Niejeden chętnie wstałby i wywalił swojego iMaca przez okno z 10 piętra, inny piłą maszynową przeciąłby na pół router w domu, jeszcze inny walnąłby czołem w klawiaturę." />
      <PostText text='Jako że "Wywal iMaca przez okno z 10 piętra" oraz "Piłą maszynową przetnij router na pół" są za długie i nie zapadną w pamięć, postawiłem na "Czołem w klawiaturę". Simple as that.' />
      <PostSubtitle subtitle="Co dalej? " />
      <PostText text="Jeżeli chciałbyś się ze mną podzielić przemyśleniami, to zapraszam do kontaktu. Masz pomysł na nowy post? Też chętnie przeczytam. Niebawem kolejny artykuł!" />
    </div>
  );
};
export default Post1;
