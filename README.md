# Tatkova Anastasiia 4.0.2



## Getting started

# Guide d'Installation et de Configuration du Projet

## Prérequis

Ce projet nécessite l'installation de Java, Maven et MySQL, Angular. Suivez les étapes ci-dessous pour les installer et configurer correctement l'environnement de développement.

---

## Étape 1 : Installer Java

### Vérifier si Java est installé
Exécutez la commande suivante pour vérifier si Java est installé sur votre machine :

```bash
java -version
```

Si Java n'est pas installé, suivez les étapes ci-dessous pour l'installer.

### Installer Java
Pour installer Java 17 (OpenJDK 17), utilisez les commandes suivantes :

```bash
sudo apt update
sudo apt install openjdk-17-jdk
```

### Vérifier l'installation de Java
Après l'installation, vous pouvez vérifier si Java a bien été installé avec :

```bash
java -version
```

---

## Étape 2 : Installer Maven

### Vérifier si Maven est installé
Exécutez la commande suivante pour vérifier si Maven est installé sur votre machine :

```bash
mvn -version
```

Si Maven n'est pas installé, suivez les étapes ci-dessous pour l'installer.

### Installer Maven
Pour installer Maven, utilisez la commande suivante :

```bash
sudo apt install maven
```

### Vérifier l'installation de Maven
Après l'installation, vous pouvez vérifier si Maven a bien été installé avec :

```bash
mvn -version
```

---

## Étape 3 : Vérifier les dépendances dans le fichier `pom.xml`

Naviguez vers le répertoire de votre projet et exécutez la commande suivante pour télécharger et vérifier toutes les dépendances spécifiées dans le fichier `pom.xml` de votre projet :

```bash
mvn clean install
```

Cela va nettoyer les anciennes dépendances, télécharger les nouvelles et construire votre projet.

---

## Étape 4 : Installer MySQL

### Vérifier si MySQL est en cours d'exécution
Exécutez la commande suivante pour vérifier si le service MySQL fonctionne correctement :

```bash
systemctl status mysql
```

Si MySQL n'est pas installé, vous pouvez l'installer en suivant les étapes ci-dessous.

### Installer MySQL
Pour installer MySQL, utilisez la commande suivante :

```bash
sudo apt install mysql-server
```

Après l'installation, vous pouvez vérifier que MySQL fonctionne correctement avec la commande `systemctl status mysql`.

---

## Étape 5 : Créer la base de données dans MySQL

### Se connecter à MySQL
Connectez-vous à MySQL avec la commande suivante :

```bash
mysql -u root -p
```

Vous serez invité à entrer le mot de passe de l'utilisateur `root` pour établir la connexion.

### Créer une base de données
Une fois connecté à MySQL, vous pouvez afficher toutes les bases de données existantes avec :

```sql
SHOW DATABASES;
```

Si la base de données que vous souhaitez utiliser n'existe pas, vous pouvez la créer avec la commande suivante :

```sql
CREATE DATABASE filRouge2;
```

---

## Étape 6 : Lancer l'application Spring Boot

Une fois toutes les étapes ci-dessus terminées, vous pouvez lancer l'application Spring Boot avec Maven en exécutant la commande suivante depuis le répertoire de votre projet :
cd /demo
```bash
mvn spring-boot:run
```

Cela va démarrer l'application sur le serveur intégré (par défaut sur le port `9090`).

---
## Étape 2 : Installer Angular CLI

Le **CLI Angular** (Command Line Interface) est l'outil officiel de ligne de commande d'Angular, permettant de créer, gérer et déployer des applications Angular.

### Installer Angular CLI globalement

Pour installer Angular CLI globalement sur votre machine, exécutez la commande suivante :

```bash
sudo npm install -g @angular/cli
```

Cela installera Angular CLI, ce qui vous permettra d'utiliser la commande `ng` pour créer des projets et gérer votre application Angular.

### Vérifier l'installation d'Angular CLI

Une fois l'installation terminée, vous pouvez vérifier que l'Angular CLI a bien été installé avec :

```bash
ng version
```
## Étape 3: Lancez le projet
cd front/triForme
```bash
ng serve
```
---

