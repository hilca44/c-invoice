# c-invoice
programm for writing invoices
---
- json storage for  
    + address
    + order
    + expense
- output: pdf and txt
- search function
- document types:
    + estimation of costs
    + order confirmation
    + delivery note
    + invoices


installation linux (debian based)
---
$ sudo apt install nodejs npm
$ npm install express
$ npm i


start c-invoice
---
jump into c-invoice and type:
$ node inv12.js

insert invoice items
---
field ite (item):
- 10 pc 28.50 Description without line break
- amount space unit space description

translation
---
dkv date estimation of costs
dco date confirmation
dde date delivery
div date invoice
dpy date payed



