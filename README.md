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

<a href="https://www.buymeacoffee.com/Vc3P0zg9X" target="_blank"><img src="buymeacoffee.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

![Alt text](buymeacoffee.png "Optional title")

