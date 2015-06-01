<h2>Silverstripe html5boilerplate starter theme</h2>

# Using the html5boilerplate theme

 * Clone the silverstripe-h5bp repository into the `themes/` directory of your SilverStripe project:
```
 cd your_silverstripe website/themes/
 git clone https://github.com/edcala/silverstripe-h5bp.git
```
 * Modify the following lines in your `mysite/_config/config.yml` file (note the 2nd line is indented 2 spaces, NOT tab):
```
SSViewer:
  theme: 'html5boilerplate'
```
 * Flush the cache by typing the following in the web browser URL (replace "your_silverstrip_website" with your website domain name):
```
 http://your_silverstrip_website/?flush
```
 * If the theme has not changed after reloading your website, make sure that the theme has also been changed in the admin. (Settings -> Theme) 


 # Development Workflow
 * Requirement: Compass to be installed.
 * Once the requirements have been fulfilled, go into the base of the silverstripe-h5bp directory:
 ``` 
 cd /themes/silverstripe-h5bp
 ```
 * Run npm to download the necessary development node packages:
 ```
 npm start
 ```
 * Run Gulp and keep the terminal/console running while editing your SCSS and Javascipt files:
 ```
 gulp
 ```
 * Gulp will detect any saved changes to your SCSS files, and will automatically preprocess into CSS.
