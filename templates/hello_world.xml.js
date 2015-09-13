var Template = function(count) { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <alertTemplate>
     <title>Hello World Example</title>
     <description>This is the Hello World ${count} description</description>
     <button>
        <text>Hit Me!</text>
     </button>
     <text>Hint: Try pressing the button</text>
  </alertTemplate>
</document>`
}