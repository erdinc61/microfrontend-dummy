#!/bin/bash

# Verzeichnis des Consumer-Frontends
cd federation_consumer
echo "Installing dependencies for federation_consumer..."
npm install
echo "Starting federation_consumer..."
npm run dev &

# Zurück zum Root und Verzeichnis des Provider-Frontends wechseln
cd ..
cd federation_provider
echo "Installing dependencies for federation_provider..."
npm install
echo "Starting federation_provider..."
npm run dev &

# Zurück zum Root und Verzeichnis des Map-Frontends wechseln
cd ..
cd map
echo "Installing dependencies for map frontend..."
npm install
echo "Starting map frontend..."
npm run dev &

# Zurück zum Root und Verzeichnis des Robot-Frontends wechseln
cd ..
cd robot
echo "Installing dependencies for robot frontend..."
npm install
echo "Starting robot frontend..."
npm run dev &

# Wieder zurück zum Root
cd ..

# Hier kann man auch noch andere Befehle hinzufügen, wie zum Beispiel das Öffnen eines Browsers
echo "All microfrontends are starting..."
