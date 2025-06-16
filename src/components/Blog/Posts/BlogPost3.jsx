import React, { useLayoutEffect } from "react";

export default function BlogPostBarcode() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-slate-800 dark:text-slate-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-4xl">
          <div>
            <div className="mb-1 text-sm font-bold tracking-wider text-teal-600 uppercase dark:text-teal-500">
              Entwicklung
            </div>
            <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
              Von Barcodes zu Kameras: Warum der einfache Weg oft der schwerste
              ist
            </h2>
            <p className="text-xl leading-relaxed font-medium text-slate-700 dark:text-slate-300">
              <span className="text-teal-600 dark:text-teal-400">
                Demid Krom
              </span>{" "}
              am <span className="font-semibold">15 Februar 2025</span> · 12 min
              Lesezeit
            </p>
          </div>

          <article className="prose prose-lg dark:prose-invert prose-a:text-teal-600 prose-a:no-underline prose-a:hover:text-teal-400 prose-a:hover:opacity-75 dark:prose-a:text-teal-400 dark:prose-a:hover:text-teal-300 prose-img:rounded-lg">
            <img src="/regal.jpg" alt="Barcode Scanner Konzeptbild" />
            <p>
              Alles begann mit einer Idee. Ich wollte eine App zur
              Literaturverwaltung bauen, einfach, schlank, funktional. Keine
              Spielereien, keine KI, keine Kameraspielereien. Stattdessen ein
              klarer Plan: Barcodes scannen, ISBN auslesen, Titel erhalten,
              fertig. Ganz wie im Supermarkt. Die Kassen dort erkennen ja auch
              jedes Produkt nur über den Strichcode. Warum also nicht auch
              Bücher?
            </p>
            <p>
              Anfangs funktionierte das Konzept in meinem Kopf perfekt. Ich
              stellte mir Nutzer vor, die ein Buch einscannen, und sofort
              erscheint Titel, Autor, Cover. Das Ganze ohne Schnickschnack,
              schnell, digital, effizient. Ich baute erste Prototypen, las
              Spezifikationen zur ISBN, integrierte Testdatenbanken. Ich war
              optimistisch.
            </p>
            <p>
              Doch die Realität sah anders aus. Die erste große Hürde:
              öffentliche Datenbanken. Es stellte sich heraus, dass es zwar APIs
              wie OpenLibrary oder Google Books gibt, aber die Abdeckung war
              lückenhaft, veraltet, unvollständig. Selbst moderne Bücher ließen
              sich teilweise nicht finden. Andere wiederum führten zu völlig
              falschen Titeln. Die ISBN eines theologischen Buchs ergab
              plötzlich einen französischen Ratgeber für Pferdehaltung. Ich
              überprüfte die Nummer dreimal. Es blieb dabei.
            </p>
            <blockquote>
              <p>
                "Ich dachte mir: Das kann doch nicht sein. In jeder Buchhandlung
                funktioniert das. Die Kassensysteme dort machen das dutzendfach
                täglich. Warum nicht hier?"
              </p>
            </blockquote>
            <p>
              Also telefonierte ich mit Verlagen. Freundliche Menschen,
              hilfsbereit, aber auch ratlos. Viele Daten seien gar nicht
              zentral verfügbar. Man müsse Verträge haben, Zugang zu
              proprietären Datenbanken oder direkt mit Großhändlern wie Libri
              oder KNV zusammenarbeiten. Ich fragte nach Möglichkeiten, wurde
              vertröstet. Lizenzen, Kosten, Datenschutz. Kurzum: keine Chance.
            </p>
            <p>
              Ich entwickelte Workarounds, versuchte, Web-Scraping einzubauen,
              und stieß auf Captchas, Rate-Limits, JSON-Roulette. Jeder neue
              Ansatz war ein Schritt in Richtung Frustration. Ich merkte: So
              würde das nichts. Ich hatte eine Vision, aber die Tools dazu
              standen mir nicht offen.
            </p>

            <h3>Und dann kam die Kamera</h3>
            <p>
              Zähneknirschend drehte ich mich um. Wenn der Barcode-Weg blockiert
              war, blieb nur ein Pfad: die Kamera. Ich wollte es erst vermeiden.
              Zu aufwändig. Zu ungenau. Aber es war die einzige Möglichkeit, das
              Projekt überhaupt nutzbar zu machen.
            </p>
            <p>
              Also begann ich, mit Bildanalyse zu arbeiten. Nutzer:innen
              fotografieren das Buchcover, schneiden es zu, und ich nutze
              Algorithmen, um Titel zu erkennen oder wenigstens die Bildbasis
              für manuelle Eingaben zu bieten. Der Aufwand war enorm. Aber: Es
              funktionierte. Nicht perfekt, aber brauchbar. Und viel näher an
              dem, was in der echten Welt funktioniert.
            </p>
            <h3>Was bleibt zurück?</h3>
            <p>
              Rückblickend bin ich froh, dass ich diesen Umweg gegangen bin. Ich
              habe viel gelernt, über Metadaten, über Verlage, über den
              Unterschied zwischen theoretischer Software und der echten Welt.
              Ich verstehe nun, wie viel in geschlossenen Systemen steckt, was
              dort so selbstverständlich wirkt.
            </p>
            <p>
              Was an Supermarktkassen wie Magie aussieht, ist oft ein gut
              geöltes System voller geschlossener Daten, teurer Verträge und
              Jahrzehnte alter Schnittstellen. Dorthin kommt man nicht als
              Einzelperson mit einer Idee und einer Codezeile.
            </p>
            <h3>Fazit</h3>
            <ul>
              <li>
                Barcodes liefern in der Praxis oft keine verlässlichen
                Ergebnisse.
              </li>
              <li>Öffentliche APIs sind lückenhaft und schwer wartbar.</li>
              <li>
                Verlage haben keinen einheitlichen Zugangspunkt für ISBN-Daten.
              </li>
              <li>
                Die Kamera ist nicht elegant, aber funktional und universell.
              </li>
              <li>
                Der Weg ist manchmal nicht der direkte. Sondern der
                realistische.
              </li>
            </ul>

            <p>
              Und wenn du heute ein Buch fotografierst, damit es in der App
              erscheint, dann denk daran: Es war nie der Plan. Aber es war der
              einzige Weg, der wirklich funktioniert hat. Und vielleicht ist das
              die wichtigste Lektion überhaupt: Mach nicht das, was am
              einfachsten wirkt. Mach das, was am Ende funktioniert.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
