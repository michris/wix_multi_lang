# wix_multi_lang 
Tags : wix wix.com website builder multilanguage solution

---

www.wix.com does not really have a (good) multilanguage solution.
Therefor I created a very simple basic solution only workable for small websites.

# How to use :

## First step :
- On the bottom of every page you can find the following text : *What is <sitename> Page Code*. If you click on this text a small code editor appears. Copy/Paste the contents of the code.js file in this editor section. Repeat this on all your pages.

## Second step :
- All text boxes have a name in the form of #text1, #text2, etc.
- Rename the English text box that will appear only on the English version from eg. #text1 to #entext1.
- Do the same for other languages. eg. Dutch -> eg. #text1 to #nltext1.
- Put the different textboxes for every language just under each other.
eg.
#entext1
#nltext1
#detext1
then the second text boxes : 
eg.
#entext2
#nltext2
#detext2
And so on ...

## Third step :
- Add different langues buttons somewhere on the page header.
- Rename the buttons from #button1, #button2, #button3 to #enbutton, #nlbutton, #debutton
- Put the language or their abbreviations (EN, NL, DE) as text on the buttons. (Or use language flags instead)

---

# Other languages :

- The code.js example works for 3 languages. English (en), Dutch (nl) and German (de)
- I think the code is self explanary how to extend for other or more languages

<style>.bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#FFFFFF !important;background-color:#FF813F !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 0px 9px !important;font-size: 17px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Lato', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#FFFFFF !important;}</style><link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/Vc3P0zg9X"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a>
