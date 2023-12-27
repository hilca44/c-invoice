# c-invoice
programm for writing invoices
---
- json storage for  
    + address
    + order
    + expense
- output: pdf and txt
- search function
- quick navigation by shortcut: type a to list adresses
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

screenshots
---
list of orders
-
payed orders are green
![Screenshot(1)](https://github.com/hilca44/c-invoice/assets/113212346/90a062d8-691a-4a2f-bd41-f141993b27c6)
![Screenshot(2)](https://github.com/hilca44/c-invoice/assets/113212346/6d0fb2e2-22de-4b63-bfc0-568cff814608)

![Screenshot(3)](https://github.com/hilca44/c-invoice/assets/113212346/799204bd-f29d-44f2-9f56-dca918cd4d90)


