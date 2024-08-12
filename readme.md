# **api-paste.ee**

A basic library for interacting with Paste.ee API
<br><br>
This library requires an [paste.ee](https://paste.ee) API key
<br>
1. Login > Goto [Account](https://paste.ee/account) > [API](https://paste.ee/account/api)
2. [Create your first application here!](https://paste.ee/account/api/developer)
3. Fill Application Name & Submit
4. Click Actions > Authorization Page 
5. Change List Permission Into 'Only pastes created by the application'
6. Copy The 'Key'

## Installation

Add `api-paste.ee` to your existing project.

```
npm i api-paste.ee
```

## Usage

```js
// Import the Library ( Required )
const Paste_ee = require("api-paste.ee");
// or
import Paste_ee = require("api-paste.ee");

const paste = new Paste_ee('YOUR_APPLICATION_KEY'); // Create New Object ( Required )

// NEW PASTE
const singleSection = {
    "name": "A new Paste", // Paste Name ( Optional )
    "description": "Sample Description", // Paste Description ( Optional )
    "syntax": "autodetect", // Syntax ( Optional )
    "expire": '1d', // Paste Expire ( Optional )
    "contents": "This is my new paste", // Contents of the Paste ( Required )
}

const multiSection = {
    "sections": [{
            "name": "Section 1",
            "syntax": "autodetect",
            "contents": "This is section 1 content!"
        },
        {
            "name": "Section 2",
            "syntax": "json",
            "contents": `{"message": "Hello World"}`
        }
    ],
    "description": "Sample Description",
    "name": "A new Paste",
    "expire": '1d'
}

const single = await paste.new(singleSection);
const multi = await paste.new(multiSection);

console.log("Single : ", single);
console.log("Multi : ", multi);

// DELETE PASTE
const delete = await paste.delete('PASTE_ID');
console.log("Delete : ", delete);

// GET PASTE
const getpaste = await paste.get('PASTE_ID');
console.log("Your Paste : ", getpaste);

// GET PASTE
const getpaste = await paste.get('PASTE_ID');
console.log("Your Paste : ", getpaste);

// GET PASTE LIST
const allpaste = await paste.getList();
console.log("All Paste : ", allpaste);

// GET SYNTAX
const syntax = await paste.syntax('SYNTAX_ID');
console.log("Syntax : ", syntax);

// GET SYNTAX LIST
const syntaxlist = await paste.syntaxList();
console.log("All Syntax : ", syntaxlist);
```

## **FUNCTION LIST**

| FUNCTION      | DETAIL                    | PARAMETER                 |
| :-----------: | :-----------------------: | :-----------------------: |
| new()         | Creating a new Paste      | data (Required)           |
| delete()      | delete a paste            | id (Required)             |
| get()         | Get data of your paste    | id (Required)             |
| getList()     | Get list of your paste    | display , page (Optional) |
| syntax()      | Get syntax details        | id (Required)             |
| syntaxList()  | Get list of all Syntax    |                           |
