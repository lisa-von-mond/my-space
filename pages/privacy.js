import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { BackButton } from '../components/back-button'


export default function PrivacyPage() {

return(

<div className={styles.container}>

    <Head>
        <title>Lisa Lu * privacy policy</title>
        <meta name="lisa's portfolio" content="" />
        <link rel="icon" href="" />
    </Head>

<Header/>

    <div className={styles.outer_main_text}>
        <main>

        <h2>Allgemeine Datenschutzhinweise</h2>

        <p>Auf dieser Datenschutzseite wurden die Datenschutzrichtlinien von Lisa Lütkefedder verfasst. Im folgenden finden Sie mehr Informationen über Ihre personenbezogenen Daten, wie diese Daten auf lisa-lue.space erhoen und verwendetwerden.</p>
        <p>Verantwortlich: Lisa Lütkefedder * Fährstraße 56 * 21107 Hamburg * lisalue@posteo.de</p>

        <h3>Allgemeines</h3>

        <p>Der Schutz und die Sicherheit Ihrer persönlichen Daten sind uns ein sehr wichtiges Anliegen. Diese Webseite speichert und verarbeitet Daten daher ausschließlich im Sinne der europäischen Datenschutzgrundverordnung (DSGVO). Sie als Nutzer stimmen der Datenverarbeitung im Sinne dieser Erklärung zu. Die aktuelle Fassung der DSGVO finden sie <a href="http://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE">hier</a></p>
        <p>Diese Datenschutzerklärung ist nur im Rahmen der Verweildauer auf dieser Webseite gültig. Sollten sie über einen Link zu einer anderen Webseite gelangen, dann gelten die Datenschutzrichtlinien der aufgerufenen Webseite. Personenbezogene Daten (z.B. Name oder E-Mail-Adresse) werden nur in dem von Ihnen zugestimmten Rahmen verwendet.</p>
        <p>Für das Besuchen dieser Webseite ist die Angabe personenbezogener Daten nicht notwendig. Bevor personenbezogene Daten erhoben werden, werden Sie darüber informiert. Ohne einer ausdrücklichen Zustimmung werden Ihre personenbezogene Daten weder gespeichert noch verwendet. Da die Datenübertragung im Internet keinen lückenlosen Schutz bietet, kann der unerlaubte Zugriff auf ihre Daten von Dritten nicht vollkommen ausgeschlossen werden.</p>
        <p>Die angegebenen personenbezogenen Daten werden mit möglichen Bestandsdaten abgeglichen und bei Bedarf oder Unklarheiten, kann es vorkommen, dass Sie bzgl. Ihrer personenbezogenen Daten von uns kontaktiert werden. Ihre Daten werden jedoch ohne einer ausdrücklichen Zustimmung nicht an Dritte weitergegeben.</p>

        <h3>Technische Aspekte - Server-Logfiles</h3>

        <p>Der Hosting Provider dieser Webseite erhebt und speichert automatisch Informationen in den Server-Log Files. In diesen Server-Log Files werden folgende Daten gespeichert:</p>

        <ul>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP Adresse</li>
        </ul>

        <p>Die Daten der Server-Log Files werden in der Regel nur für die Protokollierung verwendet. Man kann diese Daten keiner Person zuordnen. In rechtswidrigen Fällen können diese Daten jedoch nachträglich überprüft werden.</p>

        <h3>Umgang mit personenbezogenen Daten</h3>

        <p>Sobald Sie diese Webseite besuchen, werden Daten automatisch mit Hilfe von Cookies bezogen.</p>
        <p>Sobald Sie dazu aufgefordert werden, auf dieser Webseite personenbezogene Daten anzugeben (z.B. Name oder E-Mail Adresse) werden Sie darüber Informiert, dass Daten zu Ihrer Person erhoben werden und wie diese verarbeitet werden. Diese Daten werden ohne Ihrer ausdrücklichen Zustimmung nicht an Dritte weitergegeben und werden nur für den beschriebenen Zweck verwendet. Die erteilte Zustimmung kann jederzeit wiederrufen werden.</p>

        <h3>Cookie-Nutzung</h3>

        <p>Im allgemeinen gibt es die folgenden drei Kategorien von Cookies:</p>
        <ul>
        <li>Unbedingt notwendige Cookies für grundlegende Funktionalität der Webseite</li>
        <li>Funktionelle Cookies für die Leistung der Webseite</li>
        <li>Zielorientierte Cookies für die verbesserte User Experience und Bedienung der Webseite </li>
        </ul>

        <p>Webseiten können die sogenannten Cookies verwenden. Diese stellen für Sie oder Ihren Computer keine Bedrohung dar. Cookies verbessern die Funktionalität einer Webseite. Das Ziel dieser Cookies ist die Verbesserung der User Experience. Cookies sind Dateien, die auf der Festplatte Ihres Computers von einem Internetbrowser gespeichert und gelesen werden können.</p>
        <p>Am häufigsten werden die sogenannten "Session Cookies" verwendet. Diese bleiben bestehen solange Sie die Webseite besuchen. Andere Cookies werden solange existieren, bis diese manuell gelöscht werden oder ablaufen. Mit Hilfe von diesen Cookies kann man z.B. wiedererkennen, dass sie nochmals die Webseite besuchen.</p>

        <p>User können im Browser das automatische Setzen von Cookies deaktivieren und vor dem Speichern von Cookies jeweils eine Zustimmung erteilen. Man kann ebenfalls das Speichern von Cookies nur für bestimmte Webseiten erlauben und automatisiert alle Cookies beim Schließen des Internetbrowsers löschen. Sobald diese Einstellungen aktiviert werden, können Sie in der Bedienung der Webseite eingeschränkt sein.</p>

        <h3>SSL Verschlüsselung</h3>

        <p>Diese Webseite verschickt und empfängt Daten mit Hilfe einer SSL-Verschlüsselung. Eine verschlüsselte Verbindung kann man Anhand der URL (befindet sich in der Adresszeile) erkennen. Diese sollte mit https:// und nicht http:// anfangen. Es sollte ebenfalls ein Schloss-Symbol erscheinen.</p>
        <p>Mit Hilfe dieser Verschlüsselung können die übertragenen Daten nicht von Dritten mitgelesen werden.</p>

        <h3>Recht auf Auskunft, Richtigstellung und Löschung</h3>

        <p>Sie haben das Recht auf Auskunft über die Daten, welche zu Ihrer Person gespeichert wurden. Sie können ebenfalls jederzeit die Löschung bzw. die Änderung dieser Daten beantragen.</p>
        <BackButton/>
        </main>   

    </div>
<Footer/>
</div>
      
)
}
