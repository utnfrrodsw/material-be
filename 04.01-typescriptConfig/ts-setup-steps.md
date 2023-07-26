# Pasos para inciarse con typescript

## Set up del projecto

1. Crear un package.json
   con pnpm

   ```bash
   pnpm init
   ```

   or con npm

   ```bash
   npm --init -y
   ```

2. Editar el package.json y especificar type:module

3. Instalar las dependencias de desarrollo, se puede utilizar npm o pnpm

   Vamos a especificar las versiones de typescript y tsc-watch en la instalación para evitar cambios en los parámetros entre el momento de escribir el documento y cuando se lo estén siguiendo pueda causar comportmientos diferentes. Esto instalará la utilidad de compilaciónde typescript tsc y tsc-watch que utilizaremos para el hot-reload

   con pnpm

   ```bash
   pnpm add -D typescript@5.1.3
   pnpm add -D tsc-watch@6.0.4
   ```

   o con npm

   ```bash
   npm install --save-dev typescript@5.1.3
   npm install --save-dev tsc-watch@6.0.4
   ```

   _Nota_: Node.js no cuenta con los tipos de TypeScript para sus librerías base como por ejemplo http o fs. Para poder utilizarlos correctamente se debe agregar la dependencia @types/node

4. Generar la configuración de compilación de tsconfig.json

   TypeScript se debe compilar a javascript que luego se ejecuta sobre Node.js por ello crearemos unac config para TypeScript

   ```bash
   tsc --init
   ```

5. Editar el contenido del archivo tsconfig.json y configurarlo así

   ```json
   {
     "compilerOptions": {
       "incremental": true,
       "target": "es2020",
       "module": "ES2022",
       "moduleResolution": "bundler",
       "sourceMap": true,
       "outDir": "./dist",
       "esModuleInterop": true,
       "forceConsistentCasingInFileNames": true,
       "strict": true,
       "alwaysStrict": true,
       "skipLibCheck": true,
       "emitDecoratorMetadata": true,
       "experimentalDecorators": true
     },
     "include": ["src/**/*", "**/*.ts"],
     "exclude": ["node_modules"]
   }
   ```

6. Crear los directorios src y dist.

   En base a nuestra config anterior tendremos nuestro código fuente en el directorio src y el compilador de TypeScript dejará los archivos compilados en dist.

7. Crear un archivo para probar `src/index.ts`

8. Configurar VS Code / Codium para incluir extensiones en los imports

   Debido a recientes cambios en las versiones más nuevas de TS y Node.js al usar "type":"module" y con la configuración que estamos utilizando al tratar de ejecutar el código los imports de Node.js nos requeriran que incluyamos la extensión del mismo.

   Por lo tanto vamos a setear esto en la configuración del editor para que lo haga automáticamente. En las settings vamos a buscar `preferences:import ending` y vamos a setear para JavaScript y TypeScript `Preferences: Import Module Specifier Ending` en `.js/ .ts`

   Si editan directamente las settings en el archivo serían

   ```json
   "javascript.preferences.importModuleSpecifierEnding": "js",
   "typescript.preferences.importModuleSpecifierEnding": "js"
   ```

9. En el package .json agregar estos scripts

   ```json
    "build": "tsc -p ./tsconfig.json",
    "start:dev": "tsc-watch --noClear -p ./tsconfig.json --onSuccess \"node ./dist/index.js\""
   ```

10. Setear las run configurations para ejecutar desde VS Code / Codium

    ```json
    {
      // Use IntelliSense to learn about possible attributes.
      // Hover to view descriptions of existing attributes.
      // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
      "version": "0.2.0",
      "configurations": [
        {
          "name": "build",
          "request": "launch",
          "runtimeArgs": ["build"],
          "runtimeExecutable": "pnpm",
          "skipFiles": ["<node_internals>/**"],
          "type": "node"
        },
        {
          "name": "start:dev",
          "request": "launch",
          "runtimeArgs": ["start:dev"],
          "runtimeExecutable": "pnpm",
          "skipFiles": ["<node_internals>/**"],
          "type": "node"
        }
      ]
    }
    ```
