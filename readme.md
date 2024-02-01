# **api-paste.ee**

A basic library for interacting with Paste.ee API
<br><br>
This library requires an [paste.ee](https://paste.ee) API key
<br>
Login > Goto Account > API > Create a new application > Copy the Application Keys

## Installation

Add `api-paste.ee` to your existing project.

```
npm i api-paste.ee
```

## Usage

```js
const Paste_ee = require("api-paste.ee"); // Import the Library ( Required )
const paste = new Paste_ee('YOUR_API_KEY'); // Create New Object ( Required )

const api_paste = async () => {

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
}

```

## **FUNCTION LIST**

| FUNCTION                 | DETAIL         | PARAMETER                 |
| :-----------: | :-----------------------: | :-----------------------: |
| new()         | Creating a new Paste      | data (Required)           |
| delete()      | delete a paste            | id (Required)             |
| get()         | Get data of your paste    | id (Required)             |
| getList()     | Get list of your paste    | display , page (Optional) |
| syntax()      | Get syntax details        | id (Required)             |
| syntaxList()  | Get list of all Syntax    |                           |
