export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-primary mb-6">Politique de confidentialité</h1>
      
      <div className="space-y-6 text-foreground/80">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">Collecte de données</h2>
          <p>
            Ce site utilise Vercel Analytics pour collecter des données anonymes sur l'utilisation du site. 
            Ces données incluent :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Le nombre de visiteurs</li>
            <li>Les pages visitées</li>
            <li>Le temps passé sur le site</li>
            <li>La source du trafic</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">Utilisation des données</h2>
          <p>
            Les données collectées sont utilisées uniquement pour améliorer l'expérience utilisateur 
            et comprendre comment le site est utilisé. Ces données sont :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Anonymisées</li>
            <li>Non partagées avec des tiers</li>
            <li>Conservées de manière sécurisée</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">Contact</h2>
          <p>
            Pour toute question concernant la collecte et l'utilisation de vos données, 
            vous pouvez me contacter via le formulaire de contact du site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">Mise à jour</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour périodiquement. 
            La dernière mise à jour date du {new Date().toLocaleDateString('fr-FR')}.
          </p>
        </section>
      </div>
    </div>
  );
} 