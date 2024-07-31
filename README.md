# Webserver Requirments for js module
The webserver needs to serve .mjs files, for apache you can add and .htaccess file 
## Apache 
```console
<IfModule mod_mime.c>
  AddType text/javascript js mjs
</IfModule>

```

## Lighttpd server 
```console
mimetype.assign   += ( ".mjs" => "text/javascript" )
mimetype.assign   += ( ".map" => "text/css" )
```

# Read and parse Excel files into array rows 

# How to use Get_excel
   ```console
    import { Get_excel } from "node_modules/get_excel/src/index.js";
    document.querySelector("#input").addEventListener("change", function(){
    var e = new Get_excel();
    let arr = await e.get_array(file);
    }, false);
   ```
