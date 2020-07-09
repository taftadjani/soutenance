> # Slide 1
> ## Mesdames et monsieurs , bonsoir et bienvenue.
>> - Durant ces prochains minutes, nous allons vous presenter notre projet de fin d'etude pendant lesquelles, on va parler de la place de marché.
>> - Tout d'abord, permettez moi d'accorder ma reconnaissance à 
>>   1.  mon createur de m'avoir donné la force, le souffle et le courage qui m'ont permis d'etre ici aujourd'hui.
>>   2. de remercier egalement mes parents, freres et soeurs, amis et professeurs de leur soutien divers et variés.
>>   3. Je remercie en particulier mon encadrant M. Nassereddine et le jury pour vos precieux temps accordé.
>> - Notre projet de fin d'etude concerne le developpement d'un site web e-commerce denommé HANOUTI. 
>> - Mon stage a debuté le 1er fevrier et a une durée de 6 mois.
>> - C'est un stage interne donc dans les locaux de la FST Settat.
>> - Je m'appelle Taftadjani Dahirou, eleve ingenieur en genie informatique à la Faculté de Science et Technique de Settat.

> # Slide 2 
> ## Dans cette presentation, il y aura 6 parties dans lesquelles on a :
>> 1. L'introduction 
>> 2. Le contexte du projet
>> 3. l'etat de l'art et cahier de charge
>> 4. L'analyse et conception.
>> 5. la realisation 
>> 6. et enfin la Conclusion et perspectives.

> # Slide 3
>> - Au cours de ces dernières années, le commerce de détail a connu de nombreux changements.
>> - en effet le développement des nouvelles technologies a permis l’éclosion d’un nouveau circuit de distribution qu’est l’e-commerce. 
>> - Celui-ci a considérablement modifié les comportements des distributeurs mais, également, ceux des consommateurs. 
>> - Les distributeurs ont dû repenser leur service commercial tandis que les consommateurs ont revu leur manière d’acheter, en s’informant davantage.
>> - Comme vous pouvez le remarquer sur cette figure provenant de l'une des plateformes de commerce electronique appelé Shopify.
>> - On peut voir à quel point le commerce electronique a pris de l'ampleur aucours de ces derniers.

> # Slide 4 
>> - Mais Malgré cela, le commerce en magasin physique offre des palette de possibilités contre lesquelles l’e-commerce ne peut faire le poids.
>> - D'apres les Statistiques, plus de 70% des achateurs preferent acheter en magasin que sur internet
>> - D'autre statistiques revelent egalement que plus de 80% des acheteurs privilégient des magasins physiques pour acheter des produits de première nécessité
>> - Et enfin plus de 90% des achats continue d’être effectué en magasin physique.

> # Slide 5 
>> - En tant qu'élève ingénieur en genie informatique, notre travail finale consiste à mettre en pratique les connaissances acquises aucours de notre cursus universitaire. 
>> - Et C'est à cet occasion que le projet HANOUTI m'a eté confié.

> # Slide 6 
>> - Avant de voir ce qu'on a realisé, Voyons d'abord l'importance du projet à travers les avantages de l'ecommerce et des magasins physiques puisqu'il combine les deux mondes.
>> - En effet, avec l’e-commerce, les frontières physiques n’existent plus et les consommateurs ou entreprises peuvent commander leurs produits ou biens partout dans le monde.
>> - Ce qui confere à tous magasin electronique une importante clienteles.
>> - Plus que ceci, les magasins electronique reste disponible 24/7. 
>> - Ce qui permet aux acheteurs d'effectuer des achats de n'importe où et n'importe quand.
>> - En plus, avec l'e-commerce aujourd'hui, on peut avoir accés à une variété de produit jamais possible avec des magasins physiques.
>> - Parlons maintenant des pouvoirs des magasins physiques.
>> - Comme vous le savez dejà, Dans les magasins physiques, les consommateurs ont la possibilité de voir, toucher, sentir, peser le produit avant meme de discuter le prix.
>> - Aujourd'hui l'ecommerce fait rage au magasins mais ces derniers restent toujours les meneurs du marchés.
>> - L'autre  grandes forces des boutiques physiques concerne l’immédiateté. Qu'est-ce qu'on veux dire par là? 
>> - On veut parler ici de l'immediateté de requete-reponse entre le client et le vendeur, l'immediateté des retours(Si le produit ne convient pas, les retours sont immediates).
>> - Et bien sure ceci n'est que quelques echantillons parmis tant d'autres avantages offertes par les magasins physiques et de l'ecommerce.

> # Slide 7 
> ## Maintenant parlons de quelques fonctionnalités du site web HANOUTI.
>> On a entre autre 
>> - l'authentification, 
>> - l'autorisation, 
>> - le systeme de panier, 
>> - la localisation, 
>> - et plus encore.
> 
> La seul fonctionnalité semblant nouvelle dans notre projet et dans le monde de l'e-commerce en generale est la fonctionnalité de localisation permettant au client de localiser les magasins. 
> 
> Cette fonctionnalité en plus de permettre la localisation des boutiques, 
> 
> Peut etre utilisé pour un positionnement strategique de nouveau magasin.
> 
> Elle peut egalement servir à savoir dans quelle boutique la plus proche se trouve ce qu'on cherche.
> 
> Pour ne cité que ceux-ci.

> # Slide 8 
> On continue avec la partie pre-developpement qui concerne l'analyse et conception.
> 
> Le slide suivant montre le diagramme de gantt du projet realisé en paralelle avec le developpement.
> 
> Comme vous pouvez le voir, apres la realisation du cahier de charge et apres avoir choisi les technologies à utiliser, tous est enchainé en paralelle jusqu'à maintenant avec quelques exceptions pré pour des taches minimales dependantes des autres.

