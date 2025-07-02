# Web server Requirements for the JS module
The webserver needs to serve .mjs files. In case of apache2, you can add a .htaccess file 
## Apache2 Example 
```console
<IfModule mod_mime.c>
  AddType text/javascript js mjs
</IfModule>

```

## Lighttpd Example 
```console
mimetype.assign   += ( ".mjs" => "text/javascript" )
mimetype.assign   += ( ".map" => "text/css" )
```

# Read and parse Excel files into an array rows 

# How to use get_excel
   ```console
    import { Get_excel } from "node_modules/get_excel/src/index.js";
    document.querySelector("#input").addEventListener("change", function(){
    var e = new Get_excel();
    let arr = await e.get_array(file);
    }, false);
   ```
