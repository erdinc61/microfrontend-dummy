#!/bin/bash

# Verzeichnis des Consumer-Frontends
cd federation_consumer
echo "Starting federation_consumer..."
npm run dev &

# Zurück zum Root und Verzeichnis des Provider-Frontends wechseln
cd ..
cd federation_provider
echo "Starting federation_provider..."
npm run dev &

# Zurück zum Root und Verzeichnis des Map-Frontends wechseln
cd ..
cd map
echo "Starting map frontend..."
npm run dev &

# Zurück zum Root und Verzeichnis des Robot-Frontends wechseln
cd ..
cd robot
echo "Starting robot frontend..."
npm run dev &

# Wieder zurück zum Root
cd ..

# Hier kann man auch noch andere Befehle hinzufügen, wie zum Beispiel das Öffnen eines Browsers
echo "All microfrontends are starting..."
