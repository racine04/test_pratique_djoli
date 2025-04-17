# Djoli - Interface de gestion de produits

![React](https://img.shields.io/badge/React-v18-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-v4.9-blue?style=flat-square)
![Ant Design](https://img.shields.io/badge/Ant%20Design-v5.24.6-blue?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-v18.x-green?style=flat-square)

### 📘 **Contexte**

**Djoli** met en place une solution de **veille des prix** sur des produits de consommation courante.

Chaque jour, des agents saisissent les prix observés. L’objectif est de relever et suivre l’évolution des prix dans le temps, par produit.
---

Développée avec **React**, **TypeScript**, **Ant Design** et **React Router**.  
Ce projet a été réalisé dans le cadre d'un test technique visant à démontrer des compétences en développement frontend avec des outils professionnels.

---

## 📌 Fonctionnalités principales

- ✅ **Affichage dynamique des produits**  
  Liste des produits avec carte (nom, prix, image, slug).  
  Intégration responsive avec Ant Design.

- 🔍 **Barre de recherche**  
  Filtrage des produits par nom, slug ou prix.

- ➕ **Ajout manuel de prix**  
  Interface permettant d’ajouter une série de prix pour un produit.  
  Utilisation de `DatePicker` et `InputNumber` pour une saisie fluide.

- 📈 **Graphique d’évolution des prix**  
  Visualisation interactive de l'évolution des prix dans le temps (via `recharts`).

- 💾 **Sauvegarde en local**  
  Historique des prix enregistré dans le `localStorage`.

- 🧭 **Navigation SPA fluide**  
  Utilisation de `react-router-dom` pour la navigation entre la liste et les détails produit.

- 🖥️ **Interface utilisateur avec Ant Design**  
  Layout moderne avec menu latéral collapsible et header personnalisé.

---

## 🚀 Lancer le projet en local

### 1. Cloner le dépôt

```bash
git clone https://github.com/racine04/test_pratique_djoli/
cd test_pratique_djoli
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

### 4. Lancer le serveur de développement

Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.
