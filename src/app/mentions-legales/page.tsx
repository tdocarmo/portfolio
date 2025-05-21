export default function LegalNotice() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-primary mb-6">Mentions légales</h1>
      
      <div className="space-y-6 text-foreground/80">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">Éditeur du site</h2>
          <p>
            Ce site est édité par Toni Do Carmo, développeur web indépendant.
            Adresse : 14 rue Germaine et André Pican, 76800 Saint-Étienne-du-Rouvray.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc.
            <br />
            Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale 
            sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
            reproduction sont réservés, y compris pour les documents téléchargeables 
            et les représentations iconographiques et photographiques.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">Contact</h2>
          <p>
            Pour toute question concernant ce site, vous pouvez utiliser le formulaire 
            de contact disponible sur le site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">Mise à jour</h2>
          <p>
            Ces mentions légales peuvent être mises à jour périodiquement. 
            La dernière mise à jour date du {new Date().toLocaleDateString('fr-FR')}.
          </p>
        </section>
      </div>
    </div>
  );
} 