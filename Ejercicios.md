# Ejercicios en clase

## 1 Ventas de entradas

Se debe crear una APP de ventas de entradas (cine, festivales, deportes, conciertos, etc)

### Requesitos funcionales:

1. La app debe permitir la venta de entradas para diferentes eventos (ud elige la temática)
2. La app debe permitir ingresa la información base del cliente: nombre, apellidos y edad
3. Se debe mostrar la lista de eventos y los tipos de entradas (VIP, Prefencial, General, etc), con su respectivo precio. Se debe indicar la cantidad de entradas
4. Se deben aplicar descuentos por edad del cliente, el descuento es a criterio del alumno. Ejemplos
5. si el cliente es menor de 18 años, tiene un 10% de descuento
6. si es adulto mayor de 60 años tiene un 20% de descuento
7. Al finalizar la compra se debe mostrar el total a pagar, el detalle de las entradas con su precio real y el descuento aplicado

### Requisitos técnicos

1. header y footer
2. campos de formulario y ngModel
3. botones
4. navegación
5. alertas y/o mensajes emergentes
6. animacion
7. *ngIf y *ngFor
8. console.log

## 2 Generación de una APK
La siguiente guía indica el procedimiento de generación de una apk para instalar en su teléfono o dispositivo Android.
A continuación se indican los pasos a considerar para la actividad en clases.

1. Creación de un proyecto Ionic desde 0
```bash
ionic start
```
Se considera una configuración clásica vista durante el curso

**NOTA** En adelante, todos los comandos se ejecutan en la carpeta base del proyecto

2. Realizar la creación de 3 páginas, con las cuales se pueda navegar entre ellas

3. Construcción de la aplicación (crea carpera www), esta carpeta tiene el proyecto construido para ser desplegado en un servidsor web, sirve de base para el proyecto android (se debe ejecutar cada vez que hay cambios en el código)
```bash
ionic build --prod 
```
3. Añadir la libreria capacitor/android (se debe realizar una sola vez), esto añade las caracteristicas que permiten a capacitor generar el codigo base para una app android
```bash
npm install @capacitor/android
```
4. Añadir la plataforma android (crea carpeta android) (se debe realizar una sola vez), crea una carpeta android con la estructura de proyecto  necesaria para poder abrirla en Android Studio
```bash
npx cap add android
```
5. Sincronizar la aplicación con el proyecto de android (se realiza cada vez que hay un cambio en el código), esto sincroniza todos los cambios con la carpeta android
```bash
ionic capacitor sync android
```
6. Construir la aplicación en android y abre Android Studio (se realiza cada vez que hay un cambio en el código), esto reconstruye la carpeta android añadiendo los cambios y vuelve a abrir IDE.
```bash
ionic capacitor build android --prod
```
7. Construir APK, en Android Studio. Una vez abieto android studio y que el proyecto se haya construido de forma completa, vamos a ejecutar la secuencia de pasos que se indica a continuación (en la interfaz visual del programa, no es un comando)
```
Menu: Build -> Build Bundle(s) / APK(s) -> Build APK(s)
```