> # Slide 9 
> Ensuite on a l'architecture du site web. 
> 
> Ici on a l'utilisateur qui envoi des requetes qui elles-meme sont capturé et traités par des controllers.
> 
> Ces controllers interagissent avec les modeles pour recuperer les données mais aussi avec les policies pour verifier si l'utilisateur a le droit d'acces à ces ressources ou non.
> 
> ces controllers font egalement appel aux view qui genere les pages web à l'utilisateurs selon ses requetes.
> 
> On a à la fin le model qui recupere les données brutes de la base de données et les fournis aux controllers. 

> # Slide 10 
>> Concernant le diagramme de classe, elle est assez detaillé mais on l'a simplifié pour la presentation. 
> 
>> On a ici l'entite User qui a un role, chaque role a une liste de privileges, 
>
>> ces privileges sont utilisés par les policies pour savoir si l'utilisateur a le droit d'acces à une ressources ou non.
> 
>> On a ensuite l'entite Cart representant le panier qui comporte plusieurs cartDetails.
> 
>> On a aussi l'entite ProductStore qui est relié à l'entite Product et Store.
> 
>> Et plein d'autres entite secondaires comme vous pouvez le voir sur le schema.

> # Slide 11 
>> Notre projet dispose pour le moment de quatre type d'utilisateurs .
> 
>> On a l'utilisateur non connecté, le Client, le Vendeur et l'administrateur.
> 
>> avec ce systeme, on peut biensur ajouter d'autre type d'utilisateur dynamiquement et lui affectés des autorisations sans pour autant modifié le code source du projet.

> # Slide 12 
>> Parlons maintenant des technologies utilisées pour realiser ce projet.
> 
>> PHP est le langage utilisé pour back end 
> 
>> Il est accompagné d'un de ces framework le plus populaires du moment Laravel qui lui-meme utilise le pattern de conception MVC.
> 
>> Ensuite on a la suite HTML/CSS et Javascript
>
>> On a pas usé des librairies javascript dans le seul but d'apprendre plus Javascript.
>
>> Et biensur la tache n'a été que plus corsé.
> 
>> On a aussi utilisé Ajax à travers JavaScript pour effectuer des requetes reponses sur la meme page.
> 
>> Ensuite On a Xampp , un ensemble de logiciel qui offre 
>> - un serveur web local, 
>> - un serveur de données MySQL, 
>> - phpMyAdmin 
>> - et d'autres utilitaires qu'on a pas usé dans ce projet.
> 
>> Et enfin on a utilisé Git et la plateforme github pour y deposer notre projet afin de faire des retours au versions precedentes si jamais on a commis des regressions dans le developpement. 
>>
>> Heuresement, ça n'a pas eté le cas.

> # Slide 13 
> 
> ## Passons maintenant à la presentation du site web realisé.
>>
>> - On a ici la page d'acceuil, assez minimaliste avec le logo, la petite barre de recherche. 
>>
>> - On peut se conecter juste en cliquant ici. 
>> - Faisons autrement creons directement un nouveau utilisateur en passant de l'autre coté comme ceci.
>> on a crée un nouveau utilisateur mais aussi son premier panier et somme directement connecté.
>> - On peut ajouter des paniers egalement par ici
>> - Supprimer ces paniers lorsqu'ils sont plus d'une.
>> - On a ici le hero avec ces differents contenu.
>> 
> ## Ensuite les categories ici.
>> - On peut voir la liste des categories par ici(bouton show all) ou ici(cliquer sur les categories),
>> - On peut en plus voir les produits reliés à ces categories en cliquant sur la categorie elle-meme. 
>> 
> ## Alors on revient
>> - On a ici une liste des produits.
>> - On peut passer à la page du produit en cliquant sur un des produits.
>> - On peut ajouter le produits à notre panier en cliquant ici(btn) ou ici(Buy now),
>> - On peut voir les details des produits là(coté droit) et là(en bas).
>> - on peut voir où se trouve la boutique dans laquelle se trouve le produit juste en cliquant sur le bouton là.
> 
> ## On a egalement les commentaires et sous commentaires qu'on peut ajouter que lorsqu'on est connecté.
>> - Autre chose egalement, On peut aussi laisser des revues ou noter un produit.
>> - Sur le footer ou le bas de page, on a egalement des fonctionnalités comme
>>   - La Map qui nous affiche la position de tous les stores centrées sur notre position.
>>   - Le store qui nous affiche la liste des magasins.
> 
> ## On a aussi une page d'admin qu'on peut acceder lorsqu'on est admin. 
>> - On peut voir la liste des produits , ajout des produits, creer de boutiques etc.
>> - Le vendeur lui aussi peut voir cette page d'admin mais ne peut pas utiliser toutes les fonctionnalités d'admin.

> # Slide 14 
> ## Voilà on reviens terminer la presentaion, 
>> - Comme conclusion, ce projet m'a permit de mettre en pratique mes connaissances theoriques sur un sujet quasi non fourni et d'arrivés jusqu'à ce stade mais aussi m'a initier à cette partie de l'informatique et gagner quelques experiences utiles pour mes futures fullstacks projets.
>> 
>> - En perspectives à ce projet, 
>> On peut biensure l'ameliorer de fonctionnalités comme des celles permettant de simplifier l'insertion des produits. 
>> - Il faudrait egalement rafiner le mobile friendly pour les petits ecran si biensure on voudrait le mettre en production. 
> # Slide 15
>> Et merci votre attention