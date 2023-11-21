<template>
  <div
    class="privacy-policy component-padding component-border-horizontal"
    style="font-family: 'Jost', sans-serif"
  >
    <SectionTitle><b>Polityka</b> prywatności</SectionTitle>
    <div>
      <div style="margin-bottom: 20px">
        <span style="font-weight: 600; font-size: 20px">Wstęp</span>
      </div>
      <p>
        Niniejsza polityka prywatności wyjaśnia zasady i zakres przetwarzania danych
        osobowych użytkownika, przysługujące mu prawa, jak też obowiązki administratora
        tych danych, a także informuje o używaniu ciasteczek.
      </p>

      <div style="margin-bottom: 20px">
        <span style="font-weight: 600; font-size: 20px"
          >Podstawa prawna przetwarzania danych osobowych</span
        >
      </div>
      <p>
        Dane osobowe są przetwarzane zgodnie z przepisami Rozporządzenia Parlamentu
        Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
        osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego
        przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie
        o ochronie danych), OJ L 119, 4.5.2016, p. 1–88, dalej zwane: „<span
          >rozporządzenie RODO</span
        >".
      </p>

      <div style="margin-bottom: 20px">
        <span style="font-weight: 600; font-size: 20px"
          >Administrator danych osobowych</span
        >
      </div>
      <p>
        Dawid Smulewicz<br />
        ul. Wojska Polskiego 3/35<br />
        88-190 Barcin<br />
      </p>

      <div style="margin-bottom: 20px">
        <span style="font-weight: 600; font-size: 20px"
          >Warunki przetwarzania danych osobowych</span
        >
      </div>
      <p>
        Administrator przetwarza dane osobowe wyłącznie po uprzednim uzyskaniu zgody
        użytkownika.
      </p>
      <p>Wyrażenie zgody na przetwarzanie danych osobowych jest całkowicie dobrowolne.</p>

      <div style="margin-bottom: 20px">
        <span style="font-weight: 600; font-size: 20px"
          >Dane użytkownika i cele ich przetwarzania</span
        >
      </div>
      <p>
        Ta strona internetowa umożliwia użytkownikom wysyłanie wiadomości za pośrednictwem
        formularza kontaktowego. W celu umożliwienia wysłania wiadomości, użytkownicy
        muszą podać swoje imię, cel kontaktu, a także wiadomość.
      </p>
      <p>
        Dane zebrane za pośrednictwem formularza kontaktowego, są wykorzystywane wyłącznie
        w celu odpowiedzi na zgłoszenie użytkownika. Nie są udostępniane ani sprzedawane
        żadnym stronom trzecim.
      </p>
      <p>
        W celu zapewnienia bezpieczeństwa danych osobowych naszych użytkowników, stosujemy
        odpowiednie środki techniczne i organizacyjne.
      </p>
      <p>
        Wykorzystywane są również narzędzia reklamowe Google AdSense, w celu wyświetlania
        reklam dopasowanych do preferencji użytkowników, a także narzędzia analityczne
        Google Analytics, w celu lepszego zrozumienia zachowań użytkowników, optymalizacji
        treści i funkcjonalności. Informacje zbierane przez te narzędzia są anonimowe
        i nie łączą się z informacjami osobistymi użytkowników.
      </p>

      <div style="margin-bottom: 20px">
        <span style="font-weight: 600; font-size: 20px">O ciasteczkach</span>
      </div>

      <p>
        Ciasteczka to fragmenty informacji, które zawierają unikalny kod referencyjny,
        który strona internetowa przesyła na urządzenie użytkownika.
      </p>

      <p>
        Są one wykorzystywane w celach reklamowych, statystycznych oraz w celu
        dostosowania strony internetowej do indywidualnych potrzeb użytkownika.
      </p>

      <div style="margin-bottom: 20px">
        <span style="font-weight: 600; font-size: 20px"
          >Lista wykorzystywanych ciasteczek</span
        >
      </div>

      <table style="margin-top: 20px">
        <thead>
          <tr>
            <th align="left" style="padding: 15px 25px 15px 0; font-weight: 600">
              Nazwa
            </th>
            <th align="left" style="padding: 15px 25px 15px 0; font-weight: 600">Cel</th>
            <th align="right" style="padding: 15px 25px 15px 0; font-weight: 600">
              Żywotność
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px 25px 10px 0">__gads</td>
            <td style="padding: 10px 25px 10px 0">reklama</td>
            <td style="padding: 10px 25px 10px 0" align="right">13 miesięcy</td>
          </tr>
          <tr>
            <td style="padding: 10px 25px 10px 0">__gpi</td>
            <td style="padding: 10px 25px 10px 0">reklama</td>
            <td style="padding: 10px 25px 10px 0" align="right">13 miesięcy</td>
          </tr>
          <tr>
            <td style="padding: 10px 25px 10px 0">_ga</td>
            <td style="padding: 10px 25px 10px 0">analityka</td>
            <td style="padding: 10px 25px 10px 0" align="right">2 lata</td>
          </tr>
          <tr>
            <td style="padding: 10px 25px 10px 0">_ga_&lt;wpid&gt;</td>
            <td style="padding: 10px 25px 10px 0">analityka</td>
            <td style="padding: 10px 25px 10px 0" align="right">2 lata</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  const scroll = document.querySelector(".simplebar-content-wrapper");
  scroll?.scrollTo(0, 0);
});
</script>

<style>
.privacy-policy p {
  line-height: 35px;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
