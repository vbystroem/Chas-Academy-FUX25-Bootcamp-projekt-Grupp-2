const commits = [
  {
        date: "2025-10-04",
        msg: "upptäckte och fixade en bug inuti stack__article efter att jag korrigerade html:en där",
        commitId: "b4b1d76",
      },
      {
        date: "2025-10-04",
        msg: "kollade våra sidor på lighthouse och fixade ett fel. Infogade även texten på våra team-cards",
        commitId: "83d4e70",
      },
      {
        date: "2025-10-04",
        msg: "ändrade regler för scaling på team-korten, så att det inte blir overflow på tablet, och att korten inte blir för breda på mobil",
        commitId: "ad62d2e",
      },
      {
        date: "2025-10-04",
        msg: "fixade med object-fit, så att bilden inte blir för stor på större storlekar (index.html)",
        commitId: "808317b",
      },
      {
        date: "2025-10-03",
        msg: "Infogade min techstack-artikel och lade till en footer",
        commitId: "47e38c4",
      },
      {
        date: "2025-10-03",
        msg: "färdigställde design på sidan",
        commitId: "0c82a54",
      },
      {
        date: "2025-10-02",
        msg: "Bestämde vår grafiska profil tillsammans",
        commitId: "e4b968a",
      },
      {
        date: "2025-09-26",
        msg: "ändrade placering av h1 i team.html",
        commitId: "c589310",
      },
      {
        date: "2025-09-26",
        msg: "länkade nya css-filer till html",
        commitId: "0877f57",
      },
      {
        date: "2025-09-26",
        msg: "lade till nya css-filer för att undvika conflicts",
        commitId: "ccfe13d",
      },
      {
        date: "2025-09-24",
        msg: "Fortsatte på Media Queries och ändrade i layouten i CSS:en för att matcha hur vi sa att vi skulle jobba",
        commitId: "fa5e3e2",
      },
      {
        date: "2025-09-24",
        msg: "lade till media queries och flyttade runt selektorer i css",
        commitId: "5b462c6",
      },
      {
        date: "2025-09-19",
        msg: "lade till en css-fil och kommenterade kategorier",
        commitId: "16d851b",
      },
      {
        date: "2025-09-17",
        msg: "Första Commit",
        commitId: "f7f388a",
      },
    ];

    document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("output").innerHTML =
        `<ul class="commitlist">
          ${commits.map(commit => `<li class="commitlist__item"><div class="commitlist__item-container"><span class="commitlist__message">"${commit.msg}"</span><span class="commitlist__date">(Datum: ${commit.date})</span></li><svg class="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="var(--color-veronica-grey-text)">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></div>
  </svg>`).join("")}
        </ul>`;
    });
