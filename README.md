Webflow Starter
Vite
Vanilla JS

Dev and Prod workflow based on Finsweet Dev Starter.

# Webflow Global Script Embed

```html
<script>
  function loadScript(src) {
    console.log(`Loading script from: ${src}`);
    var script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
    script.onload = () =>
      console.log(`Script loaded successfully from: ${src}`);
    script.onerror = () => console.log(`Failed to load script from: ${src}`);
  }

  fetch("http://localhost:3000/main.js")
    .then((response) => {
      if (response.ok) {
        // If localhost is running, load the script from there
        console.log("Localhost server is running.");
        loadScript("http://localhost:3000/main.js");
      } else {
        // If localhost is not running, load the external script
        console.log(
          "Localhost server not running, loading external script if available"
        );
        loadScript("#");
      }
    })
    .catch((error) => {
      // If the fetch fails (e.g., server not running), load the external script
      console.error("Error fetching localhost script:", error);
      console.log("Loading external script due to error.");
      loadScript("#");
    });
</script>
```

# CORS config

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET"],
    "AllowedOrigins": ["https://*.webflow.io"],
    "ExposeHeaders": [],
    "MaxAgeSeconds": 10000
  }
]
```
